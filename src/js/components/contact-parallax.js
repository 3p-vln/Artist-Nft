export class ContactParallax {
	constructor() {
		this.parallaxContainer = document.querySelector('.contact__bg.bg');
		
		if (!this.parallaxContainer) return;
		
		this.parallaxPurpleDiamond = this.parallaxContainer.querySelector('.diamonds__purple');
		this.parallaxBlueTopDiamond = this.parallaxContainer.querySelector('.diamonds__blue-top');
		this.parallaxBlueButtomDiamond = this.parallaxContainer.querySelector('.diamonds__blue-buttom');
		this.parallaxCube = this.parallaxContainer.querySelector('.bg__cube');
		
		this.forPurpleDiamond = 1.5;
		this.forBlueTopDiamond = 3;
		this.forBlueButtomDiamond = 4;
		this.forCube = 2;
		
		this.speed = 0.01;
		
		this.positionX = 0;
		this.positionY = 0;
		this.coordXprocent = 0;
		this.coordYprocent = 0;
		
		if (window.innerWidth >= 768) {
			this.setMouseParallax();
			this.setMouseParallaxStyle();
		}
	}
	
	setMouseParallaxStyle() {
		const distX = this.coordXprocent - this.positionX;
		const distY = this.coordYprocent - this.positionY;
		
		this.positionX = this.positionX + (distX * this.speed);
		this.positionY = this.positionY + (distY * this.speed);
		
		this.parallaxPurpleDiamond.style.transform = `translate(${this.positionX / this.forPurpleDiamond}px, ${this.positionY / this.forPurpleDiamond}px)`;
		this.parallaxBlueTopDiamond.style.transform = `translate(${this.positionX / this.forBlueTopDiamond}px, ${this.positionY / this.forBlueTopDiamond}px)`;
		this.parallaxBlueButtomDiamond.style.transform = `translate(${this.positionX / this.forBlueButtomDiamond}px, ${this.positionY / this.forBlueButtomDiamond}px)`;
		this.parallaxCube.style.transform = `translate(${this.positionX / this.forCube}px, ${this.positionY / this.forCube}px)`;
	
		requestAnimationFrame(() => this.setMouseParallaxStyle())
	}
	
	setMouseParallax(){
		this.parallaxContainer.addEventListener('mousemove', (e) => {
			const parallaxWidth = this.parallaxContainer.offsetWidth;
			const parallaxHeight = this.parallaxContainer.offsetHeight;
			
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;
			
			this.coordXprocent = coordX / parallaxWidth * 100;
			this.coordYprocent = coordY / parallaxHeight * 100;
			
			console.log(this.coordXprocent, this.coordYprocent);
		})
	}
}