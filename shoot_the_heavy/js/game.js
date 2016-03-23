$(document).ready(function(){
  
  //generates Heavy every 3 seconds
  setInterval(function(){ 
    $("#heavy").toggleClass("newclass");
  }, 3000);
  
  //click to kill = replace Heavy w/ explosion gif
    $("#heavy").click(function(){
    	$("#heavy").css("background", "url('http://1.bp.blogspot.com/-EXrHTPc2OXk/Uv_cGFw56gI/AAAAAAAAAKs/Z-OHd1qeaU0/s1600/kevinexplosionlarge.gif')");

    	setTimeout(
  		function() {
    		$("#heavy").hide();
    		$("#heavy").css("background", "url('http://c3e308.medialib.glogster.com/media/3a/3a4d62b8905738633b6dc2db7f18f5e6a3cf19b8905024e29ae3deb1f7fe1a06/tf2-heavy-3-png.png')");
  		}, 900);

		setTimeout(
  		function() {
			$("#heavy").show();
  		}, 2000);    	

    });

});