import React, { useState } from "@rbxts/react";
import { GuiResources } from "../../Resources/GuiResources";

function Topbar({
	IsVisible,
	ToggleVisibility,
}: {
	IsVisible: boolean;
	ToggleVisibility: () => void;
}) {
	return (
		<frame BackgroundTransparency={1} LayoutOrder={1} Size={new UDim2(1.0, 0, 0.0, 24)}>
			<textlabel
				BackgroundTransparency={1}
				Size={UDim2.fromScale(0.85, 1.0)}
				FontFace={GuiResources.FONT_MEDIUM}
				Text={"Selected Instances"}
				TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
				TextSize={14}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>
			<textbutton
				BackgroundTransparency={1}
				Position={new UDim2(1.0, -24, 0.0, 0)}
				Size={UDim2.fromOffset(24, 24)}
				FontFace={GuiResources.FONT_BOLD}
				Text={IsVisible ? "-" : "+"}
				TextColor3={new Color3(0.392157, 0.392157, 0.392157)}
				TextSize={18}
				Event={{
					MouseButton1Click: () => ToggleVisibility(),
				}}
			/>
		</frame>
	);
}

const LEVEL_OFFSET = 10;

function SelectedInstance({
	IsActive,
	InstanceName,
	ClassName,
	Level,
}: {
	IsActive: boolean;
	InstanceName: string;
	ClassName: string;
	Level: number;
}) {
	return (
		<frame BackgroundTransparency={1} LayoutOrder={1} Size={new UDim2(1.0, 0, 0.0, 24)}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				Padding={new UDim(0.0, 5)}
			/>
			<frame
				BackgroundColor3={new Color3(1, 1, 1)}
				BorderColor3={new Color3(0, 0, 0)}
				BorderSizePixel={0}
				LayoutOrder={-1}
				Size={new UDim2(0.0, LEVEL_OFFSET * Level, 1.0, 0)}
			/>
			<textbutton
				BackgroundTransparency={1}
				Position={new UDim2(0.0, 12, 0.5, -8)}
				Size={UDim2.fromOffset(16, 16)}
				FontFace={GuiResources.FONT_BOLD}
				Text={"-"}
				TextColor3={new Color3(0.392157, 0.392157, 0.392157)}
				TextSize={14}
			/>
			<textbutton
				key={"Checkbox"}
				BackgroundColor3={new Color3(0.231373, 0.509804, 0.964706)}
				Position={new UDim2(0.0, 0, 0.5, -8)}
				Size={UDim2.fromOffset(16, 16)}
				BackgroundTransparency={IsActive ? 0 : 1}
				ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
				Text={""}
			>
				<uicorner CornerRadius={new UDim(0.0, 2)} />
				<uistroke Color={new Color3(0.231373, 0.509804, 0.964706)} />
				<textlabel
					BackgroundTransparency={1}
					Size={UDim2.fromScale(1.0, 1.0)}
					ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
					FontFace={GuiResources.FONT_BOLD}
					Text={"✓"}
					Visible={IsActive}
					TextColor3={new Color3(1, 1, 1)}
					TextSize={12}
				/>
			</textbutton>
			<imagelabel
				BackgroundTransparency={1}
				Position={new UDim2(0.0, 56, 0.5, -8)}
				Size={UDim2.fromOffset(16, 16)}
				Image={"rbxassetid://6031225819"}
			/>
			<textlabel
				key={"InstanceNameText"}
				AutomaticSize={Enum.AutomaticSize.X}
				BackgroundTransparency={1}
				Position={UDim2.fromOffset(80, 0)}
				Size={UDim2.fromScale(0.0, 1.0)}
				FontFace={GuiResources.FONT_REGULAR}
				Text={InstanceName}
				TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
				TextSize={14}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>
			<textlabel
				key={"ClassNameText"}
				AutomaticSize={Enum.AutomaticSize.X}
				BackgroundTransparency={1}
				Position={UDim2.fromScale(0.7, 0.0)}
				Size={UDim2.fromScale(0.0, 1.0)}
				FontFace={GuiResources.FONT_REGULAR}
				Text={`(${ClassName})`}
				TextColor3={new Color3(0.392157, 0.392157, 0.392157)}
				TextSize={12}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>
		</frame>
	);
}

function InstancesList({ Visible }: { Visible: boolean }) {
	return (
		<frame
			Visible={Visible}
			BackgroundColor3={new Color3(1, 1, 1)}
			LayoutOrder={2}
			Size={new UDim2(1.0, 0, 0.0, 210)}
		>
			<uicorner CornerRadius={new UDim(0.0, 6)} />
			<uistroke Color={new Color3(0.901961, 0.901961, 0.901961)} />
			<scrollingframe
				BackgroundTransparency={1}
				NextSelectionUp={undefined}
				Position={UDim2.fromOffset(2, 2)}
				Size={new UDim2(1.0, -4, 1.0, -4)}
				AutomaticCanvasSize={Enum.AutomaticSize.XY}
				CanvasSize={UDim2.fromScale(0.0, 0.0)}
				ScrollBarThickness={6}
			>
				<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.0, 2)} />
				<uipadding
					PaddingBottom={new UDim(0.0, 4)}
					PaddingLeft={new UDim(0.0, 4)}
					PaddingRight={new UDim(0.0, 4)}
					PaddingTop={new UDim(0.0, 4)}
				/>
				<SelectedInstance
					IsActive={true}
					InstanceName={"Workspace"}
					ClassName={"Workspace"}
					Level={0}
				/>
				<SelectedInstance
					IsActive={true}
					InstanceName={"Workspace"}
					ClassName={"Workspace"}
					Level={1}
				/>
				<SelectedInstance
					IsActive={true}
					InstanceName={"Workspace"}
					ClassName={"Workspace"}
					Level={2}
				/>
				<SelectedInstance
					IsActive={true}
					InstanceName={"Workspace"}
					ClassName={"Workspace"}
					Level={3}
				/>
			</scrollingframe>
		</frame>
	);
}

export function SelectedInstancesList() {
	const [is_visible, SetIsVisible] = useState(false);
	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			LayoutOrder={3}
			Size={UDim2.fromScale(1.0, 0.0)}
		>
			<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.0, 4)} />

			<Topbar IsVisible={is_visible} ToggleVisibility={() => SetIsVisible(!is_visible)} />
			<InstancesList Visible={is_visible} />
		</frame>
	);
}
