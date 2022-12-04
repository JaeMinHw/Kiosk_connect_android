// function count(count, name, type,) {
//     // 더하기/빼기
//     filterarr = [];

//     for (let i = 0; i < count; i++) {
//         document.getElementById(name + '' + i).style.opacity = "1.0";
//     }



//     filterarr.push(type);

//     document.getElementById(type).style.opacity = "0.3";

//     console.log(filterarr);
//     sessionStorage.setItem('cut', type);
//     btnActive();

// }

function count(count, key, value) {
    // 더하기/빼기
    filterarr = [];

    for (let i = 0; i < count; i++) {
        document.getElementById(key + '_' + i).style.opacity = "1.0";
    }



    filterarr.push(key + '_' + value);

    document.getElementById(key + '_' + value).style.opacity = "0.3";

    console.log(filterarr);
    sessionStorage.setItem(key, value);
    btnActive('button');

}

function plus(cut, a) {
    if (cut == 0) {
        var co = parseInt(sessionStorage.getItem('count'));
        co = co + 1;
    }
    else if (cut == 1) {
        var co = parseInt(sessionStorage.getItem('count'));
        co = co + 1;
    }


    sessionStorage.setItem('count', co);
    console.log(co);
    btnActive('t_button');
    textArea('count');
}

function minus(cut, a) {
    var co = parseInt(sessionStorage.getItem('count'));

    if (co > 0) {
        co = co - 1;
    }
    else if (co < 0) {
        co = 0;
    }

    if (co == 0) {
        btnDisabled('t_button');
    }
    else if (co != 0) {
        btnActive('t_button');
    }
    console.log(co);
    sessionStorage.setItem('count', co);
    textArea('count');
}

function textArea(a) {
    document.getElementById(a).innerText = sessionStorage.getItem(a);
}