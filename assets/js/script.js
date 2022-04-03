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

var flag_pixelart = null;
flag_pixelart_json = $.getJSON('assets/json/flag_pixelart.json', function (data) {
    flag_pixelart = data;
    place_square();
});

function place_square() {
    var place_canvas = document.getElementById("place_canvas");

    row_number = 0;
    col_number = 0;

    for (var [onechar, value] of Object.entries(flag_pixelart.map)) {

        col_number++;
        if (Number.isInteger(onechar / canvas.width)) {
            col_number = 0;
            row_number++;
            var canvas_row = document.createElement("div");
            canvas_row.classList.add("canvas_row");
            canvas_row.dataset.cy = row_number;
            place_canvas.append(canvas_row);
        }
        var square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(color[value]);
        square.dataset.cx = rplace.initial_y + row_number;
        square.dataset.cy = rplace.initial_x + (col_number + 1);
        square.href = 'https://www.reddit.com/r/place/?cx=' + square.dataset.cx + '&cy=' + square.dataset.cy + '&px=146'

        square.addEventListener("mouseover", onTileHovered(row_number, col_number));
        canvas_row.append(square);
    }

}