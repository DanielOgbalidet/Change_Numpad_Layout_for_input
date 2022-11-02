function change() {
    let top = $("#top").val();
    let last = top % 10;
    let number = top.slice(0, -1);

    if(last === 1) {
        last = 7;
    }
    else if(last === 2) {
        last = 8;
    }
    else if(last === 3) {
        last = 9;
    }
    else if(last === 7) {
        last = 1;
    }
    else if(last === 8) {
        last = 2;
    }
    else if(last === 9) {
        last = 3;
    }

    $("#top").val(number + last);
}