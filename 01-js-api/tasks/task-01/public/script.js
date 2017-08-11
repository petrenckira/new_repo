/* JavaScript here */
window.onload = function () {
    let dropZone = document.querySelector("#drop-zone");
    let buttonSend = document.querySelector("#send");
    let dragInst = new Task(dropZone, buttonSend);
};
class Task {
    constructor(domElement, button) {
        this.element = domElement;
        this.button = button;
        this.files = null;
        this.part=null;
        this.init();
    }

    handleFileSelect(e) {
        let ref = this.element;
        ref.classList.add("green");
        e.stopPropagation();
        e.preventDefault();
        this.files = e.dataTransfer.files;
        for (let i = 0; i < this.files.length; i++) {
            let reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    let copyDom = document.querySelector(".hidden").cloneNode(true);
                    let name = copyDom.querySelector(".name");
                    let size = copyDom.querySelector(".size");
                    let img = copyDom.querySelector("img");
                    img.src = e.target.result;
                    name.innerHTML = theFile.name;
                    size.innerHTML = theFile.size + " B";
                    copyDom.classList.remove("hidden");
                    ref.appendChild(copyDom);
                };
            })(this.files[i]);
            reader.readAsDataURL(this.files[i]);
        }
    }

    handleDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    runSending() {
        this.calcPartProgress();
        for (let i = 0; i < this.files.length; i++) {
            let start = 0;
            this.sendData(this.files[i], start);
        }
    }

    sendData(current, start) {
        let ref=this;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', ENDPOINT_URL, true);
        let data = new FormData();
        data.append('name', current.name);
        data.append('start', start * CHUNK_SIZE);
        let positionChunk = start * CHUNK_SIZE;
        let rest = current.size - positionChunk;
        if (rest < CHUNK_SIZE) {
            data.append('lastChunk', true);
            data.append('chunk', current.slice(positionChunk));
        }
        else {
            data.append('lastChunk', false);
            data.append('chunk', current.slice(positionChunk, (start + 1) * CHUNK_SIZE));
        }
        xhr.send(data);
        xhr.onreadystatechange = function () {
            {
                if (this.readyState == 4) {
                    let res=xhr.responseText;
                    if(JSON.parse(res).fileUrl){
                        ref.renderImg(JSON.parse(res).fileUrl);
                        ref.changeProgress();
                        return;
                    }
                    else {
                        ref.changeProgress();
                        ref.sendData(current, start+1);
                    }

                }
                if (this.status != 200) {
                    console.log('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
                    return;
                }
            }
        }
    }
    calcPartProgress(){
        let quantity=0;
        for(let i=0; i<this.files.length; i++){
            quantity+=(Math.floor(this.files[i].size/CHUNK_SIZE)+1);
        }
        console.log(quantity);
        this.part=100/quantity;
    }
    changeProgress(){
        let part=document.querySelector("#part");
        part.style.width=(+part.style.width.split("%")[0]+this.part)+"%";
    }
    renderImg(url){
        let elem=document.querySelector('#output-result');
        let copyDom = document.querySelector(".hidden").cloneNode(true);
        let img = copyDom.querySelector("img");
        img.src = url;
        copyDom.classList.remove("hidden");
        elem.appendChild(copyDom);
    }

    init() {
        this.element.addEventListener('dragover', this.handleDragOver.bind(this));
        this.element.addEventListener('drop', this.handleFileSelect.bind(this));
        this.button.addEventListener('click', this.runSending.bind(this));

    }

}
