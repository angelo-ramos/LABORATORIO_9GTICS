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
  var arr = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpeg", "image6.jpg"];
  var html = "";
  shuffleArray(arr).forEach(function(item){
    html += "<img src='images/"+item+"' width='130' height='130' style='margin:10px; float:left;'>";
  })
  html += "<br style='clear:both;'/>";

  document.getElementById('result').innerHTML
