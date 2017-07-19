// Locate here your implementation
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/template', false);
    xhr.send();
    if (xhr.status != 200) {
        throw new Error(xhr.status + ': ' + xhr.statusText);
    } else {
        return xhr.responseXML;
    }
}
function getDataJSON() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/profile', false);
    xhr.send();
    if (xhr.status != 200) {
        throw new Error(xhr.status + ': ' + xhr.statusText);
    } else {
        return xhr.responseText;
    }
}


function createHTML() {
    var response=getData();
    GetElementInfo(response);
}
function GetElementInfo(response) {
    var div=document.querySelector(".wrapper");
    var head=response.getElementsByTagName("task-markup")[0];
    var elements=head.childNodes;
    for(var i=0; i<elements.length; i++){
        if(elements[i].tagName=="element"){
            createTag(elements[i], div);
        }
    }
}
function createElement(element, node) {
    var elementsChild=findTag(element, "element");
    if(elementsChild){
        for(var j=0; j<elementsChild.length; j++){
            createTag(elementsChild[j],node);
        }
    }
}

function createTag(element, parent) {
    var tag =element.childNodes[1];
    var node=document.createElement(tag.innerHTML);
    console.log(node);
    addAtr(element, node);
    addValue(element, node);
    createTemplate(element, node);
    createChildren(element, node);
    parent.appendChild(node);
    return node;

}
function addAtr(element, node) {
    var atr=findTag(element, "attrs");
    if(atr){
        for(var k=0; k<atr.length; k++){
            node.classList.value=atr[k].classList.value;
        }
    }
}
 function addValue(element, node) {
     var values=findTag(element, "value");
     if(values){
         for(var j=0; j<values.length; j++){
             node.innerHTML=values[j].innerHTML;
         }
     }

 }
function createChildren(element, node) {
    var childrenArr=findTag(element, "children");
    if(childrenArr){
        for(var p=0; p<childrenArr.length; p++){
            createElement(childrenArr[p],node)
        }
        for(var j=0; j<childrenArr.length; j++){
            createTemplate(childrenArr[j],node)
        }

    }
}
function createTemplate(element, node) {
    var templates=findTag(element, "template");
    if(templates){
        for(var p=0; p<templates.length; p++){
            var temp=templates[p].querySelector("value").innerHTML;
            node.innerHTML=temp;
        }
    }


}

function findTag(element, nameTag) {
    var res=[];
    var children=element.childNodes;
    for(var i=0; i<children.length; i++){
        if(children[i].tagName==nameTag){
            res.push(children[i]);
        }
    }
    if(res.length!==0){
        return res;
    }
}
function createHTMLJson() {
    var response=JSON.parse(getDataJSON());
    addPersonDataAll(response);
    addNameLevel(response);
    console.log(response);
}
function addPersonDataAll(info) {
    for(var key in info.person){
        addPersonData(key, info)
    }

}
function addPersonData(name, info) {
    var element=document.querySelector("."+name);
    var span=element.querySelector("span");
    span.innerHTML=info.person[name];
}
function addNameLevel(info) {
    var tbody=document.querySelector("tbody");
    var tr=tbody.querySelector("tr");
    tr.remove();
    for(var i=0; i<info.skills.length; i++){
        var trCopy=tr.cloneNode(true);
        var name=trCopy.querySelector(".name");
        name.innerHTML=info.skills[i]["name"];
        var level=trCopy.querySelector(".level");
        level.innerHTML=info.skills[i]["level"];
        addLevelClass(level.innerHTML, level);
        tbody.appendChild(trCopy);
    }
}
function addLevelClass(level,node) {
    if(level=="Intermediate"){
        node.className="text-danger";
    }
    if(level=="Advanced"){
        node.className="text-success";
    }
    if(level=="Novice"){
        node.className="text-info";
    }

}

window.onload=function () {
    createHTML();
    createHTMLJson();

}
