document.getElementById("infos").addEventListener("click", function(){
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "block";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";
  });
document.getElementById("contact").addEventListener("click", function(){
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "block";
    document.getElementById("container5").style.display = "none";
  });
document.getElementById("rdv").addEventListener("click", function(){
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "block";
  });
document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("container2").style.display = "grid";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";
  });