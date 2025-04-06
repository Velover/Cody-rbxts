import React from "@rbxts/react";
import { GuiResources } from "../../Resources/GuiResources";

export function Output() {
	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			LayoutOrder={5}
			Size={UDim2.fromScale(1.0, 0.0)}
		>
			<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.0, 4)} />
			<textlabel
				BackgroundTransparency={1}
				LayoutOrder={1}
				Size={new UDim2(1.0, 0, 0.0, 20)}
				FontFace={GuiResources.FONT_MEDIUM}
				Text={"Generated Code"}
				TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
				TextSize={14}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>
			<frame
				BackgroundColor3={new Color3(0.960784, 0.960784, 0.960784)}
				LayoutOrder={2}
				Position={UDim2.fromScale(0.0, 0.149)}
				Size={new UDim2(1.0, 0, 0.0, 110)}
			>
				<uicorner CornerRadius={new UDim(0.0, 6)} />
				<textbox
					BackgroundTransparency={1}
					Position={UDim2.fromOffset(8, 8)}
					Size={new UDim2(1.0, -16, 1.0, -16)}
					ClearTextOnFocus={false}
					CursorPosition={-1}
					FontFace={GuiResources.FONT_REGULAR}
					MultiLine={true}
					Text={"-- Generated code will appear here"}
					TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
					TextEditable={false}
					TextSize={12}
					TextXAlignment={Enum.TextXAlignment.Left}
					TextYAlignment={Enum.TextYAlignment.Top}
				/>
			</frame>
		</frame>
	);
}
