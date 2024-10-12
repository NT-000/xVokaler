let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
let y = 0;
let æ = 0;
let ø = 0;
let å = 0;

let allVocals = 0;

function updateView(){
    let html = '';
    html = /*HTML*/ `
    <div id="app"></div>
    <div><strong>Alle vokaler:</strong>${allVocals}</div>
    <strong>A:</strong> ${a} <br>
    <strong>E:</strong> ${e} <br>
    <strong>I:</strong> ${i} <br>
    <strong>O:</strong> ${o} <br>
    <strong>U:</strong> ${u} <br>
    <strong>Y:</strong> ${y} <br>
    <strong>Æ:</strong>${æ} <br> 
    <strong>Ø:</strong> ${ø} <br>
    <strong>Å:</strong> ${å} <br>
    <input type="text"/>
    <button onclick="printLetters(this.previousElementSibling)">Print Letters</button>
    <button onclick="reset()">Reset</button>`;

    document.getElementById('app').innerHTML = html;
}

function printLetters(input){
let letterString = input.value;


for(index = 0; index <letterString.length; index++){
    let vocal = letterString.charAt(index);

    if(vocal == 'a'){
        a++;
    }

    if(vocal == 'e'){
        e++;
    }

    if(vocal == 'i'){
        i++;
    }

    if(vocal == 'o'){
        o++;
    }

    if(vocal == 'u'){
        u++;
    }
    
    if(vocal == 'y'){
        y++;
    }

    if(vocal == 'æ'){
        æ++;
    }

    if(vocal == 'ø'){
        ø++;
    }

    if(vocal == 'å'){
        å++;
    }
    allVocals = a+e+i+o+u+y+æ+ø+å;

    updateView();
}
}

function reset(){
    a = 0;
    e = 0;
    i = 0;
    o = 0;
    y = 0;
    ø = 0;
    å = 0;
    allVocals = 0;
    updateView();
}

updateView();