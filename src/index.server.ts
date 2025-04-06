import { LoadApiDump } from "@rbxts/api-dump-fetcher";
import React from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import { InstanceTools } from "@rbxts/tool_pack";
import App from "./Gui/App";

const toolbar = plugin.CreateToolbar("Cody-toolbar");
const button = toolbar.CreateButton("Toggle Cody", "Cody", "", "Cody");

button.Click.Connect(() => {
	widget.Enabled = !widget.Enabled;
});

const widget = plugin.CreateDockWidgetPluginGui(
	"Cody",
	new DockWidgetPluginGuiInfo(Enum.InitialDockState.Float, false, true, 200, 200, 200, 200),
);

widget["Title" as never] = "Cody" as never;

LoadApiDump(plugin)
	.then(() => {
		button.SetActive(true);
	})
	.catch(() => {
		warn("Failed to load API dump");
		InstanceTools.Create("TextLabel", {
			Text: "Failed to load API dump",
			Parent: widget,
			Size: new UDim2(1, 0, 1, 0),
			BackgroundTransparency: 1,
			TextColor3: Color3.fromRGB(255, 0, 0),
			TextScaled: true,
		});
	});

const root = createRoot(widget);
root.render(React.createElement(App));
