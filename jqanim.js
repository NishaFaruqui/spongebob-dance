$(document).ready(function(){
    $("#move").click(function(){ //what happens when you click on button
        $("#divv").animate({ //specifies div
        left: '250px'},
        3000);
        $("#divv").animate({
          top:"+=210px"},
        1200);
        $("#divv").animate({
          left:"-=120px"},
        1000);
        $("#divv").animate({
          top:"-=180px"},
        1200);
    });
    /* $("#opac").click(function(){
        $("#divv").animate({
        left: '250px',
        height:'+=100px',
        width:'+=100px',
        opacity: '0.45'},
        8000);
    }); */

    $("#opac").click(function(){
        $("#divv").animate({
        opacity: '0.45'},
      1600);
        });

    $("#cir").click(function(){
        $("#divv").animate({
        left: '150px',
        height:'+=100px',
        width:'+=100px',
        borderRadius: "200px"},
      2200);
      $("#divv").animate({
      left: '250px',
      height:'-=150px',
      width:'-=150px',
      borderRadius: "150px"},
    2200);
    });

    $("#size").click(function(){
        $("#divv").animate({
        left: '150px',
        height:'-=75px',
        borderRadius: "4px",
        width:'-=80px'},
      2120);
      $("#divv").animate({
      left: '100px',
      height:'+=130px',
      width:'+=20px'},
    2000);
    $("#divv").animate({
    left: '-120px',
    height:'-=30',
    width:'+=120px'},
  1200);
    });

    $("#dance").click(function(){
    $("#image").attr("src", $("#inputBox").val());
        $("#divv").animate({
        right: '+=400px',
        height:'+=100px',
        opacity: '0.35',
        width:'+=100px'},
      250);
      $("#divv").animate({
        left:"+=520px",
        top:"+=30px",
        opacity:"0.85",
        height:"-=160px",
        width:"+=60px",
        borderRadius:"90px"},
      420);
      $("#divv").animate({
        left:"-=180px",
        top:"-=200px",
        opacity:"0.95",
        height:"+=50px",
        width:"-=100px",
        borderRadius:"10px"},
      580);
      $("#divv").animate({
        left:"+=180px",
        top:"+=500px",
        opacity:"0.6",
        height:"+=50px",
        width:"+=350px",
        borderRadius:"1px"},
      410);
      $("#divv").animate({
        left:"+=180px",
        top:"-=560px",
        opacity:"0.8",
        height:"-=150px",
        width:"-=300px",
        borderRadius:"15px"},
      450);
      $("#divv").animate({
        left:"-=650px",
        opacity:"0.62",
        height:"+=90px",
        width:"-=100px",
        borderRadius:"2px"},
      400);
      $("#divv").animate({
        top:"+=300px",
        opacity:"0.9",
        height:"+=80px",
        width:"+=67px",
        borderRadius:"5px"},
      200);
      $("#divv").animate({
        top:"-=100px",
        left: "+=60px",
        opacity:"0.9",
        height:"-=15px",
        width:"-=20px",
        borderRadius:"8px"},
      500);
      $("#divv").animate({
        top:"+=100px",
        left: "+=80px",
        height:"-=10px",
        width:"-=10px",
        opacity:"0.9"},
      500);
      $("#divv").animate({
        top:"-=100px",
        left: "+=80px",
        height:"+=50px",
        width:"+=50px",
        opacity:"0.2"},
      500);
      $("#divv").animate({
        top:"+=100px",
        left: "+=80px",
        height:"-=10px",
        width:"-=10px",
        opacity:"0.4"},
      400);
      $("#divv").animate({
        top:"-=80px",
        left: "+=80px",
        height:"-=80px",
        width:"-=80px",
        opacity:"0.9"},
      400);
    });
    $("#stop").click(function() {
      $("#divv").stop(true);
    });
});
