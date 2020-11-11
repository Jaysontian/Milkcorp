
window.onload = function(){
	Game.demand();
	Game.makemilk();
	generateUpgrades();
	generateAscension(data.ascendlevel);
	generateResearch();
	generatePlaces();
}

var i = 0;
var txt = ''; /* The text */
var speed = 50;

function type(string){
	var i = 0;
	var txt = string; /* The text */

	if (i < txt.length) {
		var div = $('<p>').prependTo('#news-con');
	    setInterval(function(){
	    	if (i < txt.length) {
			    div.text(div.text() + txt.charAt(i));
			    i++;
			  }
	    }, 35);
	  }
}

function generateUpgrades(){
    var i;

    for (i=0;i<upgrades.length;i++){
    	if (data.rank == upgrades[i].rank){
    		var item = $('<button>').attr({'class':'tooltip upgradebtn'+i,'onclick':upgrades[i].function}).text(upgrades[i].name).appendTo('.upgrades');
	        $('<span>').text('$ '+upgrades[i].base).attr('id','upgradecost'+i).appendTo(item);
	        var maxbar = $('<div>').attr({'class':'barmax', 'id':'barmax'+i}).appendTo(item);
	        $('<div>').attr({'class':'bar', 'id':'bar'+i}).appendTo(maxbar);
	        $('<span>').attr('class','tooltiptext').text(upgrades[i].details).appendTo(item);
    	}
    }
}

function generateAscension(i){
	var item = $('<button>').attr({'class':'tooltip ascendbtn'+i,'onclick':'Game.ascension('+i+')'}).text(ascension[i].name).appendTo('#ascension-con');
    $('<span>').text(format(ascension[i].value)).appendTo(item);
    $('<span>').attr('class','tooltiptext').text(ascension[i].details).appendTo(item);
}

function generateResearch(){
	var i;
	for (i=0;i<research.length;i++){
		var item = $('<button>').attr({'class':'tooltip researchbtn'+i,'onclick':research[i].function}).text(research[i].name).appendTo('#research-con');
	    $('<span>').text('$ '+ format(research[i].cost)).appendTo(item);
	    $('<span>').attr('class','tooltiptext').text(research[i].details).appendTo(item);
	}
}

function generatePlaces(){
	var i;
	for (i=0;i<places.length;i++){
		$('<button>').appendTo('#town-con').text(places[i].name).attr({'onclick':places[i].function, 'id':'place'+i});
	}
	$('.places').children().hide();

}

function  getcost(initialCost, costBase, currentCount) {
    return Math.round(100*(initialCost * Math.pow(costBase, currentCount)))/100;
}

function nextupgrade(index){
	if (data.upgrades < data.upgradesmax -1){	
		data.upgrades ++;
	}
	else{ 								// New Upgrade Rank 
		data.rank ++;
		data.upgrades = 0;
		data.upgradesmax = Math.round(data.upgradesmax * 1.5);
		type('Unlocked rank '+data.rank+' upgrades. You need ' + data.upgradesmax +' more upgrades to unlock the next rank.');
		generateUpgrades();
	}
	
	upgrades[index].count ++;
	data.coins -= upgrades[index].cost;
	data.value += upgrades[index].cost;	return true;
}

function buyresearch(i){
	data.coins -= research[i].cost;
	type(research[i].txt);
	//$('<p>').text(research[i].txt).prependTo('#news-con');
	$('.researchbtn'+i).remove();
	research[i].completed = true;
	data.researchlevel ++;
	return true;
}














// Settings

function notify(title, text){
    $('#notify-title').text(title);
    $('#notify-text').text(text);
    $('#notify').css('display','block');
    $('#notify-modal').css('top','50px');
}

function closenotify(){
    $('#notify').css('display','none');
    $('#notify-modal').css('top','-400px');
}



function doConfirm(title, msg, yestxt, notxt, yesFn, noFn)
{
	$('#notify-modal').css('top','50px');
    var confirmBox = $("#choice");
    confirmBox.find("#choice-title").text(title);
    confirmBox.find("#choice-text").text(msg);
    confirmBox.find(".yes,.no").unbind().click(function()
    {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(yesFn).text(yestxt);
    confirmBox.find(".no").click(noFn).text(notxt);
    confirmBox.show();
}

function devinfo(){
	notify('Developer Note', 'Thanks for checking out Milk Corp.! Even though this game is available to play, it\'s still in it\'s development stages, so please note that during updates your data may be corrupted or lost.')
}

function restart(){
	doConfirm('Moobliterate Innocent Farm','Are you sure you want to blow up your farm into a million pieces and start over again with a plain cow?','I\'m Sure','Nevermind',function(){doConfirm('Animal Abuse is a Crime','Are you really really sure? Think about your poor cows!','Destroy','No Don\'t!',function(){alert('Wiped!')},function(){})},function(){})
}	

function show(id){
	$('.home').hide();
	$('.places').children().hide();
	$(id).fadeIn(1500)
}

function home(){
	$('body').css('background-image','url(./images/bg.jpg)');
	$('.places').children().hide();
	$('.home').fadeIn(1000);
}




