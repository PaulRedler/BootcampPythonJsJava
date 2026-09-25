Premier exercice python : 

l'idee est de separer la chaine en parametre a partir du caractere ':' avec la fonction split afin d'obtenir deux string : un pour les minutes et l'autre pour les secondes, ensuite on convertit les chaines en float puis on arrondit leur addition a la troisieme decimale

deuxieme exercice python :

pour chaques lignes, on construit le dictionnaire a partir des morceaux fait avec la fonction split(). Cas particulier pour la position où on verifie l'abandon et dans ce cas on assigne position a 0. Pareil pour le temps qu'on doit d'abord convertir en seconde avec la fonction fait precemment.
Le compteur permet de ne pas avoir les libellés dans le dictionnaire en premiere ligne.



troisieme exercice python:

on ecrit dans le document dont le chemin est passé en parametre avec la fonction open(w). Ensuite pour chaques lignes on assigne la valeur de la clé correspondante à une variable. Ces variables sont concaténées et écrites dans le fichier. Petite subtilité pour le temps qu'on assigne à vide si la fonction ecrite précédemment renvoie None.
