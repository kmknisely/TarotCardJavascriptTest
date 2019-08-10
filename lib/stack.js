"use strict";

//Global Variables
var round = 0;

var answerTime = 0;

var cards = document.getElementsByClassName("card");

var card1 = document.getElementById("one");
var card2 = document.getElementById("two");
var card3 = document.getElementById("three");
var card4 = document.getElementById("four");

var seconds = 500;

var faceCard = [
//0
{ "image": "img/magician.png",
  "name": "magician"
},

//1
{ "image": "img/popess.png",
  "name": "popess"
},

//2
{ "image": "img/empress.png",
  "name": "empress"
},

//3
{ "image": "img/emperor.png",
  "name": "emperor"
},

//4
{ "image": "img/pope.png",
  "name": "pope"
},

//5
{ "image": "img/lovers.png",
  "name": "lovers"
},

//6
{ "image": "img/chariot.png",
  "name": "chariot"
},

//7
{ "image": "img/justice.png",
  "name": "justice"
},

//8
{ "image": "img/hermit.png",
  "name": "hermit"
},

//9
{ "image": "img/fortune.png",
  "name": "wheeloffortune"
},

//10
{ "image": "img/strength.png",
  "name": "strength"
},

//11
{ "image": "img/hanged.png",
  "name": "hangedman"
},

//12
{ "image": "img/death.png",
  "name": "death"
},

//13
{ "image": "img/temperance.png",
  "name": "temperance"
},

//14
{ "image": "img/devil.png",
  "name": "devil"
},

//15
{ "image": "img/tower.png",
  "name": "star"
},

//16
{ "image": "img/moon.png",
  "name": "moon"
},

//17
{ "image": "img/sun.png",
  "name": "sun"
},

//18
{ "image": "img/judgement.png",
  "name": "judgement"
},

//19
{ "image": "img/world.png",
  "name": "world"
},

//20
{ "image": "img/fool.png",
  "name": "fool"
}];

var numberCard = [
//0
{ "image": "img/2.png",
  "number": 2 },

//1
{ "image": "img/3.png",
  "number": 3 },

//2
{ "image": "img/4.png",
  "number": 4 },

//3
{ "image": "img/5.png",
  "number": 5 },

//4
{ "image": "img/6.png",
  "number": 6 },

//5
{ "image": "img/7.png",
  "number": 7 },

//6
{ "image": "img/8.png",
  "number": 8 },

//7
{ "image": "img/9.png",
  "number": 9 },

//8
{ "image": "img/10.png",
  "number": 10 }];

var fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "From now on your kindness will lead you to success.", "In the end all things will be known.", "A lifetime friend shall soon be made", "Physical activity will dramatically improve your outlook today.", "Savor your freedom – it is precious.", "The smart thing to do is to begin trusting your intuitions.", "Your moods signal a period of change.", "Many will travel to hear you speak.", "Never fear! The end of something marks the start of something new."];

//Functions

//Put images in the cards when the window is opened
function open() {
  faceCard.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  card1.src = faceCard[0].image;
  card2.src = faceCard[1].image;
  card3.src = faceCard[2].image;
  card4.src = faceCard[3].image;
}

//Change the image on the card depending on the round
function cardChange() {
  if (round === 1) {
    numberCard.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    card1.src = numberCard[0].image;
    card2.src = numberCard[1].image;
    card3.src = numberCard[2].image;
    card4.src = numberCard[3].image;
  } else if (round === 2) {
    faceCard.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    card1.src = faceCard[0].image;
    card2.src = faceCard[1].image;
    card3.src = faceCard[2].image;
    card4.src = faceCard[3].image;
  };
};

//Toggle class to make stars appear and disappear
var toggle = function toggle() {
  return document.getElementById("stars").classList.toggle("on");
};

//run the toggle function when a card is clicked. Run the toggle based on the length of the name of the card or based on the card number
function selectCard() {

  card1.addEventListener("click", function () {
    if (round === 1) {
      for (var i = 0; i < numberCard[0].number * 2; i++) {
        setTimeout(toggle, i * seconds);
      };
    } else {
      answerTime = faceCard[0].name.length;
      for (var _i = 0; _i < faceCard[0].name.length * 2; _i++) {
        setTimeout(toggle, _i * seconds);
      };
    }
  });

  card2.addEventListener("click", function () {
    if (round === 1) {
      for (var i = 0; i < numberCard[1].number * 2; i++) {
        setTimeout(toggle, i * seconds);
      };
    } else {
      answerTime = faceCard[1].name.length;
      for (var _i2 = 0; _i2 < faceCard[1].name.length * 2; _i2++) {
        setTimeout(toggle, _i2 * seconds);
      };
    }
  });

  card3.addEventListener("click", function () {
    if (round === 1) {
      for (var i = 0; i < numberCard[2].number * 2; i++) {
        setTimeout(toggle, i * seconds);
      };
    } else {
      answerTime = faceCard[2].name.length;
      for (var _i3 = 0; _i3 < faceCard[2].name.length * 2; _i3++) {
        setTimeout(toggle, _i3 * seconds);
      };
    }
  });

  card4.addEventListener("click", function () {
    if (round === 1) {
      for (var i = 0; i < numberCard[3].number * 2; i++) {
        setTimeout(toggle, i * seconds);
      };
    } else {
      answerTime = faceCard[3].name.length;
      for (var _i4 = 0; _i4 < faceCard[3].name.length * 2; _i4++) {
        setTimeout(toggle, _i4 * seconds);
      };
    }
  });
};

//Display a random fortune
function answer() {
  if (round === 3) {
    fortunes.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    document.getElementById("fortune-text").innerHTML = fortunes[0];
  }
};

//Hide the instructions
var hideText = function hideText() {
  return document.getElementById("instructions").style.display = "none";
};

/* Stacking card code*/

$('.stack').click(function () {

  round++;
  setTimeout(cardChange, 2000);
  setTimeout(answer, answerTime * 1000);

  $(".card").each(function (e) {

    setTimeout(function () {
      $(".card").eq(e).attr("class", "card");
    }, e * 150);
  });
});

/* Spreading card code */

$('.spread').click(function () {

  hideText();

  $(".card").each(function (e) {

    setTimeout(function () {
      $(".card").eq(e).attr("class", "card ani" + e);
    }, e * 150);
  });
});

window.onload = function () {
  open();
};
selectCard();