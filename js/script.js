const outputScreen = document.getElementById('output-screen');
const message = document.getElementById('message');
const display = (num) =>{
    outputScreen.value += num;
}
const calculate = () =>{
    if (outputScreen.value === "") {
        message.innerText = 'Please enter number ❌';
    } else {
        message.innerText = '';
        outputScreen.value = eval(outputScreen.value)
    }
}
const clears = () =>{
    outputScreen.value = "";
}
const del = () =>{
    outputScreen.value = outputScreen.value.slice(0,-1);
}
