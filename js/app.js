var button = document.getElementById("btn");

function showMenu() {
	var menu = document.getElementById("options-menu");
	if(menu.classList.contains("disabled-menu")){
		menu.classList.remove("disabled-menu");
		menu.classList.add("enabled-menu");
	} else {
		menu.classList.remove("enabled-menu");
		menu.classList.add("disabled-menu");
	}
}

button.addEventListener("click", showMenu); 

var navList = document.getElementsByClassName("nav-list");
for(var i=0; i< navList.length; i++){
	navList[i].addEventListener("click", showMenu);
}





