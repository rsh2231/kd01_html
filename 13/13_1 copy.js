/* .then
// fetch를 가져오는 함수 생성
const getFetch = () => {
  let apiKey = 
  let baseUrl =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
  let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;

  //fetch API
  fetch(url)
    // 응답을 가져와서 json으로 변환
    .then((response) => response.json())
    // 데이터 가져오기
    .then((data) => console.log(data.boxOfficeResult.dailyBoxOfficeList))
    .catch((err) => console.log(err));

  console.log("getFetch", url);
};
*/

// asysnc await
const getFetch = async () => {
  let apiKey = ""
  let baseUrl =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
  let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;

  // fetch API
  try {
    const resp = await fetch(url);
    const data = await resp.joson();
    console.log(data.boxOfficeResult.dailyBoxOfficeList)
  } catch (err) {
    console.log(err)
  }
  console.log("getFetch", url);
};

document.addEventListener("DOMContentLoaded", () => {
  const bt = document.querySelector("button");
  bt.addEventListener("click", () => {
    getFetch();
  });
});
