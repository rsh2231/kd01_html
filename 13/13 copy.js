// fetch 함수 생성
const getFetch = async (dt, ul) => {
  let apiKey = "";
  let baseUrl =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
  let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`;

  // fetch API
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.boxOfficeResult.dailyBoxOfficeList);

    // ul 안에 li 만들어 넣기
    let tags = "";
    for (let item of data.boxOfficeResult.dailyBoxOfficeList) {
      tags =
        tags +
        `<li>
<span class="sp">${item.rank}</span>
${item.movieNm}
</li>`;
    }
    ul.innerHTML = tags;
  } catch (err) {
    console.log("fetch 오류:", err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 제어할 요소 가져오기
  const dt = document.querySelector("#dt");
  const ul = document.querySelector("ul");

  // 날짜 변경 이벤트 발생
  dt.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(dt.value);
    getFetch(dt.value.replaceAll("-", ""), ul);
  });
});
