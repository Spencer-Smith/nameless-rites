/* COLORS:
  red: #640d14
  light: #5e8ca4
  mid: #203341
  dark: #121921;
  black: #080d11
*/
$(document).ready(function() {
  var APIKEY = "c403d9c5c43006fc5cf8dcf6907899b6";
  var token = "5bf4ec5445d7f71baa9b0eea18661aca2d99eeca17e86db0710b153a620a7ef7";
  var boardId = "5a85ce1220d733cce1b21def";
  var list = 0;

  var formatTrelloList = function(cards) {
    console.log(cards);
    results = "";
    for (var j = 0; j < cards.length; j++) {
      results += "<div class=\"card\">";
      results += "<p>" + cards[j].name + "</p>";
      results += "</div>";
    }
    $("#list"+list).append(results); 
    $(".card").css("background", "#ddd");
    $(".card").css("border-radius", "3px");
    $(".card").css("margin", "5px 6px");
    $(".card p").css("color", "#333");
    $(".card p").css("margin", "0 2px");
    $(".card p").css("padding", "2px 0");
    $(".card p").css("cursor", "default");
  }

  var formatTrelloBoard = function(lists) {
    results = "<div id=\"solidbg\">";
    results += "<h2><a href=\"https://trello.com/b/LkuuvtlB/nameless-rites\">Development roadmap on Trello</a></h2>";
    results += "<div id=\"listgrid\">";
    for (var i = 0; i < lists.length; i++) {
      results += "<div class=\"griditem\">";
      results += "<div class=\"trellolist\" id=\"list" + list + "\">";
      results += "<h3>" + lists[i].name + "</h3>";
      Trello.get("lists/"+lists[i].id+"/cards", function(cards, i){
        console.log(i);
        formatTrelloList(cards);
        list++;
      });
      results += "</div>";
      results += "</div>";
    }
    results += "</div>";
    results += "</div>";
    $("#modalroadmap").html(results);
    $("#modalroadmap").css("background", "#2a2c2b");
    $("#solidbg").css("background", "#5e8ca4");
    $("#solidbg").css("height", "90%");
    $("#solidbg").css("margin", "5vh 0");
    $("#solidbg").css("padding", "0 1%");
    $("#solidbg h2").css("padding-left", "1vw");
    $("#listgrid").css("display", "block");
    $("#listgrid").css("height", "85%");
    $("#listgrid").css("width", "100%");
    $(".griditem").css("height", "100%");
    $(".griditem").css("width", (100/lists.length).toString() + "%");
    $(".griditem").css("float", "left");
    $(".trellolist").css("background", "#203341");
    $(".trellolist").css("height", "100%");
    $(".trellolist").css("width", "97%");
    $(".trellolist").css("margin", "0 auto");
    $(".trellolist").css("border-radius", "5px");
    $(".trellolist h3").css("color", "#fff");
    $(".trellolist h3").css("padding-left", "6px");
    $(".trellolist h3").css("margin", "0 0 8px 0");
  }

  Trello.setToken(token);
  Trello.get("board/"+boardId+"/lists", function(lists) {
    formatTrelloBoard(lists);
  });

});
