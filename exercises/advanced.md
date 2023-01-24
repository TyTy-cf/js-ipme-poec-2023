
## Exos - 01/24/2023 - suite

### 1.

Faire en sorte qu'au chargement de la page, on calcule directement les moyennes de chaque étudiant et les affiche dans la colonne en question.

(PS : généraliser l'algo...)

### 2.

Toujours sur la même table, ajouter une checkbox devant chaque ligne, elle doit être liée à cette ligne.


Et ajouter une checkbox globale dans le header de la table, qui permet de sélectionner TOUTE les lignes de la table.

Ecrire le code JS permettant de faire fonctionner cette Checkbox.

Contentez-vous de logger les checkbox sélectionnées

### 3.

Vous allez faire un jeu de cartes avec ses fonctionnalités.

- Faire une classe Card, elle représente les cartes d'un jeu de cartes
- Elle est composée des attributs suivant :
    - name
    - color
    - value
    - rank
    - image

(Pour vous facilitez la vie, pour la couleur utilisez la première lettre des couleurs en anglais : c, d, h et s)

- Faire une classe Deck, elle représente un paquet de cartes
- Elle est composée d'un tableau de Card (deck: Card[])
- Prévoyez d'ajouter les méthodes suivantes :
    - shuffleDeck(): Card[] : elle a pour rôle de mélanger le deck
    - drawCard(): Card : elle a pour rôle de piocher une carte du paquet
    - drawCards(nbCards: number): Card[] : elle a pour rôle de piocher nbCards du paquet

Testez vos classes en console

### 4. 

Affichez votre paquet de cartes dans l'HTML ?

