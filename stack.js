var round = 0;
var cards = document.getElementsByClassName("card");
var card1 = document.getElementById("one");
var card2 = document.getElementById("two");
var card3 = document.getElementById("three");
var card4 = document.getElementById("four");


var faceCard = [
  //0
  {"image":"img/magician.png",
  "name":"magician"
  },

  //1
  {"image":"img/popess.png",
  "name":"popess"
  },

  //2
  {"image":"img/empress.png",
  "name":"empress"
  },

  //3
  {"image":"img/emperor.png",
  "name":"emperor"
  },

  //4
  {"image":"img/pope.png",
  "name":"pope"
  },

  //5
  {"image":"img/lovers.png",
  "name":"lovers"
  },

  //6
  {"image":"img/chariot.png",
  "name":"chariot"
  },

  //7
  {"image":"img/justice.png",
  "name":"justice"
  },

  //8
  {"image":"img/hermit.png",
  "name":"hermit"
  },

  //9
  {"image":"img/fortune.png",
  "name":"wheeloffortune"
  },

  //10
  {"image":"img/strength.png",
  "name":"strength"
  },

  //11
  {"image":"img/hanged.png",
  "name":"hangedman"
  },

  //12
  {"image":"img/death.png",
  "name":"death"
  },

  //13
  {"image":"img/temperance.png",
  "name":"temperance"
  },

  //14
  {"image":"img/devil.png",
  "name":"devil"
  },

  //15
  {"image":"img/tower.png",
  "name":"star"
  },

  //16
  {"image":"img/moon.png",
  "name":"moon"
  },

  //17
  {"image":"img/sun.png",
  "name":"sun"
  },

  //18
  {"image":"img/judgement.png",
  "name":"judgement"
  },

  //19
  {"image":"img/world.png",
  "name":"world"
  },

  //20
  {"image":"img/fool.png",
  "name":"fool"
  },
];

var numberCard = [
  //0
  {"image": "img/2.png",
  "number": 2},

  //1
  {"image": "img/3.png",
  "number": 3},

  //2
  {"image": "img/4.png",
  "number": 4},

  //3
  {"image": "img/5.png",
  "number": 5},

  //4
  {"image": "img/6.png",
  "number": 6},

  //5
  {"image": "img/7.png",
  "number": 7},

  //6
  {"image": "img/8.png",
  "number": 8},

  //7
  {"image": "img/9.png",
  "number": 9},

  //8
  {"image": "img/10.png",
  "number": 10},
];

function crazy (){
  faceCard.sort(function(a, b){return 0.5 - Math.random()});

  card1.src = faceCard[0].image;
  card2.src = faceCard[1].image;
  card3.src = faceCard[2].image;
  card4.src = faceCard[3].image;
}

window.onload = function(){
  crazy();
};

function cardChange (){
  if( round === 1){
    numberCard.sort(function(a, b){return 0.5 - Math.random()});

    card1.src = numberCard[0].image;
    card2.src = numberCard[1].image;
    card3.src = numberCard[2].image;
    card4.src = numberCard[3].image;
  } else if( round === 2){
    faceCard.sort(function(a, b){return 0.5 - Math.random()});

    card1.src = faceCard[0].image;
    card2.src = faceCard[1].image;
    card3.src = faceCard[2].image;
    card4.src = faceCard[3].image;
  };
};


/* Stacking card code*/


$('.stack').click(function() {

    round++;

  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card");
    }, e * 150)

  });

});


/* Spreading card code */

$('.spread').click(function() {

  console.log(round);
  cardChange();

  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card ani" + e);
    }, e * 150)

  });


});
