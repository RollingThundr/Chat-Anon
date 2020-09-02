
function loadFile(event){
    document.querySelector('#avatar').getElementsByClassName.backgroundImage = `url(${URL.createObjectURL(event.target.file[0])})`;
}