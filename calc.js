let dis = document.getElementById("result");
let upper = document.getElementById("subtext");

function display(val) {
    dis.value += val;
}

function answer() {
    try {
        upper.value = dis.value + '=';
        dis.value = '';
        let x = upper.value.slice(0,-1);
        let y = eval(x);
        dis.value = y;
    } catch {
        dis.value = 'Error';
    }

    //     let total = 0;
    //     dis = dis.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    //     while (dis.length) {
    //        total += parseFloat(dis.shift());
    //     };
    //     return total;
}

// var count = 0;
function dlt() {
    if(dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
    // if(count==0) {
    //     if(dis.value != '') {
    //         count++;
    //     }
    //     dis.value = '';
    // } else if(count==1) {
    //     upper.value = '';
    //     count = 0;
    // }   
}

function sqr() {
    upper.value = 'sqr('+ dis.value + ')';
    dis.value = Math.pow(dis.value, 2);
}


// INSIDE TRIGONOMETRY
function sin() {
    upper.value = 'sin('+ dis.value + ')';
    dis.value = Math.sin(dis.value);
}

function cos() {
    upper.value = 'cos('+ dis.value + ')';
    dis.value = Math.cos(dis.value);
}

function tan() {
    upper.value = 'tan('+ dis.value + ')';
    dis.value = Math.tan(dis.value);
}

function sec() {
    upper.value = 'sec('+ dis.value + ')';
    dis.value = 1 / Math.cos(dis.value);
}

function cosec() {
    upper.value = 'cosec('+ dis.value + ')';
    dis.value = 1 / Math.sin(dis.value);
}

function cot() {
    upper.value = 'cot('+ dis.value + ')';
    dis.value = 1 / Math.tan(dis.value);
}

function pop() {
    if(dis.value=='Error' || dis.value=='Infinity' || dis.value=='NaN') {
        dis.value = '';
    } else {
        dis.value = dis.value.slice(0, dis.value.length-1);
    }
}


// INSIDE FUNCTION
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

function deg() {

}


function log() {
    upper.value = 'log('+ dis.value + ')';
    dis.value = Math.log10(dis.value);
}

function ln() {
    upper.value = 'ln('+ dis.value + ')';
    dis.value = Math.log(dis.value);
}

function expo() {
    dis.value = Math.exp(dis.value);
}

function inverse() {
    upper.value = '1/('+ dis.value + ')';
    dis.value = 1 / dis.value;   
}

function sqroot() {
    upper.value = '√('+ dis.value + ')';
    dis.value = Math.sqrt(dis.value);
}

function tentox() {
    upper.value = '10^('+ dis.value + ')';
    dis.value = Math.pow(10, dis.value);
}

function plusminus() {
    if(dis.value>0)
        dis.value = 0-dis.value;
    else
        dis.value = Math.abs(dis.value);
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

document.getElementById("second").addEventListener("click", function(e) {
    e.stopPropagation();
});
document.getElementById("second1").addEventListener("click", function(e) {
    e.stopPropagation();
});


// 2nd INSIDE TRIGONOMETRY
function sini() {
    if(dis.value>=-1 && dis.value<=1)
        dis.value = Math.asin(dis.value);
    else
        dis.value = "Please enter value between -1 and 1";
}

function cosi() {
    if(dis.value>=-1 && dis.value<=1)
        dis.value = Math.acos(dis.value);
    else
        dis.value = "Please enter value between -1 and 1";
}

function tani() {
    if(dis.value>=-1 && dis.value<=1)
        dis.value = Math.atan(dis.value);
    else
        dis.value = "Please enter value between -1 and 1";
}

function seci() {
    if(dis.value>=-1 && dis.value<=1)
        dis.value = 1 / Math.acos(dis.value);
    else
        dis.value = "Please enter value between -1 and 1";
}

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


// INSIDE 2nd
function cube() {
    upper.value = 'cube('+ dis.value + ')';
    dis.value = Math.pow(dis.value, 3);
}

function cubert() {
    upper.value = 'cuberoot('+ dis.value + ')';
    dis.value = Math.pow(dis.value, 1/3);
}

function yrootx() {
}

function twotox() {
    upper.value = '2^('+ dis.value + ')';
    dis.value = Math.pow(2, dis.value);
}

function logyx() {
}

function etox() {
    upper.value = 'e^(' + dis.value + ')';
    dis.value = Math.pow(Math.E, dis.value);
}

function textChange() {
    let btntxt = document.getElementById("btntxt").innerHTML;

    if(btntxt == 'DEG') {
        document.getElementById("btntxt").innerHTML = 'RAD';
    } else if(btntxt == 'RAD') {
        document.getElementById("btntxt").innerHTML = 'GRAD';
    } else {
        document.getElementById("btntxt").innerHTML = 'DEG';
    }
}

function fe() {
    dis.value = dis.value/10 + 'e+1';
}
