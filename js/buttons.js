function resetTextArea() {
    document.getElementById("mainBox").value='';
}

function reverseOrder() {
    let text = document.getElementById("mainBox").value;

    document.getElementById("mainBox").innerHTML = text.split(' ').reverse().join(' ');
    console.log(text);
}
