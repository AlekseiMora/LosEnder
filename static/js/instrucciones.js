$(document).ready(function()
{
    $("nav").addClass("Hidden");
    $("footer").addClass("Hidden");
    $("section").addClass("Hidden")
});


function transEnder(){
	$("span").addClass("Hidden");
	$("nav").removeClass("Hidden");
}

function transJuego(){
	$("nav").addClass("Hidden");
	$("section").removeClass("Hidden");
}