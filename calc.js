// ************************************ DECLARATION *********************************************
let dis = document.getElementById("result");
let upper = document.getElementById("subtext");
let marr = [];
// **********************************************************************************************



// ****************************************** DISPLAY INTO SCREEN **********************************
function display(val) {
    // if(parseInt(val)>=0 && parseInt(val)<=9 && (upper.charAt(upper.value.length-1)=='=')) {
    //     dis.value = val;
    // } else {
        dis.value += val;
    // }
}
// **********************************************************************************************



// ************************************ FIRST ROW ************************************************
function textChange() {
    let btntxt = document.getElementById("btntxt").innerHTML;
    if(btntxt == 'DEG')
        document.getElementById("btntxt").innerHTML = 'RAD';
    else
        document.getElementById("btntxt").innerHTML = 'DEG';
}

function fe() {
    var cb = document.getElementById('btn-check');
    if(cb.checked == true) {
        if(dis.value!='') {
            const fE = parseFloat(dis.value);
            dis.value = fE.toExponential();
        } else {
            const fE = 0;
            dis.value = fE.toExponential();
        }
    }
}
// ************************************************************************************************



// *************************************** MEMORY FUNCTIONS ***************************************
function ms() {
    if(dis.value == '') {
        marr.push(0);
    }
    if(marr[marr.length-1] != dis.value) {
        marr.push(parseFloat(dis.value));
    }
    document.querySelector('#mc').disabled = false;
    document.querySelector('#mr').disabled = false;
    document.querySelector('#m').disabled = false;
    console.log(marr);
}

function mr() {
    dis.value = marr[marr.length-1];
    console.log(marr);
}

function mc() {
    marr.splice(0, marr.length);
    document.querySelector('#mc').disabled = true;
    document.querySelector('#mr').disabled = true;
    document.querySelector('#m').disabled = true;
    console.log(marr);
}

function mplus() {
    marr[marr.length-1] += parseFloat(dis.value);
    console.log(marr);
}

function mminus() {
    marr[marr.length-1] -= parseFloat(dis.value);
    console.log(marr);
}

function m() {
    let html = "<table>";
    for (var i = marr.length-1; i >= 0; i--) {
        html+="<tr>";
        html+="<td>"+marr[i]+"</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById('memory').innerHTML = html;
}
// ************************************************************************************



// *********************************** TRIGONOMETRY ***********************************************
document.getElementById("second").addEventListener("click", function(e) {
    e.stopPropagation();
});
document.getElementById("second1").addEventListener("click", function(e) {
    e.stopPropagation();
});

// INSIDE TRIGONOMETRY
function sin() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sin('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.sin(dis.value);
    } else {
        dis.value = Math.sin(dis.value*(Math.PI/180));
    }
}

function cos() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cos('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.cos(dis.value);
    } else {
        dis.value = Math.cos(dis.value*(Math.PI/180));
    }
}

function tan() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'tan('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.tan(dis.value);
    } else {
        dis.value = Math.tan(dis.value*(Math.PI/180));
    }
}

function sec() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sec('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.cos(dis.value);
    } else {
        dis.value = 1 / Math.cos(dis.value*(Math.PI/180));   
    }
}

function cosec() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cosec('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.sin(dis.value);
    } else {
        dis.value = 1 / Math.sin(dis.value*(Math.PI/180));   
    }
}

function cot() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cot('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.tan(dis.value);
    } else {
        dis.value = 1 / Math.tan(dis.value*(Math.PI/180));   
    }
}


// 2nd INSIDE TRIGONOMETRY
// function sini() {
//     let mode = document.getElementById("btntxt").innerHTML;
//     upper.value = 'arcsin('+ dis.value + ')';
//     if(dis.value>=-1 && dis.value<=1) {
//         if(mode=='RAD')
//             dis.value = Math.asin(dis.value);
//         else
//             dis.value = Math.asin(dis.value*(Math.PI/180));       
//     } else {
//         dis.value = "Please enter value between -1 and 1";
//     }
// }

// function cosi() {
//     if(dis.value>=-1 && dis.value<=1)
//         dis.value = Math.acos(dis.value);
//     else
//         dis.value = "Please enter value between -1 and 1";
// }

// function tani() {
//     if(dis.value>=-1 && dis.value<=1)
//         dis.value = Math.atan(dis.value);
//     else
//         dis.value = "Please enter value between -1 and 1";
// }

// function seci() {
//     if(dis.value>=-1 && dis.value<=1)
//         dis.value = 1 / Math.acos(dis.value);
//     else
//         dis.value = "Please enter value between -1 and 1";
// }

// function coseci() {
//     if(dis.value>=-1 && dis.value<=1)
//         dis.value = 1 / Math.asin(dis.value);
//     else
//         dis.value = "Please enter value between -1 and 1";
// }

// function coti() {
//     if(dis.value>=-1 && dis.value<=1)
//         dis.value = 1 / Math.atan(dis.value);
//     else
//         dis.value = "Please enter value between -1 and 1";
// }


