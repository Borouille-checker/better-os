import { word } from "../bureautiqueFolder/word.js";

Array.prototype.forEach.call(document.getElementsByClassName("bureautiqueFolder"), function (window) {
	window.onclick = function () { folder("Bureau") };
});
var open_windows = [];

async function folder(name) {
	var win = new WinBox({
		index: 1,
		root: document.body,
		icon: true,

		title: name,
		background: "#fff",
		border: 4,
		header: 45,
		icon: true,

		maxwidth: 1920,
		maxheight: 1080,
		autosize: true,

		x: "center",
		y: "center",

		mount: document.getElementById("content").cloneNode(true),

		oncreate: function (options) {
			options.icon = "../assets/folder.png"
		},
		onfocus: function () {
			this.setBackground("#bbb");
		},
		onblur: function () {
			this.setBackground("#999");
		},
	});

	Array.prototype.forEach.call(document.getElementsByClassName("word"), function (window) {
		window.onclick = function () { word(open_windows) };
	});

	open_windows.push(win)
}