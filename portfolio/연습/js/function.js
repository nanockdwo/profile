function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext("2d");

    var back1Y = 0;
    var back2Y = -800;
    var back = new Image();
    back.src = "img/bg_1.png"

    var unit1 = new Image();
    var unit2 = new Image();
    unit1.src = "img/ddz_normal.png";
    unit2.src = "img/ddz_shock.png";

    var unit = [unit1, unit2];
    var unitX = 250;
    var unitY = 700;
    var unitIndex = 0;

    var miss = new Image();
    miss.src = "img/m.png";
    var missList = [];

    var enemy1 = new Image();
    var enemy2 = new Image();
    enemy1.src = "img/hammer_skew.png";
    enemy2.src = "img/pa_skew.png";
    var enemy = [enemy1, enemy2];
    var enemyList = [];

    setInterval(function () {
      draw++;

      context.drawImage(back, 0, back1Y, 500, 800);
      context.drawImage(back, 0, back2Y, 500, 800);

      for (var i = 0; i < missList.length; i++) {
        var tmp = missList[i];
        context.drawImage(miss, tmp.x - 40, tmp.y - 40, 80, 80);
      }

      for (var i = 0; i < enemyList.length; i++) {
        var tmp = enemyList[i];
        context.drawImage(enemy[tmp.type], tmp.x - 50, tmp.y - 50, 100, 100);
      }

      context.drawImage(unit[unitIndex], unitX - 50, unitY - 50, 100, 100);
      backScroll();
      unitAnimation();
      makeMissile();
      checkMissile();
      moveMissile();
      makeEnemy();
      moveEnemy();
      checkEnemy();

    }, 20);

    function makeEnemy() {
      var ranNum = Math.random() * 200;
      var result = Math.floor(ranNum);
      if (result != 10) {
        return;
      }
      var enemyX = [50, 150, 250, 350, 450];
      for (var i = 0; i > 5; i++) {
        obj = {};
        obj.x = enemyX[i];
        obj.y = -50;

        var result = Math.floor(Math.random() * 2);
        obj.type = result;
        if (result == 0) {
          obj.energy = 50;
        } else if (result == 1) {
          obj.energy = 100;
        }
        obj.isDead = false;
        enemyList.push(obj);
      }
    }
    function moveEnemy() {
      for (var i = 0; i < enemyList.length; i++) {
        var tmp = enemyList[i];
        tmp.y = tmp.y + 5;
        if (tmp.y >= 840) {
          tmp.isDead = true;
        }
      }
    }
    function checkEnemy() {
      for (var i = enemyList.length - 1; i >= 0; i--) {
        var tmp = enemyList[i];
        if (tmp.isDead) {
          enemyList.splice(i, 1);
        }
      }
    }
    $("#canvas").on("mousemove", function (e) {
      unitX = e.offsetX;
    });
    function makeMissile() {
      if (draw % 3 != 0) {
        return;
      }
      var obj = {};
      obj.x = unitX;
      obj.y = unitY;
      obj.isDead = false;
      missList.push(obj);
    }
    function moveMissile() {
      for (var i = 0; i < missList.length; i++) {
        var tmp = missList[i];
        tmp.y = tmp.y - 10;
        if (tmp.y <= -40) {
          tmp.isDead = true;
        }
      }
    }
    function checkMissile() {
      for (var i = missList.length - 1; i >= 0; i--) {
        var tmp = missList[i];
        if (tmp.isDead) {
          missList.splice(i, 1);
        }
      }
    }
    function unitAnimation() {
      if (draw % 8 != 0) {
        return;
      }
      unitIndex++;
      if (unitIndex == 2) {
        unitIndex = 0;
      }
    }
    function backScroll() {
      back1Y += 5;
      back2Y += 5;
      if (back1Y >= 800) {
        back1Y = -800;
        back2Y = 0;
      }
      if (back2Y >= 800) {
        back2Y = -800;
        back1Y = 0;
      }
    }
  }
}


// $(function () {



