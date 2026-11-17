import Swiper from "swiper";
import {database} from "../data/simulate-db";

export class Forum {
	constructor() {
		this.popularPosts = database.posts
			.sort((a, b) => {
				if (b.answers.length !== a.answers.length) {
					return b.answers.length - a.answers.length;
				}
				
				return new Date(b['published-date']) - new Date(a['published-date']);
			})
			.slice(0, 3);
		
		this.postsContainer = document.querySelector('.forum__swiper .swiper-wrapper');
		
		this.popularPosts.forEach(post => {
			this.renderPosts(post)
		})
		
		this.swiper()
	}
	
	renderPosts(post){
		const postWrapper = document.createElement('div');
		postWrapper.classList.add('forum__post', 'post', `post_${post.id}`, 'swiper-slide');
		
		const postMainInfo = document.createElement('div');
		postMainInfo.classList.add('post__main-info');
		
		const postBg = document.createElement('div');
		postBg.classList.add('post__bg');
		const totalPosts = document.querySelectorAll('.post').length + 1;

		postBg.innerHTML = `
		<img src="img/blog/post-bg-${totalPosts}.jpg" alt="post-bg">
		`

		const postAvatarDate = document.createElement('div');
		postAvatarDate.classList.add('post__avatar-date');
		
		const postAvatar = document.createElement('div');
		postAvatar.classList.add('post__avatar');
		postAvatar.innerHTML = `
		<img src="img/svg/avatar.svg" alt="avatar">
		`;
		
		const postDate = document.createElement('p');
		postDate.classList.add('post__date');
		postDate.innerText = new Date(post['published-date'])
			.toLocaleDateString('en-GB', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
				timeZone: 'UTC'
			});
		
		const postSubInfo = document.createElement('div');
		postSubInfo.classList.add('post__sub-info');
		
		const postAuthor = document.createElement('p');
		postAuthor.classList.add('post__author');
		const authorData = database.users.find(user => user.id === post.author);
		postAuthor.innerText = authorData.name + ' ' + authorData.surname;
		
		const postQuestion = document.createElement('p');
		postQuestion.classList.add('post__question');
		postQuestion.innerText = post.title;
		
		const postBtns = document.createElement('div');
		postBtns.classList.add('post__btns');
		
		const viewBtn = document.createElement('button');
		viewBtn.classList.add('post__view', 'btn', 'btn_dark');
		viewBtn.innerHTML = `
		 	<span>View answers (${post.answers.length})</span>
		`;
		
		const answerBtn = document.createElement('button');
		answerBtn.classList.add('post__answer');
		answerBtn.innerHTML = `
			<img src="img/svg/answer.svg" alt="answer">

      Answer
		`
		
		postBtns.appendChild(viewBtn);
		postBtns.appendChild(answerBtn);
		
		postAvatarDate.appendChild(postAvatar);
		postAvatarDate.appendChild(postDate);
		
		postMainInfo.appendChild(postBg);
		postMainInfo.appendChild(postAvatarDate);
		
		postSubInfo.appendChild(postAuthor);
		postSubInfo.appendChild(postQuestion);
		postSubInfo.appendChild(postBtns);
		
		postWrapper.appendChild(postMainInfo);
		postWrapper.appendChild(postSubInfo);
		
		this.postsContainer.appendChild(postWrapper);
	}
	
	swiper(){
		const swiper = new Swiper('.forum__swiper.swiper', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			
			breakpoints: {
				375: {
					spaceBetween: 15,
				},
				1024: {
					spaceBetween: 30,
				},
				1920: {
					spaceBetween: 30,
				}
			}
		});
	}
}