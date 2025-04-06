import React, { useState } from "@rbxts/react";
import { GuiResources } from "../Resources/GuiResources";

function Option({
	SelectedOption,
	OptionName,
	SetChosen,
	SetSelected,
}: {
	OptionName: string;
	SelectedOption: string;
	SetSelected: (option: string) => void;
	SetChosen: (option: string) => void;
}) {
	return (
		<textbutton
			BackgroundColor3={new Color3(1, 1, 1)}
			BorderColor3={new Color3(0, 0, 0)}
			BorderSizePixel={0}
			Size={new UDim2(1.0, 0, 0.0, 24)}
			ZIndex={GuiResources.DROP_DOWN_MENU_ITEMS_ZINDEX}
			FontFace={GuiResources.FONT_REGULAR}
			TextColor3={new Color3(0, 0, 0)}
			TextSize={14}
			TextXAlignment={Enum.TextXAlignment.Left}
			Event={{
				MouseButton1Click: () => {
					SetChosen(SelectedOption);
				},
				MouseEnter: () => {
					SetSelected(SelectedOption);
				},
			}}
		>
			<uipadding PaddingLeft={new UDim(0.0, 5)} />
			<uistroke
				Enabled={SelectedOption === OptionName}
				ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				Color={new Color3(0.231373, 0.509804, 0.964706)}
			/>
		</textbutton>
	);
}

export function DropDownMenu({
	ChosenOption,
	Options,
	SetChosen: SetChosen,
}: {
	ChosenOption: string;
	Options: string[];
	SetChosen: (option: string) => void;
}) {
	const [selected_option, SetSelected] = useState(ChosenOption);
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
			>
				<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} />
				<uipadding
					PaddingBottom={new UDim(0.0, 8)}
					PaddingLeft={new UDim(0.0, 8)}
					PaddingRight={new UDim(0.0, 8)}
					PaddingTop={new UDim(0.0, 8)}
				/>
				<uistroke Color={new Color3(0.901961, 0.901961, 0.901961)} />
				{Options.map((option) => (
					<Option
						OptionName={option}
						SelectedOption={selected_option}
						SetSelected={SetSelected}
						SetChosen={SetChosen}
					/>
				))}
			</frame>
		</textbutton>
	);
}
