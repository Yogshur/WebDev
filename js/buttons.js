function resetTextArea() {
    document.getElementById('mainBox').value='';
}

function reverseOrder() {
    let text = document.getElementById('mainBox').value;
    text = text.split(' ').reverse().join(' ');

    document.getElementById('mainBox').value = text;
}
