$(document).ready(function() {
  var terms, records, starts, ends;

  $("#search").on("click", function() {
    terms = $("#term")
      .val()
      .trim();
    console.log(terms);
    records = $("#records")
      .val()
      .trim();
    console.log(records);
    starts = $("#start-year")
      .val()
      .trim();
    console.log(starts);
    ends = $("#end-year")
      .val()
      .trim();
    console.log(ends);

    if (starts === "" && ends === "") {
      var queryURL =
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        terms +
        "&api-key=CuRi01NzDnMZJCli9yjWMMfOA0PU6CDe&";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(res) {
        console.log(res);
        for (var i = 0; i < records; i++) {
          var a = $("<h5>");
          a.text(res.response.docs[i].headline.main);
          $(".content").append(a);
        }
      });
    } else {
      var queryURL =
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        terms +
        "&api-key=CuRi01NzDnMZJCli9yjWMMfOA0PU6CDe&begin_date=" +
        starts +
        "0101&end_date=" +
        ends +
        "1231";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        for (var i = 0; i < records; i++) {
          var a = $("<h5>");
          a.text(res.response.docs[i].headline.main);
          $(".content").append(a);
        }
      });
    }
  });
  function loopRecord() {
    for (var i = 0; i < records; i++) {
      console.log(response.response.docs[i].headlines.main);
      var a = $("<h5>");
      a.text(res.response.docs[i].headlines.main);
      $(".content").append(a);
    }
  }
});
