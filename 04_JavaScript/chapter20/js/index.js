// -----------------------------------------------------
// 배열 객체의 속성과 메서드
// -----------------------------------------------------

// 배열(Array) 객체는 JavaScript의 모든 데이터 유형을 
// 수집(collection)한 후, 관리 할 수 있습니다.
var collection = [
  '배열은 모든 데이터 유형을 포함/관리할 수 있다.',
  {
    nothing: [null, undefined],
    objects: [Object, Function, Array, Number, String, Boolean],
    is_support_dictionary: false,
    index: 9,
  },
  function (obj, key) {
    return obj[key];
  }
];

// 하지만, 배열은 다양한 데이터를 관리하기 보다는
// 패턴(규칙)을 가진 데이터를 수집해 관리하는데 탁월합니다.
var members = [
  {
    gender: '여성',
    name: '손민하',
    email: 'son-minha@example.com',
    picture: 'https://randomuser.me/api/portraits/women/60.jpg'
  },
  {
    gender: '남성',
    name: '최우',
    email: 'choi-woo@example.com',
    picture: 'https://randomuser.me/api/portraits/men/90.jpg'
  },
  {
    gender: '여성',
    name: '이다운',
    email: 'lee-dawoon@example.com',
    picture: 'https://randomuser.me/api/portraits/women/17.jpg'
  },
];


// 배열 객체 생성
// [] 또는 new Array()
var arr =[];

// 인덱스(index)로 배열 아이템에 접근
// array[index]
var mr_choi = members[1];

// 배열 객체 아이템들을 순환 처리
// callBack function 
// array.forEach(function(item, index){})
members.forEach(function (member, index){
  // i = index, array[i] = member
  // console.log(index, member);

});

// 배열 객체에 새로운 아이템 추가 (Last In)
// array.push(item), 콤마(,)를 사용해서 여러개를 넣을 수도 있다.
members.push({
  gender : '여성',
  name : 'songsong',
  email :'euggi@gmail.com',
  picture : '...'
});

// 배열 객체의 마지막 아이템 제거
// array.pop()
members.pop();

// 배열 객체에 새로운 아이템 추가 (First In)
// 첫 번째에 새로운 아이템을 추가
// array.unshift(item)
members.unshift({
  gender: '남성',
  name : '준우',
  email :'fsdflk@naver.com',
  picture : '---'
});

// 배열 객체의 첫번째 아이템 제거
// array.shift()
members.shift();

// 배열 객체 아이템 인덱스 찾기
// array.indexOf(item)
var a = [2, 9, 22];
a.indexOf(2); // 0
a.indexOf(7); // -1

// 배열 객체 아이템 1개 제거
// array.splice(index, 1)
// var fired_person = members.splice(1, 1);

// 배열 객체 여러 개 아이템 제거 
// array.splice(index, n)
// var fired_people = members.splice(1, 2);


// 배열 객체 아이템 모두 제거 
// array.length = 0
// members.length = 0;

// 배열 원하는 위치에 아이템을 추가
members.splice(1, 0, {
name : '철수',
email : 'kim111@naver.com'
});

// 배열 복사
// 전체 복사할 경우 인자를 전달하지 않으면 된다.
// copy_array = array.slice()
var copy_members = members.slice();

// 배열 검증
// Array.isArray(array)
Array.isArray(members); // true

// 배열 순서 정렬
// array.sort()
var arrays = [-1, 20, 1, 9];
arrays.sort(); // [-1, 1, 20, 9]

//[-1, 20, 1, 9].sort(function(a,b){
// return a - b;
// }); 
// [-1, 1, 9 ,20]

// [-1, 20, 1, 9].sort(function(a, b){
// return b - a;
// }); 
// [20, 9 , 1, -1]


// sort 메서드에 함수식 및 클로저와 함께 편리하게 사용할 수 있다
var arr2 = [1, 756, 24, 7, 535, 88];
// 오름 차순
arr2.sort(function(a, b){
  return a - b;
});

// 내림차순
arr2.sort(function (a, b) {
  return b - a; 
})

var page =[
  {
    no : '01',
    title : 'ArraySort',
    day : '2019-02-03',
    author : 'y9'
  },
  {
    no : '02',
    title : 'Function',
    day : '2018-01-03',
    author : 'song'
  },
  {
    no : '03',
    title : 'EcrScript',
    day : '2020-01-03',
    author : '-'
  },
];
// page 작성순 오름차순
var page_day = 'day';
var pageResult= page.sort(function(a1, a2){
  return a1[page_day] < a2[page_day] ? -1 : a1[page_day] > a2[page_day] ? 1 : 0;
});

// page 제목순 내림차순
var title = "title";
var titleResult = page.sort(function(a1, a2){
  return a1[title] > a2[title] ? -1 : a1[title] > a2[title] ? 1 : 0;
})

// 이름 정렬
var sort_keyword = 'email';
members.sort(function(p1, p2){
  return p1[sort_keyword] < p2[sort_keyword] ? -1 : p1[sort_keyword] > p2[sort_keyword] ? 1 : 0;
});

// 배열 순서 뒤집기
// array.reverse()
// members.reverse();

// 속성 // ------------------------------------------
// array.length


// 메서드 // ------------------------------------------

// 변경 메서드 (원본 배열 데이터 수정) //
// array.push()
// array.pop()
// array.unshift()
// array.shift()
// array.reverse()
// array.sort()
// array.splice()

// 접근 메서드 (원본 배열 데이터 보존) //
// array.concat()
// array.indexOf()
// array.lastIndexOf()
// array.join()
// array.slice()
// array.toString()

// 반복 메서드
// array.forEach(function(item, index){})
// array.map(function(item, index){})
// array.filter(function(item, index){})
// array.every(function(item, index){})
// array.some(function(item, index){})
// array.reduce(function(item, index){})

// 헬퍼함수 - email 순으로 정렬
function sortMembers(member, key) {
  return members.sort(function(m1, m2){
    return m1[key] <m2 [key] ? -1 : m1[key] > m2[key] ? 1 : 0;
  });
}
sortMembers(members, 'email');

// 배열복사
function copyArray(array) {
  return array.slice();

}
var new_members = copyArray(members);

// 배열에 공통적으로 원하는 항목을 추가
members.map(function (item) {
  item.organization = 'Hyun Master \ s';
  return item;
});

// 배열에 공통적으로 원하는 항목을 제거
members.map(function (member) {
  delete member.organization;
  return member;
});

// map 활용해서 배열 속 객체 재구성
page.map(function(item){
  item.conut = "0";
  return item;
});

// map 을 활용하면 배열 속 객체를 재 구성해서 새로운 배열을 만들 수 있다.
var s_page = page.map(function(obj){
  var r_page = { };
  r_page[obj.title] = obj.author;
  return r_page;
});


// for문 반복문을 forEach 로 바꾸기
const items = ["let", "var", "const", "function", "string", "Object"];
const copy = [];

// for문을 사용할 경우
// for (let i =0; i<items.length; i++){
//   copy.pust(items[i]);
// }

// forEach 바꿀 경우
items.forEach(function(item){
  copy.push(item);
});

