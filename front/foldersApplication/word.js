export async function word(open_windows) {
	var max_index = Math.max.apply(Math, open_windows.map(function (window) { return window.index; }));
	var a = new WinBox({
		index: max_index + 1,
		root: document.body,

		title: "Suite Office",
		background: "#fff",
		border: 4,
		header: 45,

		modal: true,
		max: false,
		min: false,
		hidden: false,

		width: 600,
		height: 700,
		autosize: false,

		x: "center",
		y: "center",

		html: "<h1>Pourquoi remplacer la suite Office ?</h1>" +
		"<p>Pour commencer si vous passez sous Linux, aucun des logiciels Office ne seront disponibles. </p>" +
		"<p>Pourquoi remplacer la suite Office: Le prix: les tarifs peuvent rapidement atteindre des sommes importantes. </p>" +
		"<p>La peur que Microsoft utilise vos données à des fins commerciales sans votre consentement.</p>" + 
		"<h1>Par quoi remplacer la suite Office ?</h1>" +
		"<ul>   \
			<li>Libre Office</li>	\
			<li>Only Office</li>	\
			<li>OpenOffice</li>     \
		</ul>",
		onfocus: function () {
			this.setBackground("#bbb");
		},
		onblur: function () {
			this.setBackground("#999");
		},
	});
	a.setIcon("../assets/word.svg")
}
