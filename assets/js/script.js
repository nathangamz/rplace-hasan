var color = [];
for (let index = 0; index < 16; index++) {
    val = (index + 1)
    color[val] = 'square_color_' + val;
}

var rplace = {
    initial_x: 1701,
    initial_y: 426,
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

    var row_number = 0;
    var col_number = 0;

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
        var cx = (rplace.initial_x + (col_number + 1));
        var cy = (rplace.initial_y + row_number)
        var link = `https://www.reddit.com/r/place/?cx=${cx}&cy=${cy}&px=50`
        square.setAttribute("onmouseover", "onTileHovered(" + cx + ", " + cy + ")");
        square.setAttribute("href", link);


        canvas_row.append(square);
    }

}