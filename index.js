// 1. Modification du contenu
const bod = document.body;

bod.firstElementChild.textContent = "Rick Astley - Never Gonna Give You Up";

// 2. Suppression de la premiere ligne
let element = document.getElementsByClassName("couplet");

for (let i = 0; i < element.length; i++) {

    element[i].firstChild.remove();
    element[i].firstChild.remove('<br>');
}


// 3. Suppression des occurrences en doubles
const refrain = document.getElementsByClassName('refrain');

for (let i = 0; i < refrain.length; i++) {
    console.log(refrain);
    const phrases = [... new Set(refrain[i].textContent.split('\n'))];
    refrain[i].innerHTML='';
    for (let j = 0; j < phrases.length; j++) {
        refrain[i].innerHTML+= `${phrases[j]} <br>`;
    }
}


// 4. Suppression de l'element Id = erreur
let erreur = document.getElementById('erreur');
erreur.remove();

// 5. Ajout d'un footer en bas de la page
let foooter = document.createElement("footer");
bod.append(foooter);
foooter.innerText = '© Copyright 2023 - Boubacar Kina';
foooter.classList.add('mon-footer');
