//Gebruikt data van client om gegevens op te vragen
var today = new Date();

// Script voor day
const weekday =['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;

// Script voor month
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('month').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];

// Script voor clock
function tickingTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = updateTime(m);
    s = updateTime(s);
    
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(tickingTime, 1000);
  }

  function updateTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

// Script voor year
document.getElementById('year').innerHTML = today.getFullYear();


// Script voor timezone

function changeGradient(){
    var now = new Date ();
    var h =now.getHours();

    if h>= 6 && h > 12{
        document.getElementById()
    }

}

// function updateColors(){
// 	var now = new Date();
// 	var h = now.getHours();
		
// 	if (h >= 6 && h < 12){
// 		document.getElementById('header-items').style.backgroundImage = 'radial-gradient(circle at top right, #FFEEE0, #FFB97E)';
// 		document.getElementById('zon').style.backgroundImage = 'linear-gradient(#FFE200, #FF9E6A)';
// 		document.getElementById('clock').style.boxShadow = '3px 4px 12px -1px #DC9F6D';
// 	} else if (h >= 12 && h < 18){ 	
// 		document.getElementById('header-items').style.backgroundImage = 'radial-gradient(circle at top right, #C7EBE3, #6EBEC9)';
// 		document.getElementById('zon').style.backgroundImage = 'linear-gradient(#FDF980, #EBDF7F)';
// 		document.getElementById('clock').style.boxShadow = '3px 4px 12px -1px #5FA4AE';
// 	} else if (h >= 18 && h < 24) {
// 		document.getElementById('header-items').style.backgroundImage = 'radial-gradient(circle at top right, #F3ECFA, #A4AEEB)';
// 		document.getElementById('zon').style.backgroundImage = 'linear-gradient(#FD96E8, #F06AA3)';
// 		document.getElementById('clock').style.boxShadow = '3px 4px 12px -1px #969DCB';
// 	} else {
// 		document.getElementById('header-items').style.backgroundImage = 'radial-gradient(circle at top right, #002376, #001340)';
// 		document.getElementById('zon').style.backgroundImage = 'linear-gradient(#FFFFFF, #CCFFF9)';
// 		document.getElementById('clock').style.boxShadow = '3px 4px 12px -1px #001037';
// 	} 

// }
// 	updateColors();