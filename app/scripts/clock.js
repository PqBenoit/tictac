var clock = function(){
	var hour;
	var minute;
	var dayTime;

	this.initialize = function(clockNumber) {
		this.setHour();
		this.setMinute();
		console.log(this.hour);
		console.log(this.minute);

		if(this.hour >= 12)
			this.dayTime = 'Après-midi';
		else
			this.dayTime = 'Matin';

		var clock = new Image();
		clock.src = 'images/clock' + clockNumber + '.png';

		var hourHand = new Image();
		hourHand.src = 'images/secondHand.png'

		var minuteHand = new Image();
		minuteHand.src = 'images/firstHand.png'

		var stage = new Kinetic.Stage({
			container: 'canvas',
			width: 442,
			height: 456
		});
		
		var layer = new Kinetic.Layer();

		clock.onload = function(){
			var background = new Kinetic.Image({
				x: 0,
	            y: 0,
	            image: clock,
	            draggable: false
			});

			layer.add(background);
	        layer.draw();
		}

		var minuteStickAngle = this.minute * 6;
		minuteHand.onload = function() {
			var minuteStick = new Kinetic.Image({
				x: stage.getWidth()/2,
				y: stage.getHeight()/2 - 5,
				image: minuteHand,
				draggable: false
			});
			minuteStick.setScale({y:-1});
			minuteStick.rotate(minuteStickAngle);
			layer.add(minuteStick);
			layer.draw();
		}

		var hourStickAngle = this.hour * 30;
		hourHand.onload = function() {
			var hourStick = new Kinetic.Image({
				x: stage.getWidth() / 2,
	            y: stage.getHeight() / 2 - 5,
	            image: hourHand,
	            draggable: false
			});
			hourStick.setScale({y:-1});
			hourStick.rotate(hourStickAngle);
			layer.add(hourStick);
			layer.draw();
		}

		stage.add(layer);
	};

	this.setHour = function() {
		this.hour = Math.floor((Math.random() * (23 - 0 + 1)));
	}
 
	this.setMinute = function() {
		this.minute = Math.floor(Math.random() * (11 - 0 + 1) + 0) * 5;
	}
};
