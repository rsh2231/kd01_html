function lotto() {
  //1. 로또번호생성
  //1-1. 로또배열 만들기
  let arrLotto = []; // 배열

  //1-2. 6개 + 1개 번호 추출
  while (arrLotto.length < 7) {
    let n = Math.floor(Math.random() * 45) + 1; // 1~45까지
    if (!arrLotto.includes(n)) arrLotto.push(n);
  }
  //1-2. 6개 번호 정렬
  arrLotto.sort((a, b) => a - b);

  //1-3. + 1개 번호 추출
  while (arrLotto.length < 7) {
    let n = Math.floor(Math.random() * 45) + 1; // 1~45까지

    // 숫자가 중복되지 않으면 arrLotto 배열에 추가
    if (!arrLotto.includes(n)) arrLotto.push(n);
  }

  console.log(arrLotto);
  //arrLotto 배열의 7번째를 + 로 바꾸기
  arrLotto.splice(6, 0, "+"); 


  let spanTags = arrLotto   // map()의 콜백 함수에서 매개변수(item)는 배열의 요소를 순회하면서 자동으로 할당됨
    .map((item) =>          // 매개변수명은 개발자가 정하는 것
      item == "+"           // map()은 새로운 배열을 반환하고 원본 배열은 변경하지 않음
        ? `<span id ='spplus'>${item}</span>` //${} 외부에서 미리 정의한 변수 또는 표현식을 넣을 수 있음
        : `<span class='sp${Math.floor(item / 10)}'>${item}</span>`
    )                       // 백틱을 사용하지 않으면 문자열 안에 변수나 표현식을 삽입할 때 연산자를 사용해야 됨
    .join("");              // 동적 문자열 생성에 유용함

  console.log(spanTags);
  document.getElementById("msglotto").innerHTML = spanTags;
}
