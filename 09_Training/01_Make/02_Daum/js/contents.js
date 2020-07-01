var commic_lists_data = [
	{
		figure: {
			figcaption: '쓰레기 머학생',
			author: '수레기',
			state : 'up',
			width: 148,
			height: 106,
		}
	},

	{
		figure: {
			figcaption : '어름치',
			author : '박세가',
			state : 'up',
			width : 148,
			height : 106,
		}
	},
	{
		figure: {
			figcaption : '식귀',
			author : '깡/부랑',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '아싸가 알아버렸다',
			author: '곰브',
			state : 'up',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '찬란한 액션 유치원',
			author: '탐이부/김동찬',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '정상회담스틸레인3',
			author: '양우석/제피가루',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '흑우',
			state : 'sleep',
			author: '유베테/늙슬',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '타원을 그리는 법',
			author: '섬멍',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '교수님을 빚는 중',
			author: '서아',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '조류공포증',
			author: '조눈/리도',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '이대로 멈출 순 없다',
			author: '자룡/공왈',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '망자의 서',
			author: 'GAR2/오쌤',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '그라티아',
			author: '상민/기현',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '굿바이 사돈!',
			author: '교교박',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '리세티',
			author: '한지우',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '노동본색',
			author: '지뚱',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '집행자여',
			author: '종수',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '과격자매단',
			author: '바쉬',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: 'NR 뉴월드',
			author: '전상영',
			width: 148,
			height: 106,
		}
	},
	{
		figure: {
			figcaption: '일단 질러 질렐루야',
			author: 'yami',
			width: 148,
			height: 106,
		}
	}
];

// <li>
//   <a href="#">
//     <figure>
//       <img src="https://i.postimg.cc/sXv31XXK/00158edcb882ad94a1f99d0bb4253c69ce070aee.png"
//         alt="쓰레기 머학생" />
//       <figcaption>
//         <i class="icon up">업데이트</i>
//         <strong>쓰레기 머학생</strong>
//         <span>수레기</span>
//       </figcaption>
//     </figure>
//   </a>
// </li>

(function DOM_Control(global, document, _) {
	'use strict';

	var commic_list = _.el('.commic-list ul');
	// console.log(commic_list.hasChildNodes());

	_.each(commic_lists_data, function (item, index) {
		var figcaption = item.figure.figcaption;
		var author = item.figure.author;
		var state = item.figure.state;
		var img_width = item.figure.width;
		var img_height = item.figure.height;

		// li
		var commic_item = document.createElement('li');

		// a
		var link = document.createElement('a');
		link.setAttribute('href', '#');

		// figure
		var figure = document.createElement('figure');

		// figure > img 
		var figure_img = document.createElement('img');
		figure_img.setAttribute('src', 'images/' + figcaption + '.png');
		figure_img.setAttribute('alt', figcaption);
		figure_img.setAttribute('width', img_width);
		figure_img.setAttribute('height', img_height);

		// figure > figcaption
		var figure_figcaption = document.createElement('figcaption');

		var figcaption_icon = document.createElement('i');
		figcaption_icon.setAttribute('class', 'icon ' + state);
	
		// figcaption > strong
		var figcaption_strong = document.createElement('strong');

		var figcaption_strong_content = document.createTextNode(figcaption);
		figcaption_strong.appendChild(figcaption_strong_content);

		// figcaption > strong > span
		var figcaption_span = document.createElement('span');

		var figcaption_span_content = document.createTextNode(author);
		figcaption_span.appendChild(figcaption_span_content);

		link.appendChild(figure);
		figure.appendChild(figure_img);
		figure.appendChild(figure_figcaption);

		figure_figcaption.appendChild(figcaption_icon);
		figure_figcaption.appendChild(figcaption_strong);
		figure_figcaption.appendChild(figcaption_span);

		link.appendChild(figure);
		
		commic_item.appendChild(link);

		commic_list.appendChild(commic_item);
	});

})(window, document, s9);