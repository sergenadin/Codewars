// Fonction qui retourne le nombre (comptage) de voyelles dans la chaîne donnée.
function compterVoyelles(chaine) {
    // Définir les voyelles à considérer
    const voyelles = ['a', 'e', 'i', 'o', 'u'];
  
    // Initialiser le compteur de voyelles à zéro
    let compteurVoyelles = 0;
  
    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < chaine.length; i++) {
      // Vérifier si le caractère actuel est une voyelle
      if (voyelles.includes(chaine[i])) {
        // Incrémenter le compteur de voyelles
        compteurVoyelles++;
      }
    }
  
    // Retourner le nombre total de voyelles dans la chaîne
    return compteurVoyelles;
  }
  
  // Exemple d'utilisation de la fonction
  const chaineText = "bonjour le monde";
  const resultat = compterVoyelles(chaineText);
  console.log(resultat); // Affiche le nombre de voyelles dans la chaîne
  //Cette fonction prend en entrée une chaîne de caractères et retourne le nombre de voyelles présentes dans cette chaîne, en considérant les voyelles 'a', 'e', 'i', 'o', et 'u'

  // Fonction qui prend un entier en argument et renvoie "Pair" pour les nombres pairs ou "Impair" pour les nombres impairs.
function pairOuImpair(nombre) {
    // Vérifier si le nombre est pair en utilisant l'opérateur modulo (%)
    if (nombre % 2 === 0) {
      // Le nombre est pair, donc retourner "Pair"
      return "Pair";
    } else {
      // Le nombre est impair, donc retourner "Impair"
      return "Impair";
    }
  }
  
  // Exemple d'utilisation de la fonction
  const nombreTab = 7;
  const result = pairOuImpair(nombreTab);
  console.log(result); // Affiche "impair" pour un nombre impair
  //Cette fonction prend en entrée un entier et retourne "Pair" si le nombre est pair, et "Impair" s'il est impair. Elle utilise l'opérateur modulo (%) pour vérifier si le nombre est divisible par 2 (ce qui signifie qu'il est pair). Si c'est le cas, la fonction retourne "Pair", sinon elle retourne "Impair

  // Fonction qui prend un mot en argument et retourne le caractère du milieu.
// Si la longueur du mot est impaire, retourne le caractère du milieu.
// Si la longueur du mot est paire, retourne les deux caractères du milieu.
function caractereDuMilieu(mot) {
    // Calculer la position du caractère du milieu
    const positionMilieu = Math.floor(mot.length / 2);
  
    // Vérifier si la longueur du mot est impaire
    if (mot.length % 2 === 1) {
      // Le mot a une longueur impaire, donc retourner le caractère du milieu
      return mot.charAt(positionMilieu);
    } else {
      // Le mot a une longueur paire, donc retourner les deux caractères du milieu
      return mot.slice(positionMilieu - 1, positionMilieu + 1);
    }
  }
  
  // Exemples d'utilisation de la fonction
  const motTest1 = "test";
  const resultat1 = caractereDuMilieu(motTest1);
  console.log(resultat1); // Devrait afficher "es"
  
  const motTest2 = "testing";
  const resultat2 = caractereDuMilieu(motTest2);
  console.log(resultat2); // Devrait afficher "t"
  
  const motTest3 = "middle";
  const resultat3 = caractereDuMilieu(motTest3);
  console.log(resultat3); // Devrait afficher "dd"
  
  const motTest4 = "A";
  const resultat4 = caractereDuMilieu(motTest4);
  console.log(resultat4); // Devrait afficher "A"
  //Cette fonction prend en entrée un mot et retourne le caractère du milieu ou les deux caractères du milieu en fonction de la parité de la longueur du mot. Si la longueur du mot est impaire, elle retourne le caractère du milieu, sinon elle retourne les deux caractères du milieu.

  // Fonction qui prend un nombre entier ou à virgule flottante en argument
// et retourne son opposé.
function trouverOppose(nombre) {
    // Retourner l'opposé du nombre
    return -nombre;
  }
  
  // Exemples d'utilisation de la fonction
  const exemple1 = 1;
  const resultata1 = trouverOppose(exemple1);
  console.log(resultata1); // Devrait afficher -1
  
  const exemple2 = 14;
  const resultata2 = trouverOppose(exemple2);
  console.log(resultata2); // Devrait afficher -14
  
  const exemple3 = -34;
  const resultata3 = trouverOppose(exemple3);
  console.log(resultata3); // Devrait afficher 34
  //Cette fonction prend en entrée un nombre entier ou à virgule flottante et retourne son opposé en utilisant l'opérateur de négation (-). Les exemples d'utilisation montrent comment la fonction renvoie l'opposé pour différents nombres.

  // Fonction qui prend une chaîne de caractères en argument et retourne une nouvelle chaîne
// où chaque lettre est répétée en fonction de sa position dans la chaîne, suivie d'un tiret.
function accum(chaine) {
    // Convertir la chaîne en majuscules pour la première lettre
    const chaineMajuscules = chaine.toUpperCase();
  
    // Initialiser un tableau pour stocker les parties de la nouvelle chaîne
    const parties = [];
  
    // Parcourir chaque lettre de la chaîne
    for (let i = 0; i < chaine.length; i++) {
      // Créer une partie de la nouvelle chaîne avec la lettre répétée en fonction de sa position
      const partie = chaineMajuscules[i] + chaine.toLowerCase().repeat(i);
  
      // Ajouter cette partie au tableau
      parties.push(partie);
    }
  
    // Joindre les parties avec des tirets pour former la nouvelle chaîne
    const rezultat = parties.join('-');
  
    // Retourner la nouvelle chaîne
    return rezultat;
  }
  
  // Exemples d'utilisation de la fonction
  const example1 = "abcd";
  const rezultat1 = accum(example1);
  console.log(rezultat1); // Devrait afficher "A-Bb-Ccc-Dddd"
  
  const example2 = "RqaEzty";
  const rezultat2 = accum(example2);
  console.log(rezultat2); // Devrait afficher "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  
  const example3 = "cwAt";
  const rezultat3 = accum(example3);
  console.log(rezultat3); // Devrait afficher "C-Ww-Aaa-Tttt"
  //Cette fonction, appelée accum, prend en entrée une chaîne de caractères et crée une nouvelle chaîne où chaque lettre est répétée en fonction de sa position dans la chaîne, suivie d'un tiret

  // Fonction qui prend un nombre entier en argument et détermine s'il s'agit d'un carré parfait.
