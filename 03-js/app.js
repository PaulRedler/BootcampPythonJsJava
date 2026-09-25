/* =========================================================================
   MAILLON 3 — JAVASCRIPT : l'interface
   Les données arrivent du maillon Java, dans donnees.js :
     PILOTES = [{nom, ecurie, points, victoires}, ...]
     ECURIES = [{nom, points, victoires}, ...]
   Complétez les trois fonctions, puis ouvrez index.html dans le navigateur.
   ========================================================================= */

// 1. trierParPoints(liste) : renvoie une NOUVELLE liste triée par points
//    DÉCROISSANTS. La liste reçue ne doit pas être modifiée.
//    À points égaux, celui qui a le plus de victoires passe devant.
function trierParPoints(liste) {
  let nvListe = []
  for(let i =0; i<liste.length;i++)
  {
    nvListe.push(liste[i])
  }
  for(let i =0;i<nvListe.length;i++)
  {
      for(let k =0;k<nvListe.length-1;k++)
      {
        temp = nvListe[k+1]
        if (nvListe[k].points<temp.points||nvListe[k].points==temp.points&&nvListe[k].victoires<temp.victoires)
        {
          nvListe[k+1]=nvListe[k];
          nvListe[k]=temp;
        }
        
      }

  }
  return nvListe
}

// 2. remplirTableau(idCorps, liste) : remplit le <tbody> dont l'id est fourni.
//    Une ligne <tr> par entrée, avec dans l'ordre les cellules <td> :
//      rang (1, 2, 3...) | nom | écurie (chaîne vide si absente) | points | victoires
//    Chaque <tr> porte l'attribut data-nom. Un nouvel appel REMPLACE le contenu.
function remplirTableau(idCorps, liste) {
  trierParPoints(liste)
  let corps = document.getElementById(idCorps);
  corps.innerHTML = "";

  for (let i = 0; i < liste.length; i++) {
    let tr = document.createElement("tr");
    tr.setAttribute("data-nom", liste[i].nom);
    let tdRang = document.createElement("td");
    tdRang.textContent = i + 1;
    let tdNom = document.createElement("td");
    tdNom.textContent = liste[i].nom;
    let tdEcurie = document.createElement("td");
    if (liste[i].ecurie)
    {
        tdEcurie.textContent = liste[i].ecurie;
    }
    else
    {
        tdEcurie.textContent = "";

    }
    let tdPoints = document.createElement("td");
    tdPoints.textContent = liste[i].points;
    let tdVictoires = document.createElement("td");
    tdVictoires.textContent = liste[i].victoires;
    tr.appendChild(tdRang);
    tr.appendChild(tdNom);
    tr.appendChild(tdEcurie);
    tr.appendChild(tdPoints);
    tr.appendChild(tdVictoires);
    corps.appendChild(tr);
  }
}

// 3. marquerPodium(idCorps) : ajoute la classe CSS "podium" aux TROIS PREMIÈRES
//    lignes du tableau, et la retire de toutes les autres.
function marquerPodium(idCorps) {
  let corps = document.getElementById(idCorps)
  elements = corps.getElementsByClassName("data-nom")
  ele
}

/* --- FOURNI — NE PAS MODIFIER : affichage de la saison ------------------- */
function afficherSaison() {
  if (typeof PILOTES === "undefined") {
    return;
  }
  remplirTableau("corps-pilotes", trierParPoints(PILOTES));
  marquerPodium("corps-pilotes");
  remplirTableau("corps-ecuries", trierParPoints(ECURIES));
  marquerPodium("corps-ecuries");
}
