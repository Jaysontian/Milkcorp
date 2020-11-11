var Place = {

	casino: function(){
		show('#casino-con');
		$('body').css('background-image','url(./images/casino.jpg)');
	},

	casinojackpot: function(){
		if (data.coins < 99){
			notify('Poor Guy','You don\'t have enough money! Go sell some milk to earn more!')
		}
		else{
			data.coins -= 99;
			var num = [];
			for (i=0;i < 3; i++){
				num.push(Math.floor((Math.random() * 9) + 1));
			}
			var win = num.every( (val, i, arr) => val === arr[0]);
			$('#jackpotbtn').text(num);
			if (win){
				notify('Your numbers were: ' + num,'Congrats! You hit the jackpot! You earned 1,000 dollars!');
				data.coins += 1000;
			}
			else if (num.length != new Set(num).size){
				notify('Your numbers were: ' + num,'Woo! You almost hit the jackpot! You earned 150 dollars!');
				data.coins += 200;
			}
		}
	},

	casinomonopoly: function(){
		if (data.coins < 500){
			notify('Poor Guy','You don\'t have enough money! Go sell some milk to earn more!')
		}
		else{
			data.coins -= 500;
			var num = [];
			for (i=0;i < 3; i++){
				num.push(Math.floor((Math.random() * 9) + 1));
			}
			var win = num.every( (val, i, arr) => val === arr[0]);
			$('#monopolybtn').text(num);
			if (win){
				notify('Your numbers were: ' + num,'Congrats! You won monopoly! You earned 10,000 dollars!');
				data.coins += 10000;
			}
		}
	},

	casinofate: function(){
		if (data.coins < 499){
			notify('Poor Guy','You don\'t have enough money! Go sell some milk to earn more!')
		}
		else{
			data.coins -= 499;
			var num = Math.floor((Math.random() * 1000) + 1);
			notify('$ '+num, 'You got some money thanks to fate.');
			data.coins += num;
		}
	}
}