import React from "@rbxts/react";
import Body from "./Components/Body";
import Topbar from "./Components/Topbar";

export default function App() {
	return (
		<frame BackgroundColor3={new Color3(1, 1, 1)} Size={UDim2.fromScale(1.0, 1.0)}>
			<scrollingframe
				BackgroundTransparency={1}
				Size={UDim2.fromScale(1.0, 1.0)}
				AutomaticCanvasSize={Enum.AutomaticSize.Y}
				CanvasSize={UDim2.fromScale(0.0, 0.0)}
				ScrollBarThickness={6}
			>
				<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} />
				<uipadding
					PaddingBottom={new UDim(0.0, 12)}
					PaddingLeft={new UDim(0.0, 12)}
					PaddingRight={new UDim(0.0, 12)}
					PaddingTop={new UDim(0.0, 12)}
				/>
				<frame
					AutomaticSize={Enum.AutomaticSize.Y}
					BackgroundColor3={new Color3(1, 1, 1)}
					BorderSizePixel={0}
					Size={UDim2.fromScale(1.0, 0.0)}
				>
					<uicorner CornerRadius={new UDim(0.0, 6)} />
					<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} />
					<uistroke Color={new Color3(0.901961, 0.901961, 0.901961)} />
					<Topbar />
					<Body />
				</frame>
			</scrollingframe>
		</frame>
	);
}
