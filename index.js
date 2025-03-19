let n = 0;
let k = 0;
let color = ["#172A3A", "white"];
let colort = ["white", "black"];
let colork = ["#9FD8CB", "#ffff82"]
let braketcount = 2;
const KeysCont = document.getElementById("key");
const Display = document.getElementById("display");
const Result = input(Display, "text", '', null, null, '', function () { null }, Styles.divResult);

function braket(type) {
    if (type == "open") {
        braketcount += 1;
    } else if (type == "closed") {
        braketcount = 2;
    }
}

function appendToDisplay(name) {
    Result.value += name;
} function clear() {
    Result.value = '';
} function Calculate() {
    try {
        Result.value = eval(Result.value);
    }
    catch {
        Result.value = 'err(undifiend result)';
        if (braketcount != 2) {
            Result.value = 'err(Braket Was open)';
        }
    }
}

const btnC = button(`<h1>C<h1>`, KeysCont, function () { clear() }, null, null, Styles.Calcbtn.RedOne);
const btn1 = button(`<h1>1<h1>`, KeysCont, function () { appendToDisplay('1'); }, null, null, Styles.Calcbtn.RowOne);
const btn2 = button(`<h1>2<h1>`, KeysCont, function () { appendToDisplay('2'); }, null, null, Styles.Calcbtn.RowOne);
const btn3 = button(`<h1>3<h1>`, KeysCont, function () { appendToDisplay('3'); }, null, null, Styles.Calcbtn.RowOne);
const btn4 = button(`<h1>4<h1>`, KeysCont, function () { appendToDisplay('4'); }, null, null, Styles.Calcbtn.RowOne);
const btn5 = button(`<h1>5<h1>`, KeysCont, function () { appendToDisplay('5'); }, null, null, Styles.Calcbtn.RowOne);
const btn6 = button(`<h1>6<h1>`, KeysCont, function () { appendToDisplay('6'); }, null, null, Styles.Calcbtn.RowOne);
const btn7 = button(`<h1>7<h1>`, KeysCont, function () { appendToDisplay('7'); }, null, null, Styles.Calcbtn.RowOne);
const btn8 = button(`<h1>8<h1>`, KeysCont, function () { appendToDisplay('8'); }, null, null, Styles.Calcbtn.RowOne);
const btn9 = button(`<h1>9<h1>`, KeysCont, function () { appendToDisplay('9'); }, null, null, Styles.Calcbtn.RowOne);
const btn0 = button(`<h1>0<h1>`, KeysCont, function () { appendToDisplay('0'); }, null, null, Styles.Calcbtn.RowOne);

