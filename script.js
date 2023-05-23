const radiusData = document.querySelector("#radius")
const volumeData = document.querySelector("#volume")
function volume_sphere() {
    //Write your code here
	event.preventDefault();
	volumeData.value = (4/3)*Math.PI*Math.pov(radiusData.value, 3).toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
