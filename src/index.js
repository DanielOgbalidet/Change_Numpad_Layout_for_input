let time = false;
let timeStart;
let timeEnd;
let timeTotal;

let time2 = false;
let timeStart2;
let timeEnd2;
let timeTotal2;

function change() {
    let top = $("#top").val();
    let last = top.charAt(top.length - 1);
    let number = top.substring(0, top.length - 1);

    if(last === "1") {
        last = 7;
    }
    else if(last === "2") {
        last = 8;
    }
    else if(last === "3") {
        last = 9;
    }
    else if(last === "7") {
        last = 1;
    }
    else if(last === "8") {
        last = 2;
    }
    else if(last === "9") {
        last = 3;
    }
    if(!time) {
        timeStart = (new Date).getTime();
        time = true;
    }
    if(last === "0") {
        timeEnd = (new Date).getTime();
        timeTotal = timeEnd - timeStart;
        $("#total").html(timeTotal);
    }

    $("#top").val(number + last);
}

function timeSecond() {
    let top = $("#top2").val();
    let last = top.charAt(top.length - 1);
    let number = top.substring(0, top.length - 1);

    if(!time2) {
        timeStart2 = (new Date).getTime();
        time2 = true;
    }
    if(last === "0") {
        timeEnd2 = (new Date).getTime();
        timeTotal2 = timeEnd2 - timeStart2;
        $("#total2").html(timeTotal2);
    }

    $("#top2").val(number + last);
}

