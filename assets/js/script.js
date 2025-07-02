let i = 0
let o = i
let limite = 9

fetch('assets/json/info.json') //Permet de récupérer les ressources json
    .then(response => response.json()) //Convertit en objet js
    .then(data => {
        heroData = data //Stock le json dans une variable js
        console.log(data) //Affiche désormais dans la console le json

        newHero(i)
        heroChange(i)
        i = i + 1
        newHero(i)
        heroChange(i)


        limite = +prompt("Donnez la limite d'article à afficher pour scrolling")-1
        window.addEventListener("scroll", () => {  //S'active avec le scroll
            if ((window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) && i != limite) { // On prend la position de l'utilisateur, on regarde la hauteur de la page et lorsqu'on est a 200px de sa fin
                i = i + 1
                newHero(i) //On appelle la fonction
                heroChange(i)
            }
        })
    })

function newHero(i) {
    document.getElementById("hero").innerHTML += `
            <div class="container text-center border border-dark taille my-5">
  <div class="row">
    <div class="col">
      <p id="nom${i}" class="h2 my-3 name">Nom</p>
    </div>
  </div>
  <div class="row photo">
    <div class="col">
      <img src="assets/img/mystere.jpg" alt="Le Héro que tu as choisi !" class="photo border border-dark" id="photo${i}">
    </div>
  </div>
  <div class="row">
    <div class="col">
      <p class="h4 my-2 fst-italic texte" id="vraiNom${i}">Vrai nom</p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <p class="mt-3 texte" id="pouvoir${i}">🦸‍♂️​Pouvoir</p>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6">
      <p id="ville${i}" class="texte">​​🏙️​Ville</p>
    </div>
    <div class="col-lg-6">
      <p id="apparition${i}" class="texte">​​​👶​Apparition</p>
    </div>
  </div>
</div>
        `
}

function heroChange(i) {
    console.log(`i: ${i}`)

    if (o >= 10) {
        o = 0
    }

    console.log(`o: ${o}`)

    document.getElementById(`nom${i}`).textContent = heroData[o].name
    document.getElementById(`photo${i}`).src = `data:image/png;base64,${heroData[o].image}`
    document.getElementById(`vraiNom${i}`).textContent = heroData[o].realName
    document.getElementById(`pouvoir${i}`).textContent = `🦸‍♂️​${heroData[o].powers}`
    document.getElementById(`ville${i}`).textContent = `​​🏙️​${heroData[o].city}`
    document.getElementById(`apparition${i}`).textContent = `​​​👶​${heroData[o].firstAppearance}`
    o++
}