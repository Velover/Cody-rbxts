import React from "@rbxts/react";

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
		</frame>
	);
}
