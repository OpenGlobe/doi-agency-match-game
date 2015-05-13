var allNames = ['blm', 'nps', 'bor'];

var origXPos = [];
var origYPos = [];
var attempts = 0;
var correct = 0;

var captions = [];
captions[0] = "Pictured here are just some of Idaho's wild horses.  The Bureau of Land Management studies these areas to determine how many horses the area can support, and manages the National Adobt-a-Horse program to find good homes for any excess wild horses.  Mature horses average approximately 1000 pounds and may be gray, black, bay, sorrel, red roan and pintos.";
captions[1] = "Grand Canyon National Park is hailed as one of the Seven Wonders of the World.  Nearly five million people see the 1 mile deep Grand Canyon each year.";
captions[2] = "The Hoover Dam and Lake Mead Recreational Area are two iconic locations about 40 minutes southeast of Las Vegas, Nevada.  Lake Mead was formed by the Hoover Dam and is the largest reservoir in the United States.  Activities include boating, water skiing, canoeing, kayaking and scuba diving.  You can also camp, bike and hike along the lakes shores.";


function tattoosInit() {
	//console.log("ready");
	
	$("#detail").hide();
	$("#shareCon").hide();

	$( ".draggable" ).draggable({ revert: "valid" });
	$( ".droppable" ).droppable({
      hoverClass: "boxHover",
      drop: function( event, ui ) {
        $( this )
         var dragid = ui.draggable.attr("id").substring(1, ui.draggable.attr("id").length);
         var dropid = $(this).attr("id").substring(1, $(this).attr("id").length);
         var dataid = $(this).attr("data-id")
         if (dragid == dropid) {
	   			$("#" + dragid + "inside").css("display", "block");
				$("#t" + dropid + " .messageright").css("display", "inline").delay(1500).fadeOut( "slow" );
				ui.draggable.css("visibility", "hidden");
				attempts ++;
				correct ++;
				$("#numAttempts").text(attempts);
				$("#numCorrect").text(correct);
				showInfo(dataid);

				$(this).click(function() {
					showInfo(dataid);
				});

				if (correct == 3) {
					$("#share").text("It took you " + attempts + " attempts to match them all. Share your score!")
					$("shareBtns").html("hello world");
					$("#shareCon").show();
				}

	         } else {
	         	//console.log("wrong");
	         	$("#t" + dropid + " .messagewrong").css("display", "inline").delay(1500).fadeOut( "slow" );
	         	attempts ++;
	         	$("#numAttempts").text(attempts);
	         }
      	}
    });

    $( ".droppable2" ).droppable();

    $("#detail").click(function() {
		$("#detail").hide();
		$("#detail").animate({ opacity: '0' }, 500);
	});

} 

function showInfo(which) {
	$("#detail").show();
	$("#detail").animate({ opacity: '1' }, 500);
	$("#detail #desc").text(captions[which]);

	var img = new Image();
	img.src = "imgs/big-" + allNames[which] + ".jpg";
	$("#detail #photoCon").empty();
	$("#detail #photoCon").append(img);


}


$(document).ready(function() {
	tattoosInit();

});