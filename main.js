$(document).ready(function () {
    for (var i = 1; i <= 151; i++) {
        $(".pokemon").append("<img id='" + i + "'src='http://pokeapi.co/media/img/" + i + ".png'>");
    }

    $(document).on("click", "img", function () {

        var image = $(this).attr("id");
        $.get("http://pokeapi.co/api/v1/pokemon/" + image + "/", function (res) {

            var html_str = "<h1>" + res.name + "</h1>";
            html_str += "<img id='" + i + "'src='http://pokeapi.co/media/img/" + image + ".png'>";
            html_str += "<h4>Types</h4><ul>";

            for (var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].name + "</li>";
            }

            html_str += "</ul><h4>Height</h4><p>" + res.height + "</p><h4>Weight</h4><p>" + res.weight + "</p>";

            $(".pokedex").html(html_str);
        }, "json");

    });
});
