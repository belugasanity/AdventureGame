// Choose your own adventure game v0.1
function userData(){
	var name = prompt("Is your name steve, sue, or stanley?");
	var start = confirm("Are you ready to start the game " + name + "?");
	if(start){
		alert("Welcome to the game " + name);
		function courthouse(){
    alert("welcome to the courthouse");
  }
  function firestation(){
    alert("welcome to the firestation");
  }
  function hospital(){
    alert("welcome to the hospital");
  }
		var choice = prompt("Where would you like to go? The courthouse? the firestation? or the Hospital?");
		if(choice == "courthouse"){
			courthouse();
		}
		else if(choice == "firestation"){
			firestation();
		}
		else{
			hospital();
		}
	}
	else{
		userData();
	};
}
userData();