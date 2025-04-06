import { ApiDumpConstants, GetApiDump } from "@rbxts/api-dump-fetcher";

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
}
