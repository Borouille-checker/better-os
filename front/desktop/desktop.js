import { word } from "../foldersApplication/word.js"
import { createFolderWindow } from "./folderTemp.js"

var open_windows = [];

Array.prototype.forEach.call(document.getElementsByClassName("bureautiqueFolder"), function (window) {
    window.onclick = function () { 
        createFolderWindow(
            "Bureautique",
            "content-desk",
            word,
            "word",
            open_windows,
            "../assets/folder.svg"
        ); 
    }
})