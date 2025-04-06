import React from "@rbxts/react";
import { GuiResources } from "../../Resources/GuiResources";
import { Output } from "./Output";
import { RulesSelection } from "./RulesSelection";
import { SelectedInstancesList } from "./SelectedInstancesList";
import { TargetSelection } from "./TargetSelection";

function CodifyButton() {
	return (
		<textbutton
			BackgroundColor3={new Color3(0.231373, 0.509804, 0.964706)}
			LayoutOrder={4}
			Size={new UDim2(1.0, 0, 0.0, 40)}
			FontFace={GuiResources.FONT_BOLD}
			Text={"Codify"}
			TextColor3={new Color3(1, 1, 1)}
			TextSize={14}
		>
			<uicorner CornerRadius={new UDim(0.0, 6)} />
		</textbutton>
	);
}

export default function Body(): JSX.Element {
	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			LayoutOrder={2}
			Size={UDim2.fromScale(1.0, 0.0)}
		>
			<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.0, 16)} />
			<uipadding
				PaddingBottom={new UDim(0.0, 16)}
				PaddingLeft={new UDim(0.0, 12)}
				PaddingRight={new UDim(0.0, 12)}
			/>
			<TargetSelection />
			<RulesSelection />
			<SelectedInstancesList />
			<CodifyButton />
			<Output />
		</frame>
	);
}
