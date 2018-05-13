// USER INTERFACE
//this displays the the main div  
$(document).ready(function(){
	$("#play").click(function(event){
		$("#main").show();
		alert("MAKE SURE YOU INSERT THE MAXIMUM NUMBER BEFORE PLAYING")
		 ply1Input = $("input#ply1").val();
		 ply2Input = $("input#ply2").val();

		$("#ply1").text(ply1Input);
		$("#ply2").text(ply2Input);

		$("#title1").append(ply1Input);
		$("#title2").append(ply2Input);
		event.preventDefault();
		$("#reg").toggle();
	})
})
//business logic
	function NEW() {
		location.reload();
}
score1 = parseInt(0);
score2 = parseInt(0);

function ROLL() {
      player1 = $("#dice")
      var valid1 = Math.floor((Math.random() * 6) + 1)
    player1.text(valid1);
    		if (valid1 == 1) {
			score1 = 0;
			alert(ply1Input + "YOUR SCORE STARTS OVER FROM 1");
		}


		event.preventDefault();
}
function ROLL2() {
      player2 = $("#dice2")
      var valid2 = Math.floor((Math.random() * 6) + 1)
		player2.text(valid2);
			if (valid2 == 1) {
			score2 = 0;
			alert(ply2Input  + "YOUR SCORE STARTS OVER FROM 1");
			}
			event.preventDefault();
}
$(document).ready(function(){
	$("#btn").click(function(event){

		event.preventDefault();

		score1 = parseInt(player1.text()) + parseInt(score1)
		$("#output1").text(score1);
		$("#player1").show();
		event.preventDefault();
				if (score1 >= $("#input").val()) {
		alert(ply1Input + "WON!!!");
		NEW();
		}

	
})
})
$(document).ready(function(){
			$("#btn2").click(function(event){
				// score1 < $("#input").val() |

		// if ( $("#input").val() == "") {
		// alert("please insert max number to be reached");
		// 	}


		score2 = parseInt(player2.text()) + parseInt(score2)

		$("#output2").text(score2);
		$("#player2").show();
		event.preventDefault();
						if ( score2 >= $("#input").val()) {
					alert(ply2Input + "WON!!!");
					NEW();
				}
	})
})