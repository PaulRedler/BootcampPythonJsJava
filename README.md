Premier exercice python : 

l'idee est de separer la chaine en parametre a partir du caractere ':' avec la fonction split afin d'obtenir deux string : un pour les minutes et l'autre pour les secondes, ensuite on convertit les chaines en float puis on arrondit leur addition a la troisieme decimale

deuxieme exercice python :

pour chaques lignes, on construit le dictionnaire a partir des morceaux fait avec la fonction split(). Cas particulier pour la position où on verifie l'abandon et dans ce cas on assigne position a 0. Pareil pour le temps qu'on doit d'abord convertir en seconde avec la fonction fait precemment.
Le compteur permet de ne pas avoir les libellés dans le dictionnaire en premiere ligne.



troisieme exercice python:

on ecrit dans le document dont le chemin est passé en parametre avec la fonction open(w). Ensuite pour chaques lignes on assigne la valeur de la clé correspondante à une variable. Ces variables sont concaténées et écrites dans le fichier. Petite subtilité pour le temps qu'on assigne à vide si la fonction ecrite précédemment renvoie None.




--------------------------------------------------------------------------------------------



premier exercice java : 

Le bareme étant ordonné de façon décroissante, la position correspont donc a l'index de la valeur +1.

deuxieme exercice java:

afin d'eviter deux creer deux resultats avec le meme pilote, on regarde tout d'abord si il n'y en a pas deja un dans la collection avec le nom de la ligne courante.
on lui incremente ensuite son nombre de victoire, deuxieme place et on utilise la fonction crée precedemment pour incrementer son nombre de point.
Pour ordonner la collection on utilise un stream et les fonctions sorted et thenComparing de façon decroissante appart pour les noms.



-------------------------------------------------------------------------------------------




premier exercice js 

on parcout le tableau en parametre pour ajouter ses elements un par un dans un nouveau tableau, ensuite on applique un algorithme de tri a bulle decroissant sur le nouveau tableau



deuxieme exercice js:

on recupere l'element tableau via l'id en parametre puis on efface son contenu en mettant a vide son html. ensuite pour chaques lignes du tableau reçu en parametre on cree une ligne dans le tableau , chaques lignes a comme attribut un data-nom = au nom du pilote