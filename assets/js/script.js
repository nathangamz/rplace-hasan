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
            var canvas_row = document.createElement("div");
            canvas_row.classList.add("canvas_row");
            canvas_row.dataset.cy = row_number;
            place_canvas.append(canvas_row);
        }
        var square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(color[value]);
        square.dataset.color = color[value];
        square.dataset.cx = rplace.initial_y + row_number;
        square.dataset.cy = rplace.initial_x + (col_number + 1);


        square.addEventListener("click", e => get_value(e));
        canvas_row.append(square);
    }

    function get_value(val) {
        cy = val.target.dataset.cx;
        cx = val.target.dataset.cy;
        link = 'https://www.reddit.com/r/place/?cx=' + cx + '&cy=' + cy + '&px=146';
        color = val.target.dataset.color;
        color_name = val.target.dataset.color_name;
        coords.innerHTML = '( ' + cx + ' , ' + cy + ' )';
        link_field.innerHTML = 'r/place link: <a target="_blank" href="' + link + '">' + link + '</a>';
        color_field.setAttribute("class", "");
        color_field.classList.add(color);
        color_name_field.innerHTML = color_name;
    }

}