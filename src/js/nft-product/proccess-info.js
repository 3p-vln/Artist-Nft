import {database} from "../data/simulate-db";

export class ProccessInfo{
	constructor(){
		this.idFromUrl = new URLSearchParams(window.location.search).get('id');
		this.nftData = database.nfts.find(item => item.id === this.idFromUrl);
		this.currenUser = JSON.parse(localStorage.getItem("currentUser"));
		
		this.loadInfo()
	}
	
	loadInfo(){
		if(!this.currenUser){
			!this.nftData.premium ?	this.loadInfoNoPremium(this.nftData) : this.loadInfoPremium(this.nftData)
		} else{
			if(this.currenUser.premium){
				this.loadInfoNoPremium(this.nftData)
			} else {
				!this.nftData.premium ?	this.loadInfoNoPremium(this.nftData) : this.loadInfoPremium(this.nftData)
			}
		}
		
	}
	
	loadInfoNoPremium(data){
		const container = document.querySelector('.video');
		
		const img = document.querySelector('.video__img img')
		img.src = data.imgBig;
		
		const playBtn = document.createElement('button');
		playBtn.classList.add('video__play');
		playBtn.innerHTML = `
			<img src="img/svg/play.svg" alt="play">
		`;
		
		const info = document.createElement('div');
		info.classList.add('info', 'video__info');
		
		const authorContainer = document.createElement('div');
		authorContainer.classList.add('info__author', 'author');
		
		const authorImg = document.createElement('div');
		authorImg.classList.add('author_img');
		authorImg.innerHTML = `
			<img src="${data.ownerImg ? data.ownerImg : 'img/components/cards/pechen-auth.png'}" alt="author">
		`;
		
		const author = document.createElement('p');
		author.classList.add('author__name');
		author.innerText = data.owner;
		
		const premium = document.createElement('div');
		premium.classList.add('info__premium');
		premium.innerHTML = `
			<img src="img/svg/crown-gradient.svg" alt="crown">
			
			<span>premium content</span>
		`
		if(!data.premium) premium.style.display = 'none';
			
		const date = document.createElement('div');
		date.classList.add('info__date');
		date.innerText = data.createDate;
		
		authorContainer.appendChild(authorImg);
		authorContainer.appendChild(author);
		
		info.appendChild(authorContainer);
		info.appendChild(date);
		
		container.appendChild(playBtn);
		container.appendChild(info);
	}
	
	loadInfoPremium(data) {
		const container = document.querySelector('.video');
		
		const img = document.querySelector('.video__img img');
		img.src = data.imgBig;
		
		const videoLock = document.createElement('div');
		videoLock.classList.add('video__lock', 'lock');
		
		const lockAvalaible = document.createElement('p');
		lockAvalaible.classList.add('lock__avalaible');
		lockAvalaible.textContent = 'avalaible for premium';
		
		const lockInfo = document.createElement('div');
		lockInfo.classList.add('lock__text');
		lockInfo.innerHTML = `
			<img src="img/svg/lock-white.svg" alt="lock"/>
			
			<p>CONTENT LOCKED</p>
		`;
		
		const lockBtnContainer = document.createElement('div');
		lockBtnContainer.classList.add('lock__btn');
		
		const lockBtn = document.createElement('a');
		lockBtn.classList.add('video__unlock', 'btn', 'btn_black');
		lockBtn.innerHTML = `
			<span>Unlock</span>
			
			<img src="img/svg/left-arr.svg" alt="left-arr"/>
		`;
		lockBtn.href = 'premium.html';
		
		lockBtnContainer.appendChild(lockBtn);
		
		videoLock.appendChild(lockAvalaible);
		videoLock.appendChild(lockInfo);
		videoLock.appendChild(lockBtnContainer);
		
		container.appendChild(videoLock);
	}
	
}