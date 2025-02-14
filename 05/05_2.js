// 템플릿 문자열


// 함수 선언1
function check1() {
    let s = document.getElementById("txt1").value;

// 문자열 출력
console.log(s);

// 한문자씩 출력
// console.log(s);
// for(let i = 0 ; i < s.length ; i ++) {
//     console.log(s[i]);
// }
// for(let i = s.length-1 ; i >= 0  ; i --) {
//     console.log(s[i]);
// }

// for(let c of s) {
//     console.log(c);
// }

console.log(s.indexOf('s'));
console.log(s.includes('s'));
console.log(s.slice(2, 0));


    // let s2 = document.getElementById("txt2").value;

    // document.getElementById("msg").innerHTML = s + s2
    // document.getElementById("msg").innerHTML = parseInt(s) + parseInt(s2);

    // document.getElementById("txt2").value = s(s.length-1);
    // document.getElementById("txt2").value = s.split(',')[1];






}




//함수 선언2 : 화살표 함수
function check2() {
    console.log("Check2");
}
