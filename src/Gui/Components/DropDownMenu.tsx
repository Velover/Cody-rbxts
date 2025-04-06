import React from "@rbxts/react";
import { GuiResources } from "../Resources/GuiResources";

function Option({ Name }: { Name: string }) {
	return (
		<textbutton
			LayoutOrder={1}
			Size={new UDim2(1.0, 0, 0.0, 24)}
			ZIndex={11}
			Position={UDim2.fromOffset(24, 0)}
			FontFace={GuiResources.FONT}
			Text={Name}
			TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
			TextSize={14}
			TextWrapped={true}
			TextXAlignment={Enum.TextXAlignment.Left}
		></textbutton>
	);
}

export function DropDownMenu() {
	return (
		<textbutton
			BackgroundColor3={new Color3(1, 1, 1)}
			LayoutOrder={2}
			Size={new UDim2(1.0, 0, 0.0, 36)}
			FontFace={GuiResources.FONT}
			Text={"Configure Rules"}
			TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
			TextSize={14}
			TextXAlignment={Enum.TextXAlignment.Left}
		>
			<uicorner CornerRadius={new UDim(0.0, 6)} />
			<uipadding PaddingLeft={new UDim(0.0, 12)} />
			<uistroke
				ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				Color={new Color3(0.901961, 0.901961, 0.901961)}
			/>
			<imagelabel
				key={"DropDown Arrow"}
				BackgroundTransparency={1}
				Position={new UDim2(1.0, -24, 0.5, -8)}
				Size={UDim2.fromOffset(16, 16)}
				Image={"rbxassetid://7072706663"}
				ImageColor3={new Color3(0.552941, 0.552941, 0.552941)}
			/>
			<frame
				key={"DropDown Submenu"}
				AutomaticSize={Enum.AutomaticSize.Y}
				BackgroundColor3={new Color3(1, 1, 1)}
				BorderSizePixel={0}
				Position={UDim2.fromOffset(-12, 36)}
				Size={new UDim2(1.0, 12, 0.0, 0)}
				Visible={false}
				ZIndex={10}
			/>
		</textbutton>
	);
}
