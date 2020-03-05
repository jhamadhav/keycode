var code_value;

//main event
window.addEventListener('keydown', (e) => {
    //console.log(e);
    document.getElementById('code').innerText = e.keyCode;
    code_value = e.keyCode;
    document.getElementById('keyname').innerText = "Name : " + e.code;
});

//double click event to copy text
window.addEventListener("dblclick", copy_key);

//on load function
window.onload = () => {
    code_value = document.getElementById('code').innerText;
    msg_pop('Press any key !');
}
//copy function
function copy_key() {
    copyText = document.getElementById('inp');
    copyText.value = code_value;

    //selecting text
    copyText.style.display = "block";
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyText.style.display = "none";

    //msg pop
    msg_pop("Copied : " + code_value);

}

function msg_pop(txt) {
    //animation popup
    let msg = document.getElementsByClassName('msg')[0];
    msg.innerText = txt;
    msg.style.animation = "pop 1.2s ease";

    msg.addEventListener('animationend', () => {
        msg.style.animation = "";
    });
}