// Un carré parfait est un nombre entier qui est le carré d'un autre entier, c'est-à-dire le produit de cet entier par lui-même.
function estCarreParfait(nombre) {
    // Vérifier si le nombre est positif
    if (nombre < 0) {
      // Les nombres négatifs ne sont pas des carrés parfaits
      return false;
    }
  
    // Calculer la racine carrée du nombre
    const racineCarree = Math.sqrt(nombre);
  
    // Vérifier si la racine carrée est un nombre entier
    return racineCarree % 1 === 0;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(estCarreParfait(-1)); // Devrait afficher false
  console.log(estCarreParfait(0));  // Devrait afficher true
  console.log(estCarreParfait(3));  // Devrait afficher false
  console.log(estCarreParfait(4));  // Devrait afficher true
  console.log(estCarreParfait(25)); // Devrait afficher true
  console.log(estCarreParfait(26)); // Devrait afficher false
  //Cette fonction, appelée estCarreParfait, prend en entrée un nombre entier et détermine s'il s'agit d'un carré parfait. Un carré parfait est un nombre entier qui est le carré d'un autre entier, c'est-à-dire le produit de cet entier par lui-même.

  // Fonction qui prend une chaîne de caractères en argument et renvoie une nouvelle chaîne
// avec toutes les voyelles supprimées, neutralisant ainsi la menace des trolls.
function supprimerVoyelles(chaine) {
    // Utiliser une expression régulière pour supprimer toutes les voyelles de la chaîne
    const chaineSansVoyelles = chaine.replace(/[aeiouAEIOU]/g, '');
  
    // Retourner la nouvelle chaîne sans voyelles
    return chaineSansVoyelles;
  }
  
  // Exemple d'utilisation de la fonction
  const exemple = "This website is for losers LOL!";
  const rosultat = supprimerVoyelles(exemple);
  console.log(rosultat); // Devrait afficher "Ths wbst s fr lsrs LL!"
  //Cette fonction, appelée supprimerVoyelles, prend en entrée une chaîne de caractères et renvoie une nouvelle chaîne où toutes les voyelles ont été supprimées, neutralisant ainsi la menace des trolls. La fonction utilise une expression régulière pour rechercher et remplacer toutes les occurrences de voyelles (minuscules et majuscules) dans la chaîne par une chaîne vide

// Fonction qui prend une chaîne de nombres séparés par des espaces en argument
// et renvoie le nombre le plus élevé suivi du nombre le plus bas, séparés par un espace.
function plusGrandEtPlusPetit(chaineNombres) {
    // Diviser la chaîne en un tableau de nombres en utilisant l'espace comme séparateur
    const tableauNombres = chaineNombres.split(" ").map(Number);
  
    // Trouver le nombre le plus élevé et le plus bas dans le tableau
    const plusGrand = Math.max(...tableauNombres);
    const plusPetit = Math.min(...tableauNombres);
  
    // Retourner une chaîne avec le nombre le plus élevé suivi du nombre le plus bas
    return `${plusGrand} ${plusPetit}`;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(plusGrandEtPlusPetit("1 2 3 4 5"));   // Devrait afficher "5 1"
  console.log(plusGrandEtPlusPetit("1 2 -3 4 5"));  // Devrait afficher "5 -3"
  console.log(plusGrandEtPlusPetit("1 9 3 4 -5"));  // Devrait afficher "9 -5"
  //Cette fonction, appelée plusGrandEtPlusPetit, prend en entrée une chaîne de nombres séparés par des espaces, les convertit en tableau de nombres, puis trouve le nombre le plus élevé et le plus bas dans ce tableau. Enfin, elle retourne une chaîne avec le nombre le plus élevé suivi du nombre le plus bas, séparés par un espace.

// Fonction qui vérifie si une chaîne de caractères a le même nombre de 'x' et de 'o'.
// La méthode doit renvoyer un booléen et être insensible à la casse.
// La chaîne peut contenir n'importe quel caractère.

function memeNombreXetO(chaine) {
    // Convertir la chaîne en minuscules pour rendre la comparaison insensible à la casse
    const chaineMinuscules = chaine.toLowerCase();
  
    // Compter le nombre de 'x' et le nombre de 'o' dans la chaîne
    const nombreX = (chaineMinuscules.match(/x/g) || []).length;
    const nombreO = (chaineMinuscules.match(/o/g) || []).length;
  
    // Vérifier si le nombre de 'x' est égal au nombre de 'o'
    return nombreX === nombreO;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(memeNombreXetO("ooxx"));   // Devrait afficher true
  console.log(memeNombreXetO("xooxx"));  // Devrait afficher false
  console.log(memeNombreXetO("ooxXm"));  // Devrait afficher true
  console.log(memeNombreXetO("zpzpzpp")); // Devrait afficher true
  console.log(memeNombreXetO("zzoo"));    // Devrait afficher false
  //Cette fonction, appelée memeNombreXetO, prend en entrée une chaîne de caractères et vérifie si elle a le même nombre de 'x' et de 'o'. La fonction est insensible à la casse, et elle utilise des expressions régulières pour compter le nombre de 'x' et de 'o' dans la chaîne. 

  function squareDigits(num) {
    // Convert the number to a string and split it into an array of digits
    const digits = String(num).split('');
  
    // Square each digit and concatenate the results
    const squaredDigits = digits.map(digit => Math.pow(parseInt(digit), 2));
    const result = parseInt(squaredDigits.join(''));
  
    // Return the final result as an integer
    return result;
  }
  
  // Examples of using the function
  console.log(squareDigits(9119)); // Should return 811181
  console.log(squareDigits(765));  // Should return 493625
  //Cette fonction, nommée squareDigits, prend un entier en entrée, met au carré chaque chiffre, concatène les résultats et renvoie l'entier final.

  // Fonction qui, étant donné une chaîne de mots, retourne la longueur du ou des mots les plus courts.
// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.

function longueurMotPlusCourt(chaineDeMots) {
    // Diviser la chaîne en un tableau de mots
    const mots = chaineDeMots.split(' ');
  
    // Trouver la longueur du mot le plus court
    const longueurPlusCourte = Math.min(...mots.map(mot => mot.length));
  
    // Retourner la longueur du mot le plus court
    return longueurPlusCourte;
  }
  
  // Exemple d'utilisation de la fonction
  const exemples = "Ceci est un exemples de chaîne de mots";
  const resultats = longueurMotPlusCourt(exemples);
  console.log(resultats); // Devrait afficher la longueur du mot le plus court dans la chaîne
  //Cette fonction, appelée longueurMotPlusCourt, prend en entrée une chaîne de mots, la divise en un tableau de mots, puis trouve la longueur du ou des mots les plus courts. La fonction retourne la longueur du mot le plus court. Les commentaires dans le code expliquent chaque étape

  // L'acide désoxyribonucléique (ADN) est une substance chimique présente dans le noyau des cellules et porte les "instructions"
// pour le développement et le fonctionnement des organismes vivants.

// Dans les chaînes d'ADN, les symboles "A" et "T" sont complémentaires, tout comme "C" et "G".
// Votre fonction reçoit un côté de l'ADN (chaîne, sauf pour Haskell) ; vous devez retourner l'autre côté complémentaire.
// La chaîne d'ADN ne sera jamais vide ou absente (encore une fois, sauf pour Haskell).

function complémentADN(côtéADN) {
    // Utiliser une correspondance pour déterminer les paires complémentaires
    const correspondances = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
  
    // Convertir la chaîne d'ADN en un tableau de lettres, inverser les lettres et les compléter
    const complément = côtéADN.split('').map(lettre => correspondances[lettre]).join('');
  
    // Retourner le côté complémentaire de l'ADN
    return complément;
  }
  
  // Exemples d'utilisation de la fonction
  const exempla1 = "ATTGC";
  const resiltat1 = complémentADN(exempla1);
  console.log(resiltat1); // Devrait afficher "TAACG"
  
  const exempla2 = "GTAT";
  const resiltat2 = complémentADN(exempla2);
  console.log(resiltat2); // Devrait afficher "CATA"
  //Cette fonction, appelée complémentADN, prend en entrée un côté de la chaîne d'ADN, détermine les paires complémentaires à l'aide d'une correspondance, puis retourne l'autre côté complémentaire de l'ADN.

  // Votre tâche consiste à créer une fonction qui peut prendre n'importe quel entier non négatif en argument
// et le renvoyer avec ses chiffres dans un ordre décroissant. Essentiellement, réorganisez les chiffres
// pour créer le nombre le plus élevé possible.

// Exemples :
// Entrée : 42145 Sortie : 54421
// Entrée : 145263 Sortie : 654321
// Entrée : 123456789 Sortie : 987654321

function triChiffresDescendant(nombre) {
    // Convertir le nombre en une chaîne de caractères, puis en un tableau de chiffres
    const chiffres = String(nombre).split('').map(Number);
  
    // Trier les chiffres en ordre décroissant
    const chiffresTriés = chiffres.sort((a, b) => b - a);
  
    // Reformer les chiffres triés en un nombre
    const nombreTrié = parseInt(chiffresTriés.join(''));
  
    // Retourner le nombre trié
    return nombreTrié;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(triChiffresDescendant(42145));      // Devrait afficher 54421
  console.log(triChiffresDescendant(145263));     // Devrait afficher 654321
  console.log(triChiffresDescendant(123456789));  // Devrait afficher 987654321
  //Cette fonction, appelée triChiffresDescendant, prend en entrée un entier non négatif, trie ses chiffres en ordre décroissant, puis renvoie le nombre résultant. 

  // Vous recevez un tableau de nombres, retournez la somme de tous les nombres positifs.

// Exemple : [1, -4, 7, 12] => 1 + 7 + 12 = 20

// Remarque : si rien n'est à additionner, la somme est par défaut à 0.

function sommePositifs(tableau) {
    // Filtrer les nombres positifs
    const positifs = tableau.filter(nombre => nombre > 0);
  
    // Calculer la somme des nombres positifs
    const somme = positifs.reduce((acc, nombre) => acc + nombre, 0);
  
    // Retourner la somme
    return somme;
  }
  
  // Exemple d'utilisation de la fonction
  const axemple = [1, -4, 7, 12];
  const rasultat = sommePositifs(axemple);
  console.log(rasultat); // Devrait afficher 20
  //Cette fonction, appelée sommePositifs, prend en entrée un tableau de nombres, filtre les nombres positifs, puis retourne la somme de ces nombres. Si le tableau ne contient aucun nombre positif, la fonction retourne 0 par défaut.

  // Un isogramme est un mot qui n'a pas de lettres répétées, consécutives ou non consécutives.
// Implémentez une fonction qui détermine si une chaîne qui ne contient que des lettres est un isogramme.
// Supposez que la chaîne vide est un isogramme. Ignorez la casse des lettres.

// Exemple : (Entrée --> Sortie)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignorer la casse des lettres)

function estIsogramme(chaine) {
    // Convertir la chaîne en minuscules pour ignorer la casse
    const chaineMinuscules = chaine.toLowerCase();
  
    // Utiliser un ensemble pour stocker les lettres déjà rencontrées
    const lettresRencontrees = new Set();
  
    // Parcourir chaque lettre de la chaîne
    for (let lettre of chaineMinuscules) {
      // Vérifier si la lettre a déjà été rencontrée
      if (lettresRencontrees.has(lettre)) {
        // La lettre a été rencontrée précédemment, donc ce n'est pas un isogramme
        return false;
      }
  
      // Ajouter la lettre à l'ensemble
      lettresRencontrees.add(lettre);
    }
  
    // Toutes les lettres sont uniques, donc c'est un isogramme
    return true;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(estIsogramme("Dermatoglyphics")); // Devrait afficher true
  console.log(estIsogramme("aba"));             // Devrait afficher false
  console.log(estIsogramme("moOse"));           // Devrait afficher false (ignorer la casse des lettres)
  //Cette fonction, appelée estIsogramme, prend en entrée une chaîne de caractères, vérifie si elle est un isogramme (c'est-à-dire si elle n'a pas de lettres répétées, en ignorant la casse), et retourne true si c'est le cas, sinon false

  // Dans cette kata, vous allez créer une fonction qui prend une liste d'entiers non négatifs et de chaînes de caractères,
// et retourne une nouvelle liste avec les chaînes de caractères filtrées.

// Exemple :
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filtrerListe(liste) {
    // Utiliser la méthode filter pour ne conserver que les entiers dans la liste
    const listeFiltree = liste.filter(element => typeof element === 'number');
  
    // Retourner la liste filtrée
    return listeFiltree;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(filtrerListe([1,2,'a','b']));           // Devrait afficher [1,2]
  console.log(filtrerListe([1,'a','b',0,15]));        // Devrait afficher [1,0,15]
  console.log(filtrerListe([1,2,'aasf','1','123',123]));// Devrait afficher [1,2,123]
  //Cette fonction, appelée filtrerListe, prend en entrée une liste d'entiers non négatifs et de chaînes de caractères, et retourne une nouvelle liste ne contenant que les entiers.

  // Étant donné un tableau d'entiers, votre solution doit trouver le plus petit entier.

// Par exemple :
// Pour [34, 15, 88, 2], votre solution renverra 2
// Pour [34, -345, -1, 100], votre solution renverra -345

// Vous pouvez supposer, dans le cadre de cette kata, que le tableau fourni ne sera pas vide.

function trouverPlusPetitEntier(tableau) {
    // Utiliser la méthode Math.min pour trouver le plus petit entier dans le tableau
    const plusPetit = Math.min(...tableau);
  
    // Retourner le plus petit entier
    return plusPetit;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(trouverPlusPetitEntier([34, 15, 88, 2]));        // Devrait afficher 2
  console.log(trouverPlusPetitEntier([34, -345, -1, 100]));     // Devrait afficher -345
  //Cette fonction, appelée trouverPlusPetitEntier, prend en entrée un tableau d'entiers et utilise la méthode Math.min pour trouver et retourner le plus petit entier dans le tableau.

  // Créez une fonction qui renvoie la somme des deux plus petits nombres positifs
// étant donné un tableau d'au moins 4 entiers positifs. Aucun nombre à virgule ou entier non positif ne sera passé.

// Par exemple, lorsque le tableau [19, 5, 42, 2, 77] est passé, la sortie devrait être 7.

// [10, 343445353, 3453445, 3453545353453] devrait renvoyer 3453455.

function sommeDeuxPlusPetitsPositifs(tableau) {
    // Trier le tableau en ordre croissant
    const tableauTrié = tableau.sort((a, b) => a - b);
  
    // Additionner les deux premiers nombres du tableau trié
    const somme = tableauTrié[0] + tableauTrié[1];
  
    // Retourner la somme
    return somme;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(sommeDeuxPlusPetitsPositifs([19, 5, 42, 2, 77]));                 // Devrait afficher 7
  console.log(sommeDeuxPlusPetitsPositifs([10, 343445353, 3453445, 3453545353453])); // Devrait afficher 3453455
  //Cette fonction, appelée sommeDeuxPlusPetitsPositifs, prend en entrée un tableau d'au moins 4 entiers positifs, les trie en ordre croissant, puis renvoie la somme des deux plus petits nombres du tableau trié

  // Dans une petite ville, la population est p0 = 1000 au début d'une année. 
// La population augmente régulièrement de 2 pourcent par an, et en plus, 50 nouveaux habitants par an viennent vivre dans la ville. 
// Combien d'années la ville a-t-elle besoin pour voir sa population supérieure ou égale à p = 1200 habitants ?

// À la fin de la première année, il y aura :
// 1000 + 1000 * 0.02 + 50 => 1070 habitants

// À la fin de la 2e année, il y aura :
// 1070 + 1070 * 0.02 + 50 => 1141 habitants (** le nombre d'habitants est un entier **)

// À la fin de la 3e année, il y aura :
// 1141 + 1141 * 0.02 + 50 => 1213

// Il faudra 3 années entières.
// Plus généralement, avec les paramètres donnés :

// p0, percent, aug (habitants arrivant ou partant chaque année), p (population à atteindre ou dépasser)

// La fonction nb_year doit renvoyer le nombre n d'années entières nécessaires pour obtenir une population supérieure ou égale à p.

// aug est un entier, percent est un nombre flottant positif ou nul, p0 et p sont des entiers positifs (> 0)

// Exemples :
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Remarque :
// N'oubliez pas de convertir le paramètre percent en pourcentage dans le corps de votre fonction : 
// si le paramètre percent est 2, vous devez le convertir en 0.02.

// Il n'y a pas de fractions de personnes. À la fin de chaque année, le nombre d'habitants est un entier : 
// 252.8 personnes sont arrondies vers le bas à 252 personnes.

function nb_an(p0, pourcentage, augmentation, p) {
    let ans = 0;
  
    // Convertir le pourcentage en décimal
    const tauxCroissance = pourcentage / 100;
  
    while (p0 < p) {
      // Calculer la nouvelle population à la fin de l'année
      p0 = Math.floor(p0 + p0 * tauxCroissance + augmentation);
      ans++;
    }
  
    return ans;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(nb_an(1500, 5, 100, 5000));           // Devrait afficher 15
  console.log(nb_an(1500000, 2.5, 10000, 2000000)); // Devrait afficher 10
  //Cette fonction, appelée nb_an, prend en entrée les paramètres p0, pourcentage, augmentation, et p, et renvoie le nombre d'années entières nécessaires pour que la population atteigne ou dépasse la valeur p.

  // Écrivez une fonction qui accepte un entier n et une chaîne s en tant que paramètres,
// et renvoie une chaîne s répétée exactement n fois.

// Exemples (entrée -> sortie)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repetitionChaine(n, s) {
    // Utiliser la méthode repeat pour répéter la chaîne s n fois
    const resultat = s.repeat(n);
  
    // Retourner la chaîne résultante
    return resultat;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(repetitionChaine(6, "I"));          // Devrait afficher "IIIIII"
  console.log(repetitionChaine(5, "Hello"));      // Devrait afficher "HelloHelloHelloHelloHello"
  //Cette fonction, appelée repetitionChaine, prend en entrée un entier n et une chaîne s, puis utilise la méthode repeat pour répéter la chaîne s exactement n fois. 

  // Implémentez une fonction qui accepte 3 valeurs entières a, b, c. 
// La fonction doit renvoyer true si un triangle peut être construit avec les côtés de longueur donnée et false dans tous les autres cas.

// (Dans ce cas, tous les triangles doivent avoir une surface supérieure à 0 pour être acceptés).

function peutConstruireTriangle(a, b, c) {
    // Vérifier si les côtés satisfont l'inégalité triangulaire
    // (La somme de deux côtés de tout triangle est toujours supérieure au troisième côté)
    return a + b > c && a + c > b && b + c > a;
  }
  
  // Exemple d'utilisation de la fonction
  const resoltat = peutConstruireTriangle(3, 4, 5);
  console.log(resoltat); // Devrait afficher true
  //Cette fonction, appelée peutConstruireTriangle, prend en entrée trois valeurs entières a, b, et c et retourne true si un triangle peut être construit avec ces côtés (en satisfaisant l'inégalité triangulaire), sinon elle renvoie false

  // Vous connaissez peut-être quelques carrés parfaits assez grands. Mais qu'en est-il du SUIVANT ?

// Complétez la méthode findNextSquare qui trouve le prochain carré parfait entier après celui passé en paramètre. 
// Rappelons qu'un carré parfait entier est un entier n tel que sqrt(n) est également un entier.

// Si le paramètre n'est pas lui-même un carré parfait, -1 doit être renvoyé. 
// Vous pouvez supposer que le paramètre est non négatif.

// Exemples : (Entrée --> Sortie)

// 121 --> 144
// 625 --> 676
// 114 --> -1 car 114 n'est pas un carré parfait

function trouverProchainCarreParfait(n) {
    // Vérifier si n est un carré parfait
    const racineCarree = Math.sqrt(n);
    if (Number.isInteger(racineCarree)) {
      // Calculer et retourner le carré parfait suivant
      const prochainCarreParfait = Math.pow(racineCarree + 1, 2);
      return prochainCarreParfait;
    } else {
      // N'est pas un carré parfait
      return -1;
    }
  }
  
  // Exemples d'utilisation de la fonction
  console.log(trouverProchainCarreParfait(121)); // Devrait afficher 144
  console.log(trouverProchainCarreParfait(625)); // Devrait afficher 676
  console.log(trouverProchainCarreParfait(114)); // Devrait afficher -1
  //Cette fonction, appelée trouverProchainCarreParfait, prend en entrée un nombre entier n et retourne le prochain carré parfait entier après n. Si n n'est pas lui-même un carré parfait, la fonction renvoie -1.

  // Habituellement, lorsque vous achetez quelque chose, on vous demande si votre numéro de carte de crédit, numéro de téléphone 
// ou la réponse à votre question la plus secrète est toujours correcte. Cependant, comme quelqu'un pourrait regarder par-dessus 
// votre épaule, vous ne voulez pas que cela soit affiché à l'écran. À la place, nous allons le masquer.

// Votre tâche est d'écrire une fonction maskify, qui change tous les caractères sauf les quatre derniers en '#'.

// Exemples (entrée --> sortie) :
// "4556364607935616" --> "############5616"
// "64607935616" --> "#######5616"
// "1" --> "1"
// "" --> ""

// "Quel était le nom de votre premier animal de compagnie ?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function masquer(chaine) {
    // Vérifier si la chaîne a une longueur supérieure à 4
    if (chaine.length > 4) {
      // Extraire les quatre derniers caractères et les concaténer avec des #
      const masque = '#'.repeat(chaine.length - 4) + chaine.slice(-4);
      return masque;
    } else {
      // La chaîne a une longueur de 4 caractères ou moins, la renvoyer telle quelle
      return chaine;
    }
  }
  
  // Exemples d'utilisation de la fonction
  console.log(masquer("4556364607935616")); // Devrait afficher "############5616"
  console.log(masquer("64607935616"));      // Devrait afficher "#######5616"
  console.log(masquer("1"));                // Devrait afficher "1"
  console.log(masquer(""));                 // Devrait afficher ""
  console.log(masquer("Skippy"));           // Devrait afficher "##ippy"
  console.log(masquer("Nananananananananananananananana Batman!"));
  // Devrait afficher "####################################man!"
  //Cette fonction, appelée masquer, prend en entrée une chaîne de caractères et remplace tous les caractères sauf les quatre derniers par des '#'.

  // Étant donné le triangle de nombres impairs consécutifs :

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculez la somme des nombres dans la ligne n de ce triangle (en commençant à l'index 1) par exemple : (Entrée --> Sortie)

// 1 -->  1
// 2 --> 3 + 5 = 8

function sommeLigneTriangleImpair(n) {
    // Calculer le début de la ligne n (premier nombre de la ligne)
    const debutLigne = (n - 1) * n + 1;
  
    // Calculer la somme des nombres dans la ligne n
    const somme = Array.from({ length: n }, (_, index) => debutLigne + 2 * index)
      .reduce((acc, nombre) => acc + nombre, 0);
  
    // Retourner la somme
    return somme;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(sommeLigneTriangleImpair(1)); // Devrait afficher 1
  console.log(sommeLigneTriangleImpair(2)); // Devrait afficher 8
  //Cette fonction, appelée sommeLigneTriangleImpair, prend en entrée un entier n correspondant à la ligne du triangle et retourne la somme des nombres dans cette ligne. 

  // Créez une fonction nommée divisors/Divisors qui prend un entier n > 1 
// et renvoie un tableau avec tous les diviseurs de l'entier (sauf 1 et l'entier lui-même), 
// du plus petit au plus grand. Si le nombre est premier, retournez la chaîne "(entier) est premier" 
// (null en C#, tableau vide en COBOL) (utilisez Either String a en Haskell et Result<Vec<u32>, String> en Rust).

// Exemple :
// divisors(12); // devrait renvoyer [2,3,4,6]
// divisors(25); // devrait renvoyer [5]
// divisors(13); // devrait renvoyer "13 est premier"

function diviseurs(n) {
    // Initialiser un tableau pour stocker les diviseurs
    const diviseurs = [];
  
    // Vérifier les diviseurs potentiels de 2 à la moitié de n
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        // i est un diviseur de n, l'ajouter au tableau
        diviseurs.push(i);
      }
    }
  
    // Vérifier si le tableau de diviseurs est vide (nombre premier)
    if (diviseurs.length === 0) {
      return `${n} est premier`;
    } else {
      // Retourner le tableau de diviseurs
      return diviseurs;
    }
  }
  
  // Exemples d'utilisation de la fonction
  console.log(diviseurs(12)); // Devrait renvoyer [2,3,4,6]
  console.log(diviseurs(25)); // Devrait renvoyer [5]
  console.log(diviseurs(13)); // Devrait renvoyer "13 est premier"
  //Cette fonction, appelée diviseurs, prend en entrée un entier n et renvoie soit un tableau des diviseurs de n (à l'exception de 1 et de n lui-même), soit la chaîne de caractères indiquant que n est premier.

  // Dans cette tâche simple, vous obtenez un nombre et vous devez le rendre négatif. 
// Mais peut-être que le nombre est déjà négatif ?

// Exemples
// Kata.MakeNegative(1);  // devrait renvoyer -1
// Kata.MakeNegative(-5); // devrait renvoyer -5
// Kata.MakeNegative(0);  // devrait renvoyer 0

// Notes
// Le nombre peut déjà être négatif, auquel cas aucun changement n'est nécessaire.
// Zéro (0) n'est pas vérifié pour un signe spécifique. Les zéros négatifs n'ont pas de sens mathématique.

function rendreNegatif(nombre) {
    // Vérifier si le nombre est positif (ou non nul)
    if (nombre > 0 || Object.is(nombre, -0)) {
      // Rendre le nombre négatif
      return -nombre;
    } else {
      // Aucun changement nécessaire, le nombre est déjà négatif
      return nombre;
    }
  }
  
  // Exemples d'utilisation de la fonction
  console.log(rendreNegatif(1));  // Devrait renvoyer -1
  console.log(rendreNegatif(-5)); // Devrait renvoyer -5
  console.log(rendreNegatif(0));  // Devrait renvoyer 0
  //Cette fonction, appelée rendreNegatif, prend en entrée un nombre et renvoie soit le nombre rendu négatif (s'il est positif), soit le nombre lui-même s'il est déjà négatif. 

  // C'est assez simple. Votre objectif est de créer une fonction qui supprime les premiers et derniers caractères d'une chaîne de caractères. Vous recevez un paramètre, la chaîne de caractères d'origine. Vous n'avez pas à vous soucier des chaînes de caractères de moins de deux caractères.

function supprimerPremierEtDernierCaracteres(chaine) {
    // Vérifier si la chaîne a une longueur d'au moins deux caractères
    if (chaine.length >= 2) {
      // Utiliser la méthode slice pour supprimer le premier et le dernier caractère
      return chaine.slice(1, -1);
    } else {
      // La chaîne a moins de deux caractères, la renvoyer telle quelle
      return chaine;
    }
  }
  
  // Exemple d'utilisation de la fonction
  const resuktat = supprimerPremierEtDernierCaracteres("abcdef");
  console.log(resuktat); // Devrait renvoyer "bcde"
  //Cette fonction, appelée supprimerPremierEtDernierCaracteres, prend en entrée une chaîne de caractères et renvoie la chaîne sans son premier et dernier caractère, à condition que la chaîne ait une longueur d'au moins deux caractères.

  // Écrivez une fonction qui supprime les espaces de la chaîne de caractères, puis retourne la chaîne résultante.

// Exemples :

// Entrée -> Sortie
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function supprimerEspaces(chaine) {
    // Utiliser la méthode replace avec une expression régulière pour supprimer les espaces
    return chaine.replace(/\s/g, '');
  }
  
  // Exemples d'utilisation de la fonction
  console.log(supprimerEspaces("8 j 8   mBliB8g  imjB8B8  jl  B")); 
  // Devrait renvoyer "8j8mBliB8gimjB8B8jlB"
  console.log(supprimerEspaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")); 
  // Devrait renvoyer "88Bifk8hB8BB8BBBB888chl8BhBfd"
  console.log(supprimerEspaces("8aaaaa dddd r     "));
  // Devrait renvoyer "8aaaaaddddr"
  //Cette fonction, appelée supprimerEspaces, prend en entrée une chaîne de caractères et utilise la méthode replace avec une expression régulière pour supprimer tous les espaces de la chaîne. 

  // Complétez la méthode qui prend une valeur booléenne et renvoie une chaîne "Oui" pour true, 
// ou une chaîne "Non" pour false.

function ouiOuNon(valeurBooleenne) {
    // Utiliser un opérateur ternaire pour retourner "Oui" si la valeur est true, sinon "Non"
    return valeurBooleenne ? "Oui" : "Non";
  }
  
  // Exemple d'utilisation de la fonction
  const revultat = ouiOuNon(true);
  console.log(revultat); // Devrait renvoyer "Oui"
  //Cette fonction, appelée ouiOuNon, prend en entrée une valeur booléenne et utilise un opérateur ternaire pour renvoyer la chaîne "Oui" si la valeur est true, sinon elle renvoie la chaîne "Non".

  // Nous avons besoin d'une fonction qui peut transformer un nombre (entier) en une chaîne de caractères.

// Quelles méthodes connaissez-vous pour y parvenir ?

// Exemples (entrée --> sortie) :
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function nombreEnChaine(nombre) {
    // Utiliser la fonction String pour convertir le nombre en une chaîne de caractères
    return String(nombre);
  }
  
  // Exemples d'utilisation de la fonction
  const rusultat1 = nombreEnChaine(123);
  console.log(rusultat1); // Devrait renvoyer "123"
  
  const rusultat2 = nombreEnChaine(999);
  console.log(rusultat2); // Devrait renvoyer "999"
  
  const rusultat3 = nombreEnChaine(-100);
  console.log(rusultat3); // Devrait renvoyer "-100"
  //Cette fonction, appelée nombreEnChaine, prend en entrée un nombre (entier) et utilise la fonction String pour le convertir en une chaîne de caractères.

  // Ma tâche est de créer une fonction qui effectue quatre opérations mathématiques de base.

// La fonction devrait prendre trois arguments - opération (chaîne/caractère), valeur1 (nombre), valeur2 (nombre).
// La fonction devrait renvoyer le résultat des nombres après application de l'opération choisie.

// Exemples (Opérateur, valeur1, valeur2) --> sortie
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function operationsMathematiques(operation, valeur1, valeur2) {
    // Utiliser un switch pour effectuer l'opération appropriée en fonction du paramètre 'opération'
    switch (operation) {
      case '+':
        return valeur1 + valeur2;
      case '-':
        return valeur1 - valeur2;
      case '*':
        return valeur1 * valeur2;
      case '/':
        // Vérifier si la division par zéro est évitée
        return valeur2 !== 0 ? valeur1 / valeur2 : "Division par zéro";
      default:
        return "Opération non valide";
    }
  }
  
  // Exemples d'utilisation de la fonction
  const resultag1 = operationsMathematiques('+', 4, 7);
  console.log(resultag1); // Devrait renvoyer 11
  
  const resultag2 = operationsMathematiques('-', 15, 18);
  console.log(resultag2); // Devrait renvoyer -3
  
  const resultag3 = operationsMathematiques('*', 5, 5);
  console.log(resultag3); // Devrait renvoyer 25
  
  const resultag4 = operationsMathematiques('/', 49, 7);
  console.log(resultag4); // Devrait renvoyer 7
  //Cette fonction, appelée operationsMathematiques, prend en entrée une opération (une chaîne ou un caractère) et deux valeurs numériques, puis utilise un switch pour effectuer l'opération correspondante

// Ma tâche est d'écrire une fonction qui renvoie la somme de la série suivante jusqu'au terme n (paramètre).

// Série : 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Règles :
// je dois arrondir la réponse à 2 décimales et la renvoyer sous forme de chaîne de caractères.

// Si la valeur donnée est 0, je devrais renvoyer "0.00"

// je ne reçois que des nombres naturels en tant qu'arguments.

// Exemples : (Entrée --> Sortie)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function sommeSerie(n) {
    // Initialiser la somme
    let somme = 0;
  
    // Calculer la somme de la série
    for (let i = 0; i < n; i++) {
      somme += 1 / (1 + i * 3);
    }
  
    // Arrondir la somme à 2 décimales et la renvoyer en tant que chaîne de caractères
    return somme.toFixed(2);
  }
  
  // Exemples d'utilisation de la fonction
  const resultet1 = sommeSerie(1);
  console.log(resultet1); // Devrait renvoyer "1.00"
  
  const resultet2 = sommeSerie(2);
  console.log(resultet2); // Devrait renvoyer "1.25"
  
  const resultet3 = sommeSerie(5);
  console.log(resultet3); // Devrait renvoyer "1.57"
  //Cette fonction, appelée sommeSerie, prend en entrée un nombre naturel n et calcule la somme de la série spécifiée. Elle arrondit ensuite le résultat à deux décimales et le renvoie en tant que chaîne de caractères.

  // Nathan adore faire du vélo.

// Parce que Nathan sait qu'il est important de rester hydraté, il boit 0.5 litre d'eau par heure de vélo.

// On vous donne le temps en heures et vous devez renvoyer le nombre de litres que Nathan boira, arrondi à la plus petite valeur.

// Par exemple :

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litresDeau(temps) {
    // Calculer le nombre de litres en arrondissant vers le bas
    const litres = Math.floor(temps * 0.5);
    return litres;
  }
  
  // Exemples d'utilisation de la fonction
  const resulta1 = litresDeau(3);
  console.log(resulta1); // Devrait renvoyer 1
  
  const resulta2 = litresDeau(6.7);
  console.log(resulta2); // Devrait renvoyer 3
  
  const resulta3 = litresDeau(11.8);
  console.log(resulta3); // Devrait renvoyer 5
  //Cette fonction, appelée litresDeau, prend en entrée le temps en heures et calcule le nombre de litres que Nathan boira en utilisant la formule donnée. Elle arrondit ensuite le résultat vers le bas à l'entier inférieur.

// Le premier siècle va de l'an 1 jusqu'à l'an 100, le deuxième siècle - de l'an 101 jusqu'à l'an 200, etc.

// Étant donné une année, retournez le siècle auquel elle appartient.

// Exemples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note : cette kata utilise une construction stricte comme indiqué dans la description et les exemples, vous pouvez en savoir plus à ce sujet ici

function siecle(annee) {
    // Calculer le siècle en divisant l'année par 100 et arrondir vers le haut
    const siecle = Math.ceil(annee / 100);
    return siecle;
  }
  
  // Exemples d'utilisation de la fonction
  const result1 = siecle(1705);
  console.log(result1); // Devrait renvoyer 18
  
  const result2 = siecle(1900);
  console.log(result2); // Devrait renvoyer 19
  
  const result3 = siecle(1601);
  console.log(result3); // Devrait renvoyer 17
  
  const result4 = siecle(2000);
  console.log(result4); // Devrait renvoyer 20
  //Cette fonction, appelée siecle, prend en entrée une année et calcule le siècle auquel elle appartient en divisant l'année par 100 et en arrondissant vers le haut

  // Débutant - Perdu sans carte
// Étant donné un tableau d'entiers, retournez un nouveau tableau avec chaque valeur doublée.

// Par exemple :
// [1, 2, 3] --> [2, 4, 6]

function tableauDoubler(tableau) {
    // Utiliser la méthode map pour créer un nouveau tableau avec chaque valeur doublée
    const nouveauTableau = tableau.map(valeur => valeur * 2);
    return nouveauTableau;
  }
  
  // Exemple d'utilisation de la fonction
  const resolt = tableauDoubler([1, 2, 3]);
  console.log(resolt); // Devrait renvoyer [2, 4, 6]
  //Cette fonction, appelée tableauDoubler, prend en entrée un tableau d'entiers et utilise la méthode map pour créer un nouveau tableau où chaque valeur est doublée

  // Chaînes inversées
// Complétez la solution de manière à ce qu'elle inverse la chaîne qui lui est passée.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function inverserChaine(chaine) {
    // Utiliser la méthode split pour diviser la chaîne en tableau de caractères,
    // la méthode reverse pour inverser l'ordre des caractères, et la méthode join pour reconstituer la chaîne.
    const chaineInverse = chaine.split('').reverse().join('');
    return chaineInverse;
  }
  
  // Exemples d'utilisation de la fonction
  const risultat1 = inverserChaine('world');
  console.log(risultat1); // Devrait renvoyer 'dlrow'
  
  const risultat2 = inverserChaine('word');
  console.log(risultat2); // Devrait renvoyer 'drow'
  //Cette fonction, appelée inverserChaine, prend en entrée une chaîne de caractères et utilise les méthodes split, reverse et join pour inverser l'ordre des caractères dans la chaîne.

  // La chaîne se termine par ?
// Complétez la solution de manière à ce qu'elle renvoie true si le premier argument (chaîne) passé se termine par le 2e argument (également une chaîne).

// Exemples :
// solution('abc', 'bc') // renvoie true
// solution('abc', 'd') // renvoie false

function seTerminePar(chaîne, fin) {
    // Utiliser la méthode endsWith pour vérifier si la chaîne se termine par la sous-chaîne spécifiée.
    return chaîne.endsWith(fin);
  }
  
  // Exemples d'utilisation de la fonction
  const resultato1 = seTerminePar('abc', 'bc');
  console.log(resultato1); // Devrait renvoyer true
  
  const resultato2 = seTerminePar('abc', 'd');
  console.log(resultato2); // Devrait renvoyer false
  //Cette fonction, appelée seTerminePar, prend en entrée deux chaînes de caractères et utilise la méthode endsWith pour vérifier si la première chaîne se termine par la deuxième chaîne.

  function calculerMontantAvecBonus(salaire, bonus, langage) {
    // Vérifier si le bonus est vrai
    if (bonus) {
        // Si le bonus est vrai, multiplier le salaire par 10
        const montantTotal = salaire * 10;
        // Ajouter le symbole de devise approprié en fonction du langage
        if (["JS", "Go", "Java", "Scala", "Julia"].includes(langage)) {
            return `£${montantTotal}`;
        } else if (["C#", "C++", "Ruby", "Clojure", "Elixir", "PHP", "Python", "Haskell", "Lua"].includes(langage)) {
            return `$${montantTotal}`;
        } else if (langage === "Rust") {
            return `¥${montantTotal}`;
        } else {
            return `Devise non reconnue : ${montantTotal}`;
        }
    } else {
        // Si le bonus est faux, renvoyer le salaire tel quel avec le symbole de devise approprié
        if (["JS", "Go", "Java", "Scala", "Julia"].includes(langage)) {
            return `£${salaire}`;
        } else if (["C#", "C++", "Ruby", "Clojure", "Elixir", "PHP", "Python", "Haskell", "Lua"].includes(langage)) {
            return `$${salaire}`;
        } else if (langage === "Rust") {
            return `¥${salaire}`;
        } else {
            return `Devise non reconnue : ${salaire}`;
        }
    }
}

// Exemple d'utilisation
const salaireInitial = 50000;
const aDroitABonus = true;
const langageDeProgrammation = "JavaScript";

const resultatt = calculerMontantAvecBonus(salaireInitial, aDroitABonus, langageDeProgrammation);
console.log(resultatt); // Devise non reconnue : 500000
//Cette fonction prend en compte le langage de programmation spécifié et ajoute le symbole de devise approprié en fonction du bonus et du langage spécifiés.

function calculerSalaireAvecBonus(salaire, bonus) {
    // Vérifier si le bonus est vrai
    if (bonus) {
        // Si le bonus est vrai, multiplier le salaire par 10
        const salaireAvecBonus = salaire * 10;
        return `£${salaireAvecBonus}`; // Utilisation du symbole de la livre sterling (£)
    } else {
        // Si le bonus est faux, renvoyer le salaire tel quel
        return `£${salaire}`; // Utilisation du symbole de la livre sterling (£)
    }
}

// Exemple d'utilisation
const salaireInitial1 = 50000;
const aDroitABonus1 = true;

const resultatt1 = calculerSalaireAvecBonus(salaireInitial1, aDroitABonus1);
console.log(resultatt1); // Output: £500000

const salaireInitial2 = 60000;
const aDroitABonus2 = false;
const resultatt2 = calculerSalaireAvecBonus(salaireInitial2, aDroitABonus2);
console.log(resultatt2); // Devrait renvoyer "£60000"
//Cette fonction, calculerSalaireAvecBonus, prend deux arguments : salaire (un entier) et bonus (un booléen). Si bonus est true, la fonction multiplie le salaire par 10 et renvoie le résultat sous forme de chaîne de caractères avec le symbole de la livre sterling (£). Si bonus est false, la fonction renvoie simplement le salaire initial.

// Abréger un nom de deux mots
// j'ecris une fonction pour convertir un nom en initiales. Cette kata prend strictement deux mots avec un espace entre eux.

// La sortie doit être deux lettres majuscules avec un point les séparant.

// Cela devrait ressembler à ceci :

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevierNomDeuxMots(nom) {
    // Diviser le nom en mots
    const mots = nom.split(' ');
  
    // Extraire la première lettre de chaque mot et les concaténer avec un point entre eux
    const initiales = mots.map(mot => mot[0].toUpperCase()).join('.');
  
    return initiales;
  }
  
  // Exemples d'utilisation de la fonction
  const resulte = abbrevierNomDeuxMots('Sam Harris');
  console.log(resulte); // Devrait renvoyer "S.H"
  
  const resulte2 = abbrevierNomDeuxMots('patrick feeney');
  console.log(resulte2); // Devrait renvoyer "P.F"
  //Cette fonction, appelée abbrevierNomDeuxMots, prend en entrée un nom composé de deux mots séparés par un espace. Elle divise ensuite le nom en mots, extrait la première lettre de chaque mot, les convertit en majuscules, et les concatène avec un point entre eux pour former les initiales.

  // Conversion d'ADN en ARN
// L'acide désoxyribonucléique, ADN, est la molécule principale de stockage d'informations dans les systèmes biologiques. Il est composé de quatre bases d'acides nucléiques : Guanine ('G'), Cytosine ('C'), Adénine ('A') et Thymine ('T').

// L'acide ribonucléique, ARN, est la molécule messagère principale dans les cellules. L'ARN diffère légèrement de l'ADN par sa structure chimique et ne contient pas de Thymine. Dans l'ARN, la Thymine est remplacée par un autre acide nucléique, l'Uracile ('U').

// Créez une fonction qui traduit une chaîne d'ADN donnée en ARN.

// Par exemple :

// "GCAT"  =>  "GCAU"

// La chaîne d'entrée peut avoir une longueur arbitraire - en particulier, elle peut être vide. Toutes les entrées sont garanties valides, c'est-à-dire que chaque chaîne d'entrée ne contiendra que des 'G', 'C', 'A' et/ou 'T'.

function convertirADNenARN(adn) {
    // Remplacer toutes les occurrences de 'T' par 'U'
    const arn = adn.replace(/T/g, 'U');
    
    return arn;
  }
  
  // Exemple d'utilisation de la fonction
  const resul = convertirADNenARN('GCAT');
  console.log(resul); // Devrait renvoyer "GCAU"
  //Cette fonction, appelée convertirADNenARN, prend en entrée une chaîne représentant de l'ADN et la traduit en ARN en remplaçant toutes les occurrences de 'T' par 'U'.

  function compterMoutons(tableauDeMoutons) {
    // Vérifier si le tableau est défini et n'est pas null
    if (tableauDeMoutons && Array.isArray(tableauDeMoutons)) {
        // Utiliser la méthode filter pour obtenir un tableau contenant uniquement les moutons présents (true)
        const moutonsPresent = tableauDeMoutons.filter(mouton => mouton === true);
        // Retourner la longueur du tableau résultant, qui représente le nombre de moutons présents
        return moutonsPresent.length;
    } else {
        // Retourner 0 si le tableau est indéfini, null ou n'est pas un tableau
        return 0;
    }
}

// Exemple d'utilisation
const tableauDeMoutons = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, true, false, true, true, true, true, false, false, true, true];

const nombreDeMoutons = compterMoutons(tableauDeMoutons);
console.log(nombreDeMoutons); // Output: 17
//Cette fonction, compterMoutons, prend un tableau de moutons en entrée et utilise la méthode filter pour créer un nouveau tableau contenant uniquement les moutons présents (true). Ensuite, elle renvoie la longueur de ce tableau résultant, qui représente le nombre de moutons présents.

// Des uns et des zéros
// Étant donné un tableau de uns et de zéros, convertissez la valeur binaire équivalente en un entier.

// Par exemple, [0, 0, 0, 1] est traité comme 0001, qui est la représentation binaire de 1.

// Test : [0, 0, 0, 1] ==> 1
// Test : [0, 0, 1, 0] ==> 2
// Test : [0, 1, 0, 1] ==> 5
// Test : [1, 0, 0, 1] ==> 9
// Test : [0, 0, 1, 0] ==> 2
// Test : [0, 1, 1, 0] ==> 6
// Test : [1, 1, 1, 1] ==> 15
// Test : [1, 0, 1, 1] ==> 11
// Cependant, les tableaux peuvent avoir des longueurs variables, pas seulement limitées à 4.

function binaireVersEntier(tableau) {
    // Convertir le tableau binaire en une chaîne binaire
    const chaineBinaire = tableau.join('');
  
    // Convertir la chaîne binaire en un entier en base 10
    const entier = parseInt(chaineBinaire, 2);
  
    return entier;
  }
  
  // Exemples d'utilisation de la fonction
  const lesultat1 = binaireVersEntier([0, 0, 0, 1]);
  console.log(lesultat1); // Devrait renvoyer 1
  
  const lesultat2 = binaireVersEntier([0, 0, 1, 0]);
  console.log(lesultat2); // Devrait renvoyer 2
  
  const lesultat3 = binaireVersEntier([0, 1, 0, 1]);
  console.log(lesultat3); // Devrait renvoyer 5
  
  const lesultat4 = binaireVersEntier([1, 0, 0, 1]);
  console.log(lesultat4); // Devrait renvoyer 9
  //Cette fonction, appelée binaireVersEntier, prend en entrée un tableau de zéros et de uns, puis convertit la valeur binaire équivalente en un entier en base 10. 

  // Une aiguille dans une botte de foin

// J'ecris une fonction findNeedle() qui prend un tableau rempli de bric-à-brac mais contenant une "aiguille".

// Après que ma fonction ait trouvé l'aiguille, elle devrait renvoyer un message (sous forme de chaîne) qui dit :

// "found the needle at position " plus l'indice où l'aiguille a été trouvée, donc :

// Exemple (Entrée --> Sortie)

// ["foin", "bric-à-brac", "foin", "foin", "encoreDuBric", "aiguille", "duBricAléatoire"] --> "found the needle at position 5" 
// Note : En COBOL, cela devrait renvoyer "found the needle at position 6"

function trouverAiguille(botteDeFoin) {
    // Trouver l'indice de l'aiguille dans le tableau
    const indiceAiguille = botteDeFoin.indexOf("aiguille");
  
    // Retourner le message avec l'indice trouvé
    return "trouvé l'aiguille à la position " + indiceAiguille;
  }
  
  // Exemple d'utilisation de la fonction
  const botteDeFoin1 = ["foin", "bric-à-brac", "foin", "foin", "encoreDuBric", "aiguille", "duBricAléatoire"];
  const losultat1 = trouverAiguille(botteDeFoin1);
  console.log(losultat1); // Devrait renvoyer "trouvé l'aiguille à la position 5"
  //Cette fonction, appelée trouverAiguille, prend en entrée un tableau rempli de bric-à-brac mais contenant une "aiguille". Elle utilise la méthode indexOf pour trouver l'indice de l'aiguille dans le tableau, puis renvoie un message indiquant la position de l'aiguille

  // Retirer le minimum
// Le musée des choses incroyablement ennuyeuses
// Le musée des choses incroyablement ennuyeuses veut se débarrasser de certaines expositions. Miriam, l'architecte d'intérieur, a une idée pour retirer les expositions les plus ennuyeuses. Elle leur attribue une note, puis retire celle qui a la note la plus basse.

// Cependant, juste après avoir attribué des notes à toutes les expositions, elle part pour une foire importante, alors elle vous demande d'écrire un programme qui lui donne les notes des éléments après avoir retiré celui qui a la note la plus basse. D'accord.

// Étant donné un tableau d'entiers, retirez la valeur la plus petite. Ne modifiez pas le tableau/liste d'origine. S'il y a plusieurs éléments avec la même valeur, retirez celui qui a un indice plus bas. Si vous obtenez un tableau/liste vide, retournez un tableau/liste vide.

// Ne changez pas l'ordre des éléments qui restent.

// Exemples
// * Entrée: [1,2,3,4,5], sortie = [2,3,4,5]
// * Entrée: [5,3,2,1,4], sortie = [5,3,2,4]
// * Entrée: [2,2,1,2,1], sortie = [2,2,2,1]

function retirerMinimum(tableau) {
    // Vérifier si le tableau est vide
    if (tableau.length === 0) {
      return [];
    }
  
    // Trouver l'indice de la valeur minimale dans le tableau
    const indiceMinimum = tableau.indexOf(Math.min(...tableau));
  
    // Retourner un nouveau tableau sans la valeur minimale
    return tableau.slice(0, indiceMinimum).concat(tableau.slice(indiceMinimum + 1));
  }
  
  // Exemples d'utilisation de la fonction
  const ezemple1 = [1, 2, 3, 4, 5];
  const resutat1 = retirerMinimum(ezemple1);
  console.log(resutat1); // Devrait renvoyer [2, 3, 4, 5]
  
  const ezemple2 = [5, 3, 2, 1, 4];
  const resutat2 = retirerMinimum(ezemple2);
  console.log(resutat2); // Devrait renvoyer [5, 3, 2, 4]
  
  const ezemple3 = [2, 2, 1, 2, 1];
  const resutat3 = retirerMinimum(ezemple3);
  console.log(resutat3); // Devrait renvoyer [2, 2, 2, 1]
  //Cette fonction, appelée retirerMinimum, prend en entrée un tableau d'entiers et retourne un nouveau tableau sans la valeur minimale. Elle utilise Math.min pour trouver la valeur minimale, puis utilise indexOf pour trouver l'indice de cette valeur dans le tableau. Enfin, elle utilise slice pour créer un nouveau tableau sans la valeur minimale.

  // Convertir un nombre en un tableau inversé de chiffres
// Étant donné un nombre aléatoire non négatif, vous devez retourner les chiffres de ce nombre dans un tableau dans l'ordre inverse.

// Exemple (Entrée => Sortie):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function nombreVersTableauInverse(nombre) {
    // Convertir le nombre en une chaîne de caractères, puis en un tableau de chiffres
    const tableauChiffres = Array.from(String(nombre), Number);
  
    // Inverser l'ordre du tableau de chiffres
    const tableauInverse = tableauChiffres.reverse();
  
    return tableauInverse;
  }
  
  // Exemples d'utilisation de la fonction
  const exempl1 = 35231;
  const revultat1 = nombreVersTableauInverse(exempl1);
  console.log(revultat1); // Devrait renvoyer [1, 3, 2, 5, 3]
  
  const exempl2 = 0;
  const revultat2 = nombreVersTableauInverse(exempl2);
  console.log(revultat2); // Devrait renvoyer [0]
  //Cette fonction, appelée nombreVersTableauInverse, prend en entrée un nombre non négatif, le convertit en une chaîne de caractères, puis en un tableau de chiffres dans l'ordre inverse.

  // Faire une fonction qui réalise des opérations arithmétiques !
// Étant donné deux nombres et un opérateur arithmétique (son nom, en tant que chaîne de caractères), retournez le résultat de l'opération utilisant ces deux nombres.

// a et b seront tous deux des entiers positifs, et a sera toujours le premier nombre dans l'opération, et b toujours le deuxième.

// Les quatre opérateurs sont "add" (addition), "subtract" (soustraction), "divide" (division), "multiply" (multiplication).

// Quelques exemples : (Entrée1, Entrée2, Entrée3 --> Sortie)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Essayez de le faire sans utiliser d'instructions conditionnelles !

function operationArithmetique(a, b, operateur) {
    switch (operateur) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        return NaN; // En cas d'opérateur invalide
    }
  }
  
  // Exemples d'utilisation de la fonction
  const xemple1 = operationArithmetique(5, 2, "add");
  console.log(xemple1); // Devrait renvoyer 7
  
  const xemple2 = operationArithmetique(5, 2, "subtract");
  console.log(xemple2); // Devrait renvoyer 3
  
  const xemple3 = operationArithmetique(5, 2, "multiply");
  console.log(xemple3); // Devrait renvoyer 10
  
  const xemple4 = operationArithmetique(5, 2, "divide");
  console.log(xemple4); // Devrait renvoyer 2.5
  //Cette fonction, appelée operationArithmetique, prend en entrée deux nombres et un opérateur arithmétique, puis renvoie le résultat de l'opération correspondante. Elle utilise une instruction switch pour déterminer l'opération à effectuer en fonction de l'opérateur fourni

  // Balle régulière, balle super
// Créez une classe Ball. Les objets Ball doivent accepter un argument pour le "type de balle" lors de l'instanciation.

// Si aucun argument n'est fourni, les objets Ball doivent être instanciés avec un "type de balle" par défaut à "régulière".

// Exemple d'utilisation :
// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "régulière"
// ball2.ballType     //=> "super"

class Ball {
    constructor(type = "regular") {
      this.ballType = type;
    }
  }
  
  // Exemples d'utilisation de la classe
  const balle1 = new Ball();
  console.log(balle1.ballType); // Devrait renvoyer "régulière"
  
  const balle2 = new Ball("super");
  console.log(balle2.ballType); // Devrait renvoyer "super"
  //Cette classe, appelée Ball, a un constructeur qui prend en compte un argument pour le "type de balle" lors de l'instanciation. Si aucun argument n'est fourni, le type de balle est défini par défaut à "régulière"

 // Définir le constructeur Chien
function Chien(nom, race, sexe, âge){
    this.nom = nom;
    this.race = race;
    this.sexe = sexe;
    this.âge = âge;
}

// Ajouter la méthode .bark() à chaque objet chien
Chien.prototype.bark = function() {
    return 'Woof !';
};

// Exemple d'utilisation
const chien1 = new Chien('Rex', 'Labrador', 'Mâle', 3);
const chien2 = new Chien('Bella', 'Golden Retriever', 'Femelle', 2);

console.log(chien1.bark()); // Output: 'Woof !'
console.log(chien2.bark()); // Output: 'Woof !'
//Dans cette définition, le constructeur Chien prend quatre paramètres (nom, race, sexe, âge) et crée un objet Chien avec ces propriétés. Ensuite, la méthode .bark() est ajoutée au prototype de l'objet Chien pour que tous les objets créés à partir du constructeur Chien puissent accéder à cette méthode. Les exemples d'utilisation montrent comment créer deux objets Chien et appeler la méthode .bark() sur chacun d'eux.

function addUsersAnswerProperty(questions) {
    for (var i = 0; i < questions.length; i++) {
      questions[i].usersAnswer = null;
    }
  }
  
  // Exemple d'utilisation :
  var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
  }, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
  }];
  
  addUsersAnswerProperty(questions);
  
  console.log(questions);
  //Cette fonction parcourt le tableau questions et ajoute la propriété usersAnswer à chaque objet avec une valeur initiale de null. et je peux utiliser cette fonction sur n'importe quelle longueur de tableau questions

  function handleImgurError(response) {
    if (response && response.data && response.data.error) {
      console.error("Imgur Error:", response.data.error);
      // Tu peux ajouter ici d'autres actions à effectuer en cas d'erreur, par exemple afficher un message d'erreur à l'utilisateur.
    } else {
      console.error("Unexpected Imgur response:", response);
      // Gérer d'autres cas inattendus si nécessaire.
    }
  }
  
  // Exemple d'utilisation de la fonction avec la réponse que tu as fournie
  const imgurApiResponse = {
    data: {
      error: "Imgur is temporarily over capacity. Please try again later."
    },
    success: false,
    status: 403
  };
  
  handleImgurError(imgurApiResponse);
  //Cette fonction handleImgurError vérifie d'abord si la réponse contient une propriété data avec une propriété error. Si c'est le cas, elle affiche simplement l'erreur dans la console. Tu peux ajouter d'autres actions à effectuer en cas d'erreur, en fonction de tes besoins spécifiques

  function getNomComplet(prenom, nom) {
    // Vérifier si le prénom et le nom sont définis
    if (prenom === undefined || nom === undefined) {
      return "Prénom ou nom non défini";
    }
  
    // Vérifier si le prénom ou le nom est vide
    if (prenom.trim() === "" || nom.trim() === "") {
      return "Prénom ou nom vide";
    }
  
    // Construire et renvoyer le nom complet
    return prenom + " " + nom;
  }
  
  // Exemple d'utilisation
  const prenom = "John";
  const nom = "Doe";
  const nomComplet = getNomComplet(prenom, nom);
  console.log(nomComplet);
  //Cette fonction prend en compte les cas où le prénom ou le nom pourrait être non défini ou vide. Elle renverra un message approprié dans ces cas

  function ajouterProprieteAuxQuestions(questions) {
    // Vérifier si le paramètre est un tableau
    if (!Array.isArray(questions)) {
      console.error("Le paramètre doit être un tableau.");
      return;
    }
  
    // Parcourir chaque objet du tableau et ajouter la propriété usersAnswer
    questions.forEach((question) => {
      question.usersAnswer = null;
    });
  
    return questions;
  }
  
  // Exemple d'utilisation
  const tableauDeQuestions = [
    { id: 1, texte: "Quelle est votre couleur préférée?" },
    { id: 2, texte: "Quel est votre animal préféré?" },
    // ... autres questions
  ];
  
  const tableauAvecUsersAnswer = ajouterProprieteAuxQuestions(tableauDeQuestions);
  console.log(tableauAvecUsersAnswer);
  //Cette fonction, ajouterProprieteAuxQuestions, prend un tableau de questions en paramètre, vérifie s'il s'agit d'un tableau, puis parcourt chaque objet du tableau en ajoutant la propriété usersAnswer avec une valeur initialisée à null

  function sommation(num) {
    // Vérifier si num est un entier positif
    if (num <= 0 || !Number.isInteger(num)) {
      console.error("Veuillez fournir un entier positif supérieur à 0.");
      return;
    }
  
    // Calculer la sommation de chaque nombre de 1 à num
    let resultat = 0;
    for (let i = 1; i <= num; i++) {
      resultat += i;
    }
  
    return resultat;
  }
  
  // Exemples d'utilisation
  console.log(sommation(2)); // Devrait afficher 3 (1 + 2)
  console.log(sommation(8)); // Devrait afficher 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
  //Cette fonction, sommation, prend un nombre entier positif en paramètre (num) et renvoie la somme de tous les nombres de 1 à num. Elle inclut une vérification pour s'assurer que le paramètre fourni est un entier positif supérieur à 0.

  function salutationPourJohnny(nom) {
    // Vérifier si le nom est égal à "Johnny"
    if (nom === "Johnny") {
      return "Salut, mon amour Johnny!";
    } else {
      return "Salut, " + nom + "!";
    }
  }
  
  // Exemple d'utilisation
  const nomUtilisateur = "John";
  console.log(salutationPourJohnny(nomUtilisateur));
  //Cette fonction, salutationPourJohnny, prend un nom en paramètre et retourne une salutation spéciale si le nom est "Johnny", sinon elle retourne une salutation générique. 

  function saluer() {
    return "Salut le monde !";
  }
  
  // Exemple d'utilisation
  console.log(saluer());
  //Cette fonction, saluer, retourne la célèbre phrase "Salut le monde !

  function compterLesSinges(n) {
    // Vérifier si n est un nombre entier positif
    if (n <= 0 || !Number.isInteger(n)) {
      console.error("Veuillez fournir un nombre entier positif.");
      return;
    }
  
    // Créer un tableau avec tous les nombres de 1 à n
    const tableauDeNombres = Array.from({ length: n }, (_, index) => index + 1);
  
    return tableauDeNombres;
  }
  
  // Exemples d'utilisation
  console.log(compterLesSinges(10)); // Devrait afficher [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(compterLesSinges(1));  // Devrait afficher [1]
  //Cette fonction, compterLesSinges, prend un nombre entier positif en paramètre (n) et retourne un tableau avec tous les nombres de 1 à n. Elle inclut une vérification pour s'assurer que le paramètre fourni est un nombre entier positif. 

  function joueAuBanjo(nom) {
    // Vérifier si le nom commence par la lettre "R" ou "r"
    if (nom.charAt(0).toLowerCase() === 'r') {
      return nom + " joue au banjo";
    } else {
      return nom + " ne joue pas au banjo";
    }
  }
  
  // Exemples d'utilisation
  console.log(joueAuBanjo("Robert"));   // Devrait afficher "Robert joue au banjo"
  console.log(joueAuBanjo("Alice"));    // Devrait afficher "Alice ne joue pas au banjo"
  console.log(joueAuBanjo("rachel"));   // Devrait afficher "rachel joue au banjo"
  //Cette fonction, joueAuBanjo, prend un nom en paramètre et retourne une chaîne de caractères indiquant si la personne joue au banjo ou non en fonction de la première lettre de son nom.

  function trouverCapitales(mot) {
    const indicesCapitales = [];
  
    // Parcourir chaque caractère du mot
    for (let i = 0; i < mot.length; i++) {
      // Vérifier si le caractère est une majuscule
      if (mot[i] === mot[i].toUpperCase()) {
        indicesCapitales.push(i);
      }
    }
  
    return indicesCapitales;
  }
  
  // Exemple d'utilisation
  const resultab = trouverCapitales("CodEWaRs");
  console.log(resultab); // Devrait afficher [0, 3, 4, 6]
  //Cette fonction, trouverCapitales, prend un mot en paramètre et retourne un tableau contenant les indices de toutes les lettres majuscules dans le mot. L'exemple d'utilisation montre comment utiliser la fonction avec le mot "CodEWaRs".

  function besoinPluriel(nombre) {
    // Vérifier si le nombre n'est pas égal à 1
    return nombre !== 1;
  }
  
  // Exemple d'utilisation
  console.log(besoinPluriel(5));   // Devrait afficher true
  console.log(besoinPluriel(1));   // Devrait afficher false
  console.log(besoinPluriel(0));   // Devrait afficher true
  //Cette fonction, besoinPluriel, prend un nombre en paramètre et retourne true si le nombre nécessite un pluriel selon les règles de grammaire anglaise, et false sinon

  function boireSelonAge(age) {
    // Vérifier l'âge et retourner la boisson appropriée
    if (age < 14) {
      return "boire du toddy";
    } else if (age < 18) {
      return "boire du coke";
    } else if (age < 21) {
      return "boire de la bière";
    } else {
      return "boire du whisky";
    }
  }
  
  // Exemples d'utilisation
  console.log(boireSelonAge(13)); // Devrait afficher "boire du toddy"
  console.log(boireSelonAge(17)); // Devrait afficher "boire du coke"
  console.log(boireSelonAge(18)); // Devrait afficher "boire de la bière"
  console.log(boireSelonAge(30)); // Devrait afficher "boire du whisky"
  //Cette fonction, boireSelonAge, prend un âge en paramètre et retourne la boisson appropriée en fonction des règles spécifiées.

  function leo(oscar) {
    if (oscar === 88) {
      return "Leo a enfin remporté l'Oscar ! Leo est heureux.";
    } else if (oscar === 86) {
      return "Même pas pour Le Loup de Wall Street ?!";
    } else if (oscar > 88) {
      return "Leo en a déjà un !";
    } else {
      return "Quand est-ce que tu vas donner un Oscar à Leo ?";
    }
  }
  
  // Exemples d'utilisation
  console.log(leo(88));   // Devrait afficher "Leo a enfin remporté l'Oscar ! Leo est heureux."
  console.log(leo(86));   // Devrait afficher "Même pas pour Le Loup de Wall Street ?!"
  console.log(leo(90));   // Devrait afficher "Leo en a déjà un !"
  console.log(leo(80));   // Devrait afficher "Quand est-ce que tu vas donner un Oscar à Leo ?"
  //Cette fonction, leo, prend en paramètre un nombre représentant le nombre d'Oscars remportés par Leonardo DiCaprio et retourne une chaîne de caractères en fonction de différentes conditions spécifiées dans l'énoncé du problème.

  function evalObject(key) {
    switch (key) {
      case "property1":
        return "Value 1";
      case "property2":
        return "Value 2";
      case "property3":
        return "Value 3";
      default:
        return "Unknown Property";
    }
  }
  
  // Exemple d'utilisation
  console.log(evalObject("property1"));  // Devrait afficher "Value 1"
  console.log(evalObject("property2"));  // Devrait afficher "Value 2"
  console.log(evalObject("property3"));  // Devrait afficher "Value 3"
  console.log(evalObject("property4"));  // Devrait afficher "Unknown Property"
  //Dans cet exemple, la fonction evalObject utilise une structure Switch/Case pour évaluer la valeur de la clé passée en paramètre.

  function fusionnerEnPhrase(mots) {
    // Vérifier si le tableau est vide
    if (mots.length === 0) {
      return "";
    }
  
    // Utiliser la méthode join pour fusionner les mots avec des espaces
    const phrase = mots.join(' ');
  
    return phrase;
  }
  
  // Exemple d'utilisation
  const tableauDeMots = ['hello', 'world', 'this', 'is', 'great'];
  const phraseResultat = fusionnerEnPhrase(tableauDeMots);
  console.log(phraseResultat);  // Devrait afficher 'hello world this is great'
  //Cette fonction, fusionnerEnPhrase, prend un tableau de mots en paramètre et utilise la méthode join pour fusionner les mots avec des espaces

  function compterMoutons(nombre) {
    let murmur = "";
    
    for (let i = 1; i <= nombre; i++) {
      murmur += i + " mouton...";
    }
  
    return murmur;
  }
  
  // Exemple d'utilisation
  const resulat = compterMoutons(3);
  console.log(resulat);  
  // Devrait afficher "1 mouton...2 mouton...3 mouton..."
  //Cette fonction, compterMoutons, prend un nombre non négatif en paramètre et retourne une chaîne de caractères représentant le murmure de compter les moutons jusqu'à ce nombre

  function doublerCaracteres(chaine) {
    let chaineDoublee = "";
  
    for (let i = 0; i < chaine.length; i++) {
      chaineDoublee += chaine[i] + chaine[i];
    }
  
    return chaineDoublee;
  }
  
  // Exemples d'utilisation
  console.log(doublerCaracteres("String"));      // Devrait afficher "SSttrriinngg"
  console.log(doublerCaracteres("Hello World")); // Devrait afficher "HHeelllloo  WWoorrlldd"
  console.log(doublerCaracteres("1234!_ "));     // Devrait afficher "11223344!!__ "
  //Cette fonction, doublerCaracteres, prend une chaîne de caractères en paramètre et retourne une nouvelle chaîne dans laquelle chaque caractère est répété une fois. 

  function corrigerBoucleInfinie() {
    // Timmy a créé une boucle infinie
    for (let i = 0; i < 10; i++) {
      console.log(i);
      // Ajoute le code manquant ici pour terminer la boucle
    }
  }
  
  // Appelle la fonction pour corriger la boucle infinie
  corrigerBoucleInfinie();
  function corrigerBoucleInachevee() {
    // Timmy a créé une boucle infinie
    for (let i = 0; i < 10; i++) {
      console.log(i);
  
      // Ajoute le code manquant ici pour terminer la boucle
      if (i === 9) {
        break; // Ajoute une condition pour sortir de la boucle lorsque nécessaire
      }
    }
  }
  
  // Appelle la fonction pour corriger la boucle inachevée
  corrigerBoucleInachevee();
  //Dans cet exemple, j'ai ajouté une condition (if (i === 9)) qui utilise l'instruction break pour sortir de la boucle lorsque i atteint la valeur 9. Cela permet de corriger la boucle inachevée et de la faire se terminer correctement.

  function sommeDeZeroAN(n) {
    if (n < 0) {
      return `${n} < 0`;
    } else if (n === 0) {
      return '0=0';
    } else {
      let somme = 0;
      let expression = '0';
  
      for (let i = 1; i <= n; i++) {
        somme += i;
        expression += `+${i}`;
      }
  
      return `${expression} = ${somme}`;
    }
  }
  
  // Exemples d'utilisation
  console.log(sommeDeZeroAN(6));   // Devrait afficher "0+1+2+3+4+5+6 = 21"
  console.log(sommeDeZeroAN(-15)); // Devrait afficher "-15 < 0"
  console.log(sommeDeZeroAN(0));    // Devrait afficher "0=0"
  //Cette fonction, sommeDeZeroAN, prend un nombre n en paramètre et retourne une chaîne de caractères représentant la somme des nombres de 0 à n. Elle gère également les cas où n est inférieur à 0 ou égal à 0

  function sommeMultiplesTroisCinq(n) {
    // Vérifier si le nombre est négatif
    if (n < 0) {
      return 0;
    }
  
    let somme = 0;
  
    // Parcourir tous les nombres de 0 à n-1
    for (let i = 0; i < n; i++) {
      // Vérifier si le nombre est un multiple de 3 ou 5
      if (i % 3 === 0 || i % 5 === 0) {
        somme += i;
      }
    }
  
    return somme;
  }
  
  // Exemple d'utilisation
  console.log(sommeMultiplesTroisCinq(10));  // Devrait afficher 23
  console.log(sommeMultiplesTroisCinq(-5));  // Devrait afficher 0
  //Cette fonction, sommeMultiplesTroisCinq, prend un nombre n en paramètre et retourne la somme de tous les multiples de 3 ou 5 en dessous de ce nombre. Elle gère également le cas où le nombre est négatif, retournant 0 dans ce cas.

  function racineDigitale(n) {
    // Vérifier si n est un nombre négatif
    if (n < 0) {
      return "Veuillez fournir un nombre non négatif.";
    }
  
    // Calculer la racine digitale de manière récursive
    while (n >= 10) {
      n = Array.from(String(n), Number).reduce((acc, digit) => acc + digit, 0);
    }
  
    return n;
  }
  
  // Exemples d'utilisation
  console.log(racineDigitale(16));     // Devrait afficher 7
  console.log(racineDigitale(942));    // Devrait afficher 6
  console.log(racineDigitale(132189)); // Devrait afficher 6
  console.log(racineDigitale(493193)); // Devrait afficher 2
  //Cette fonction, racineDigitale, prend un nombre non négatif en paramètre et retourne la somme récursive de ses chiffres jusqu'à ce qu'un nombre à un seul chiffre soit obtenu. 

  function afficherLikes(noms) {
    // Vérifier la longueur du tableau de noms
    switch (noms.length) {
      case 0:
        return "personne n'aime ça";
      case 1:
        return `${noms[0]} aime ça`;
      case 2:
        return `${noms[0]} et ${noms[1]} aiment ça`;
      case 3:
        return `${noms[0]}, ${noms[1]} et ${noms[2]} aiment ça`;
      default:
        const autres = noms.length - 2;
        return `${noms[0]}, ${noms[1]} et ${autres} autres aiment ça`;
    }
  }
  
  // Exemples d'utilisation
  console.log(afficherLikes([]));                               // Devrait afficher "personne n'aime ça"
  console.log(afficherLikes(["Peter"]));                        // Devrait afficher "Peter aime ça"
  console.log(afficherLikes(["Jacob", "Alex"]));                // Devrait afficher "Jacob et Alex aiment ça"
  console.log(afficherLikes(["Max", "John", "Mark"]));          // Devrait afficher "Max, John et Mark aiment ça"
  console.log(afficherLikes(["Alex", "Jacob", "Mark", "Max"])); // Devrait afficher "Alex, Jacob et 2 autres aiment ça"
  //Cette fonction, afficherLikes, prend un tableau de noms en paramètre et retourne une chaîne de caractères représentant le texte d'affichage en fonction du nombre de personnes qui aiment un élément

  function trouverPariteAtypique(tableau) {
    // Séparer les nombres pairs et impairs
    const impairs = tableau.filter(nombre => nombre % 2 !== 0);
    const pairs = tableau.filter(nombre => nombre % 2 === 0);
  
    // Vérifier la longueur de chaque tableau pour déterminer l'atypique
    if (impairs.length === 1) {
      return impairs[0];
    } else {
      return pairs[0];
    }
  }
  
  // Exemples d'utilisation
  console.log(trouverPariteAtypique([2, 4, 0, 100, 4, 11, 2602, 36]));     // Devrait afficher 11
  console.log(trouverPariteAtypique([160, 3, 1719, 19, 11, 13, -21]));    // Devrait afficher 160
  //Cette fonction, trouverPariteAtypique, prend un tableau d'entiers en paramètre et retourne l'entier "atypique" en termes de parité (pair ou impair). 

  function inverserMotsLongs(phrase) {
    // Diviser la phrase en un tableau de mots
    const mots = phrase.split(' ');
  
    // Parcourir les mots et inverser ceux de longueur 5 ou plus
    const motsInverses = mots.map(mot => (mot.length >= 5) ? mot.split('').reverse().join('') : mot);
  
    // Rejoindre les mots inverses en une phrase
    const phraseInversee = motsInverses.join(' ');
  
    return phraseInversee;
  }
  
  // Exemples d'utilisation
  console.log(inverserMotsLongs("Hey fellow warriors"));    // Devrait afficher "Hey wollef sroirraw"
  console.log(inverserMotsLongs("This is a test"));          // Devrait afficher "This is a test"
  console.log(inverserMotsLongs("This is another test"));   // Devrait afficher "This is rehtona test"
  //Cette fonction, inverserMotsLongs, prend une phrase en paramètre et retourne la même phrase, mais avec les mots de cinq lettres ou plus inversés.

  // Fonction représentant le comportement de tir automatique
function fireAtWill(currentCommand, targetCommand, enemies) {
    // Si aucune commande n'est donnée, attaquer automatiquement l'ennemi le plus proche
    if (!currentCommand && !targetCommand) {
        const closestEnemy = findClosestEnemy(enemies);
        console.log(`Attaque automatique de l'ennemi le plus proche : ${closestEnemy}`);
    } else {
        // Si une commande spécifique est donnée, attaquer la cible spécifiée
        console.log(`Attaque de la cible spécifiée : ${targetCommand}`);
    }
}

// Fonction utilitaire pour trouver l'ennemi le plus proche
function findClosestEnemy(enemies) {
    // Implémentation factice pour trouver l'ennemi le plus proche
    // Vous devriez remplacer cela par une logique plus précise en fonction de votre jeu
    return enemies.length > 0 ? enemies[0] : null;
}

// Exemple d'utilisation
const enemies = ['Enemy1', 'Enemy2', 'Enemy3'];
const currentCommand = false; // Aucune commande actuelle
const targetCommand = 'FartherEnemy'; // Commande spécifique pour attaquer une cible spécifiée

// Appel de la fonction pour simuler le comportement de tir automatique
fireAtWill(currentCommand, targetCommand, enemies);
//Dans cet exemple, la fonction fireAtWill simule le comportement de tir automatique. Si aucune commande spécifique n'est donnée, elle attaque automatiquement l'ennemi le plus proche en utilisant la fonction utilitaire findClosestEnemy. Sinon, si une commande spécifique est donnée, elle attaque la cible spécifiée.

// Fonction représentant le changement de vitesse ou de mode
function changerVitesse(modeActuel, nouveauMode) {
    // Logique de changement de vitesse ou de mode
    console.log(`Changement de vitesse ou de mode de ${modeActuel} à ${nouveauMode}`);

    // Logique spécifique à votre jeu
    if (nouveauMode === 'Turbo') {
        console.log('Activation du mode Turbo : vitesse maximale !');
        // Ajoutez ici les actions spécifiques au mode Turbo
    } else if (nouveauMode === 'Normal') {
        console.log('Retour au mode Normal : vitesse standard.');
        // Ajoutez ici les actions spécifiques au mode Normal
    } else {
        console.log('Mode non reconnu. Aucune action effectuée.');
        // Gérez les modes non reconnus ou ajoutez une logique par défaut
    }
}

// Exemple d'utilisation
const modeActuel = 'Normal';
const nouveauMode = 'Turbo';

// Appel de la fonction pour simuler le changement de vitesse ou de mode
changerVitesse(modeActuel, nouveauMode);

// Fonction représentant le changement de vitesse ou de mode
function changerVitesse(modeActuel, nouveauMode) {
    // Logique de changement de vitesse ou de mode
    console.log(`Changement de vitesse ou de mode de ${modeActuel} à ${nouveauMode}`);

    // Logique spécifique à votre jeu
    if (nouveauMode === 'Turbo') {
        // Actions spécifiques au mode Turbo
        augmenterVitesseMaximale();
        activerEffetsTurbo();
    } else if (nouveauMode === 'Normal') {
        // Actions spécifiques au mode Normal
        restaurerVitesseStandard();
    } else {
        // Gérer les modes non reconnus ou ajouter une logique par défaut
        console.error('Mode non reconnu. Aucune action effectuée.');
    }
}

// Exemple d'utilisation
const modeActuel1 = 'Normal';
const nouveauMode1 = 'Turbo';

// Appel de la fonction pour simuler le changement de vitesse ou de mode
changerVitesse(modeActuel1, nouveauMode1);

// Exemples de fonctions supplémentaires pour illustrer la logique spécifique
function augmenterVitesseMaximale() {
    console.log('Vitesse maximale augmentée.');
    // Ajouter ici les actions spécifiques à l'augmentation de la vitesse maximale
}

function activerEffetsTurbo() {
    console.log('Effets Turbo activés.');
    // Ajouter ici les actions spécifiques à l'activation des effets Turbo
}

function restaurerVitesseStandard() {
    console.log('Vitesse restaurée à la normale.');
    // Ajouter ici les actions spécifiques à la restauration de la vitesse standard
}
//Dans cet exemple, les fonctions augmenterVitesseMaximale(), activerEffetsTurbo(), et restaurerVitesseStandard() sont utilisées pour illustrer la logique spécifique à chaque mode




  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



  


  
  
  
  
  
  

  
  
  




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  








  
  
  
  
  
  
  
  
  





















  










  
  
  
  
  