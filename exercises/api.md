
### 1. API (Difficulty : *)

- Appel d'API vers l'API Kaamelot
- Récupérer la citation et son auteur
- Les afficher sur la page HTML
- Et lorsque l'on clique sur un bouton, on récupère une nouvelle quote, qui sera à son tour afficher à la place de l'ancienne !


### 2. PokéApi (Difficulty : ***)

- Récupérer les données des Pokémons (URL : https://pokeapi.co/api/v2/pokemon/)
- Seulement... Je veux voir leur image ! Vous les trouverez dans les URL des pokémons du tableau "result" de la première requête...
  (Il faudra peut-être imbriquer des Promises pour les récupérer...)
- Juste les 20 premiers dans un premier temps

### 3. PokéApi : the come back (Difficulty : ****)

- On va paginer notre pokédex !
- Pour cela on va se baser sur les URL des propriétés "next" et "previous" du JSON récupéré (ici : https://pokeapi.co/api/v2/pokemon/)
- Si un next existe, alors on peut aller sur la page suivante (bouton masquer/disable si next n'a pas de valeur)
- Si un previous existe, alors on peut aller sur la page précédente (bouton masquer/disable si previous n'a pas de valeur)

