import React, { useState } from "@rbxts/react";
import { GuiResources } from "../../Resources/GuiResources";
import { CheckboxDropDownMenu } from "../CheckboxDropDownMenu";

export function RulesSelection() {
	const [options, SetOptions] = useState(
		new Map<string, boolean>([
			["No Rules", true],
			["No Explosives", false],
			["No Weapons", false],
			["No Building", false],
		]),
	);

	const ToggleOption = (option_name: string) => {
		SetOptions(new Map([...options, [option_name, !options.get(option_name)]]));
	};
	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			LayoutOrder={2}
			Size={UDim2.fromScale(1.0, 0.0)}
		>
			<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.0, 4)} />
			<textlabel
				BackgroundTransparency={1}
				LayoutOrder={1}
				Size={new UDim2(1.0, 0, 0.0, 20)}
				FontFace={GuiResources.FONT_MEDIUM}
				Text={"Rules"}
				TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
				TextSize={14}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>
			<CheckboxDropDownMenu Options={options} ToggleOption={ToggleOption} />
		</frame>
	);
}
