// -----------------------------------------------------------------------------------------
// [키보드 이벤트 핸들링 (Keyboard Event Handling)]
// - 이벤트 속성: keydown, keypress, keyup / input(HTML5)
// - 이벤트 객체 (Event Object)
//  + 바인딩 : 함수를 이벤트 속성에 연결 시키는 것을 의미한다.
//
// [이벤트 발생 순서]
// keydown ➔ keypress ➔ keyup
// 
//1.  키가 처음 눌려지면 keydown 이벤트가 발생합니다.
// (영문, 숫자, space, enter, 한글, tab, caps lock, shift, ctrl, alt(option), command, arrow, F1~12)
//2. keydown 이벤트 이후, keypress 이벤트가 발생합니다.
// (영문, 숫자, space, enter), 제한적으로 감지한다.
//3. 키를 놓으면 keyup 이벤트가 발생합니다.
// (tab, caps lock 발생 X)
// + 참고로 keydown, keypress 키가 눌러지는 순간 이벤트 발생, keyup은 누르고 있는 키를 뗄 때 발생한다.
// 인터랙션 테스트: https://codepen.io/yamoo9/full/vRmeQZ/
//
// 화살표 키 up을 누르면, boy 캐릭터가 점프해야 합니다.
// 점프 후에는 다시 서 있는 boy 캐릭터로 변경되어야 합니다.
// 화살표 키 left, right를 누르면 boy 캐릭터가 누른 방향으로 이동합니다.
//
// arrow-top   = 점프 / space
// arrow-left  = 왼쪽을 보며 이동
// arrow-right = 오른쪽을 보며 이동
// ------------------------------------------------------------------------------------------
// 문서 객체 참조
var boy = document.querySelector('.boy');
var distanceX = 10;

// 구형 
// window.onkeydown = function() {};

// 신형 - event -ev, evt, e로 작성해도 무관.

window.addEventListener('keydown', function (e) {
    // console.log(e.type,' =', e.keyCode, ' | ', e.code, ' | ', e.key);
    switch (e.keyCode) {
        case 38: // up
        case 32: // space
            jump();
            break;
        case 37: // arrow left;
            moveLeft();
            break;
        case 39: // arrow right;
            moveRight();
    }
});

// 애니메이션이 끝난 다음 발생.
boy.addEventListener('animationend', stand);
function stand() {
    boy.classList.remove('jump');
}
// classList로 jump class를 추가
function jump() {
    boy.classList.add('jump'); // classList 'jump' class를 추가
}

var getDistanceX = function () {
    return window.parseInt(boy.style.transform.replace('translateX(', ''), 10) || 0;
};

function moveLeft() {
    /* [left 이동 흐름 설정]
    (1) 방향 전환 확인, 현재 -30px 고정 값 이므로 이동 되지는 않는다.
    -> boy.style.transform = 'translateX(-30px) rotateY(180deg)';

    (2) disX 변수에 참조한다.
    -> var disX = boy.style.transform || 0;

    (3)  이때 -30 값만 빼오기 위해 형변환을 한다. 
    -> var disX = window.parseInt(boy.style.transform, 10) || 0;

    (4) disX 의 값을 확인하면 계속 0 이다. 그 이유는 NaN 부정 이기 떄문..
    -> console.log(window.parseInt(boy.style.transform,10));

    (5) 문자 이기 때문에 translateX를  공백('') 또는 다른 문자로 대체해야 한다.
    ->  console.log(boy.style.transform.replace('translateX(',''));
    -> "-30px) rotateY(180deg)"  // 앞에 translateX를 제거하고 공백으로 바꿨다.

    (6) "-30px) rotateY(180deg)" 이 상태에 parseInt를 사용해 10진수로 바꿔준다. 
    -> console.log(window.parseInt(boy.style.transform.replace('translateX(',''),10));
    ->  var disX = window.parseInt(boy.style.transform.replace('translateX(',''),10) ||  0; 

    (7). boy.style.transform 에서 -30px을 disX로 바꿔주고 disX는 기존에 disX에서 -30 만큼 빼주게 설정한다.
    -> dis -= 30; 
    -> boy.style.transform = 'translateX(' + disX +'px) rotateY(180deg)';

    (8) disX 부분을 getDistanceX 함수 표현식으로 따로 빼서 사용한다.
    (9) 이동 되는 거리 -30, +30 를 distanceX 변수로 따로 빼서 사용한다. 
    */
    var disX = getDistanceX() - distanceX;
    boy.style.transform = 'translateX(' + (disX -= 30) + 'px) rotateY(180deg)';
}

function moveRight() {
    var disX = getDistanceX() + distanceX;
    boy.style.transform = 'translateX(' + (disX += 30) + 'px) rotateY(0deg)';
}