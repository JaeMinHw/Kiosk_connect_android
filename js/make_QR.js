//input:text에 들어있는 value를 qr코드로 바꿔주는 function
function makeCode(ip) {
    var elText = document.getElementById("text");
    elText.value = ip + '/' + localStorage.getItem("ID") + '/' + localStorage.getItem("PW");

    qrcode.makeCode(elText.value);
}

function send_home() {
    var total_time = 5;
    total_inter = setInterval(function () {
        document.getElementById("time").innerHTML = total_time + "초";
        total_time--;

        if (total_time < 0) {
            location.href = "Kiosk_home.html";
            clearInterval(total_inter);
        }
    }, 1000);
}
