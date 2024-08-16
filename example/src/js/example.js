import { CameraCap } from 'camera';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CameraCap.echo({ value: inputValue })
}
