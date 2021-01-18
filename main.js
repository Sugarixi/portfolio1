$(document).ready(function() {

  $(".sparkles").sparkleh({always:false});
  $(".sparkles-always").sparkleh({always:true});

  //init socials toggle
  $("#hrfSocials").click(function() {
    $(".Socials").slideToggle( "slow", function() {
      // Animation complete.
    });
  });

  //init contact me toggle
  $("#hrfContactMe").click(function() {
    $("#myModal")[0].style.display = "block";
  });
  $(".close").click(function() {
    $("#myModal")[0].style.display = "none";
  });

  var curWebsiteMode = "Light";
  //init light/dark toggle
  $("#ColorsToggle").click(function() {
    $("#ModeText").html(curWebsiteMode + " Mode")
    var oldMode = curWebsiteMode;
    if (curWebsiteMode == "Light") {
      $("link")[3].href = $("link")[3].href.replace("lightVars","darkVars")
      curWebsiteMode = "Dark";
    }
    else {
      $("link")[3].href = $("link")[3].href.replace("darkVars","lightVars")
      curWebsiteMode = "Light";
    }

    $.each($("img"), function(index, value) {
      value.src = value.src.replace(oldMode + ".png", curWebsiteMode + ".png")
    });

  });
  
});