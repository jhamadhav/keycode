var code, keyname;

//main event
window.addEventListener('keydown', (e) => {
    console.log(e);
    code.innerText = e.keyCode;
    keyname.innerText = "Name : " + e.code;
});

//onload function
window.onload = () => {
    code = document.getElementById('code');
    keyname = document.getElementById('keyname');
}