import { sublime } from "../foldersApplication/sublimeText.js"
import { createFolderWindow } from "./folderTemp.js"

var open_windows = [];

Array.prototype.forEach.call(document.getElementsByClassName("developmentFolder"), function (window) {
    window.onclick = function () { 
        createFolderWindow(
            "Bureautique",
            "content-dev",
            sublime,
            "sublime",
            open_windows,
            "../assets/folder.svg"
        ); 
    }
})