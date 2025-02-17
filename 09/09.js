// DOM이 로드되었을 때
document.addEventListener("DOMContentLoaded", () => {
  // DOM에서 제어할 노드 가져오기
  const bts = document.querySelectorAll("button"); // querySelectorAll은 모든 요소를 가져와 Nodelist로 반환
  const imgs = document.querySelectorAll("img");
  const msg = document.getElementById("msg"); // getElementById는 Id만 받으므로 # 쓰지 않음

  for (let bt of bts) {
    // 버튼이 클릭될 경우
    bt.addEventListener("click", () => {
      //랜덤수 생성
      const com = Math.floor(Math.random() * 6) + 1;
      const user = Math.floor(Math.random() * 6) + 1;

      // 이미지 속성 변경
      imgs[0].setAttribute("src", `../img/${com}.png`); // 백틱(``)을 사용하면 문자열 변경가능, ${}은 백틱을 사용할 때 변수를 문자열에 삽입
      imgs[0].setAttribute("alt", `${com}`);

      imgs[1].setAttribute("src", `../img/${user}.png`);
      imgs[1].setAttribute("alt", `${user}`);

      // 결과 확인
      if (com == user) {
        msg.textContent = "맞음";
      } else {
        msg.textContent = "틀림";
      }
    });
  }
});
