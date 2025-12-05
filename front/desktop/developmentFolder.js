import { sublime } from "../foldersApplication/sublimeText.js"

Array.prototype.forEach.call(document.getElementsByClassName("developmentFolder"), function (window) {
    window.onclick = function () { folder("Dev") };
});
var open_windows = [];

async function folder(name) {
    var win = new WinBox({
        index: 1,
        root: document.body,

        title: name,
        border: 4,
        header: 45,

        maxwidth: 1920,
        maxheight: 1080,
        autosize: true,

        x: "center",
        y: "center",

        mount: document.getElementById("content-dev").cloneNode(true),

        onfocus: function () {
            this.setBackground("#bbb");
        },
        onblur: function () {
            this.setBackground("#999");
        },
    });

    Array.prototype.forEach.call(document.getElementsByClassName("sublime"), function (window) {
        window.onclick = function () { sublime(open_windows) };
    });

    win.setIcon("../assets/folder.svg")
    open_windows.push(win)
}