window.onload=function () {
        let form=document.querySelector(".config-group");
        let table=document.querySelector(".table.table-bordered");
        form.addEventListener("submit",getValues, false);
        table.addEventListener("mouseover", hoverStyle, false);
        table.addEventListener("mouseout", hoverStyle, false);
        table.addEventListener("click", replacing, false);

        function getValues(event) {
                event.preventDefault();
                let rowInput=document.querySelector(".js-config-output-rows").value;
                let columnInput=document.querySelector(".js-config-output-cols").value;
                table.innerHTML="";
                createTable(rowInput, columnInput, table);

        }
        function createTable(rows, columns, table) {
                var fragment = document.createDocumentFragment();
                let thead=document.createElement("thead");
                let tbody=document.createElement("tbody");
                //creating thead
                let trHead=document.createElement("tr");
                let th=document.createElement("th");
                trHead.appendChild(th);
                for(let j=1; j<=columns; j++){
                        let th=document.createElement("th");
                        th.innerHTML="col"+j;
                        trHead.appendChild(th);
                }
                thead.appendChild(trHead);
                //create tbody
                for(let i=1; i<=rows;i++){
                        let tr=document.createElement("tr");
                        let th=document.createElement("th");
                        th.innerHTML="row"+i;
                        tr.appendChild(th);
                        for(let j=1; j<=columns; j++){
                                let td=document.createElement("td");
                                td.innerHTML="R"+i+";C"+j;
                                tr.appendChild(td);
                        }
                        tbody.appendChild(tr);
                }
                fragment.appendChild(thead);
                fragment.appendChild(tbody);
                table.appendChild(fragment);
        }
        function hoverStyle(event) {
                let elem=event.target;
                if(elem.tagName=="TD"){
                        let parentRow=elem.parentNode.firstChild;
                        let index=elem.cellIndex;
                        let parentCell=elem.closest("table").firstChild.firstChild.childNodes[index];
                        if(event.type=="mouseover"){
                                highlightingAdd(elem);
                                highlightingAdd(parentRow);
                                highlightingAdd(parentCell);
                        }
                        else {
                                highlightingRemove(elem);
                                highlightingRemove(parentRow);
                                highlightingRemove(parentCell);
                        }
                }
        }
        function highlightingAdd(elem) {
                elem.className="highlighting";
        }
        function highlightingRemove(elem) {
                elem.className="";
        }
        function replacing (event) {
                let elem=event.target;
                if(elem.tagName=="TD"){
                        let el1=elem.parentNode;
                        let el2=el1.previousElementSibling;
                        let parentRow=el1.parentNode;
                        parentRow.insertBefore(el1, el2);
                        if(event.ctrlKey){
                                parentRow.removeChild(el1);
                        }
                }
        }
};

