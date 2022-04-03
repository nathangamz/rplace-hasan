var color = [];
for (let index = 0; index < 16; index++) {
    val = (index + 1)
    color[val] = 'square_color_' + val;
}

var rplace = {
    initial_x: 299,
    initial_y: 318,
}

var canvas = {
    width: 151,
    height: 121
}

var coordinate_plane = document.getElementById("coordinate_plane");
var coords = document.getElementById("coords");
var link_field = document.getElementById("link");
var color_field = document.getElementById("color_field");
var color_name_field = document.getElementById("color_name");
var flag_pixelart = null;
flag_pixelart_json = $.getJSON('assets/json/flag_pixelart.json', function (data) {
    flag_pixelart = data;
    place_square();
});

function onTileHovered(x, y) {
    const pos = document.getElementById("pos");
    pos.innerText = "[" + (x + 299) + ", " + (y + 343) + "]";
    pos.style.left = x * 8 + 16 + "px";
    pos.style.top = y * 8 - 6 + "px";
  }

function place_square() {
    var place_canvas = document.getElementById("place_canvas");

    var inner_row = canvas.height;
    row_number = 0;
    col_number = 0;

    for (var [onechar, value] of Object.entries(flag_pixelart.map)) {

        col_number++;
        if (Number.isInteger(onechar / canvas.width)) {
            col_number = 0;
            row_number++;
        }
        var square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(color[value]);
        square.dataset.color = color[value];
        square.dataset.cx = rplace.initial_y + row_number;
        square.dataset.cy = rplace.initial_x + (col_number + 1);


        square.addEventListener("mouseover", onTileHovered(square.dataset.cx, square.dataset.cy));
        canvas_row.append(square);
    }

}