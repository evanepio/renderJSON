(function(){
    "use strict";

    var value = {
            title: "Teenage Mutant Ninja Turtles",
            rows: [
                {
                    "Turtle Name": "Leonardo",
                    "Weapon of Choice": "Katana",
                    "Colour": "Blue",
                    "Favourite Food": "pizza"
                },
                {
                    "Turtle Name": "Raphael",
                    "Weapon of Choice": "Sai",
                    "Colour": "Red",
                    "Favourite Food": "pizza"
                },
                {
                    "Turtle Name": "Michelangelo",
                    "Weapon of Choice": "Nunchuku",
                    "Colour": "Orange",
                    "Favourite Food": "pizza"
                },
                {
                    "Turtle Name": "Donatello",
                    "Weapon of Choice": "Bo Staff",
                    "Colour": "Purple",
                    "Favourite Food": "pizza"
                },
                {
                    "Turtle Name": "Venus de Milo",
                    "Weapon of Choice": "Shamanistic Fighting Orbs",
                    "Colour": "Aqua",
                    "Favourite Food": "pizza??"
                },
            ]
    };

    var jsonField = document.getElementById("jsonField");
    jsonField.value = JSON.stringify(value, null, 2);
})();
