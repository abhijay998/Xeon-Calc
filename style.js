let i = 0;
let Bodybg = ['A', 'B', 'C', 'D'];
const DEFpd = "0.25cm";
const DEFbrd = "0.25cm";
const DEFpdT = "0.55cm";
const DEFbrdt = "0.15cm";
const mainWIdth = "205px";

let Styles = {
    body: {
        backgroundImage: `url(./assets/${Bodybg[i]}.jpg)`,
    }, root: {
        blur: `blur(10px)`,
        padding: DEFbrd,
        borderRadius: DEFbrd,
    }, divResult: `
        background-color: white;
        color: black;
        padding: 0.15cm;
        border-radius: ${DEFbrdt};
        width: ${document.getElementById("key").style.width};
        height: 30.31px;
        min-width: ${250}px;
        cursor: pointer;
        border:none;
        outline: none;
        font-size: 20px;
        font-family: consolas;
        font-wieght: 900;
    `, CalcbtnGrid: `
        display: grid;
        grid-template-columns: repeat(4, 0.5fr);
    `, Calcbtn: {
        RowOne: `
            background-color: white;
            color: black;
            padding: 0.15cm;
            border-radius: 0.10cm;
            width: 60px;
            hieght: 80px;
            margin-top: 5px;
            margin-right: 5px;
            font-family: monospace;
        `,
        Plus: `
            background-color: white;
            color: black;
            padding: 0.15cm;
            border-radius: 0.10cm;
            width: 50px;
            hieght: 100px;
            margin-top: 5px;
            margin-right: 5px;
            font-family: monospace;
        `,
        PurpleOne: `
            background-color: #623CEA;
            color: white;
            padding: 0.15cm;
            border-radius: 0.10cm;
            width: 60px;
            hieght: 80px;
            margin-top: 5px; 
            margin-right: 5px;
            font-family: monospace;
        `,
        RedOne: `
            background-color: #9FD8CB;
            color: white;
            padding: 0.15cm;
            border-radius: 0.10cm;
            width: 60px;
            hieght: 80px;
            margin-top: 5px; 
            margin-right: 5px;
            font-family: monospace;
    `,
        blackOne: `
            background-color: #172A3A;
            color: white;
            padding: 0.15cm;
            border-radius: 0.10cm;
            width: 60px;
            hieght: 80px;
            margin-top: 5px; 
            margin-right: 5px;
            font-family: monospace;
    `, LightOne: `
            background-color: #ffff82;
            color: white;
            padding: 0.15cm;
            border-radius: 0.10cm;
            width: 60px;
            hieght: 80px;
            margin-top: 5px; 
            margin-right: 5px;
            font-family: monospace;
        `
    },

    control: {
        BgChange: function () {
            i += 1;
            if (i > 3) { i = 0; }
            Styles.body.backgroundImage = `url(./assets/${Bodybg[i]}.jpg)`;
            document.body.style.backgroundImage = Styles.body.backgroundImage;
            document.body.style.backgroundSize = "cover";
        }
    }
}

document.body.style.backgroundImage = Styles.body.backgroundImage;
document.body.style.backgroundSize = "cover";
root.style.backdropFilter = Styles.root.blur;
root.style.borderRadius = Styles.root.borderRadius;
root.style.padding = Styles.root.padding;
root.style.minWidth = mainWIdth;
document.getElementById("key").style = Styles.CalcbtnGrid;