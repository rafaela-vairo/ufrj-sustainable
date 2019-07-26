import { Component, h } from "@stencil/core";

@Component({
	tag: "mnv-divider",
	styleUrl: "mnv-divider.scss",
	// shadow: true
})
export class MnvDivider {
	render() {
		return <hr />;
	}
}
