import React from "@rbxts/react";
import { GuiResources } from "../Resources/GuiResources";

function CheckboxOption({
	OptionName,
	IsEnabled,
	ToggleOption,
}: {
	OptionName: string;
	IsEnabled: boolean;
	ToggleOption: (OptionName: string) => void;
}) {
	return (
		<frame
			BackgroundTransparency={1}
			LayoutOrder={1}
			Size={new UDim2(1.0, 0, 0.0, 24)}
			ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
		>
			<frame
				key={"Checkbox"}
				BackgroundColor3={new Color3(0.231373, 0.509804, 0.964706)}
				Position={new UDim2(0.0, 0, 0.5, -8)}
				Size={UDim2.fromOffset(16, 16)}
				BackgroundTransparency={IsEnabled ? 0 : 1}
				ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
			>
				<uicorner CornerRadius={new UDim(0.0, 2)} />
				<uistroke Color={new Color3(0.231373, 0.509804, 0.964706)} />
				<textlabel
					BackgroundTransparency={1}
					Size={UDim2.fromScale(1.0, 1.0)}
					ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
					FontFace={GuiResources.FONT_BOLD}
					Text={"✓"}
					Visible={IsEnabled}
					TextColor3={new Color3(1, 1, 1)}
					TextSize={12}
				/>
			</frame>
			<textlabel
				key={"Name"}
				BackgroundTransparency={1}
				Position={UDim2.fromOffset(24, 0)}
				Size={new UDim2(1.0, -24, 1.0, 0)}
				ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
				FontFace={GuiResources.FONT_REGULAR}
				Text={OptionName}
				TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
				TextSize={14}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>
			<textbutton
				BackgroundTransparency={1}
				Size={UDim2.fromScale(1.0, 1.0)}
				ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
				Text={""}
				Event={{
					MouseButton1Click: () => {
						ToggleOption(OptionName);
					},
				}}
			/>
		</frame>
	);
}

export function CheckboxDropDownMenu({
	Options,
	ToggleOption,
}: {
	Options: Map<string, boolean>;
	ToggleOption: (option: string) => void;
}) {
	return (
		<textbutton
			BackgroundColor3={new Color3(1, 1, 1)}
			LayoutOrder={2}
			Size={new UDim2(1.0, 0, 0.0, 36)}
			FontFace={GuiResources.FONT_REGULAR}
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
			<frame
				key={"CheckboxDropDown Submenu"}
				AutomaticSize={Enum.AutomaticSize.Y}
				BackgroundColor3={new Color3(1, 1, 1)}
				BorderSizePixel={0}
				Position={UDim2.fromOffset(-12, 36)}
				Size={new UDim2(1.0, 12, 0.0, 0)}
				ZIndex={GuiResources.DROP_DOWN_MENU_ZINDEX}
				Visible={false}
			>
				<uicorner CornerRadius={new UDim(0.0, 6)} />
				<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} />
				<uipadding
					PaddingBottom={new UDim(0.0, 8)}
					PaddingLeft={new UDim(0.0, 8)}
					PaddingRight={new UDim(0.0, 8)}
					PaddingTop={new UDim(0.0, 8)}
				/>
				<uistroke Color={new Color3(0.901961, 0.901961, 0.901961)} />
				{[...Options].map(([option_name, is_enabled]) => (
					<CheckboxOption
						OptionName={option_name}
						IsEnabled={is_enabled}
						ToggleOption={ToggleOption}
					/>
				))}
			</frame>
		</textbutton>
	);
}
