import { setupBetterOsSequence } from "./betterOS.js"

document.addEventListener('DOMContentLoaded', function() {
    const startMenu = document.getElementById('start-menu'); 
    const windowsIconBtn = document.querySelector('.windows-menu-button'); 

    setupBetterOsSequence();

    if (!startMenu || !windowsIconBtn) return;

    function hideStartMenu() {
        startMenu.classList.add('hidden');
    }

    windowsIconBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        startMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function(e) {
        if (!startMenu.contains(e.target) && !windowsIconBtn.contains(e.target)) {
            hideStartMenu();
        }
    });
});