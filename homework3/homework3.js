document.addEventListener("DOMContentLoaded", function() {

	document.getElementById('create').onclick = () => {
		let name = prompt('Make up a fancy name for your pet!');
		document.getElementById('image').src = 'img/pet.png';
		let pet = new Pet(name);
		document.getElementById('start-screen').style.display = 'none';
	}
	function random(from, to) {
		return Math.ceil(Math.random() * (to - from)) + from;
	}
	function Pet(name) {
		this.name = name;
		this.hunger = random(50, 100);
		this.thirst = random(50, 100);
		this.sadness = random(50, 100);
		this.tiredness = random(50, 100);
		this.anger = random(50, 100);
		this.silliness = random(50, 100);
		this.dead = false;

		this.lifeCycle = (context, key) => {
			let timer = setInterval(() => {
				context -= .1
				
				if (!this.dead) {
					document.getElementById('bar-' + key).style.width = context + '%';

					if (Math.floor(context) == 0) {
						this.dead = true;
						this.die(key);
						clearInterval(timer);
					}
				}
			}, 100) 
			
			document.getElementById('btn-' + key).onclick = () => {
				context = 100;
			}
		}
		this.die = (param) => {
			document.getElementById('image').src = 'img/dead.png';
			alert('Oops. Your pet is dead, ' + param + ' killed him.');
			document.getElementById('start-screen').style.display = 'flex';
		};

		document.getElementById('name').innerHTML = name;
		this.lifeCycle(this.hunger, 'hunger');
		this.lifeCycle(this.thirst, 'thirst');
		this.lifeCycle(this.sadness, 'sadness');
		this.lifeCycle(this.tiredness, 'tiredness');
		this.lifeCycle(this.anger, 'anger');
		this.lifeCycle(this.silliness, 'silliness');
	}
})




// var getThirsty = () => {
// 	var timer = setInterval(() => {
// 		this.thirst -= .1;
// 		document.getElementsByClassName('thirst')[0].style.width = this.thirst + '%';
// 		if (Math.floor(this.thirst) == 40) {
// 			this.die('thirst');
// 		}
// 	}, 100)
	
// 	document.getElementById('drink').onclick = () => {
// 		this.thirst = 0;
// 	};
// }









// function Pet(name) {
// 	this.name = name;
// 	this.hunger = 0;
// 	this.thirst = 0;
	// this.sadness = 3;
	// this.tiredness = 2;
	// this.anger = 3;
	// this.silliness = 1;
	// this.dead = false;

// 	this.eat = function() {
// 		this.hunger = 0;
// 	};
// 	this.drink = function() {
// 		this.thirst = 0;
// 	};
// 	this.walk = function() {
		
// 	};
// 	this.sleep = function() {
		
// 	};
// 	this.smoke = function() {
		
// 	};
// 	this.learnJS = function() {
		
// 	};
// 	this.die = function() {

// 	};

// 	function getHungry() {

// 	}

// 	var start = 0;
// 	var stateBars = document.getElementByClassName('state-bar');
// 	function step(timestamp) {
// 		if (!start) start = timestamp;
// 		var progress = timestamp - start;


// 		stateBars.css({
// 			width
// 		});
// 	}
// }





// function Pet(name) {
// 	this.name = name;
// 	this.hunger = 0;
// 	this.thirst = 0;
// 	this.dead = false;

// 	this.eat = function() {
// 		this.hunger = 0;
// 	};
// 	this.die = function() {

// 	};

// 	var eatBtn = document.getElementById('eat');
// 	var hungerBar = document.getElementById('hunger');
// 	var drinkBtn = document.getElementById('drink');
// 	var thirstBar = document.getElementById('thirst');

// 	var hungerBarWidth = this.hunger;
// 	var thirstBarWidth = this.thirst;

// 	var start = 0;
// 	var progress = 0;

// 	let getHungry = () => {
// 		this.hunger = progress / 600;
// 		hungerBarWidth = this.hunger;
// 	}
// 	let getThirsty = () => {
// 		this.thirst = progress / 600;
// 		thirstBarWidth = this.thirst;
// 	}

// 	function step(timestamp) {
// 	  if (!start) start = timestamp;
// 	  progress = timestamp - start;

// 	  getHungry();
// 	  getThirsty();
	  
// 	  if(progress < 60000) {
// 	    window.requestAnimationFrame(step);
// 	    hungerBar.style.width = hungerBarWidth + '%';
// 	    thirstBar.style.width = thirstBarWidth + '%';
// 	  }
// 	}
//   	window.requestAnimationFrame(step);

// 	actionBtn.onclick = () => {
// 	  start = 0;
// 	  progress = 0;
// 	  window.requestAnimationFrame(step);
// 	};
// }
// var pet = new Pet('fdsfs');


