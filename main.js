// Choose your own adventure game v0.1
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}

function intro(){
  alert('Welcome to death of a hero');
  var name = prompt("What is your name?");
  var start = confirm("Are you ready to start the game " + name + "?");
  if(start){
    alert("Welcome to the game " + name);
    var choice = prompt("Where would you like to go? The courthouse or the firestation?").toLowerCase();
    if(choice == "courthouse"){
      courthouse();
    }
    else if(choice == "firestation"){
      firestation();
    }
  }
  else{
    intro();
  };
}
intro();


function courthouse(){
      alert("welcome to the courthouse, an earthquake has struck and collapsed the building");
      var randomDeath = Math.floor(((Math.random() * 10) + 1)/2);
      var runDeath = ["You trip and hit your head and bleed to death", "An aftershock hits and a wall falls on you", "As you're running someone hits you with thier car", "You get shot in the street by scavengers", "The terror and panic takes over and you suffer a fatal heart attack"];
      if(randomDeath <= 5){
        console.log(runDeath[randomDeath] + " on " + day);
      }
  }



  function firestation(){
    var items = {
  keys: 0,
  matches: 0,
  grenades: 0,
  gas: 0
}
    
    alert("You're on your way to the firestation");
    alert("On your way you see aliens coming up out of the sewers");
    var findKey = confirm("You want to stop these evil looking aliens but you spot a key on the ground. Do you pick it up?(okay = yes)");
    if(findKey == true){
      items.keys = 1;
      alert("You have " + items.keys +" key(s)");
    }
    else{
      alert("bummer, you might have needed that key");
    }
    console.log(items.keys);
    alert("You decide to turn down an alley to avoid the aliens");
    alert("As you hide behind some crates you notice that one of the crates has some items in it.");
    var newItem = prompt("You can only pick up one of the items, which do you chose? The grenade or the matches?");
    if(newItem == "grenade"){
      items.grenades = 1;
      alert("You have " + items.grenades + " grenade(s)");
    }
    else if(newItem == "matches"){
      items.matches = 1;
      alert("You have " + items.matches + "match");
    }
    else{
      firestation();
    }
    alert("After collecting your items you continue to the firestation. It seems like this is where all the aliens are going.");
    alert("You work your way closer but there are too many of them. You notice a tanker next to the aliens.");
    if(items.grenades == 1){
      var useGrenade = confirm("The tanker is probably full of something flamable. Would you like to use your grenade?");
      if(useGrenade == true){
        alert("You throw the grenade and manage to run around a building just in time to escape the explosion and you save the town from the aliens!");
        alert("Congrats you are a hero and didn't die.");
      }else{
        alert("You chose not to use your grenade and you die as the air force sends a missile in to destroy the aliens.");
      }
    }else if(items.matches == 1){
      var useMatch = confirm("The tanker is probably full of something flamable. Would you like to use your match?");
      if(useMatch == true){
        alert("You have one match and you push through the crowd and light the fluid leaking from the tanker.");
        alert("Your match causes an explosion and destroys the aliens, unfortunately you also die but you die a true hero.");

      }else{
        alert("You chose not to use your match and blow yourself up, the aliens kill you and eat you.");
      }
  }else{
        alert("You chose not to pick up any items and the aliens abduct you and you die from their tortures and expirements. You die a coward.");
      }
    }

