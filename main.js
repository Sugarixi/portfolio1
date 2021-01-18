//Javascriptin kirjoituksessa sain paljon ulkopuolista apua

//lataa scriptin vasta, kunnes koko sivu on ladannut
$(document).ready(function() {

  //init sparkles, added 0.5 seconds delay so all the images will finish loading before executing --TÄTÄ OSIOTA EN OLE KIRJOITTANUT
  setTimeout(function() {
    $(".sparkles").sparkleh({always:false});
    $(".sparkles-always").sparkleh({always:true});
  }, 500);

  //Click event listener jotta Contact me popuppi avautuu ja sulkeutuu
  $("#hrfContactMe").click(function() {
    $("#myModal")[0].style.display = "block";
  });
  $(".close").click(function() {
    $("#myModal")[0].style.display = "none";
  });

  //Muuttuja joka tallentaa nettisivun nykyisen tilan (light/dark)
  var curWebsiteMode = "Light";

  //Click event listener, jotta light/dark mode togglaus toimii
  $("#ColorsToggle").click(function() {
    $("#ModeText").html(curWebsiteMode + " Mode"); //vaihtaa napin tekstin (light/dark)
    var oldMode = curWebsiteMode; //Muuttuja joka tallentaa nettisivun edellisen tilan

    //vaihtaa "<link rel="stylesheet" href="lightVars.css">" lightVars nimen darkVars:iksi
    if (curWebsiteMode == "Light") {
      $("link")[3].href = $("link")[3].href.replace("lightVars","darkVars")
      curWebsiteMode = "Dark";
    }
    else {
      $("link")[3].href = $("link")[3].href.replace("darkVars","lightVars")
      curWebsiteMode = "Light";
    }

    //Vaihtaa kaikkien kuvien nimet xxxLight.png -> xxxDark.png
    $.each($("img"), function(index, value) {
      value.src = value.src.replace(oldMode + ".png", curWebsiteMode + ".png")
    });

  });
  
});