export function setupBetterOsSequence() {
    const triggerBtn = document.getElementById('better-os-button'); 
    const modal = document.getElementById('sequence-modal');
    const textContainer = document.getElementById('sequence-text-container');
    const finalBtn = document.getElementById('final-action-button');
    const startMenu = document.getElementById('start-menu');

    const messages = [
        "Analyse de votre système actuel...",
        "Détection de fonctionnalités limitées...",
        "Suppression de Windows 10...",
        "Demande à la NASA quel est le meilleur OS disponible...",
        "Appel en cours avec Jeff Bezos",
        "Réinstallation de Windows XP...",
        "SÉRIEUX ? ? ?",
        "Non je rigole, installation de BetterOS..."    
    ];

    if (triggerBtn && modal && textContainer && finalBtn) {
    
        triggerBtn.onclick = function(e) {
            e.stopPropagation();
            
            document.body.classList.add('better-os-mode');

            triggerBtn.style.display = 'none';

            if(startMenu) startMenu.classList.add('hidden');
            modal.classList.remove('hidden-visibility');
            
            textContainer.innerHTML = '';
            finalBtn.classList.add('hidden-visibility');
            playTextSequence(0, messages, textContainer, finalBtn);
        };

        finalBtn.onclick = function() {
            modal.classList.add('hidden-visibility');
        };
    }
}

function playTextSequence(index, messages, container, finalButton) {
    if (index < messages.length) {
        const p = document.createElement('p');
        p.textContent = messages[index];
        p.className = 'sequence-line';
        container.appendChild(p);

        setTimeout(() => {
            playTextSequence(index + 1, messages, container, finalButton);
        }, 1200); 
    } else {
        finalButton.classList.remove('hidden-visibility');
    }
}