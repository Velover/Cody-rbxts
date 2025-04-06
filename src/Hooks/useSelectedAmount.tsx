import { useEffect, useState } from "@rbxts/react";
import { Selection } from "@rbxts/services";

export function useSelectedAmount() {
	const [amount, SetAmount] = useState(0);
	useEffect(() => {
		const OnSelectionChanged = () => {
			const selected = Selection.Get();
			const instances = new Set();
			for (const instance of selected) {
				if (instances.has(instance)) continue;
				instances.add(instance);
				for (const descendant of instance.GetDescendants()) {
					instances.add(descendant);
				}
			}

			SetAmount(instances.size());
		};

		type SelectionService = typeof Selection & { SelectionChanged: RBXScriptSignal };
		const connection = (Selection as SelectionService).SelectionChanged.Connect(() => {
			OnSelectionChanged();
		});

		OnSelectionChanged();

		// Cleanup the connection when the component unmounts
		return () => {
			connection.Disconnect();
		};
	}, []);

	return amount;
}
