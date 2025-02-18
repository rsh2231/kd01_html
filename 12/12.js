document.addEventListener("DOMContentLoaded", () => {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; // 8개는 빈칸, 1개는 폭탄
  let isFlag = false; // 게임 시작 여부
  console.log(arr);

  //요소 가져오기
  const cols = document.querySelectorAll(".col");
  const bt = document.querySelector("button");
  const msg = document.querySelector("#msg");

  // 보드에 클릭 이벤트 발생
  for (let [idx, col] of cols.entries()) {
    col.addEventListener("click", () => {
      console.log(col.innerHTML);
      if (!isFlag) {
        msg.innerHTML = "폭탄을 섞어주세요.";
        return;
      }

      if (col.classList.contains("clicked")) return; // 이미 클릭한 칸은 무시

      if (arr[idx] === 1) {
        // 폭탄 클릭 시
        col.innerHTML = `<img src = "../img/boom.png" alt="폭탄">`;
        msg.innerHTML = "폭탄!💥 게임 오버!";
        isFlag = false;
        bt.innerHTML = "다시 시작";
      } else {
        // 빈 칸 클릭 시
        col.innerHTML = `<img src = "../img/hart.png" alt="하트">`;
        col.classList.add("clicked");
      }

      // 모든 칸을 클릭했는지 확인 (폭탄 제외)
      if (
        [...cols].filter((c) => !c.classList.contains("clicked")).length === 1
      ) {
        // 남은 한 칸이 폭탄이면 하트로 변경
        let bombIdx = arr.indexOf(1);
        cols[bombIdx].innerHTML = `<img src="../img/hart.png" alt="하트">`;
        cols[bombIdx].classList.add("clicked");
        msg.innerHTML = "🎉 모든 칸을 클릭했습니다! 게임 클리어! 🎉";
        isFlag = false; // 게임 종료
      }
    });
  }

  //버튼 클릭(게임 시작 또는 재시작)
  bt.addEventListener("click", () => {
    console.log("bt");
    if (!isFlag) {
      arr.sort(() => Math.random() - 0.5);
      msg.innerHTML = "";
      bt.innerHTML = "게임중...";
      isFlag = true;
      console.log(isFlag, arr);

      //보드 초기화
      for (let col of cols) {
        col.classList.remove("clicked");
        col.innerHTML = "";
      }
    }
  });

  // 보드에 숫자 쓰기
  for (let [idx, col] of cols.entries()) {
    col.innerHTML = idx + 1;
  }
});
