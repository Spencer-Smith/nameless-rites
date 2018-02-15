$(document).ready(function() {
  var APIKEY = "b1c2563d64d3be723e2a01bf7214abb6";

  // Weather stuff
  var formatWeatherResults = function(json) {
    var results = "";
    results += '<h2>Weather in ' + json.name + "</h2>";
    for (var i=0; i < Math.min(json.weather.length, 4); i++) {
      results += "<img src=\"http://openweathermap.org/img/w/" + json.weather[i].icon + ".png\"/>";
      results += "<p>" + json.weather[i].description + "</p>";
    }
    results += '<h2>' + json.main.temp + " &deg;F</h2>"

    $("#results").html(results);
    $("#results h2, #results p").css("text-align", "center");
    $("#results h2").css("font-size", "5em");
    $("#results p").css("font-size", "2.8em");
    $("#results p").css("margin", "5px 0");
    $("#results img").css("display", "block");
    $("#results img").css("margin-left", "auto");
    $("#results img").css("margin-right", "auto");
  }

  // Stack overflow stuff
  var formatStackResults = function(json) {
    console.log(json);
    var results = "";
    results += "<div id=\"scroller\">";
    for (var i = 0 ; i < json.items.length; i++) {
      results += "<div class=\"SOquestion\">";
      //Date
      results += "<div class=\"date_row\">";
      var date = new Date(json.items[i].creation_date);
      results += "<p>" + "created: " + date.toLocaleDateString(); + "</p>";
      results += "</div>";
      //Question 
      results += "<div class=\"question_row\">";
      results += "<a href=" + json.items[i].link + "> <h1>" + json.items[i].title;
      results += "</h1></a></div>"
      //Tags, other
      results += "<div class=\"tags_row\">";
      for (var j = 0; j < json.items[i].tags.length; j++) {
        results += "<p class=\"tag\">" + json.items[i].tags[j] + "</p>";
      }
      results += "<p><b>views:</b> " + json.items[i].view_count + "</p>";
      results += "<p><b>answers:</b> " + json.items[i].answer_count + "</p>";
      results += "</div></div>";
    }
    results += "</div>";
    $("#results").html(results);
    $(".SOquestion").css("background", "#eee");
    $(".SOquestion").css("height", "auto");
    $(".SOquestion").css("padding", "8px 5px 24px 5px");
    $(".SOquestion").css("margin", "4px 0");
    $("#results p").css("font-size", "2.3em");
    $("#results p").css("margin", "5px 0");
    $("#results h1").css("font-size", "4em");
    $("#results h1").css("margin", "0");
    $("#results a").css("text-decoration", "none");
    $("#results a").css("color", "#000");
    $("#scroller").css("height", "auto");
    $("#scroller").css("overflow-y", "auto");
    $(".date_row p").css("float", "right");
    $(".tags_row").css("display", "inline");
    $(".tags_row p").css("float", "right");
    $(".tags_row p").css("padding", "0 2px");
    $(".tag").css("float", "left");
    $(".tag").css("background", "#ccc");
    $(".tag").css("margin", "1px");
    $(".tag").css("padding", "1px 3px");
  }

  $("#submit").click(function(e) {
    e.preventDefault();
    var value = $("#textInput").val();
    var myurl = "";
    if (activePage == WEATHER) {
      myurl += "http://api.openweathermap.org/data/2.5/weather?q=";
      myurl += value + ",US&units=imperial" + "&APPID=" + APIKEY;
    } else {
      myurl += "https://api.stackexchange.com/2.2/search?order=desc&";
      myurl += "sort=relevance&intitle=" + value + "&site=stackoverflow";
    }
    $.ajax({
      url : myurl,
      dataType : "json",
      success : function(json) {
        if (activePage == WEATHER)
          formatWeatherResults(json);
        else
          formatStackResults(json);
      }
    });
  });

});
