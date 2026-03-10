function openCamera() {

// ocultar toda la página
document.body.style.display = "none";

const arContainer = document.createElement("div")

arContainer.style.position = "fixed"
arContainer.style.top = "0"
arContainer.style.left = "0"
arContainer.style.width = "100%"
arContainer.style.height = "100%"
arContainer.style.zIndex = "999999"

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
z-index:999999;
">

<h2>México 🇲🇽</h2>

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