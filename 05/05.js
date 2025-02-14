function showMsg(m) {
  document.getElementById('txt2').value = m;
}

function check1() { 
  //1. 입력문자열 가져오기
  let s = document.getElementById('txt1').value ;
  console.log(s) ;

  //2. 문자열 뒤집어진 문자열 생성 
  let sr = '' ;
  // for(let i = s.length - 1 ; i >= 0; i--) {
  //   sr = sr + s[i] ;
  // }
  // console.log(s, sr);
  //2-1. 배열을 이용하여 문자열 뒤집기
  sr = s.split('').reverse().join('');
  console.log(sr);
  console.log(`sr = ${sr}`)

  //3. 입력문자열 뒤집어진 문자열을 비교
  if (s.replaceAll(' ', '') === sr.replaceAll(' ','')) {
    showMsg('회문입니다.');
  }
  else {
    showMsg('회문이 아닙니다.');
  }
}

const check2 = () => {
  //1. 입력문자열 가져오기
  let s = document.getElementById('txt1').value ;

  //2. 문자열을 순회하면서 숫자이면 합계 계산
  let sum = 0 ;
  for(let c of s) {
    if ( !isNaN(c) ) {
      sum = sum + parseInt(c) ;
    }
  }

  //3. 결과 출력
  showMsg(sum);
}