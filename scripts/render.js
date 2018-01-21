var RENDER = (function(){
    "use strict";

    var createDOMNodeWithTextNode = function(tagName, text) {
        var domNode = document.createElement(tagName);
        domNode.appendChild(document.createTextNode(text));
        return domNode;
    };

    var createParentDOMWithChildren = function(parentName, childName, childContents) {
        var parent = document.createElement(parentName);

        childContents.forEach(function(contents) {
            parent.appendChild(createDOMNodeWithTextNode(childName, contents));
        });

        return parent;
    };

    var createTableHeadDOM = function(columns) {
        var tHead = document.createElement("thead");
        var tr = createParentDOMWithChildren("tr", "th", columns);

        tHead.appendChild(tr);

        return tHead;
    };

    var createTableBodyDOM = function(columns, rowData) {
        var tBody = document.createElement("tbody");

        rowData.forEach(function(row) {
            tBody.appendChild(createParentDOMWithChildren("tr", "td", columns.map(function(columnName){
                return row[columnName];
            })));
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

        var header = createDOMNodeWithTextNode("h1", data.title);

        domObject.appendChild(header);
        domObject.appendChild(createTableDOM(data.rows));
    };
})();

document.getElementById("renderButton").onclick = function(event) {
    var jsonData = JSON.parse(document.getElementById("jsonField").value);
    RENDER("replaceMe", jsonData);
};
