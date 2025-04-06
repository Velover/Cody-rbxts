import { ApiDumpConstants, ApiDumpTypes, GetApiDump } from "@rbxts/api-dump-fetcher";
import { ArrayTools } from "@rbxts/tool_pack";

export class APIDumpHelper {}
export namespace APIDumpHelper {
	function GetCreateableInstances(): string[] {
		return GetApiDump()
			.expect()
			.Classes.filter(
				(class_data) => !class_data.Tags?.includes(ApiDumpConstants.EClassTag.NotCreatable),
			)
			.map((class_data) => class_data.Name);
	}

	const creatable_instances = GetCreateableInstances();
	const default_creatable_instances = new Map<string, Instance>();

	for (const class_name of creatable_instances) {
		const [succ, instance] = pcall(() => new Instance(class_name as never) as Instance);
		if (!succ) {
			print(`Failed to create instance of ${class_name}: ${instance}`);
			continue;
		}
		default_creatable_instances.set(class_name, instance);
	}

	export function IsCreatable(class_name: string): boolean {
		return default_creatable_instances.has(class_name);
	}

	export function GetInstanceProperties(class_name: string): ApiDumpTypes.IMember[] {
		const api_dump = GetApiDump().expect();
		const properties: ApiDumpTypes.IMember[] = [];
		let current_class_data = api_dump.Classes.find((class_data) => class_data.Name === class_name);
		while (current_class_data !== undefined) {
			const properties = current_class_data.Members.filter(
				(member) => member.MemberType === ApiDumpConstants.EMemberMemberType.Property,
			);
			for (const property of properties) {
				properties.push(property);
			}
			current_class_data = api_dump.Classes.find(
				(class_data) => class_data.Name === current_class_data!.Superclass,
			);
		}

		return properties;
	}

	export function GetDifferentWritableProperties(instance: Instance): ApiDumpTypes.IMember[] {
		const class_name = instance.ClassName;
		const default_instance = default_creatable_instances.get(class_name);
		if (default_instance === undefined) return [];

		const writable_properties = GetInstanceProperties(class_name).filter(
			(member) =>
				!ArrayTools.IncludesOneOf(member.Tags ?? [], [
					ApiDumpConstants.EMemberTag.ReadOnly,
					ApiDumpConstants.EMemberTag.ReadOnly,
				]),
		);

		if (writable_properties.size() === 0) return [];

		const different_properties = writable_properties.filter((property) => {
			try {
				const default_value = default_instance[property.Name as never];
				const current_value = instance[property.Name as never];
				return default_value !== current_value;
			} catch (error) {
				return false;
			}
		});

		return different_properties;
	}
}
