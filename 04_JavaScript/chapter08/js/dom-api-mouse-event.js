// -----------------------------------------------------------------------------------------
// 마우스 이벤트 핸들링 (Mouse Event Handling)
// 
// <a href> 요소의 기본 동작 차단이 필요한 이유
// click 이벤트는 마우스 이벤트이지만, 접근성도 준수 가능한 이벤트입니다.
//
// 예제에 영감을 준 URL: dribbble.com/shots/2818064-Broken-link
//
// ------------------------------------------------------------------------------------------
// [e.preventDefault()]
// : HTML 문서에 <a>, <submit> 태그는 고유한 동작이 있다. 페이지 이동시킨다거나,
// 	 Form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 event.preventDefault()
//   는 그 동작을 중단시킨다.


// ------------------------------------------------------------------------------------------
// 현재 시점에서 이 부분 코드는 무시 하고 아래 부분으로 넘어갑니다.

var img, sound;

var lazyload_urls = [
	// monkys nomal ➔ click 애니메이션 GIF
	'images/monks-to-click.gif',
	// monkys click ➔ nomal 애니메이션 GIF
	'images/monks-to-normal.gif',
	// click sound ➔ 클릭 사운드 MP3
	'https://cdn.rawgit.com/yamoo9/assets/master/media/clickOn.mp3'
];

lazyload_urls.forEach(function (url, index) {
	var max = lazyload_urls.length - 1;
	// 레이지 이미지 로드
	if (index < max) {
		img = new Image();
		img.src = url;
	}
	// 클릭 사운드
	else {
		sound = new Audio();
		sound.src = url;
		init();
	}
});



// ------------------------------------------------------------------------------------------
// 이 부분 코드 부터 실습입니다.

// 문서 객체 참조
var monkys = null;
// 클릭 상태 변수
var is_clicked = false;

// 초기화 함수
function init() {
	// 이 곳에 코드를 작성
	monkys = document.querySelector('.is-monkys');
	monkys.addEventListener('click', clickmeMonkey);
}

function clickmeMonkey(e) {
	// 이벤트 객체의 기본동작 차단 메서드
	e.preventDefault();

	var target = e.target;
	// 토글(on/off) 코드 분기(나눔)
	if (is_clicked) {
		target.src = 'images/monks-to-click.gif';

	} else {
		target.src = 'images/monks-to-normal.gif';
	}
	// 상태 변경
	is_clicked = !is_clicked;
	// click 사운드 재생
	sound.currentTime = 0;
	sound.play();

}
