var RENDER = (function(){
    "use strict";

    var createTagWithTextNode = function(tagName, text) {
        var domNode = document.createElement(tagName);
        domNode.appendChild(document.createTextNode(text));
        return domNode;
    };

    var createTableHeadDOM = function(columns) {
        var tHead = document.createElement("thead");
        var tr = document.createElement("tr");

        columns.forEach(function(columnName) {
            var th = createTagWithTextNode("th", columnName);
            tr.appendChild(th);
        });

        tHead.appendChild(tr);

        return tHead;
    };

    var createTableRowDOM = function(columns, row) {
        var tr = document.createElement("tr");

        columns.forEach(function(columnName) {
            var td = createTagWithTextNode("td", row[columnName]);
            tr.appendChild(td);
        });

        return tr;
    };

    var createTableBodyDOM = function(columns, rowData) {
        var tBody = document.createElement("tbody");

        rowData.forEach(function(row) {
            tBody.appendChild(createTableRowDOM(columns, row));
        });

        return tBody;
    };

    var createTableDOM = function(rowData) {
        var tableDOM = document.createElement("table");

        var columns = Object.keys(rowData[0]);

        tableDOM.appendChild(createTableHeadDOM(columns));
        tableDOM.appendChild(createTableBodyDOM(columns, rowData));

        return tableDOM;
    };

    return function(domId, data){
        var domObject = document.getElementById(domId);

        // Remove everything before adding
        while(domObject.firstChild){
            domObject.removeChild(domObject.firstChild);
        }

        var header = createTagWithTextNode("h1", data.title);

        domObject.appendChild(header);
        domObject.appendChild(createTableDOM(data.rows));
    };
})();

document.getElementById("renderButton").onclick = function(event) {
    var jsonData = JSON.parse(document.getElementById("jsonField").value);
    RENDER("replaceMe", jsonData);
};
