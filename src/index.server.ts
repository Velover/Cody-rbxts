import { LoadApiDump } from "@rbxts/api-dump-fetcher";
LoadApiDump(plugin).expect();

import React from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
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

const root = createRoot(widget);
root.render(React.createElement(App));
