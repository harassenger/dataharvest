var inputVal = $("#mainInput");
var clearAll = $("#clearAll");
var clearLast = $("#clearLast");
var mainDiv = $("#mainDiv");
var valuesDiv = $("#valuesDiv");
var paraVal;


$(inputVal).keypress(function(e) {
  //paraVal = document.createElement("p");
  //paraVal.innerHTML = inputVal.val().toUpperCase();
  
  paraVal =  $('<p/>').attr({class: "storePara"}).text(inputVal.val().toUpperCase());
  
    if(e.which == 13) {
      
      if($.trim(inputVal.val()) == ''){
        inputVal.attr("placeholder", "NO INPUT");
        setTimeout(function() {
          inputVal.attr("placeholder", "type and press return");
        }, 600);
        
      } else {
          inputVal.attr("placeholder", "");
        setTimeout(function() {
          inputVal.attr("placeholder", "type and press return");  
        }, 200);
                
        inputVal.val("");

        valuesDiv.prepend(paraVal);
      
        valuesDiv.find("p").first().addClass("absPos").animate({top: "415px", fontSize: "20px"}, 150);
        $("#eSpace").animate({height: "20px"}, 150);
        inputVal.prop("disabled", true);
      
        setTimeout(function() {
          valuesDiv.find("p").removeClass("absPos");
          $("#eSpace").animate({height: "0px"}, 0);
          inputVal.prop("disabled", false).focus();
          valuesDiv.animate({height: '+=20px'}, 0);
        }, 200);  
      }
    }
});
  
clearAll.click(function(){
  if (valuesDiv.children().length > 0) {
    valuesDiv.find("p").animate({height: "0px", opacity: "0"}, 300);
    valuesDiv.animate({height: '0px'}, 300);
    $("#eSpace").animate({height: "20px"}, 300);
    inputVal.attr("placeholder", "clearing...");
    
    setTimeout( function() {
      valuesDiv.empty();
    }, 300);
    setTimeout(function() {
      inputVal.attr("placeholder", "type and press return");
    }, 500)
    inputVal.focus();
    inputVal.val("");
  } else {
    inputVal.focus();
    inputVal.val("");
  }
  
}); 
  
clearLast.click(function(){
  clearLast.prop("disabled", true);
  setTimeout( function() {
    clearLast.prop("disabled", false);
  }, 210)
  
  setTimeout( function() {
    valuesDiv.find("p").first().remove();
  }, 210);
  
  valuesDiv.find("p").first()
    .animate({
      opacity: "0", 
      height: "0px"}, 
      200);
  
  inputVal.focus();
  
  if (valuesDiv.children().length > 1) {
    valuesDiv.animate({height: '-=20px'}, 200);
  } else {
    valuesDiv.animate({height: '-=20px'}, 200);
    $("#eSpace").animate({height: "20px"}, 200);
  }  
});

$(document).ready(function () {
  inputVal.attr("placeholder", "type and press return");
  
  $(document).on('click', '.storePara', function () {
    $(this).closest('p')
      .animate({
          opacity: "0", 
          height: "0px"},
          200)
      .delay(200)
      .queue(function() {
        $(this).remove();
      });
    
    inputVal.focus();
    
    if (valuesDiv.children().length > 1) {
      valuesDiv.animate({height: '-=20px'}, 200);
    } else {
      valuesDiv.animate({height: '-=20px'}, 200);
      $("#eSpace").animate({height: "20px"}, 200);
    }
  })
  
  $("#infoDiv").hover(function(){
      $("#mainPic").css("filter", "blur(4px)");
      $(this).css("opacity" , "1");
    }, function(){
      $("#mainPic").css("filter", "blur(0px)");
      $(this).css("opacity" , "0");
});
});


