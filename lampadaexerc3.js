 /*  const off = document.getElementById('lampada-off.gif');
off.onclick = function() {
    if (off.src.match("lampada-on")) {
        off.src="lampada-off.gif";
    } else {
        off.src="lampada-on.gif";
    }
};*/

var btn = document.getElementById(`clicker`)
var sensor = document.getElementById(`lampadaoff`)
btn.onclick = function () {
    if(btn.value === `Ligar`){
        sensor.src =`../img/lampada-on.gif`
        btn.value = `Apagar`
        btn.innerHTML = `Apagar`
    } else {
        sensor.src = `../img/lampada-off.gif`
        btn.value = `Ligar`
        btn.innerHTML = `Ligar` 
    }
}


