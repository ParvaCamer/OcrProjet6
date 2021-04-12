let myBoard = new board(10, 10, 10);
myBoard.drawBoard();

let Diluc = new Character("Diluc", 200, "images/perso1.png", 10);
let Childe = new Character("Childe", 180, "images/perso2.png", 16);
let Razor = new Character("Razor", 192, "images/perso3.png", 13);
let Jean = new Character("Jean", 170, "images/perso4.png", 21);
let Chongyun = new Character("Chongyun", 166, "images/perso5.png", 23);
let Xiangling = new Character("Xiangling", 176, "images/perso6.png", 18);
let Albedo = new Character("Albedo", 160, "images/perso7.png", 25);

let playerOnBoard = [Chongyun, Albedo]

playerOnBoard[0].spotPlayer(playerOnBoard[1]);

let weapon = new Weapon("Épée de vagabond", "ÉpéeDeNoob1", 10, "images/arme1.png");
let weapon0 = new Weapon("Épée de vagabond", "ÉpéeDeNoob", 10, "images/arme1.png");
let weapon1 = new Weapon("Ombre immaculée", "Ombre", 28, "images/arme2.png", "addHp", "twoHandedSword");
let weapon2 = new Weapon("Épée du faucon", "Faucon", 20, "images/arme3.png", "criticalHit", "oneHandedSword");
let weapon3 = new Weapon("Lance de jade ailée", "JadeAilée", 30, "images/arme4.png", "moreAtq", "spear");
let weapon4 = new Weapon("Fléau du dragon", "Dragon", 18, "images/arme5.png", "fire", "spear");
let weapon5 = new Weapon("Lance de la voûte d'Azur", "VoûteAzur", 24, "images/arme6.png", "defendAndAttack", "spear");
let weapon6 = new Weapon("Mort-du-loup", "MortDuLoup", 44, "images/arme7.png", "oneShot", "twoHandedSword");
let weapon7 = new Weapon("La Flûte", "Flûte", 20, "images/arme8.png", "sleeping", "oneHandedSword");

// affichage des armes aléatoires sur le board //
let allWeapons = [
  weapon1,
  weapon2,
  weapon3,
  weapon4,
  weapon5,
  weapon6,
  weapon7,
];
let weaponOnBoard = [];

function randomWeapon(nbOfWeapon) {
  for (let i = 0; i < nbOfWeapon; i++) {
    let random = Math.floor(Math.random() * allWeapons.length);
    let aWeapon = allWeapons[random];
    allWeapons.splice(random, 1);
    weaponOnBoard.push(aWeapon);
  }
  weaponOnBoard.forEach(function (oneWeapon) {
    return oneWeapon.spotWeapons();
  });
}

randomWeapon(3);

async function letsGo() {
  weaponOnBoard.push(weapon)
  weaponOnBoard.push(weapon0)
  let playersWhoPlay = [Chongyun, Albedo];
  playersWhoPlay[0].setOrder(1)
  playersWhoPlay[1].setOrder(2)
  playersWhoPlay[0].addWeapon(weapon)
  playersWhoPlay[1].addWeapon(weapon0)
  let numberOfTurn = 0;
  let weCanPlay = true;
  let playerOne = null;
  let playerTwo = null;
  while (numberOfTurn < 10 && weCanPlay === true) {
    for (let i = 0; i < playersWhoPlay.length; i++) {
      if (weCanPlay) {
        await playersWhoPlay[i].movePlayer(weaponOnBoard)
        weCanPlay = playersWhoPlay[i].isFrontOfPlayer(playersWhoPlay[i === 1 ? 0 : 1])
        if (weCanPlay === false) {
          playerOne = playersWhoPlay[i]
          playerTwo = playersWhoPlay[i === 1 ? 0 : 1]
        }
      }
    }
    numberOfTurn++;
  }
  if (numberOfTurn < 10) {
    let theFight = new fight(playersWhoPlay)
  } else {
    console.log("Partie terminée ! Nombre de tours : ", numberOfTurn)
  }
}

letsGo()