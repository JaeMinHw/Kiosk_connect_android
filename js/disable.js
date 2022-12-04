function target_disable(who) {
    document.getElementById(who).style.display = 'none';
}

function btnActive(who) {
    const target = document.getElementById(who);
    target.style.display = 'block';
}

function btnDisabled(who) {
    const target = document.getElementById(who);
    target.style.display = 'none';
}