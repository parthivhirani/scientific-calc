function display(val) {
    const dis = document.getElementById("result");
    dis.value += val;
}

function answer() {
    const dis = document.getElementById("result");
    try {
        let x = dis.value;
        let y = eval(x);
        dis.value = y;
    } catch {
        dis.value = 'Error';
    }

    // const dis = document.getElementById("result");
    //     let total = 0;
    //     dis = dis.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    //     while (dis.length) {
    //        total += parseFloat(dis.shift());
    //     };
    //     return total;
}

function dlt() {
    const dis = document.getElementById("result");
    dis.value = '';
}

function sqr() {
    const dis = document.getElementById("result");
    dis.value = Math.pow(dis.value, 2);
}

function sin() {
    const dis = document.getElementById("result");
    dis.value = Math.sin(dis.value);
}

function cos() {
    const dis = document.getElementById("result");
    dis.value = Math.cos(dis.value);
}

function tan() {
    const dis = document.getElementById("result");
    dis.value = Math.tan(dis.value);
}

function sec() {
    const dis = document.getElementById("result");
    dis.value = 1 / Math.cos(dis.value);
}

function cosec() {
    const dis = document.getElementById("result");
    dis.value = 1 / Math.sin(dis.value);
}

function cot() {
    const dis = document.getElementById("result");
    dis.value = 1 / Math.tan(dis.value);
}

function pop() {
    const dis = document.getElementById("result");
    if(dis.value=='Error' || dis.value=='Infinity' || dis.value=='NaN') {
        dis.value = '';
    } else {
        dis.value = dis.value.slice(0, dis.value.length-1);
    }
}

function absolute() {
    const dis = document.getElementById("result");
    dis.value = Math.abs(dis.value);
}

function ceil() {
    const dis = document.getElementById("result");
    dis.value = Math.ceil(dis.value);
}

function floor() {
    const dis = document.getElementById("result");
    dis.value = Math.floor(dis.value);
}

function log() {
    const dis = document.getElementById("result");
    dis.value = Math.log10(dis.value);
}

function ln() {
    const dis = document.getElementById("result");
    dis.value = Math.log(dis.value);
}

function expo() {
    const dis = document.getElementById("result");
    dis.value = Math.exp(dis.value);
}

function inverse() {
    const dis = document.getElementById("result");
    dis.value = 1 / dis.value;   
}

function sqroot() {
    const dis = document.getElementById("result");
    dis.value = Math.sqrt(dis.value);
}

function tentox() {
    const dis = document.getElementById("result");
    dis.value = Math.pow(10, dis.value);
}

function plusminus() {
    const dis = document.getElementById("result");
    if(dis.value>0)
        dis.value = 0-dis.value;
    else
        dis.value = Math.abs(dis.value);
}

function factorial() {
    const dis = document.getElementById("result");
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

document.getElementsById("second second1").addEventListener("click", function(e) {
    e.stopPropagation();
});

function colorChange() {
    document.getElementById('second').style.backgroundColor = 'rgb(0,90,158)';
    document.getElementById('second').style.color = 'white';
}
