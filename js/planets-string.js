(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    console.log(planetsArray.join("\n"));

    /**
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // console.log((planetsString += "<li>" + planetsString + "</li>"));

    function makeUL(planetsArray) {
        var list = document.createElement('ul');
        for (var i = 0; i < planetsArray.length; i++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(planetsArray[i]));
            list.appendChild(item)
        }
        return list;
    }

    console.log(makeUL(planetsArray));
})();
