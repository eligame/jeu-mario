$("#gameover").hide();

var posX = 20;
var posY = 30;
var posX_mushroom = 1500;
var posY_mushroom = 65;
var posX_volant = 1500;
var posY_volant = 100;
var seconde = 0;
var interval_timer = setInterval(temps, 1000);
jeu();
setTimeout(jeu1, 1500)

function temps(){
    seconde +=1;
    $("#score").html("Temps écoulé : " + seconde + "s");
}

function jeu1(){
  posX_volant -=20;
  $("#volant").css("left", posX_volant);
  if (posX_volant < -40) {
    posX_volant = 1500
    $("#volant").css("left", posX_volant);
  }
  verifierCollision1();
  setTimeout(jeu1, 50);
}

function verifierCollision1(){
  var dist = distance(posX, posY, posX_volant, posY_volant);
  if (dist<50) {
    $("#gameover").show();
    clearInterval(interval_timer);
    $("#mushroom").hide();

    throw new Error("GAME OVER");
  }
}

function jeu(){
  posX_mushroom -=20;
  $("#mushroom").css("left", posX_mushroom);
  if (posX_mushroom < -40) {
    posX_mushroom = 1500
    $("#mushroom").css("left", posX_mushroom);
  }
  verifierCollision();
  setTimeout(jeu, 50);
}

function verifierCollision(){
  var dist = distance(posX, posY, posX_mushroom, posY_mushroom);
  if (dist<50) {
    $("#gameover").show();
    clearInterval(interval_timer);
    $("#volant").hide();

    throw new Error("GAME OVER");
  }
}

function sqr(a) {
    return a*a;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}


//$("#mushroom").hide();
$("body").keydown(function(e){
  if (e.key == "ArrowLeft") {
    posX -=10
    $("#perso").css("left", posX);
  }
  if (e.key == "ArrowRight") {
    posX +=10
    $("#perso").css("left", posX);
  }
  if (e.key == "ArrowUp") {
    if (posY>65) return;
      posY +=100
      $("#perso").css("bottom", posY);
      setTimeout(function(){
      posY -=100
      $("#perso").css("bottom", posY);
    }, 400);
    }
});
