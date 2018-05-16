//code snippit from Friday's mini-lesson on forms
var form = document.querySelector("form");
var landingPageHeading = document.getElementById("landing-page-heading");
let gameBoard = document.getElementById("game-board");
var landingPageContainer = document.getElementById("landing-page-container");
var nameValue = document.getElementById("uniqueID").value;
var playerName = [];
gameBoard.style.display = "none";

//Landing Page Music global variables

//"Trane's Slo Blues" by John Coltrane from the album "Lush Life"
var traneAudio = document.createElement("audio");
traneAudio.src = "sounds/traneBlues.mp3";
landingPageMusic();

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  validateForm();
});

var button = document.getElementById("button");

button.addEventListener("click", pauseLandingPageMusic);

function validateForm() {
  var nameValue = document.getElementById("uniqueID").value;
  playerName.push(nameValue);
  if (nameValue == "") {
    alert("Please type your name");
    return false;
  } else {
    displayGame();
  }
}

//code snippit from "https://www.w3schools.com/js/js_validation.asp"
function displayGame() {
  var gameBoard = document.getElementById("game-board");
  gameBoard.style.display = "block";
  landingPageContainer.remove();
}

//Global DOM Variables
var divDeckArea = document.getElementById("deck-area");
var p1Hand = document.getElementById("player1-hand");
var p2Hand = document.getElementById("player2-hand");
var p1PlayArea = document.getElementById("player1-play-area");
var p2PlayArea = document.getElementById("player2-play-area");

//Arrays to help build deck
var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var faceValue = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

//Empty arrays to push cards to or pull from during gameplay
var deck = [];

var player1Hand = [];
var player1PlayArea = [];
var player1CardCount = 0;

var player2Hand = [];
var player2PlayArea = [];
var player2CardCount = 0;

//Sound Effect functions
function landingPageMusic() {
  traneAudio.play();
}

function pauseLandingPageMusic() {
  traneAudio.pause();
}

function warSoundPlay() {
  var myAudio = document.createElement("audio");
  myAudio.src = "sounds/hornOfWar.mp3";
  myAudio.play();
}

function winSoundPlay() {
  var myAudio = document.createElement("audio");
  myAudio.src = "sounds/winTrumpets.mp3";
  myAudio.play();
}

function loseSoundPlay() {
  var myAudio = document.createElement("audio");
  myAudio.src = "sounds/sadTrombone.mp3";
  myAudio.play();
}

/*
Function that creates the deck, goes through suits, then goes through face values
and creates a card object for every combination of suit and faceValue. adds image based on
specific combo of index number of suits and ranks
*/

//"https://dev.to/andrew565/how-to-make-a-card-game-in-javascript-part-1"
function getDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < faceValue.length; x++) {
      var card = {
        FaceValue: faceValue[x],
        Suit: suits[i],
        Rank: ranks[x],
        images: "images/" + suits[i] + ranks[x] + ".png"
      };
      deck.push(card);
    }
  }
  divDeckArea.style.backgroundImage = "url('images/BackRed1.png')";
  return deck;
}

getDeck();

