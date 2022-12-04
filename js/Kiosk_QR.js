//input:text에 들어있는 value를 qr코드로 바꿔주는 function
function makeCode(ip) {
    var elText = document.getElementById("text");
    //elText.value = ip + '/' + localStorage.getItem("ID") + '/' + localStorage.getItem("PW");

    elText.value = 'http://172.29.87.155:5000/msg/1234'



    qrcode.makeCode(elText.value);
}



function resMsg() {
    axios.get('http://172.29.87.155:5000/msg')
        .then((res) => {
            if (res.data == '1234') {
                location.href = "Kiosk_cut.html";
            }
            else if (res.data == 'Fail') {
                setTimeout(resMsg, 1500);
            }
        })

}