const btnP = button(`<h1>+<h1>`, KeysCont, function () { appendToDisplay('+'); }, null, null, Styles.Calcbtn.RowOne);
const btnD = button(`<h1>.<h1>`, KeysCont, function () { appendToDisplay('.'); }, null, null, Styles.Calcbtn.RowOne);
const btnM = button(`<h1>-<h1>`, KeysCont, function () { appendToDisplay('-'); }, null, null, Styles.Calcbtn.RowOne);
const btnML = button(`<h1>x<h1>`, KeysCont, function () { appendToDisplay('*'); }, null, null, Styles.Calcbtn.RowOne);
const btnDI = button(`<h1><span>&#247;</span><h1>`, KeysCont, function () { appendToDisplay('/'); }, null, null, Styles.Calcbtn.RowOne);
const btnSQ = button(`<h1>x²<h1>`, KeysCont, function () { appendToDisplay('**2'); }, null, null, Styles.Calcbtn.RowOne);
const btnEP = button(`<h1>xʸ<h1>`, KeysCont, function () { appendToDisplay('**'); }, null, null, Styles.Calcbtn.RowOne);
const btnLS = button(`<h1><<h1>`, KeysCont, function () { appendToDisplay('>'); }, null, null, Styles.Calcbtn.PurpleOne);
const btnGR = button(`<h1>><h1>`, KeysCont, function () { appendToDisplay('<'); }, null, null, Styles.Calcbtn.PurpleOne);
const btnBR = button(`<h1>(<h1>`, KeysCont, function () { appendToDisplay('('); braket('open'); }, null, null, Styles.Calcbtn.blackOne);
const btnBRT = button(`<h1>)<h1>`, KeysCont, function () { appendToDisplay(')'); braket('closed'); }, null, null, Styles.Calcbtn.blackOne);
const pi = button(`<h1>π</h1>`, KeysCont, function () { appendToDisplay('3.14159265359') }, null, null, Styles.Calcbtn.RowOne);
const e = button(`<h1>e</h1>`, KeysCont, function () { appendToDisplay('2.71828182846') }, null, null, Styles.Calcbtn.RowOne);
const Light = button(`<h1>Th</h1>`, KeysCont, function () { ThemeCH() }, null, null, Styles.Calcbtn.LightOne);
const BgChange = button(`<h1>bg</h1>`, KeysCont, function () { Styles.control.BgChange() }, null, null, Styles.Calcbtn.RowOne);
const perc = button(`<h1>%</h1>`, KeysCont, function () { appendToDisplay('/100') }, null, null, Styles.Calcbtn.RowOne);
const eq = button(`<h1>=</h1>`, KeysCont, function () { Calculate(); }, "backgroundColor", colork[k], Styles.Calcbtn.RowOne);

webx.keyEvent({
    keyDown: true,
    key: '=',
    eventCode: function () {
        Calculate();
    }
});

webx.keyEvent({
    keyDown: true,
    key: 'Enter',
    eventCode: function () {
        Calculate();
    }
})

function ThemeCH() {
    n += 1;
    k += 1;
    if (n > 1) { n = 0 }
    if (k > 1) { k = 0 }
    Light.style.backgroundColor = colork[k];
    Result.style.backgroundColor = color[n];
    Result.style.color = colort[n];
    btn1.style.backgroundColor = color[n];
    btn1.style.color = colort[n];
    btn2.style.backgroundColor = color[n];
    btn2.style.color = colort[n];
    btn3.style.backgroundColor = color[n];
    btn3.style.color = colort[n];
    btn4.style.backgroundColor = color[n];
    btn4.style.color = colort[n];
    btn5.style.backgroundColor = color[n];
    btn5.style.color = colort[n];
    btn6.style.backgroundColor = color[n];
    btn6.style.color = colort[n];
    btn7.style.backgroundColor = color[n];
    btn7.style.color = colort[n];
    btn8.style.backgroundColor = color[n];
    btn8.style.color = colort[n];
    btn9.style.backgroundColor = color[n];
    btn9.style.color = colort[n];
    btn0.style.backgroundColor = color[n];
    btn0.style.color = colort[n];

    btnDI.style.backgroundColor = color[n];
    btnDI.style.color = colort[n];
    btnEP.style.backgroundColor = color[n];
    btnEP.style.color = colort[n];
    btnSQ.style.backgroundColor = color[n];
    btnSQ.style.color = colort[n];
    btnML.style.backgroundColor = color[n];
    btnML.style.color = colort[n];
    btnM.style.backgroundColor = color[n];
    btnM.style.color = colort[n];
    btnP.style.color = colort[n];
    btnP.style.backgroundColor = color[n];
    eq.style.backgroundColor = color[n];
    eq.style.color = colort[n];
    pi.style.color = colort[n];
    pi.style.backgroundColor = color[n];
    e.style.backgroundColor = color[n];
    e.style.color = colort[n];
    BgChange.style.backgroundColor = color[n];
    BgChange.style.color = colort[n];
    btnD.style.backgroundColor = color[n];
    btnD.style.color = colort[n];
    perc.style.backgroundColor = color[n];
    perc.style.color = colort[n];
}