//Basic variation of Fisher-Yates Shuffle found on "https://bost.ocks.org/mike/shuffle/"
/*shuffledDeck includes empty array where shuffled cards will be pushed
while there are still unshuffled cards, Math.random creates a random number between 0 and the length
of the array of deck (rounded). The function adds this card to shuffledDeck array, removes it from reg deck arr
and subtracts 1 from n, the amount of cards left in unshuffled deck
*/
var shuffledDeck = [];
function shuffle(array) {
  var n = array.length;
  var i;
  while (n) {
    i = Math.floor(Math.random() * array.length);
    if (i in array) {
      shuffledDeck.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return shuffledDeck;
}
shuffle(deck);

//Deal Function - divides shuffledDeck into 2 and gives each player 26 cards
function dealCards(cards) {
  divDeckArea.removeEventListener("click", dealDeckImageMovement);
  for (i = 0; i <= 25; i++) {
    player1Hand.push(cards[i]);
    player1CardCount++;
    delete cards[i];
  }
  for (i = 26; i <= 51; i++) {
    player2Hand.push(cards[i]);
    player2CardCount++;
    delete cards[i];
  }
  var p1DeckCount = document.createElement("h1");
  var p2DeckCount = document.createElement("h1");
  var text1 = document.createTextNode(
    playerName + "'s Card Count: " + player1CardCount
  );
  var text2 = document.createTextNode(
    "Player 2's Card Count: " + player2CardCount
  );
  var gameBoard = document.getElementById("game-board");
  p1DeckCount.id = "p1-deck-count";
  p2DeckCount.id = "p2-deck-count";
  gameBoard.appendChild(p1DeckCount);
  gameBoard.appendChild(p2DeckCount);
  p1DeckCount.appendChild(text1);
  p2DeckCount.appendChild(text2);
  deckDirection.remove();
  return player1Hand;
  return player2Hand;
  return player1CardCountArr;
  return player2CardCountArr;
}

//Event Listeners, Functions & Card Image Placement
//Moves back of card images to players' hands & calls dealCards
function dealDeckImageMovement() {
  divDeckArea.style.backgroundImage = "None";
  p1Hand.style.backgroundImage = "url('images/BackRed1.png')";
  p2Hand.style.backgroundImage = "url('images/BackRed1.png')";
  dealCards(shuffledDeck);
}
divDeckArea.addEventListener("click", dealDeckImageMovement);

//Function & Event Listener that changes backgroundImage of play areas to current card
function cardsInPlayArea() {
  p1PlayArea.style.backgroundImage = `url('${player1Hand[0].images}')`;
  p2PlayArea.style.backgroundImage = `url('${player2Hand[0].images}')`;
  playCards();
  comparison();
  p1Hand.removeEventListener("click", cardsInPlayArea);
  setTimeout(function() {
    p1Hand.addEventListener("click", cardsInPlayArea);
  }, 2000);
}
p1Hand.addEventListener("click", cardsInPlayArea);

//Play a Card Function
function playCards() {
  //Push top card from each player's hand into their play-areas
  player1PlayArea.push(player1Hand[0]);
  player1Hand.shift();
  player1CardCount--;
  player2PlayArea.push(player2Hand[0]);
  player2Hand.shift();
  player2CardCount--;
  createCounter();
}

//Compare Cards Function
function comparison() {
  if (player1PlayArea[0].Rank > player2PlayArea[0].Rank) {
    player1Hand.push(player1PlayArea[0], player2PlayArea[0]);
    player1CardCount += 2;
    player1PlayArea.shift();
    player2PlayArea.shift();
    setTimeout(function() {
      p1PlayArea.style.backgroundImage = "none";
    }, 2000);
    setTimeout(function() {
      p2PlayArea.style.backgroundImage = "none";
    }, 2000);
    setTimeout(function() {
      createCounter();
    }, 2000);
    setTimeout(function() {
      handCount();
    }, 2000);
  } else if (player1PlayArea[0].Rank < player2PlayArea[0].Rank) {
    console.log("Player2's Card is Better!");
    player2Hand.push(player1PlayArea[0], player2PlayArea[0]);
    player2CardCount += 2;
    player1PlayArea.shift();
    player2PlayArea.shift();
    setTimeout(function() {
      p1PlayArea.style.backgroundImage = "none";
    }, 2000);
    setTimeout(function() {
      p2PlayArea.style.backgroundImage = "none";
    }, 2000);
    setTimeout(function() {
      createCounter();
    }, 2000);
    setTimeout(function() {
      handCount();
    }, 2000);
  } else if (player1PlayArea[0].Rank == player2PlayArea[0].Rank) {
    warState();
  }
}

//War-state
function warState() {
  warSoundPlay();
  var warStateAlert = document.createElement("h1");
  warStateAlert.id = "war-state-alert";
  var text3 = document.createTextNode("You've Declared War!");
  warStateAlert.appendChild(text3);
  gameBoard.appendChild(warStateAlert);
  p1Hand.removeEventListener("click", cardsInPlayArea);
  setTimeout(function() {
    p1PlayArea.style.backgroundImage = "url('images/BackBlue1.png')";
  }, 750);
  setTimeout(function() {
    p1PlayArea.style.backgroundImage = "url('images/BackGrey1.png')";
  }, 1500);
  setTimeout(function() {
    p1PlayArea.style.backgroundImage = "url('images/BackRed1.png')";
  }, 2250);
  setTimeout(function() {
    p1PlayArea.style.backgroundImage = `url('${player1Hand[3].images}')`;
  }, 3000);
  setTimeout(function() {
    p1PlayArea.style.backgroundImage = "none";
  }, 5000);
  setTimeout(function() {
    p2PlayArea.style.backgroundImage = "url('images/BackBlue1.png')";
  }, 750);
  setTimeout(function() {
    p2PlayArea.style.backgroundImage = "url('images/BackGrey1.png')";
  }, 1500);
  setTimeout(function() {
    p2PlayArea.style.backgroundImage = "url('images/BackRed1.png')";
  }, 2250);
  setTimeout(function() {
    p2PlayArea.style.backgroundImage = `url('${player2Hand[3].images}')`;
  }, 3000);
  setTimeout(function() {
    p2PlayArea.style.backgroundImage = "none";
  }, 5000);
  setTimeout(function() {
    warStateAlert.remove();
  }, 3000);
  player1PlayArea.push(
    player1Hand[0],
    player1Hand[1],
    player1Hand[2],
    player1Hand[3]
  );
  player1Hand.splice(0, 4);
  setTimeout(function() {
    player1CardCount--;
  }, 750);
  setTimeout(function() {
    createCounter();
  }, 750);
  setTimeout(function() {
    player1CardCount--;
  }, 1500);
  setTimeout(function() {
    createCounter();
  }, 1500);
  setTimeout(function() {
    player1CardCount--;
  }, 2250);
  setTimeout(function() {
    createCounter();
  }, 2250);
  setTimeout(function() {
    player1CardCount--;
  }, 3000);
  setTimeout(function() {
    createCounter();
  }, 3000);

  player2PlayArea.push(
    player2Hand[0],
    player2Hand[1],
    player2Hand[2],
    player2Hand[3]
  );
  player2Hand.splice(0, 4);
  setTimeout(function() {
    player2CardCount--;
  }, 750);
  setTimeout(function() {
    createCounter();
  }, 750);
  setTimeout(function() {
    player2CardCount--;
  }, 1500);
  setTimeout(function() {
    createCounter();
  }, 1500);
  setTimeout(function() {
    player2CardCount--;
  }, 2250);
  setTimeout(function() {
    createCounter();
  }, 2250);
  setTimeout(function() {
    player2CardCount--;
  }, 3000);
  setTimeout(function() {
    createCounter();
  }, 3000);

  if (player1PlayArea[4].Rank > player2PlayArea[4].Rank) {
    for (var i = 0; i < player1PlayArea.length; i++) {
      p1Hand.removeEventListener("click", cardsInPlayArea);
      player1Hand.push(player1PlayArea[i]);
      player1Hand.push(player2PlayArea[i]);
    }
    player1PlayArea.splice(0, 5);
    player2PlayArea.splice(0, 5);
    setTimeout(function() {
      player1CardCount += 10;
    }, 5000);
    setTimeout(function() {
      createCounter();
    }, 5000);
    setTimeout(function() {
      handCount();
    }, 5000);
    return;
  } else if (player1PlayArea[4].Rank < player2PlayArea[4].Rank) {
    for (var i = 0; i < player2PlayArea.length; i++) {
      p1Hand.removeEventListener("click", cardsInPlayArea);
      player2Hand.push(player1PlayArea[i]);
      player2Hand.push(player2PlayArea[i]);
    }
    player1PlayArea.splice(0, 5);
    player2PlayArea.splice(0, 5);
    setTimeout(function() {
      player2CardCount += 10;
    }, 5000);
    setTimeout(function() {
      createCounter();
    }, 5000);
    setTimeout(function() {
      handCount();
    }, 5000);
    return;
  } else if (player1PlayArea[4].Rank == player2PlayArea[4].Rank) {
    warState();
  }
}

//Player 1 & 2 Deck Count Creation (DOM) + 2 arrays
function createCounter() {
  var parent = document.getElementById("game-board");
  var child1 = document.getElementById("p1-deck-count");
  var child2 = document.getElementById("p2-deck-count");
  parent.removeChild(child1);
  parent.removeChild(child2);
  var p1DeckCount = document.createElement("h1");
  var p2DeckCount = document.createElement("h1");
  p1DeckCount.id = "p1-deck-count";
  p2DeckCount.id = "p2-deck-count";
  var text1 = document.createTextNode(
    playerName + "'s Card Count: " + player1CardCount
  );
  var text2 = document.createTextNode(
    "Player 2's Card Count: " + player2CardCount
  );
  var gameBoard = document.getElementById("game-board");
  p1DeckCount.id = "p1-deck-count";
  p2DeckCount.id = "p2-deck-count";
  gameBoard.appendChild(p1DeckCount);
  gameBoard.appendChild(p2DeckCount);
  p1DeckCount.appendChild(text1);
  p2DeckCount.appendChild(text2);
}
//Win-State Functions
function handCount() {
  if (player2CardCount <= 20) {
    var youWin = document.createElement("h1");
    youWin.id = "you-win";
    var text1 = document.createTextNode("You Win!!");
    youWin.appendChild(text1);
    gameBoard.appendChild(youWin);
    winSoundPlay();
    setTimeout(function() {
      location.reload();
    }, 10000);
  }
  if (player1CardCount <= 20) {
    var youLose = document.createElement("h1");
    youLose.id = "you-lose";
    var text2 = document.createTextNode("Sorry, you lost..");
    youLose.appendChild(text2);
    gameBoard.appendChild(youLose);
    loseSoundPlay();
    setTimeout(function() {
      location.reload();
    }, 5000);
  }
}
