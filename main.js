// Choose your own adventure game v0.1
  function courthouse(){
      alert("welcome to the courthouse, an earthquake has struck and collapsed the building");
      var randomDeath = Math.floor(((Math.random() * 10) + 1)/2);
      var runDeath = ["You trip and hit your head and bleed to death", "An aftershock hits and a wall falls on you", "As you're running someone hits you with thier car", "You get shot in the street by scavengers", "The terror and panic takes over and you suffer a fatal heart attack"];
      
  }
  function firestation(){
    alert("welcome to the firestation");
  }
function intro(){
  alert('Welcome to death of a hero');
	var name = prompt("What is your name?");
	var start = confirm("Are you ready to start the game " + name + "?");
	if(start){
		alert("Welcome to the game " + name);
		var choice = prompt("Where would you like to go? The courthouse or the firestation?").lowerCase();
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
