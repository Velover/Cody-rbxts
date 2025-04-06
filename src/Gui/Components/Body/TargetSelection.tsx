import React from "@rbxts/react";
import { GuiResources } from "../../Resources/GuiResources";
import { DropDownMenu } from "../DropDownMenu";

export function TargetSelection() {
	const [language_selected, SetLanguageSelected] = React.useState("TS");
	const languages = ["TS", "Lua", "Python", "JavaScript"];

	const [target_selected, SetTargetSelected] = React.useState("Vanilla");
	const targets = ["Vanilla", "Roblox", "Unity", "Unreal Engine"];

	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			LayoutOrder={1}
			Size={UDim2.fromScale(1.0, 0.0)}
		>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Padding={new UDim(0.0, 12)}
			/>
			<frame
				key={"Language Selection"}
				AutomaticSize={Enum.AutomaticSize.Y}
				BackgroundTransparency={1}
				LayoutOrder={1}
				Size={new UDim2(0.5, -6, 0.0, 0)}
			>
				<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.0, 4)} />
				<textlabel
					BackgroundTransparency={1}
					LayoutOrder={1}
					Size={new UDim2(1.0, 0, 0.0, 20)}
					FontFace={GuiResources.FONT_MEDIUM}
					Text={"Language"}
					TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>
				<DropDownMenu
					ChosenOption={language_selected}
					Options={languages}
					SetChosen={SetLanguageSelected}
				/>
			</frame>

			<frame
				key={"Target Selection"}
				AutomaticSize={Enum.AutomaticSize.Y}
				BackgroundTransparency={1}
				LayoutOrder={2}
				Size={new UDim2(0.5, -6, 0.0, 0)}
			>
				<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.0, 4)} />
				<textlabel
					BackgroundTransparency={1}
					LayoutOrder={1}
					Size={new UDim2(1.0, 0, 0.0, 20)}
					FontFace={GuiResources.FONT_MEDIUM}
					Text={"Target"}
					TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>
				<DropDownMenu
					ChosenOption={target_selected}
					Options={targets}
					SetChosen={SetTargetSelected}
				/>
			</frame>
		</frame>
	);
}
