export async function createFolderWindow(name, contentElementId, appOpenFunction, appClassName, openWindowsArray, iconPath) {
    
    var win = new WinBox({
        index: openWindowsArray.length > 0 ? Math.max.apply(Math, openWindowsArray.map(w => w.index)) + 1 : 1,
        root: document.body,

        title: name,
        border: 4,
        header: 45,

        maxwidth: 1920,
        maxheight: 1080,
        autosize: true,

        x: "center",
        y: "center",

        mount: document.getElementById(contentElementId).cloneNode(true),

        onfocus: function () {
            this.setBackground("#bbb");
        },
        onblur: function () {
            this.setBackground("#999");
        },
    });
    
    Array.prototype.forEach.call(document.getElementsByClassName(appClassName), function (window) {
        window.onclick = function () { appOpenFunction(openWindowsArray) };
    });

    win.setIcon(iconPath || "../assets/folder.png")
    openWindowsArray.push(win)
    
    return win;
}