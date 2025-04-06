import React from "@rbxts/react";
import { GuiResources } from "../../Resources/GuiResources";

export function TargetSelection() {
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
					FontFace={GuiResources.FONT}
					Text={"Language"}
					TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>
			</frame>
		</frame>
	);
}
