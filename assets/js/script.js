var color = [];
for (let index = 0; index < 16; index++) {
    val = (index + 1)
    color[val] = 'square_color_' + val;
}

var rplace_hasbulla = {
    initial_x: 0,
    initial_y: 1345,
}

var rplace_cussy = {
    initial_x: 732,
    initial_y: 1173,
}

var canvas_cussy = {
    width: 168,
    height: 104
}

var canvas_hasbulla = {
    width: 250,
    height: 250
}

var cussy_pixelart = null;
cussy_pixelart_json = $.getJSON('assets/json/cussy.json', function (data) {
    cussy_pixelart = data;
    place_square(canvas_cussy.width, cussy_pixelart, "place_canvas_cussy", rplace_cussy);
});
// var hasbulla_pixelart = null;
// hasbulla_pixelart_json = $.getJSON('assets/json/hasbulla.json', function (data) {
//     hasbulla_pixelart = data;
//     place_square(canvas_hasbulla.width, hasbulla_pixelart, "place_canvas_hasbulla", rplace_hasbulla);
// });

function onTileHovered(x, y) {
    const pos = document.getElementById("pos");
    pos.innerText = "[" + (x + 732) + ", " + (y + 1173) + "]";
    pos.style.left = x * 8 + 16 + "px";
    pos.style.top = y * 8 - 4 + "px"
  };

function place_square(width, jsonData, element, rplace) {
    var place_canvas = document.getElementById(element);

    var row_number = 0;
    var col_number = 0;

    for (var [onechar, value] of Object.entries(jsonData.map)) {

        col_number++;
        if (Number.isInteger(onechar / width)) {
            col_number = 0;
            row_number++;
            var canvas_row = document.createElement("div");
            canvas_row.classList.add("canvas_row");
            place_canvas.append(canvas_row);
        }
        var square = document.createElement("a");
        square.classList.add("square");
        square.style.backgroundColor = "rgb(" + value[0] + "," + value[1] + "," + value[2] + ")"
        var cx = (rplace.initial_x + (col_number + 1));
        var cy = (rplace.initial_y + row_number)
        var link = `https://www.new.reddit.com/r/place/?cx=${cx}&cy=${cy}&px=50`
        square.setAttribute("onmouseover", "onTileHovered(" + col_number + ", " + row_number + ")");
        square.setAttribute("href", link);


        canvas_row.append(square);
    }

}