// hyp INSIDE TRIGOMOMETRY
function sinh() {
    upper.value = 'sinh('+ dis.value + ')';
    dis.value = Math.sinh(dis.value);
}

function cosh() {
    upper.value = 'cosh('+ dis.value + ')';
    dis.value = Math.cosh(dis.value);
}

function tanh() {
    upper.value = 'tanh('+ dis.value + ')';
    dis.value = Math.tanh(dis.value);
}

function sech() {
    upper.value = 'sech('+ dis.value + ')';
    dis.value = 1 / Math.cosh(dis.value);
}

function cosech() {
    upper.value = 'cosech('+ dis.value + ')';
    dis.value = 1 / Math.sinh(dis.value);
}

function coth() {
    upper.value = 'coth('+ dis.value + ')';
    dis.value = 1 / Math.tanh(dis.value);
}
// **********************************************************************************************



// ********************************** INSIDE FUNCTION *******************************************
function absolute() {
    upper.value = 'abs('+ dis.value + ')';
    dis.value = Math.abs(dis.value);
}

function ceil() {
    upper.value = 'ceil('+ dis.value + ')';
    dis.value = Math.ceil(dis.value);
}

function floor() {
    upper.value = 'floor('+ dis.value + ')';
    dis.value = Math.floor(dis.value);
}

function rand() {
    dis.value = Math.random(dis.value);
}

function dms() {
    let degree = Math.round(dis.value);
    console.log(degree);
    let minutes = (dis.value - degree)*60;
    console.log(minutes);
    let seconds = (minutes - Math.round(minutes))*60;
    console.log(seconds);
    dis.value = degree+'.'+minutes+seconds;
}

function deg() {}
// **********************************************************************************************



// ************************************ INSIDE 2nd **********************************************
function cube() {
    upper.value = 'cube('+ dis.value + ')';
    dis.value = Math.pow(dis.value, 3);
}

function cubert() {
    upper.value = 'cuberoot('+ dis.value + ')';
    dis.value = Math.pow(dis.value, 1/3);
}

function yrootx() {
    upper.value = '**('+ dis.value;
}

function twotox() {
    upper.value = '2^('+ dis.value + ')';
    dis.value = Math.pow(2, dis.value);
}

function logyx() {}

function etox() {
    upper.value = 'e^(' + dis.value + ')';
    dis.value = Math.pow(Math.E, dis.value);
}
// **********************************************************************************************



// ****************************************** ROW: 1 ********************************************
function dlt() {
    if(dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
}

function pop() {
    if(dis.value=='Error!' || dis.value=='Infinity' || dis.value=='NaN') {
        dis.value = '';
    } else {
        dis.value = dis.value.slice(0, dis.value.length-1);
    }
}
// **********************************************************************************************



// ****************************************** ROW: 2 ********************************************
function sqr() {
    upper.value = 'sqr('+ dis.value + ')';
    dis.value = Math.pow(dis.value, 2);
}

function inverse() {
    upper.value = '1/('+ dis.value + ')';
    dis.value = 1 / dis.value;   
}

function expo() {
    dis.value = Math.exp(dis.value);
}
// **********************************************************************************************



// ****************************************** ROW: 3 ********************************************
function sqroot() {
    upper.value = '√('+ dis.value + ')';
    dis.value = Math.sqrt(dis.value);
}

function factorial() {
    upper.value = 'fact('+ dis.value + ')';
    let fact = 1;
    if(dis.value == 0 || dis.value == 1) {
        fact = 1;
    } else {
        for (let i = 1; i <= dis.value; i++) {
            fact *= i;
        }
    }
    dis.value = fact;
}
// **********************************************************************************************



// ****************************************** ROW: 4 ********************************************
// **********************************************************************************************



// ****************************************** ROW: 5 ********************************************
function tentox() {
    upper.value = '10^('+ dis.value + ')';
    dis.value = Math.pow(10, dis.value);
}
// **********************************************************************************************



// ****************************************** ROW: 6 ********************************************
function log() {
    upper.value = 'log('+ dis.value + ')';
    dis.value = Math.log10(dis.value);
}
// **********************************************************************************************



// ****************************************** ROW: 7 ********************************************
function ln() {
    upper.value = 'ln('+ dis.value + ')';
    dis.value = Math.log(dis.value);
}

function plusminus() {
    if(dis.value>0)
        dis.value = 0-dis.value;
    else
        dis.value = Math.abs(dis.value);
}

function answer() {
    try {
        upper.value = dis.value + '=';
        dis.value = '';
        let x = upper.value.slice(0,-1);
        var y = eval(x);
    } catch {
        y = 'Error!';
    }

    let cb = document.getElementById('btn-check');
    if(cb.checked == true) {
        dis.value = y.toExponential();
    } else {
        dis.value = y;
    }
}
// **********************************************************************************************
