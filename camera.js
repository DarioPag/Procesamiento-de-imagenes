function openCamera() {

const arContainer = document.createElement("div")

arContainer.innerHTML = `

<a-scene embedded arjs>

<a-marker preset="hiro" id="mexicoMarker">

<a-image 
src="mexico_flag.png"
rotation="-90 0 0"
width="2"
height="1">
</a-image>

</a-marker>

<a-entity camera></a-entity>

</a-scene>

<div id="infoPanel" style="
position:fixed;
bottom:20px;
left:50%;
transform:translateX(-50%);
background:white;
padding:15px;
border-radius:10px;
display:none;
z-index:99999;
">

<h2>México 🇲🇽</h2>

<iframe width="300" height="180"
src="https://www.youtube.com/embed/2jVYvX1mF3A">
</iframe>

<p><b>Trivia:</b></p>
<p>¿En qué años México fue sede del Mundial?</p>

<button onclick="alert('1970 y 1986')">
Ver respuesta
</button>

</div>

`


document.body.appendChild(arContainer)

const marker = document.querySelector("#mexicoMarker")

marker.addEventListener("markerFound", function(){

document.getElementById("infoPanel").style.display="block"

})

marker.addEventListener("markerLost", function(){

document.getElementById("infoPanel").style.display="none"

})

}