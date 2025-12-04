export async function word(open_windows) {
	var max_index = Math.max.apply(Math, open_windows.map(function (window) { return window.index; }));
	new WinBox({
		index: max_index + 1,
		root: document.body,
		icon: "../assets/word.svg",

		title: "Word",
		background: "#fff",
		border: 4,
		header: 45,
		icon: true,

		modal: true,
		max: false,
		min: false,
		hidden: false,

		width: 500,
		height: 700,
		autosize: false,

		x: "center",
		y: "center",

		html: "<h1>Word</h1>",

		onfocus: function () {
			this.setBackground("#bbb");
		},
		onblur: function () {
			this.setBackground("#999");
		},
	});
}
