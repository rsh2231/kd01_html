//DOM 생성이 난 후
document.addEventListener('DOMContentLoaded', ()=>{
  //제어할 요소 가져오기
  const img = document.querySelector('img') ;
  const txt1 = document.querySelector('#txt1') ;
  const bt = document.querySelector('button') ;

  //랜덤 게임수
  let n ;
  //랜덤수가 생성되었는지 확인
  let isFlag = false ;

  //확인 버튼이 눌러졌을때 
  bt.addEventListener('click' , (e)=>{
    e.preventDefault();

    //랜덤수를 생성할 지 결정
    if ( !isFlag ) {
      n = Math.floor(Math.random() * 101); //1~100까지
      isFlag = true ;
      img.setAttribute('src', '../img/what.png') ;
      txt1.value = '' ;
      txt1.style.display = 'inline' ;
      txt1.focus();
      bt.innerHTML = '확인' ;
      return ;
    }
    console.log('n = ', n, 'isFlag = ', isFlag) ;

    //숫자비교
    if (parseInt(txt1.value) > n) {       //입력한 숫자가 n보다 큰경우 : down
      img.setAttribute('src', '../img/down.png') ;
    }
    else if (parseInt(txt1.value) < n) {  //입력한 숫자가 n보다 작은경우 : up
      img.setAttribute('src', '../img/up.png') ;
    }
    else if (parseInt(txt1.value) == n) {  //숫자를 맞춘 경우 
      txt1.style.display = 'none'  ;
      bt.innerHTML = '다시 하기' ;
      isFlag = false ;              
      img.setAttribute('src', '../img/good.png') ;
    } 
  }) ;
  
}) ;