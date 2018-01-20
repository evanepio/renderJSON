var RENDER = (function(){
    "use strict";

    var createTagWithTextNode = function(tagName, text) {
        var domNode = document.createElement(tagName);
        domNode.appendChild(document.createTextNode(text));
        return domNode;
    };

    var createTableHeadDOM = function(firstRow) {
        var tHead = document.createElement("thead");
        var tr = document.createElement("tr");

        Object.keys(firstRow).forEach(function(columnName) {
            var th = createTagWithTextNode("th", columnName);
            tr.appendChild(th);
        });

        tHead.appendChild(tr);

        return tHead;
    };

    var createTableRowDOM = function(row) {
        var tr = document.createElement("tr");

        Object.keys(row).forEach(function(column) {
            var td = createTagWithTextNode("td", row[column]);
            tr.appendChild(td);
        });

        return tr;
    }

    var createTableBodyDOM = function(rowData) {
        var tBody = document.createElement("tbody");

        rowData.forEach(function(row) {
            tBody.appendChild(createTableRowDOM(row));
        });

        return tBody;
    };

    var createTableDOM = function(rowData) {
        var tableDOM = document.createElement("table");

        tableDOM.appendChild(createTableHeadDOM(rowData[0]));
        tableDOM.appendChild(createTableBodyDOM(rowData));

        return tableDOM;
    };

    return function(domId, data){
        var domObject = document.getElementById(domId);
        var header = createTagWithTextNode("h1", data.title);

        domObject.appendChild(header);
        domObject.appendChild(createTableDOM(data.rows));
    };
})();

document.getElementById("renderButton").onclick = function(event) {
    var jsonData = JSON.parse(document.getElementById("jsonField").value);
    RENDER("replaceMe", jsonData);
};
