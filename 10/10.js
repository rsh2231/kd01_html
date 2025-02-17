// 단위변경
// 중복되는 코드들은 함수로 만들어라!
const unitChange = (sel1, sel2, txt1, txt2, sp1, sp2) => { 
  if (sel1.value == "℃") sel2.value = "℉" ; 
  else sel2.value = "℃" ;  

  sp1.textContent = sel1.value;
  sp2.textContent = sel2.value;
  txt1.value = "" ;
  txt2.value = "" ;
  txt1.focus();
}

// DOM 생성 후EventListener가 감지
document.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 가져오기
  // select box로 찾기
const sel1 = document.querySelector("#sel1");
// const sel1 = document.getElementById("sel1");
const sel2 = document.querySelector("#sel2");
// const sel2 = document.getElementById("sel2");

// input box로 찾기
const txt1 = document.querySelector("input") ; 
const txt2 = document.querySelector("input[readonly]") ;
// const txt1 = document.querySelectorAll(".uniDiv input");
// const txt2 = document.querySelectorAll(".uniDiv input");


//span -> node list
const sp1 = document.querySelector("#sp1");
const sp2 = document.querySelector("#sp2");

// console.log(sel1.value); // .value -> input, select, textarea  태그에서만 동작
// console.log(sel2.value); 
// console.log(txt1.value); 
// console.log(txt2.value); 
// console.log(sps[0].textContent); // .textContent -> span, div, p 등에서 사용 가능
// console.log(sps[1].innerHTML); 

// 첫번째 select 값이 변경되었을 때
  // 첫번째 select 값이 변경이 되었을때
  sel1.addEventListener('change',()=>{
    console.log("sel1", sel1.value)
    unitChange(sel1, sel2, txt1, txt2, sp1, sp2) ;
    
  });

  // 두번째 select 값이 변경이 되었을때
  sel2.addEventListener('change',()=>{
    unitChange(sel2, sel1, txt1, txt2, sp2, sp1) ;
  });

//input 입력
txt1.addEventListener("input", () => {
console.log(txt1.value);

// 섭씨 -> 화씨
if(sel1.value == "℃")
txt2.value = ((parseFloat(txt1.value) * (9/5)) + 32).toFixed(4);
// 섭씨 -> 화씨
else txt2.value = (((parseFloat(txt1.value) - 32) * (5/9))).toFixed(4);


});




});
