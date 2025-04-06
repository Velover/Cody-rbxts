import { ApiDumpTypes } from "@rbxts/api-dump-fetcher";
import { InstanceTools } from "@rbxts/tool_pack";
import { APIDumpHelper } from "../../../Controller/APIDumpHelper";

export namespace AstController {
	interface IPropertyData {
		Name: string;
		Value: unknown;
	}

	export interface IInstanceData {
		Instance: Instance;
		Id: string;
		ParentId: string;
		Children: string[];

		InstanceName: string;
		ClassName: string;
		Level: number;
		IsCreatable: boolean;

		Properties: ApiDumpTypes.IMember[];
		DifferentProperties: ApiDumpTypes.IMember[];
	}

	export interface IAst {
		InstanceData: IInstanceData[];
		InstanceDataMap: Map<string, IInstanceData>;
	}

	const EMPTY_ID = "-";

	export function GetAst(instances: Instance[]): IAst {
		const ast: IAst = {
			InstanceData: [],
			InstanceDataMap: new Map<string, IInstanceData>(),
		};

		const hightest_instances: Instance[] = [];
		for (const instance of instances) {
			if (InstanceTools.IsDescendantOf(instance, instances)) continue;
			hightest_instances.push(instance);
		}

		const all_instances_set = new Set<Instance>();
		for (const instance of instances) {
			if (all_instances_set.has(instance)) continue;
			all_instances_set.add(instance);
			for (const descendant of instance.GetDescendants()) {
				all_instances_set.add(descendant);
			}
		}

		for (const instance of all_instances_set) {
			let level = 0;
			let parert = instance.Parent;
			while (parert !== undefined && all_instances_set.has(parert)) {
				level++;
				parert = parert.Parent;
			}

			const instance_data: IInstanceData = {
				Instance: instance,
				Id: instance.GetDebugId(),
				ParentId: instance.Parent?.GetDebugId() ?? EMPTY_ID,
				Children: instance.GetChildren().map((child) => child.GetDebugId()),
				InstanceName: instance.Name,
				ClassName: instance.ClassName,
				Level: level,
				IsCreatable: APIDumpHelper.IsCreatable(instance.ClassName),
				Properties: APIDumpHelper.GetInstanceProperties(instance.ClassName),
				DifferentProperties: APIDumpHelper.GetDifferentWritableProperties(instance),
			};

			ast.InstanceData.push(instance_data);
			ast.InstanceDataMap.set(instance_data.Id, instance_data);
			// return as
		}

		return ast;
	}
}