//   var canvas = document.querySelector("#canvas");
//   var context = canvas.getContext("2d");

//   var back1Y = 0;
//   var back2Y = -800;
//   var back = new Image();
//   back.src = "img/bg_1.png"

//   var unit1 = new Image();
//   var unit2 = new Image();
//   unit1.src = "img/ddz_normal.png";
//   unit2.src = "img/ddz_shock.png";

//   var unit = [unit1, unit2];
//   var unitX = 250;
//   var unitY = 700;
//   var unitIndex = 0;

//   var miss = new Image();
//   miss.src = "img/m.png";
//   var missList = [];

//   var enemy1 = new Image();
//   var enemy2 = new Image();
//   enemy1.src = "img/hammer_skew.png";
//   enemy2.src = "img/pa_skew.png";
//   var enemy = [enemy1, enemy2];
//   var enemyList = [];

//   setInterval(function () {
//     count++;

//     context.drawImage(back, 0, back1Y, 500, 800);
//     context.drawImage(back, 0, back2Y, 500, 800);

//     for (var i = 0; i < missList.length; i++) {
//       var tmp = missList[i];
//       context.drawImage(miss, tmp.x - 40, tmp.y - 40, 80, 80);
//     }

//     for (var i = 0; i < enemyList.length; i++) {
//       var tmp = enemyList[i];
//       context.drawImage(enemy[tmp.type], tmp.x - 50, tmp.y - 50, 100, 100);
//     }

//     context.drawImage(unit[unitIndex], unitX - 50, unitY - 50, 100, 100);
//     backScroll();
//     unitAnimation();
//     makeMissile();
//     checkMissile();
//     makeEnemy();
//     moveEnemy();
//     checkEnemy();

//   }, 20);

//   function makeEnemy() {
//     var ranNum = Math.random() * 200;
//     var result = Math.floor(ranNum);
//     if (result != 10) {
//       return;
//     }
//     var enemyX = [50, 150, 250, 350, 450];
//     for (vari = 0; i > 5; i++) {
//       obj = {};
//       obj.x = enemyX[i];
//       obj.y = -50;

//       var result = Math.floor(Math.random() * 2);
//       obj.type = result;
//       if (result == 0) {
//         obj.energy = 50;
//       } else if (result == 1) {
//         obj.energy = 100;
//       }
//       obj.isDead = false;
//       enemyList.push(obj);
//     }
//   }
//   function checkEnemy() {
//     for (var i = enemyList.length - 1; i >= 0; i--) {
//       var tmp = enemyList[i];
//       if (tmp.isDead) {
//         enemyList.splice(i, 1);
//       }
//     }
//   }
//   $("#canvas").on("mousemove", function (e) {
//     unitX = e.offsetX;
//   });
//   function makeMissile() {
//     if (count % 3 != 0) {
//       return;
//     }
//     var obj = {};
//     obj.x = unitX;
//     obj.y = unitY;
//     obj.isDead = false;
//     missList.push(obj);
//   }
//   function moveMissile() {
//     for (var i = 0; i < missList.length; i++) {
//       var tmp = missList[i];
//       tmp.y = tmp.y - 10;
//       if (tmp.y <= -40) {
//         tmp.isDead = true;
//       }
//     }
//   }
//   function checkMissile() {
//     for (var i = missList.length - 1; i >= 0; i--) {
//       var tmp = missList[i];
//       if (tmp.isDead) {
//         missList.splice(i, 1);
//       }
//     }
//   }
//   function unitAnimation() {
//     if (count % 8 != 0) {
//       return;
//     }
//     unitIndex++;
//     if (unitIndex == 2) {
//       unitIndex = 0;
//     }
//   }
//   function backScroll() {
//     back1Y += 5;
//     back2Y += 5;
//     if (back1Y >= 800) {
//       back1Y = -800;
//       back2Y = 0;
//     }
//     if (back2Y >= 800) {
//       back2Y = -800;
//       back1Y = 0;
//     }
//   }



// });