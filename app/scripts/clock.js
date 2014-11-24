var clock = function(){
	var hour;
	var minute;


	this.initialize = function() {
		this.setHour();
		this.setMinute();

		var clock = new Image();
		clock.src = 'images/clock1.png';

		var hourHand = new Image();
		hourHand.src = 'images/secondHand.png'

		var minuteHand = new Image();
		minuteHand.src = 'images/firstHand.png'

		var stage = new Kinetic.Stage({
			container: 'canvas',
			width: 440,
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


		
		var hourStickAngle = this.hour * 30;
		console.log(this.hour);
		hourHand.onload = function() {
			var hourStick = new Kinetic.Image({
				x: stage.getWidth() / 2,
	            y: stage.getHeight() / 2,
	            image: hourHand,
	            draggable: false
			});
			hourStick.setScale({y:-1});
			layer.add(hourStick);
			layer.draw();

			hourStick.rotate(hourStickAngle);
		}


		
		var minuteStickAngle = this.minute * 6;
		console.log(this.minute);

		minuteHand.onload = function() {
			var minuteStick = new Kinetic.Image({
				x: stage.getWidth()/2,
				y: stage.getHeight()/2,
				image: minuteHand,
				draggable: false
			});
			minuteStick.setScale({y:-1});
			layer.add(minuteStick);
			layer.draw();
			minuteStick.rotate(minuteStickAngle);
		}

		//rotate minute stick


		stage.add(layer);

	};

	this.setHour = function() {
		this.hour = Math.floor((Math.random() * (23 - 0 + 1)));
	}
 
	this.setMinute = function() {
		this.minute = Math.floor(Math.random() * (12 - 0 + 1) + 0) * 5;
	}
};
