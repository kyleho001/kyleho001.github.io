$(document).ready(function(){
  
  //generates Heavy every 3 seconds
  setInterval(function(){ 
    $("#heavy").toggleClass("newclass");
  }, 3000);
  
  //click to kill = replace Heavy w/ explosion gif
    $("#heavy").click(function(){
    	//replace with explosion gif
    	$("#heavy").toggleClass("explosion");

    	//hide self

    });

});