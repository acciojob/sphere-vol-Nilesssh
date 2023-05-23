const volumeData = document.querySelector("#volume")
const radiusData = document.querySelector("#radius")
const passage = document.querySelector("#passage")
function volume_sphere() {
    //Write your code here
	event.preventDefault();
	volumeData.value = ((4/3)*Math.PI*Math.pow(radiusData.value, 3)).toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
