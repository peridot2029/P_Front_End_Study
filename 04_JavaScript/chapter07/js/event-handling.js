// -----------------------------------------------------------------------------------------
// DOM Event interface
// 이벤트 핸들링 (Event Handling)
// [이벤트 속성]
// : 이벤트 속성은 특성상 앞에 on을 붙여 사용한다.
//  on{EventType} : click, mouseover, dragstart, ....

// [함수] 
// : 이벤트 속성에 연결된 함수 : 이벤트 객체(Event Object)를 매개변수로 전달 받는다.
// -----------------------------------------------------------------------------------------

// 1. 먼저 html input, output 요소에 접근
// 2. 변수에 담아서 결과를 확인하고 함수로 묶는다.
// 3. html 요소에 이벤트 속성을 직접 연결, 대상을 찾아서 직접 설정 두가지가 있다.

// #1
var form = el('.form');

var sumNumbers = function () {
    var input1_val = Number(el('input[aria-label="첫번째 수"]').value);
    var input2_val = Number(el('input[aria-label="두번째 수"]').value);
    var output = el('output[aria-label="결과 값"]');
    var result = input1_val + input2_val;
    output.value = result;
};

form.oninput = sumNumbers;


// #2 
// var form = el('.form');
// form.oninput = function () {
//     var input1_val = Number(el('input[aria-label="첫번째 수"]').value);
//     var input2_val = Number(el('input[aria-label="두번째 수"]').value);
//     var output = el('output[aria-label="결과 값"]');
//     var result = input1_val + input2_val;
//     output.value = result;
// };

// #3 
// el('.form').oninput = function () {
//     var input1_val = Number(el('input[aria-label="첫번째 수"]').value);
//     var input2_val = Number(el('input[aria-label="두번째 수"]').value);
//     var output = el('output[aria-label="결과 값"]');
//     var result = input1_val + input2_val;
//     output.value = result;
// };


function el(selector, context) {
    if (!context) { context = document; }
    return document.querySelector(selector);
}


// console.log(Number(input1.value));
// console.log(Number(input2.value));