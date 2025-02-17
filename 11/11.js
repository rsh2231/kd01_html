document.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 가져오기
  const input = document.querySelector("#myInput");
  const bt = document.querySelector("#checkBtn");
  const img = document.querySelector("#img");

  // 랜덤수 생성
  const selectNumber = Math.floor(Math.random() * 100) + 1;

  // 확인 버튼 클릭 이벤트 처리
  bt.addEventListener("click", () => {
    // 입력 값 가져오기
    const userGuess = parseInt(input.value);

    // 입력 유효성 검사
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {       //isNaN -> is not a nuber
      alert("1부터 100 사이의 숫자를 입력하세요.");
      input.value = "";
      input.focus();
      return;
    }

    // 숫자 비교 및 결과 확인
    if (userGuess < selectNumber) {
      img.innerHTML = `<img src="../img/up.png" alt="낮음">`;
    } else if (userGuess > selectNumber) {
      img.innerHTML = `<img src="../img/down.png" alt="높음">`;
    } else {
      img.innerHTML = `<img src="../img/good.png" alt="정답">`;
    }
    input.value = "";
  });
});
