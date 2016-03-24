$(document).ready(function(){
  
  //generates Heavy every 3 seconds
  setInterval(function(){ 
    $("#heavy").toggleClass("newclass");
  }, 2000);

  //click to kill = replace Heavy w/ explosion gif
    $("#heavy").click(function(){
      var audio = $("#clickSound")[0];
      audio.play();

    	$("#heavy").css("background", "url('http://1.bp.blogspot.com/-EXrHTPc2OXk/Uv_cGFw56gI/AAAAAAAAAKs/Z-OHd1qeaU0/s1600/kevinexplosionlarge.gif')");

    	setTimeout(
  		  function() {
    		  $("#heavy").hide();
    		  $("#heavy").css("background", "url('http://c3e308.medialib.glogster.com/media/3a/3a4d62b8905738633b6dc2db7f18f5e6a3cf19b8905024e29ae3deb1f7fe1a06/tf2-heavy-3-png.png')");
  		  }, 900);

      setTimeout(
        function() {
          $("#heavy").show();
        }, 1500);

    });

      function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        //if it is not colliding, do nothing
        //$("#heavy").css("background", "yellow");
        return false;
      }
      else {
        //if it is colliding, wait 1 sec, then switch to loser page
        setTimeout(function(){
          window.location.href = "http://kyleho001.github.io/shoot_the_heavy/lose/lose.html";
        }, 1000); 
        //$("#heavy").css("background", "green");
        return true;
      }
    }

    window.setInterval(function() {
        $('#result').text(collision($('#scout'), $('#heavy')));
    }, 200);

});