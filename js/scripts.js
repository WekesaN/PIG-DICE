//USER INTERFACE
$(document).ready(function(){
	$("#play").click(function(event){
		$("#main").show();
		ply1Input = $("input#ply1").val();
		ply2Input = $("input#ply2").val();

		$("#ply1").text(ply1Input);
		$("#ply2").text(ply2Input);

		$("#title1").append(ply1Input);
		$("#title2").append(ply2Input);
		event.preventDefault();
		$("#reg").show();
	})
})

$(document).ready(function() {
	$("#btn").click(function(event){

		event.preventDefault();

		score1 = parseInt(player1.text()) + parseInt(score1)
		$("#output").text(score1);
		$("#player1").show();
		event.preventDefault();

		if (score1 >= $("#input").val()) {
			alert(ply1Input + "YOU WON")
			NEW();
		}

	})
})

//BUSINESS LOGIC
score1 = parseInt(0);
score2 = parseInt(0);

function NEW() {
	location.reload()''
}
function ROLL() {
	player1 = $("dice")
	var valid1 = Math.floor((Math.random() * 6 ) + 1)
	player1.text(valid1);
	if (valid1 == 1) {
		score1 = 0;
		alert(ply1Input + "YOUR SCORE START FROM 1");
	}
}
function ROLL() {
	player2 = $("dice")
	var valid2 = Math.floor((Math.random() * 6 ) + 1)
	player1.text(valid1);
	if (valid2 == 1) {
		score2 = 0;
		alert(ply2Input + "YOUR SCORE START FROM 1");
	}
}

