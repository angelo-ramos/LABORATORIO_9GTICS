shuffle();

function shuffleArray(arr) {
    for (var i = 0, shuffled = [], randomIndex = 0; i < arr.length; i++) {
        randomIndex = Math.floor(Math.random() *  arr.length);
        while (shuffled.indexOf(arr[randomIndex]) !== -1) {
            randomIndex = Math.floor(Math.random() *  arr.length);
        }
       shuffled.push(arr[randomIndex]);
    }
    
	return shuffled;
}

function shuffle(){
	var arr = ["Abra.png", "Aerodactyl.png", "Alakazam.png", "Arbok.png", "Arcanine.png", "Articuno.png","Beedrill.png","Bellsprout.png"];
	var html = "";
	shuffleArray(arr).forEach(function(item){
		html += "<img src='images/"+item+"' width='130' height='130' style='margin:10px; float:left;'>";
	})
	html += "<br style='clear:both;'/>";
	
	document.getElementById('result').innerHTML = html;
}
