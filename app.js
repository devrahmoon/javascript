var alltyped = null;
var num = null;
var memory = null;
var lastop = null;



function calculatorButonClicked(e) {
    var x = e.target.innerHTML;
    switch (x) {
        case "AC":
            handleAC();
            break;
        case "*":
            hanldeMl();
            break;
        case "/":
            handleDv();
            break;
        case "+":
            hanldeAd();
            break;
        case "-":
            handleSb();
            break;
        case "=":
            handleEq();
            break;
        default:
            handleNumber(x);
            break;
    }
    display();
}

function handleSb() {
    alltyped += "-";
    if (num.length > 0) {
        if (memory === null) {
            memory = eval(num);
        } else {
            if (lastop === "-")
                memory -= eval(num);
            if (lastop === "+")
                memory += eval(num);
        }
    }
    num = null;
    lastop = "-";
}
function handleNumber(x) {
    if (!alltyped) alltyped = "";
    if (!num) num = "";
    alltyped += x;
    num += x;
}

function display() {
    var ele = document.getElementById("alltyped");
    ele.innerHTML = alltyped;
    var ele = document.getElementById("result");
    ele.innerHTML = memory;
    document.getElementById("all").innerHTML = "all: " + alltyped;
    document.getElementById("lop").innerHTML = "lop: " + lastop;
    document.getElementById("num").innerHTML = "num: " + num;
    document.getElementById("mem").innerHTML = "mem: " + memory;
}
function hanldeAd() {
    if (!alltyped) alltyped = "";
    alltyped += "+";
    if (num && num.length > 0 && num !== "+") {
        if (memory) {
            if (lastop === "+")
                memory += eval(num);
            if (lastop === "-")
                memory -= eval(num);
        } else {
            memory = eval(num);
        }
    }
    num = null;
    lastop = "+";
}
function handleEq() {
    if (lastop === "+") {
        memory += eval(num);
    }
    if (lastop === "-") {
        memory -= eval(num);
    }
}
function handleDv() {
    alltyped += "/";
    lastop = "/";
}

function hanldeMl() {
    alltyped += "*";
    lastop = "*";
}

function handleAC() {
    lastop = null;
    alltyped = null;
    num = null;
    memory = null;
}

function getVal(id) {
    return document.getElementById(id).value;
}

function greetMe(name = 'Samy Davis') {
    alert(`Hello ${name}, How is it going`);
}
function addNumbers() {
    let ouput = document.getElementById("out-put");
    let aa = getVal("a");
    let bb = getVal("b");
    ouput.innerHTML = `<b>Addition of ${aa} and ${bb} is ${eval(aa) + eval(bb)}</b>`;
}

function greetByName() {
    var name = getVal("personname");
    alert(`Hello ${name} How are you today!!!!`)
}
function sayMessageTimes() {
    let ouput = document.getElementById("out-put");
    ouput.innerHTML = null;
    let msg = getVal("message").value;
    let num = getVal("times").value;
    if (['damn', 'bastared', 'screw you', 'shit', 'damnation'].includes(msg)) {
        ouput.innerHTML = "<b>Shame on you !!!<b>";
    } else {
        for (let i = 0; i < num; i++) {
            ouput.innerHTML += `${msg} ${i + 1}<br>`;
        }
    }
}
function sayMessageTimes2() {
    let ouput = document.getElementById("out-put");
    ouput.innerHTML = null;
    let msg = getVal("message");
    let num = getVal("times");

    switch (msg) {
        case 'damn':
        case 'damnation':
        case 'shit':
        case 'bastared':
        case 'screw you':
            ouput.innerHTML = "<b>Shame on you !!!<b>";
            break;
        default:
            let i = 0;
            while (i++ < num) {
                ouput.innerHTML += `${msg} ${i}<br>`;
            }
            break;
    }
}