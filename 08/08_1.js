document.addEventListener("DOMContentLoaded", () => {
  const bts = document.querySelectorAll("button");
  console.log(bts);

  // 노드리스트 순회
  for (let bt of bts) {
    bt.addEventListener("click", () => {
      // 속성 변경
      bt.setAttribute("id", bt.textContent);
      console.log(bt.getAttribute);
    });
  }
});
