// 영화진흥위원회
const mvApi = "2a350cfbca6c428eb04c71e21cc681e7";
const baseMvUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;

//TMBD
const tmdbApi = "5da102d09522d7f9486442a23baeccf9";
const baseTmdbUrl = "https://api.themoviedb.org/3/search/movie?";

// 영화포스터 저장 배열
let posterArr = [];

// 포스터 가져오기
const getPoster = async (movieNm) => {
  let url = `${baseTmdbUrl}api_key=${tmdbApi}&query=${movieNm}`;

  //fetch
  const resp = await fetch(url);
  const data = await resp.json();

  if (data == undefined) posterArr.push("");
  else posterArr.push(data.results[0].poster_path);

 let tags = "";
 for (let poster of posterArr) {
   tags =
     tags +
     `<img src="https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}">`
 }
 console.log("posterArr", posterArr);
};

// 박스오피스 가져오기
const getBoxOfficeList = async () => {
  const mvType = document.querySelector("[type=radio]:checked").value;
  const dt = document.querySelector("[type=date]").value.replaceAll("-", "");
  console.log("mvType", mvType, dt);

  // 포스터 배열 초기화
  posterArr = [];
  let url = `${baseMvUrl}&key=${mvApi}&targetDt=${dt}`;
  if (mvType == "K" || mvType == "F") {
    url = `${url}&repNationCd=${mvType}`;
  }

  //fetch
  const resp = await fetch(url);
  const data = await resp.json();
  const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

  let tags = "";
  for (let boxoffice of dailyBoxOfficeList) {
    tags =
      tags +
      `<li>
<span class="sp">${boxoffice.rank}</span>
${boxoffice.movieNm}
</li>`;
  }
  console.log("posterArr", posterArr);
};

// 어제 날짜가져오기
const getYesterday = () => {
  let dt = new Date();
  dt.setDate(dt.getDate() - 1);

  //년도
  let year = dt.getFullYear();

  //월
  let month = String(dt.getMonth() + 1).padStart(2, "0");
  // month = month < 10 ? '0' + month : month ;

  //일
  let day = String(dt.getDate()).padStart(2, "0");

  return year + "-" + month + "-" + day;
};

document.addEventListener("DOMContentLoaded", () => {
  const inputDate = document.querySelector("[type=date]");
  const radios = document.querySelectorAll("[type=radio]");
  const bt = document.querySelector("button");

  //어제 날짜
  const yesterday = getYesterday();
  inputDate.max = yesterday;
  inputDate.value = yesterday;

  //박스오피스 가져오기
  getBoxOfficeList();

  bt.addEventListener("click", (e) => {
    e.preventDefault();

    getBoxOfficeList();
  });

  console.log(yesterday);
});
