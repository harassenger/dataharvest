var inputVal = $("#mainInput");
var clearAll = $("#clearAll");
var clearLast = $("#clearLast");
var mainDiv = $("#mainDiv");
var valuesDiv = $("#valuesDiv");
var paraVal;

$( document ).ready(function() {
     
});

$(inputVal).keypress(function(e) {
  paraVal = document.createElement("p");
  paraVal.innerHTML = inputVal.val().toUpperCase();
    if(e.which == 13) {
      
      if($.trim(inputVal.val()) == ''){
        inputVal.attr("placeholder", "NO INPUT");
        setTimeout(function() {
          inputVal.attr("placeholder", "");
        }, 150)
      } else {
        inputVal.attr("placeholder", "");
        
        inputVal.val("");
      
        valuesDiv.prepend(paraVal);
      
        valuesDiv.find("p").first().addClass("absPos").animate({top: "440px", fontSize: "20px"}, 150);
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
  valuesDiv.find("p").animate({opacity: "0"}, 200);
  setTimeout( function() {
    $("#eSpace").animate({height: "20px"}, 300);
    valuesDiv.empty();
    valuesDiv.animate({height: '0px'}, 300);
  }, 200);
  inputVal.focus();
  inputVal.val("");
}); 
  
clearLast.click(function(){
  clearLast.prop("disabled", true);
  setTimeout( function() {
    clearLast.prop("disabled", false);
  }, 210)
  if (valuesDiv.children().length > 1) {
    valuesDiv.find("p").first().animate({opacity: "0", height: "0px"}, 200);
    valuesDiv.animate({height: '-=20px'}, 200);
    inputVal.focus();
    setTimeout( function() {
      valuesDiv.find('p').first().remove();
    }, 210);
  } else {
    valuesDiv.find("p").first().animate({opacity: "0", height: "0px"}, 200);
    valuesDiv.animate({height: '-=20px'}, 200);
    $("#eSpace").animate({height: "20px"}, 200);
    inputVal.focus();
    setTimeout( function() {
      valuesDiv.find('p').first().remove();
    }, 210);
  }
});  
