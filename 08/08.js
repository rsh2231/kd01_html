  // DOM이 로드되었을 때
document.addEventListener("DOMContentLoaded", () => {
  // 요소 가져오기 (버튼, 이미지)
  const bt = document.querySelector("button");  // querySelectorAll는 모든 요소를 가져와 Nodelist로 반환
  const img = document.querySelector("img");
  // 버튼이 클릭될 경우
  bt.addEventListener("click", () => {
  //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;
  // 이미지 속성 변경
    img.setAttribute("src", `../img/${n}.png`);  // 백틱(``)을 사용하면 문자열 변경가능, ${}은 백틱을 사용할 때 변수를 문자열에 삽입
    img.setAttribute("alt", `${n}`);
  });
});
