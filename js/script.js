 



 // besic


function textChange(){
	document.getElementById('txtChng').innerHTML="Javascript is a lite weight, functional and object oriented scripting language.";
}

function play(){
	document.getElementById('bird').src="images/play.gif";
}

function stop(){
	document.getElementById('bird').src="images/stop.jpg";
}

function styleChange(){
	document.getElementById('styleChng').style.fontSize="40px";
}

// output start
function windowAlert(){
	window.alert("welcome");
}

console.log(10 / 5);
// output end

// statement start

let x, y, z, a ;
x=50;
y=10;
z=x-y;
a=x/y;
b=z*a;

function solve(){
	document.getElementById("slv").innerHTML= " " + z + " ";
}

// statement end


// syntax start
function problem(){
	document.getElementById("slv2").innerHTML= a;
}

function problem2(){
	document.getElementById("slv3").innerHTML= b;
}
// syntax end

// operators start

function numberPercentage(){
	document.getElementById("slv4").innerHTML= (x % y);
}

function numberMultiplication(){
	document.getElementById("slv5").innerHTML= (x *= y);
}

let m, n;
m=12;
n=2;
function numberMultiplication2(){
	document.getElementById("slv6").innerHTML= (m **= n);
}
// operators end

// class work start
function hide(){
	document.getElementById('shHdn').style.display="none";
}

function show(){
	document.getElementById('shHdn').style.display="block";
}

// js end
// --------------------------------------------------------------

// jq start 

$(document).ready(function(){

	$('.alrt-jq-btn').on("click", function(){
		alert("This is your alert messages.")
	});

	// hide
	$('.jq-h').on("click", function(){
		$('#jqshhd').hide();
	});
	
	// show
	$('.jq-s').on("click", function(){
		$('#jqshhd').show();
	});

	// toggle
	$('.jq-toggle').on("click", function(){
		$('#jqshhd').toggle();
	});

	// fadeHide
	$('.jq-fh').on("click", function(){
		$('#jqfshhd').fadeOut();
	});

	// fadeShow
	$('.jq-fs').on("click", function(){
		$('#jqfshhd').fadeIn(1000);
	});

	// fadeToggle
	$('.jq-ftoggle').on("click", function(){
		$('#jqfshhd').fadeToggle(2000);
	});

	// slideUp
	$('#sldUph1').on("click", function(){
		$('.sldUp').slideToggle(500);
	})



});





// jq end 

// class work end



