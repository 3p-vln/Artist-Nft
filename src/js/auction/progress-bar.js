export class ProgressBar {
	constructor() {
		this.ptogressBarEl = document.querySelector('.auction-info__progress-bar');
		
		if (!this.ptogressBarEl) return;
		
		this.startDate = new Date('2026-08-08T08:00:00');
		this.targetDate = new Date('2026-09-08T08:00:00');
		
		this.update();
		
		this.interval = setInterval(() => {
			this.update();
		}, 1000);
	}
	
	update() {
		const now = new Date();
		
		const totalTime = this.targetDate - this.startDate;
		const elapsedTime = now - this.startDate;
		
		let progress = (elapsedTime / totalTime) * 100;
		
		progress = Math.max(0, Math.min(progress, 100));
		
		this.ptogressBarEl.style.setProperty(
			'--progress',
			`${progress}%`
		);
		
		if (progress >= 100) {
			clearInterval(this.interval);
		}
	}
}