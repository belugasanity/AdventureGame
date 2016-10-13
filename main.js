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
		else{
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
    var findKey = confirm("You want to stop these evil looking aliens but you spot a key on the ground. Do you pick it up?(yes/no)");
    if(findKey == true){
      items.keys = 1;
      alert("You have " + items.keys +" key(s)");
    }
    else{
      alert("bummer, you might have needed that key");
    }
    console.log(items.keys);
  }
