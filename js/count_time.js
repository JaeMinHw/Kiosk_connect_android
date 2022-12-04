function send_home(count, where) {
    var total_time = count;
    total_inter = setInterval(function () {
        document.getElementById("time").innerHTML = total_time + "초";
        total_time--;

        if (total_time < 0) {
            location.href = where + ".html";
            clearInterval(total_inter);
        }
    }, 1000);
}
