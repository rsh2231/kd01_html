//배열 선언
let arr = [] ;                //빈배열
let arr1 = [1,2,3,4];          //초기 값이 있는 배열

let arr2 =  new Array() ;     //Array 객체

// console.log(arr) ;
// console.log(arr1) ;
// console.log(arr2) ;

//배열 추가 
arr.push(10) ;
arr.push(20) ;
arr.push(30) ;
console.log(arr) ;

//배열 수정
arr[0] = 1 ;
console.log(arr) ;

//배열 삭제
arr.pop();
console.log(arr) ;

arr.length = 0 ;
console.log(arr) ;

//배열순회
arr = [1,2,3,4,5] ;

console.log("기본 반복") ;
for(let i = 0 ; i < arr.length ; i++) {
  console.log(arr[i]) ;
}

console.log("in 반복") ;
for(let i in arr)  {
  console.log(arr[i]) ;
}

console.log("of 반복") ;
for(let i of arr)  {
  console.log(i) ;
}

console.log("of 반복2") ;
for(let i of arr.entries())  {
  console.log(i) ;
}
//구조분해할당당
for(let [i, item] of arr.entries())  {
  console.log(i, item) ;
}

console.log("forEach 메소드") ;
arr.forEach((item, i) => {
  console.log(i, item) ;
});

//map()
console.log("map 메소드") ;
let arrMap = arr.map((item)=>{
  console.log(item);

  return item * 2 ;
});
console.log(arrMap);

console.log("map 메소드2") ;
arrMap = arrMap.map(item => item * 2 );
console.log(arrMap);

console.log("map 메소드3") ;
arrMap = arrMap.map((item, i) => item * i );
console.log(arrMap);


//filter()
console.log("filter 메소드") ;
let arrFilter = arr.filter((item, i, a)=>{
  console.log(a);

  return item % 2 == 0 ;
});
console.log(arrFilter);

console.log("filter 메소드2") ;
arrFilter = arr.filter(item => item % 2 == 0) ;
console.log(arrFilter);

console.log("filter 메소드3") ;
arrFilter = arr.filter((item, i) => i == 3) ;
console.log(arrFilter);

// map() + filter()

let arrMf =  arr.map((item, i) => item * i)
                .filter(item => item % 3 == 0);
console.log(arrMf);

// 랜덤수 생성
// 1에서 6까지 : Math.floor(Math.random() * 6) + 1 ; 
let arrRand = [0,0,0,0,0,0,];

arrRand.length = 0 ;
for(let i = 0 ; i < 6; i++ ) {
  arrRand.push(Math.floor(Math.random() * 6) + 1); 
}

console.log(arrRand) ;

arrRand = arrRand.map( item => Math.floor(Math.random() * 6) + 1);

//오름차순
arrRand.sort((a, b) => a - b) ;
console.log(arrRand) ;

//내림차순 
arrRand.sort((a, b) => b - a) ;
console.log(arrRand) ;

//배열 순서를 반대로 뒤집음
console.log(arrRand.reverse()) ;

//모든 요소를 문자열로 결합하여 반환
console.log(arrRand.join('')) ;
console.log(arrRand.concat(arr)) ;


//요소 확인
console.log(arrRand.indexOf(10)) ;
console.log(arrRand.includes(10)) ;

//전개연산자
console.log(`arr = ${arr}`)

let arrCopy ;
// arrCopy = arr.map(item => item);
// console.log(`arrCopy = ${arrCopy}`)

arrCopy = [...arr, ...arrRand] ;
console.log(`arrCopy = ${arrCopy}`)