var Game = {
	demand: function() {
		window.setInterval(function(){
			if (data.milk/10 >= data.rate/10){
				Game.sell(data.rate/10 * data.cows);
			}
		}, 100);
	},

	makemilk: function(){
		window.setInterval(function(){
			if (data.maxmilk > data.milk){
		    	data.milk += 1;
		    	$("#milk").text(format(data.milk));
		    	if (data.milk >= data.click){
			        $('#milk-div').css({'color':'inherit','font-weight':'400'});
			    }
			}
		}, data.speed);
	},

	sell: function(number){
		if (data.milk * number >= 1){
			data.milk -= number;
			data.coins += data.price * number * data.multiplier;
		}
	},

	sellclick: function(){
		if (data.milk >= data.click){
			data.milk -= data.click;
			data.coins += data.price * data.click;
		}
		else{
			$('#milk-div').css({'color':'red','font-weight':'700'});
		}
	},

	upgrade1: function(index){
		nextupgrade(0);
		data.rate += 0.1 * data.multiplier;
	},

	upgrade2: function(index){
		nextupgrade(1);
		data.speed *= 0.80;
		Game.makemilk();
	},

	upgrade3: function(index){
		nextupgrade(2);
		data.price += 0.15;
	},

	upgrade4: function(index){
		nextupgrade(3);
		data.unlockresearch = true;
	},

	upgrade5: function(index){ // Chocolate Milk
		nextupgrade(4);
		data.rate *= 1.15;
	},

	upgrade6: function(index){ // Farmhouse Remodel
		nextupgrade(5);
		data.maxmilk *= 1.25;
	},

	upgrade7: function(index){ // Comfy Housing
		nextupgrade(6);
		data.speed *= 0.80;
		Game.makemilk();
	},

	upgrade8: function(index){ // Low Fat Milk
		nextupgrade(7);
		data.price += 0.5;
	},

	upgrade9: function(index){ // Better filtration
		nextupgrade(8);
		data.rate *= 1.25;
	},

	upgrade10: function(index){ // Modify Genetics
		nextupgrade(9);
		data.speed *= 0.95;
		Game.makemilk();
	},

	upgrade11: function(index){ // Golden Milk
		nextupgrade(10);
		data.price += 0.1;
	},

	upgrade12: function(index){ // Metal Barns
		nextupgrade(11);
		data.rate *= 1.1;
	},

	ascension: function(index){
		$( ".container" ).fadeOut('fast');
		$('.ascendbtn'+data.ascendlevel).remove();
		data.ascendlevel ++;
		generateAscension(data.ascendlevel);
		data.coins = 0;
		data.rate = 0;
		data.speed = 1000;
		data.milk = 100;
		data.maxmilk = 100;
		data.click *= 1;
		data.price = 1;
		data.cows = 1;
		data.rank = 1;
		data.upgrades = 0;
		data.upgradesmax = 20;
		data.multiplier *= 2;
		$('.upgrades').empty();
		generateUpgrades();
		for(i=0; i < upgrades.length; i++){
			upgrades[i].count = 0;
		}

		$( ".container" ).fadeIn(12000);
	},
}

var Research = {
	factoryupgrade: function(){
		buyresearch(0);
		data.maxmilk *= 1.25;
	},
	breedanalysis: function(){
		buyresearch(1);
		data.click *= 2;
	},
	proteininjection: function(){
		buyresearch(2);
		data.rate *= 2;
	},
	selectivebreeding:function(){
		buyresearch(3);
		data.click *= 2;
	},
	cancertransplant:function(){
		buyresearch(4);
		data.coins += 1000;
	},
	valuableclicks:function(){
		buyresearch(5);
		data.click *= 10;
	},
	russianmoolette:function(){
		buyresearch(6);
		places[0].unlock = true;
	}
}


