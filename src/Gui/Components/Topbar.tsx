import React from "@rbxts/react";
import { useSelectedAmount } from "../../Hooks/useSelectedAmount";
import { GuiResources } from "../Resources/GuiResources";

export default function Topbar() {
	const selected_amount = useSelectedAmount();

	return (
		<frame BackgroundTransparency={1} LayoutOrder={1} Size={new UDim2(1.0, 0, 0.0, 60)}>
			<uipadding
				PaddingBottom={new UDim(0.0, 8)}
				PaddingLeft={new UDim(0.0, 12)}
				PaddingRight={new UDim(0.0, 12)}
				PaddingTop={new UDim(0.0, 16)}
			/>
			<textlabel
				key={"Title"}
				BackgroundTransparency={1}
				Size={new UDim2(0.7, 0, 0.0, 24)}
				FontFace={GuiResources.FONT}
				Text={"Instance Codifier"}
				TextColor3={new Color3(0.0392157, 0.0392157, 0.0392157)}
				TextSize={18}
				TextXAlignment={Enum.TextXAlignment.Left}
			/>
			<textlabel
				BackgroundTransparency={1}
				Position={UDim2.fromScale(0.7, 0.0)}
				Size={new UDim2(0.3, 0, 0.0, 24)}
				FontFace={GuiResources.FONT}
				Text={`${selected_amount} Selected`}
				TextColor3={new Color3(0.392157, 0.392157, 0.392157)}
				TextSize={14}
				TextXAlignment={Enum.TextXAlignment.Right}
			/>
		</frame>
	);
}
