import './App.css';
import React, { useState, useEffect, use } from "react";
/* eslint-disable */ 
// 1~5 : 스토리 6 : 시작화면 7 : 도전과제 8 : *게임시작* 9 : 선반 10 : 지도 11 : 어둠(침대 클릭 후) 12 : 설명 13: 문입장
// 20 : 해피엔딩 21 : 배드엔딩 22: 세드엔딩

function App() {
  let [page, setpage] = useState(1);
  let [loading, setloading] = useState(1);
  let [show, setShow] = useState(false);
  let [maplo1, setmaplo1] = useState(0);
  let [maplo2, setmaplo2] = useState(0);
  let [maplo3, setmaplo3] = useState(0);
  let [maplo4, setmaplo4] = useState(0);  
  let [Die1, setDie1] = useState(false);
  let [Die2, setDie2] = useState(false);
  let [Die3, setDie3] = useState(false);
  let [Die4, setDie4] = useState(false);
  let [Day, setDay] = useState(0);
  let [Day1, setDay1] = useState(2);
  let [Day2, setDay2] = useState(2);
  let [Day3, setDay3] = useState(2);
  let [Day4, setDay4] = useState(2);
  let [DayD1, setDayD1] = useState(0);
  let [DayD2, setDayD2] = useState(0);
  let [DayD3, setDayD3] = useState(0);
  let [DayD4, setDayD4] = useState(0);
  //캐릭터 선택 변수
  let [charch, setcharch] = useState(1);
  let [charch1, setcharch1] = useState(1);
  //캐릭터 탐사 감지
  let [tam1, settam1] = useState(false); //1
  let [tam2, settam2] = useState(false); //2
  let [tam3, settam3] = useState(false); //3
  let [tam4, settam4] = useState(false); //4
  // 식량 3 6 3 2
  let [eat1, seteat1] = useState(3); //통조림
  let [eat2, seteat2] = useState(6); //생수
  let [eat3, seteat3] = useState(3); //라면
  let [eat4, seteat4] = useState(2); //사탕
  //의약품
  let [med1, setmed1] = useState(0); //키트
  let [med2, setmed2] = useState(0); //구급상자
  //무기
  let [weap1, setweap1] = useState(0); //도끼
  let [weap2, setweap2] = useState(0); //진압봉
  let [weap3, setweap3] = useState(0); //야구 방망이
  let [weap4, setweap4] = useState(0); //헬멧
  //갔다왔을때 무기가 부셔지거나 없어지거나 다시 주게
  //기타
  let [etc1, setetc1] = useState(0); //보드게임
  let [etc2, setetc2] = useState(0); //라디오
  let [etc3, setetc3] = useState(4); //책
  let [etc4, setetc4] = useState(0); //신문

  let [통조림, set통조림] = useState(0);
  let [물, set물] = useState(0);
  let [라면, set라면] = useState(0);
  let [사탕, set사탕] = useState(0);

 

  let [수치, set수치] = useState(0);

  let [문얻는거, set문얻는거] = useState(false);

  let [사람1, set사람1] = useState(false);
  let [사람2, set사람2] = useState(false);
  let [사람3, set사람3] = useState(false);
  let [사람4, set사람4] = useState(false); 

  let [masg1, setmasg1] = useState(0);
  let [masg2, setmasg2] = useState(0);
  let [masg3, setmasg3] = useState(0);
  let [masg4, setmasg4] = useState(0);

  let [열림, set열림] = useState(false);

  let [감기여부1 , set감기여부1] = useState(false);
  let [감기여부2, set감기여부2] = useState(false);
  let [감기여부3 , set감기여부3] = useState(false);
  let [감기여부4 , set감기여부4] = useState(false);
  let [출혈여부1 , set출혈여부1] = useState(false);
  let [출혈여부2 , set출혈여부2] = useState(false);
  let [출혈여부3 , set출혈여부3] = useState(false);
  let [출혈여부4 , set출혈여부4] = useState(false);
  let [독감여부1 , set독감여부1] = useState(false);
  let [독감여부2 , set독감여부2] = useState(false);
  let [독감여부3 , set독감여부3] = useState(false);
  let [독감여부4 , set독감여부4] = useState(false);
  let [골절여부1 , set골절여부1] = useState(false);
  let [골절여부2 , set골절여부2] = useState(false);
  let [골절여부3 , set골절여부3] = useState(false);
  let [골절여부4 , set골절여부4] = useState(false);
  let [식중독여부1 , set식중독여부1] = useState(false);
  let [식중독여부2 , set식중독여부2] = useState(false);
  let [식중독여부3 , set식중독여부3] = useState(false);
  let [식중독여부4 , set식중독여부4] = useState(false);
  let [chareat1, setchareat1] = useState(100);
  let [chareat2, setchareat2] = useState(100);
  let [chareat3, setchareat3] = useState(100);
  let [chareat4, setchareat4] = useState(100);
  let [charwtr1, setcharwtr1] = useState(100);
  let [charwtr2, setcharwtr2] = useState(100);
  let [charwtr3, setcharwtr3] = useState(100);
  let [charwtr4, setcharwtr4] = useState(100);
  let [charment1, setcharment1] = useState(100);
  let [charment2, setcharment2] = useState(100);
  let [charment3, setcharment3] = useState(100);
  let [charment4, setcharment4] = useState(100);
  let [감기1, set감기1] = useState(0);
  let [출혈1, set출혈1] = useState(0);
  let [독감1, set독감1] = useState(0);
  let [골절1, set골절1] = useState(0);
  let [식중독1, set식중독1] = useState(0);
  let [감기2, set감기2] = useState(0);
  let [출혈2, set출혈2] = useState(0);
  let [독감2, set독감2] = useState(0);
  let [골절2, set골절2] = useState(0);
  let [식중독2, set식중독2] = useState(0);
  let [감기3, set감기3] = useState(0);
  let [출혈3, set출혈3] = useState(0);
  let [독감3, set독감3] = useState(0);
  let [골절3, set골절3] = useState(0);
  let [식중독3, set식중독3] = useState(0);
  let [감기4, set감기4] = useState(0);
  let [출혈4, set출혈4] = useState(0);
  let [독감4, set독감4] = useState(0);
  let [골절4, set골절4] = useState(0);
  let [식중독4, set식중독4] = useState(0);
  let [상태창1, set상태창1] = useState(false);
  let [외로움, set외로움] = useState(1);

  let [탐험배1, set탐험배1] = useState(0);
  let [탐험배2, set탐험배2] = useState(0);
  let [탐험배3, set탐험배3] = useState(0);
  let [탐험배4, set탐험배4] = useState(0);

  let [탐험물1, set탐험물1] = useState(0);
  let [탐험물2, set탐험물2] = useState(0);
  let [탐험물3, set탐험물3] = useState(0);
  let [탐험물4, set탐험물4] = useState(0);
  let [book, setbook] = useState(false);

  let [eat1표시, seteat1표시] = useState(0);
  let [eat2표시, seteat2표시] = useState(0);
  let [eat3표시, seteat3표시] = useState(0);
  let [eat4표시, seteat4표시] = useState(0);

  let [med1표시, setmed1표시] = useState(0);
  let [med2표시, setmed2표시] = useState(0);

  let [weap1표시, setweap1표시] = useState(0); //도끼
  let [weap2표시, setweap2표시] = useState(0); //진압봉
  let [weap3표시, setweap3표시] = useState(0); //야구 방망이
  let [weap4표시, setweap4표시] = useState(0); //헬멧
  //기타
  let [etc1표시, setetc1표시] = useState(0); //보드게임
  let [etc2표시, setetc2표시] = useState(0); //라디오
  let [etc3표시, setetc3표시] = useState(0); //책
  let [etc4표시, setetc4표시] = useState(0); //신문

  let [무기장착, set무기장착] = useState(0);



  let [무기, set무기] = useState("");
  let [무기장착여부, set무기장착여부] = useState(false);





  let [무기1, set무기1] = useState("");
  let [무기장착여부1, set무기장착여부1] = useState(false);

  let [무기2, set무기2] = useState("");
  let [무기장착여부2, set무기장착여부2] = useState(false);

  let [무기3, set무기3] = useState("");
  let [무기장착여부3, set무기장착여부3] = useState(false);




  let [문감지, set문감지] = useState(false);
  let [문사람감지, set문사람감지] = useState(false);
  let [문통조림랜덤, set문통조림랜덤] = useState(0);
  let [문물랜덤, set문물랜덤] = useState(0);
  let [문라면랜덤, set문라면랜덤] = useState(0);
  let [문사탕랜덤, set문사탕랜덤] = useState(0);
  let [문신문랜덤, set문신문랜덤] = useState(0);
  let [문클릭, set문클릭] = useState(0);

  let [도둑감지, set도둑감지] = useState(false);
  let [거래완료, set거래완료] = useState(false);
  let [거래실패, set거래실패] = useState(false);

  let [라디오확률, set라디오확률] = useState(0);
  let [라디오대사, set라디오대사] = useState(0);
  let [라디오하루대사, set라디오하루대사] = useState(0);

  let [외출제한1, set외출제한1] = useState(false);
  let [외출제한2, set외출제한2] = useState(false);
  let [외출제한3, set외출제한3] = useState(false);
  let [외출제한4, set외출제한4] = useState(false);

  let [maxDay, setmaxDay] = useState(0);

  let [tpage, settpage] = useState(0);

  let [베드로딩, set베드로딩] = useState(0);

  let [쪽지 , set쪽지] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ,false ,false, false]);
  let [쪽지열람, set쪽지열람] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ,false ,false, false])
  let [큰쪽지, set큰쪽지] = useState(false);


  let [탈출, set탈출] = useState(-100);

  let [보드게임제한, set보드게임제한] = useState(3);

  const [r1, setr1] = useState(0);
  const wtime = new Date();
  const year = wtime.getFullYear();
  const pagecound = () => {
    if (page <= 5) {
      setpage(prev => prev + 1);
      setShow(false);
    }
    
  };



  if (Die1 === true && Die2 === true && Die3 === true && Die4 === true) //죽음
  {
    setpage(21);


    if(maxDay <= Day)
    {
      setmaxDay(Day);
    }
    
    set문감지(false);

    set문사람감지(false);

    setmasg1(0);
    setmasg2(0);
    setmasg3(0);
    setmasg4(0);

    set통조림(0);
    set물(0);
    set라면(0);
    set사탕(0);
    set문얻는거(false);
    set수치(0);
    set사람1(false);
    set사람2(false);
    set사람3(false);
    set사람4(false);
    set열림(false);



    set라디오하루대사(0);
    set라디오대사(0);
    set라디오하루대사(0);

    set외출제한1(false);
    set외출제한2(false);
    set외출제한3(false);
    set외출제한4(false);

    set문라면랜덤(0);
    set문물랜덤(0);
    set문통조림랜덤(0);
    set문사탕랜덤(0);
    set문신문랜덤(0);

    set도둑감지(false);
    set거래완료(false);
    set거래실패(false);

    set무기("");
    set무기1("");
    set무기2("");
    set무기3("");

    set무기장착여부(false);
    set무기장착여부1(false);
    set무기장착여부2(false);
    set무기장착여부3(false);


    setDay(0);
    setDie1(false);
    setDie2(false);
    setDie3(false);
    setDie4(false);

    settam1(false);
    settam2(false);
    settam3(false);
    settam4(false);

    seteat1(0);
    seteat2(0);
    seteat3(0);
    seteat4(0);

    setweap1(0);
    setweap2(0);
    setweap3(0);
    setweap4(0);

    setmed1(0);
    setmed2(0);

    setetc1(0);
    setetc2(0);
    setetc3(0);
    setetc4(0);

    setmaplo1(0);
    setmaplo2(0);
    setmaplo3(0);
    setmaplo4(0);

    setchareat1(100);
    setchareat2(100);
    setchareat3(100);
    setchareat4(100);

    setcharwtr1(100);
    setcharwtr2(100);
    setcharwtr3(100);
    setcharwtr4(100);

    setcharment1(100);
    setcharment2(100);
    setcharment3(100);
    setcharment4(100);

    set감기1(0);
    set감기2(0);
    set감기3(0);
    set감기4(0);

    set출혈1(0);
    set출혈2(0);
    set출혈3(0);
    set출혈4(0);

    set독감1(0);
    set독감2(0);
    set독감3(0);
    set독감4(0);

    set골절1(0);
    set골절2(0);
    set골절3(0);
    set골절4(0);

    set식중독1(0);
    set식중독2(0);
    set식중독3(0);
    set식중독4(0);

    set감기여부1(false);
    set감기여부2(false);
    set감기여부3(false);
    set감기여부4(false);

    set출혈여부1(false);
    set출혈여부2(false);
    set출혈여부3(false);
    set출혈여부4(false);

    set독감여부1(false);
    set독감여부2(false);
    set독감여부3(false);
    set독감여부4(false);

    set골절여부1(false);
    set골절여부2(false);
    set골절여부3(false);
    set골절여부4(false);

    set식중독여부1(false);
    set식중독여부2(false);
    set식중독여부3(false);
    set식중독여부4(false);


    seteat1(3);
    seteat2(6);
    seteat3(3);
    seteat4(2);

    setmed1(0);
    setmed2(0);
    setweap1(0);
    setweap2(0);
    setweap3(0);
    setweap4(0);
    setetc1(0);
    setetc2(0);
    setetc3(0);
    setetc4(0);

    setcharch(1);
    setcharch1(1);



  }

  const Darkup = () => {
    setpage(8);
    setloading(1);
  }

  const mapa1 = () => { //맵 1 1~3 소방서
    if(charch === 1)
    {
      set무기장착여부(false);
    }
    else if(charch === 2)
    {
      set무기장착여부1(false)
    }
    else if(charch === 3)
    {
      set무기장착여부2(false)
    }
    else if(charch === 4)
    {
      set무기장착여부3(false)
    }
    const rands = Math.floor(Math.random() * (100+무기장착));
    if (rands >= 7){
      if (charch === 1 && tam1 === false){
        settam1(true);
        const randomValue = Math.floor(Math.random() * 3) + 1;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(1);
       if (randomValue === 1){
        setchareat1(prev => prev - 15);
        setcharwtr1(prev => prev - 15);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat1(prev => prev - 20);
        setcharwtr1(prev => prev - 22);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat1(prev => prev - 23);
        setcharwtr1(prev => prev - 24);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat1(prev => prev - 26);
        setcharwtr1(prev => prev - 27);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat1(prev => prev - 29);
        setcharwtr1(prev => prev - 30);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat1(prev => prev - 32);
        setcharwtr1(prev => prev - 34);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat1(prev => prev - 40);
        setcharwtr1(prev => prev - 45);
        setcharment1(prev => prev - 40);
      }
      }
      else if(charch === 2 && tam2 === false){
        settam2(true);
        const randomValue = Math.floor(Math.random() * 3) + 1;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(1);
       if (randomValue === 1){
        setchareat2(prev => prev - 15);
        setcharwtr2(prev => prev - 15);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat2(prev => prev - 20);
        setcharwtr2(prev => prev - 22);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat2(prev => prev - 23);
        setcharwtr2(prev => prev - 24);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat2(prev => prev - 26);
        setcharwtr2(prev => prev - 27);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat2(prev => prev - 29);
        setcharwtr2(prev => prev - 30);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat2(prev => prev - 32);
        setcharwtr2(prev => prev - 34);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat2(prev => prev - 40);
        setcharwtr2(prev => prev - 45);
        setcharment1(prev => prev - 40);
      }
      }
      else if(charch === 3 && tam3 === false){
        settam3(true);
        const randomValue = Math.floor(Math.random() * 3) + 1;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(1);
       if (randomValue === 1){
        setchareat3(prev => prev - 15);
        setcharwtr3(prev => prev - 15);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat3(prev => prev - 20);
        setcharwtr3(prev => prev - 22);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat3(prev => prev - 23);
        setcharwtr3(prev => prev - 24);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat3(prev => prev - 26);
        setcharwtr3(prev => prev - 27);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat3(prev => prev - 29);
        setcharwtr3(prev => prev - 30);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat3(prev => prev - 32);
        setcharwtr3(prev => prev - 34);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat3(prev => prev - 40);
        setcharwtr3(prev => prev - 45);
        setcharment1(prev => prev - 40);
      }
      }
      else if(charch === 4 && tam4 === false){
        settam4(true);
        const randomValue = Math.floor(Math.random() * 3) + 1;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(1);
        if (randomValue === 1){
        setchareat4(prev => prev - 15);
        setcharwtr4(prev => prev - 15);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat4(prev => prev - 20);
        setcharwtr4(prev => prev - 22);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat4(prev => prev - 23);
        setcharwtr4(prev => prev - 24);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat4(prev => prev - 26);
        setcharwtr4(prev => prev - 27);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat4(prev => prev - 29);
        setcharwtr4(prev => prev - 30);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat4(prev => prev - 32);
        setcharwtr4(prev => prev - 34);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat4(prev => prev - 40);
        setcharwtr4(prev => prev - 45);
        setcharment1(prev => prev - 40);
      }
      }
    }
    else {
      if(charch === 1)
      {
        setDie1(true);
        settam1(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 2)
      {
        setDie2(true);
        settam2(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 3)
      {
        setDie3(true);
        settam3(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 4)
      {
        setDie4(true);
        settam4(true);
        set외로움(prev => prev + 1);
      }

    }

      if(무기 == "도끼" || 무기1 == "도끼" || 무기2 == "도끼" || 무기3 == "도끼")
      {
        const randomValue = Math.floor(Math.random() * 20) + 1;
        if(randomValue <= 1 && 무기1 == "도끼")
        {
          set무기1("");
        }
        else if(randomValue <= 4 && 무기 == "도끼")
        {
          set무기("");
        }
        else if(randomValue <= 4 && 무기2 == "도끼")
        {
          set무기2("");
        }
        else if(randomValue <= 4 && 무기3 == "도끼")
        {
          set무기3("");
        }
      }
      else if(무기 == "진압봉" || 무기1 == "진압봉" || 무기2 == "진압봉" || 무기3 == "진압봉")
      {
        const randomValue = Math.floor(Math.random() * 30) + 1;
        if(randomValue <= 1 && 무기 == "진압봉")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "진압봉")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "진압봉")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "진압봉")
        {
          set무기3("");
        }
      }
      else if(무기 == "헬멧" || 무기1 == "헬멧" || 무기2 == "헬멧" || 무기3 == "헬멧")
      {
        const randomValue = Math.floor(Math.random() * 40) + 1;
        if(randomValue <= 1 && 무기 == "헬멧")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "헬멧")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "헬멧")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "헬멧")
        {
          set무기3("");
        }
      }
      else if(무기 == "야구방망이" || 무기1 == "야구방망이" || 무기2 == "야구방망이" || 무기3 == "야구방망이")
        {
          const randomValue = Math.floor(Math.random() * 25) + 1;
          if(randomValue <= 1 && 무기 == "야구방망이")
          {
            set무기("");
          }
          else if(randomValue <= 3 && 무기1 == "야구방망이")
          {
            set무기1("");
          }
          else if(randomValue <= 3 && 무기2 == "야구방망이")
          {
            set무기2("");
          }
          else if(randomValue <= 3 && 무기3 == "야구방망이")
          {
            set무기3("");
          }
        }

  }
  const mapa2 = () => { //맵 2 2~5 경찰서
    if(charch === 1)
    {
      set무기장착여부(false);
    }
    else if(charch === 2)
    {
      set무기장착여부1(false)
    }
    else if(charch === 3)
    {
      set무기장착여부2(false)
    }
    else if(charch === 4)
    {
      set무기장착여부3(false)
    }
    const rands = Math.floor(Math.random() * (100+무기장착));
    if (rands >= 15){
       if (charch === 1 && tam1 === false){
        settam1(true);
        const randomValue = Math.floor(Math.random() * 2) + 2;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(2);
       if (randomValue === 1){
        setchareat1(prev => prev - 15);
        setcharwtr1(prev => prev - 15);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat1(prev => prev - 20);
        setcharwtr1(prev => prev - 22);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat1(prev => prev - 23);
        setcharwtr1(prev => prev - 24);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat1(prev => prev - 26);
        setcharwtr1(prev => prev - 27);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat1(prev => prev - 29);
        setcharwtr1(prev => prev - 30);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat1(prev => prev - 32);
        setcharwtr1(prev => prev - 34);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat1(prev => prev - 40);
        setcharwtr1(prev => prev - 45);
        setcharment1(prev => prev - 40);
      }
      }
      else if(charch === 2 && tam2 === false){
        settam2(true);
        const randomValue = Math.floor(Math.random() * 3) + 2;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(2);
       if (randomValue === 1){
        setchareat2(prev => prev - 15);
        setcharwtr2(prev => prev - 15);
        setcharment2(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat2(prev => prev - 20);
        setcharwtr2(prev => prev - 22);
        setcharment2(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat2(prev => prev - 23);
        setcharwtr2(prev => prev - 24);
        setcharment2(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat2(prev => prev - 26);
        setcharwtr2(prev => prev - 27);
        setcharment2(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat2(prev => prev - 29);
        setcharwtr2(prev => prev - 30);
        setcharment2(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat2(prev => prev - 32);
        setcharwtr2(prev => prev - 34);
        setcharment2(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat2(prev => prev - 40);
        setcharwtr2(prev => prev - 45);
        setcharment2(prev => prev - 40);
      }
      }
      else if(charch === 3 && tam3 === false){
        settam3(true);
        const randomValue = Math.floor(Math.random() * 3) + 2;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(2);
       if (randomValue === 1){
        setchareat3(prev => prev - 15);
        setcharwtr3(prev => prev - 15);
        setcharment3(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat3(prev => prev - 20);
        setcharwtr3(prev => prev - 22);
        setcharment3(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat3(prev => prev - 23);
        setcharwtr3(prev => prev - 24);
        setcharment3(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat3(prev => prev - 26);
        setcharwtr3(prev => prev - 27);
        setcharment3(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat3(prev => prev - 29);
        setcharwtr3(prev => prev - 30);
        setcharment3(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat3(prev => prev - 32);
        setcharwtr3(prev => prev - 34);
        setcharment3(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat3(prev => prev - 40);
        setcharwtr3(prev => prev - 45);
        setcharment3(prev => prev - 40);
      }
      }
      else if(charch === 4 && tam4 === false){
        settam4(true);
        const randomValue = Math.floor(Math.random() * 3) + 2;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(2);
        if (randomValue === 1){
        setchareat4(prev => prev - 15);
        setcharwtr4(prev => prev - 15);
        setcharment4(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat4(prev => prev - 20);
        setcharwtr4(prev => prev - 22);
        setcharment4(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat4(prev => prev - 23);
        setcharwtr4(prev => prev - 24);
        setcharment4(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat4(prev => prev - 26);
        setcharwtr4(prev => prev - 27);
        setcharment4(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat4(prev => prev - 29);
        setcharwtr4(prev => prev - 30);
        setcharment4(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat4(prev => prev - 32);
        setcharwtr4(prev => prev - 34);
        setcharment4(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat4(prev => prev - 40);
        setcharwtr4(prev => prev - 45);
        setcharment4(prev => prev - 40);
      }
      }
    }
    else {
      if(charch === 1)
      {
        setDie1(true);
        settam1(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 2)
      {
        setDie2(true);
        settam2(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 3)
      {
        setDie3(true);
        settam3(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 4)
      {
        setDie4(true);
        settam4(true);
        set외로움(prev => prev + 1);
      }

    }

    if(무기 == "도끼" || 무기1 == "도끼" || 무기2 == "도끼" || 무기3 == "도끼")
      {
        const randomValue = Math.floor(Math.random() * 15) + 1;
        if(randomValue <= 1 && 무기1 == "도끼")
        {
          set무기1("");
        }
        else if(randomValue <= 4 && 무기 == "도끼")
        {
          set무기("");
        }
        else if(randomValue <= 4 && 무기2 == "도끼")
        {
          set무기2("");
        }
        else if(randomValue <= 4 && 무기3 == "도끼")
        {
          set무기3("");
        }
      }
      else if(무기 == "진압봉" || 무기1 == "진압봉" || 무기2 == "진압봉" || 무기3 == "진압봉")
      {
        const randomValue = Math.floor(Math.random() * 25) + 1;
        if(randomValue <= 1 && 무기 == "진압봉")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "진압봉")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "진압봉")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "진압봉")
        {
          set무기3("");
        }
      }
      else if(무기 == "헬멧" || 무기1 == "헬멧" || 무기2 == "헬멧" || 무기3 == "헬멧")
      {
        const randomValue = Math.floor(Math.random() * 35) + 1;
        if(randomValue <= 1 && 무기 == "헬멧")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "헬멧")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "헬멧")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "헬멧")
        {
          set무기3("");
        }
      }
      else if(무기 == "야구방망이" || 무기1 == "야구방망이" || 무기2 == "야구방망이" || 무기3 == "야구방망이")
        {
          const randomValue = Math.floor(Math.random() * 20) + 1;
          if(randomValue <= 1 && 무기 == "야구방망이")
          {
            set무기("");
          }
          else if(randomValue <= 3 && 무기1 == "야구방망이")
          {
            set무기1("");
          }
          else if(randomValue <= 3 && 무기2 == "야구방망이")
          {
            set무기2("");
          }
          else if(randomValue <= 3 && 무기3 == "야구방망이")
          {
            set무기3("");
          }
        }

  }
  const mapa3 = () => { //맵 3 4~7 병원 여기카지
    if(charch === 1)
    {
      set무기장착여부(false);
    }
    else if(charch === 2)
    {
      set무기장착여부1(false)
    }
    else if(charch === 3)
    {
      set무기장착여부2(false)
    }
    else if(charch === 4)
    {
      set무기장착여부3(false)
    }
    const rands = Math.floor(Math.random() * (100+무기장착));
    if (rands >= 15){
       if (charch === 1 && tam1 === false){
        settam1(true);
        const randomValue = Math.floor(Math.random() * 3) + 5;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(3);
       if (randomValue === 1){
        setchareat1(prev => prev - 15);
        setcharwtr1(prev => prev - 15);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat1(prev => prev - 20);
        setcharwtr1(prev => prev - 22);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat1(prev => prev - 23);
        setcharwtr1(prev => prev - 24);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat1(prev => prev - 26);
        setcharwtr1(prev => prev - 27);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat1(prev => prev - 29);
        setcharwtr1(prev => prev - 30);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat1(prev => prev - 32);
        setcharwtr1(prev => prev - 34);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat1(prev => prev - 40);
        setcharwtr1(prev => prev - 45);
        setcharment1(prev => prev - 40);
      }
      }
      else if(charch === 2 && tam2 === false){
        settam2(true);
        const randomValue = Math.floor(Math.random() * 3) + 5;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(3);
       if (randomValue === 1){
        setchareat2(prev => prev - 15);
        setcharwtr2(prev => prev - 15);
        setcharment2(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat2(prev => prev - 20);
        setcharwtr2(prev => prev - 22);
        setcharment2(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat2(prev => prev - 23);
        setcharwtr2(prev => prev - 24);
        setcharment2(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat2(prev => prev - 26);
        setcharwtr2(prev => prev - 27);
        setcharment2(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat2(prev => prev - 29);
        setcharwtr2(prev => prev - 30);
        setcharment2(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat2(prev => prev - 32);
        setcharwtr2(prev => prev - 34);
        setcharment2(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat2(prev => prev - 40);
        setcharwtr2(prev => prev - 45);
        setcharment2(prev => prev - 40);
      }
      }
      else if(charch === 3 && tam3 === false){
        settam3(true);
        const randomValue = Math.floor(Math.random() * 3) + 5;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(3);
       if (randomValue === 1){
        setchareat3(prev => prev - 15);
        setcharwtr3(prev => prev - 15);
        setcharment3(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat3(prev => prev - 20);
        setcharwtr3(prev => prev - 22);
        setcharment3(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat3(prev => prev - 23);
        setcharwtr3(prev => prev - 24);
        setcharment3(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat3(prev => prev - 26);
        setcharwtr3(prev => prev - 27);
        setcharment3(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat3(prev => prev - 29);
        setcharwtr3(prev => prev - 30);
        setcharment3(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat3(prev => prev - 32);
        setcharwtr3(prev => prev - 34);
        setcharment3(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat3(prev => prev - 40);
        setcharwtr3(prev => prev - 45);
        setcharment3(prev => prev - 40);
      }
      }
      else if(charch === 4 && tam4 === false){
        settam4(true);
        const randomValue = Math.floor(Math.random() * 3) + 5;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(3);
        if (randomValue === 1){
        setchareat4(prev => prev - 15);
        setcharwtr4(prev => prev - 15);
        setcharment4(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat4(prev => prev - 20);
        setcharwtr4(prev => prev - 22);
        setcharment4(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat4(prev => prev - 23);
        setcharwtr4(prev => prev - 24);
        setcharment4(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat4(prev => prev - 26);
        setcharwtr4(prev => prev - 27);
        setcharment4(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat4(prev => prev - 29);
        setcharwtr4(prev => prev - 30);
        setcharment4(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat4(prev => prev - 32);
        setcharwtr4(prev => prev - 34);
        setcharment4(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat4(prev => prev - 40);
        setcharwtr4(prev => prev - 45);
        setcharment4(prev => prev - 40);
      }
      }
    }
    else {
      if(charch === 1)
      {
        setDie1(true);
        settam1(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 2)
      {
        setDie2(true);
        settam2(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 3)
      {
        setDie3(true);
        settam3(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 4)
      {
        setDie4(true);
        settam4(true);
        set외로움(prev => prev + 1);
      }

    }
    if(무기 == "도끼" || 무기1 == "도끼" || 무기2 == "도끼" || 무기3 == "도끼")
      {
        const randomValue = Math.floor(Math.random() * 12) + 1;
        if(randomValue <= 1 && 무기1 == "도끼")
        {
          set무기1("");
        }
        else if(randomValue <= 4 && 무기 == "도끼")
        {
          set무기("");
        }
        else if(randomValue <= 4 && 무기2 == "도끼")
        {
          set무기2("");
        }
        else if(randomValue <= 4 && 무기3 == "도끼")
        {
          set무기3("");
        }
      }
      else if(무기 == "진압봉" || 무기1 == "진압봉" || 무기2 == "진압봉" || 무기3 == "진압봉")
      {
        const randomValue = Math.floor(Math.random() * 22) + 1;
        if(randomValue <= 1 && 무기 == "진압봉")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "진압봉")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "진압봉")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "진압봉")
        {
          set무기3("");
        }
      }
      else if(무기 == "헬멧" || 무기1 == "헬멧" || 무기2 == "헬멧" || 무기3 == "헬멧")
      {
        const randomValue = Math.floor(Math.random() * 32) + 1;
        if(randomValue <= 1 && 무기 == "헬멧")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "헬멧")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "헬멧")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "헬멧")
        {
          set무기3("");
        }
      }
      else if(무기 == "야구방망이" || 무기1 == "야구방망이" || 무기2 == "야구방망이" || 무기3 == "야구방망이")
        {
          const randomValue = Math.floor(Math.random() * 17) + 1;
          if(randomValue <= 1 && 무기 == "야구방망이")
          {
            set무기("");
          }
          else if(randomValue <= 3 && 무기1 == "야구방망이")
          {
            set무기1("");
          }
          else if(randomValue <= 3 && 무기2 == "야구방망이")
          {
            set무기2("");
          }
          else if(randomValue <= 3 && 무기3 == "야구방망이")
          {
            set무기3("");
          }
        }

  }
    const mapa4 = () => { //맵 4 1~4 서로고
    if(charch === 1)
    {
      set무기장착여부(false);
    }
    else if(charch === 2)
    {
      set무기장착여부1(false)
    }
    else if(charch === 3)
    {
      set무기장착여부2(false)
    }
    else if(charch === 4)
    {
      set무기장착여부3(false)
    }
    const rands = Math.floor(Math.random() * (100+무기장착));
    if (rands >= 20){
        if (charch === 1 && tam1 === false){
        settam1(true);
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(4);
       if (randomValue === 1){
        setchareat1(prev => prev - 15);
        setcharwtr1(prev => prev - 15);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat1(prev => prev - 20);
        setcharwtr1(prev => prev - 22);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat1(prev => prev - 23);
        setcharwtr1(prev => prev - 24);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat1(prev => prev - 26);
        setcharwtr1(prev => prev - 27);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat1(prev => prev - 29);
        setcharwtr1(prev => prev - 30);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat1(prev => prev - 32);
        setcharwtr1(prev => prev - 34);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat1(prev => prev - 40);
        setcharwtr1(prev => prev - 45);
        setcharment1(prev => prev - 40);
      }
      }
      else if(charch === 2 && tam2 === false){
        settam2(true);
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(4);
       if (randomValue === 1){
        setchareat2(prev => prev - 15);
        setcharwtr2(prev => prev - 15);
        setcharment2(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat2(prev => prev - 20);
        setcharwtr2(prev => prev - 22);
        setcharment2(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat2(prev => prev - 23);
        setcharwtr2(prev => prev - 24);
        setcharment2(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat2(prev => prev - 26);
        setcharwtr2(prev => prev - 27);
        setcharment2(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat2(prev => prev - 29);
        setcharwtr2(prev => prev - 30);
        setcharment2(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat2(prev => prev - 32);
        setcharwtr2(prev => prev - 34);
        setcharment2(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat2(prev => prev - 40);
        setcharwtr2(prev => prev - 45);
        setcharment2(prev => prev - 40);
      }
      }
      else if(charch === 3 && tam3 === false){
        settam3(true);
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(4);
       if (randomValue === 1){
        setchareat3(prev => prev - 15);
        setcharwtr3(prev => prev - 15);
        setcharment3(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat3(prev => prev - 20);
        setcharwtr3(prev => prev - 22);
        setcharment3(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat3(prev => prev - 23);
        setcharwtr3(prev => prev - 24);
        setcharment3(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat3(prev => prev - 26);
        setcharwtr3(prev => prev - 27);
        setcharment3(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat3(prev => prev - 29);
        setcharwtr3(prev => prev - 30);
        setcharment3(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat3(prev => prev - 32);
        setcharwtr3(prev => prev - 34);
        setcharment3(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat3(prev => prev - 40);
        setcharwtr3(prev => prev - 45);
        setcharment3(prev => prev - 40);
      }
      }
      else if(charch === 4 && tam4 === false){
        settam4(true);
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(4);
        if (randomValue === 1){
        setchareat4(prev => prev - 15);
        setcharwtr4(prev => prev - 15);
        setcharment4(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat4(prev => prev - 20);
        setcharwtr4(prev => prev - 22);
        setcharment4(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat4(prev => prev - 23);
        setcharwtr4(prev => prev - 24);
        setcharment4(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat4(prev => prev - 26);
        setcharwtr4(prev => prev - 27);
        setcharment4(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat4(prev => prev - 29);
        setcharwtr4(prev => prev - 30);
        setcharment4(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat4(prev => prev - 32);
        setcharwtr4(prev => prev - 34);
        setcharment4(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat4(prev => prev - 40);
        setcharwtr4(prev => prev - 45);
        setcharment4(prev => prev - 40);
      }
      }
    }
    else {
      if(charch === 1)
      {
        setDie1(true);
        settam1(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 2)
      {
        setDie2(true);
        settam2(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 3)
      {
        setDie3(true);
        settam3(true);
        set외로움(prev => prev + 1);
      }
      else if(charch === 4)
      {
        setDie4(true);
        settam4(true);
        set외로움(prev => prev + 1);
      }

    }
    if(무기 == "도끼" || 무기1 == "도끼" || 무기2 == "도끼" || 무기3 == "도끼")
      {
        const randomValue = Math.floor(Math.random() * 14) + 1;
        if(randomValue <= 1 && 무기1 == "도끼")
        {
          set무기1("");
        }
        else if(randomValue <= 4 && 무기 == "도끼")
        {
          set무기("");
        }
        else if(randomValue <= 4 && 무기2 == "도끼")
        {
          set무기2("");
        }
        else if(randomValue <= 4 && 무기3 == "도끼")
        {
          set무기3("");
        }
      }
      else if(무기 == "진압봉" || 무기1 == "진압봉" || 무기2 == "진압봉" || 무기3 == "진압봉")
      {
        const randomValue = Math.floor(Math.random() * 24) + 1;
        if(randomValue <= 1 && 무기 == "진압봉")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "진압봉")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "진압봉")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "진압봉")
        {
          set무기3("");
        }
      }
      else if(무기 == "헬멧" || 무기1 == "헬멧" || 무기2 == "헬멧" || 무기3 == "헬멧")
      {
        const randomValue = Math.floor(Math.random() * 34) + 1;
        if(randomValue <= 1 && 무기 == "헬멧")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "헬멧")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "헬멧")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "헬멧")
        {
          set무기3("");
        }
      }
      else if(무기 == "야구방망이" || 무기1 == "야구방망이" || 무기2 == "야구방망이" || 무기3 == "야구방망이")
        {
          const randomValue = Math.floor(Math.random() * 19) + 1;
          if(randomValue <= 1 && 무기 == "야구방망이")
          {
            set무기("");
          }
          else if(randomValue <= 3 && 무기1 == "야구방망이")
          {
            set무기1("");
          }
          else if(randomValue <= 3 && 무기2 == "야구방망이")
          {
            set무기2("");
          }
          else if(randomValue <= 3 && 무기3 == "야구방망이")
          {
            set무기3("");
          }
        }

  }
    const mapa5 = () => { //맵 5 3~5 산
    if(charch === 1)
    {
      set무기장착여부(false);
    }
    else if(charch === 2)
    {
      set무기장착여부1(false)
    }
    else if(charch === 3)
    {
      set무기장착여부2(false)
    }
    else if(charch === 4)
    {
      set무기장착여부3(false)
    }
    const rands = Math.floor(Math.random() * (100+무기장착));
    if (rands >= 25){
      if (charch === 1 && tam1 === false){
        settam1(true);
        const randomValue = Math.floor(Math.random() * 3) + 4;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(5);
       if (randomValue === 1){
        setchareat1(prev => prev - 5);
        setcharwtr1(prev => prev - 5);
        setcharment1(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat1(prev => prev - 10);
        setcharwtr1(prev => prev - 12);
        setcharment1(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat1(prev => prev - 15);
        setcharwtr1(prev => prev - 20);
        setcharment1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat1(prev => prev - 20);
        setcharwtr1(prev => prev - 30);
        setcharment1(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat1(prev => prev - 25);
        setcharwtr1(prev => prev - 40);
        setcharment1(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat1(prev => prev - 30);
        setcharwtr1(prev => prev - 52);
        setcharment1(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat1(prev => prev - 50);
        setcharwtr1(prev => prev - 65);
        setcharment1(prev => prev - 40);
      } 
      }
      else if(charch === 2 && tam2 === false){
        settam2(true);
        const randomValue = Math.floor(Math.random() * 3) + 4;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(5);
       if (randomValue === 1){
        setchareat2(prev => prev - 5);
        setcharwtr2(prev => prev - 5);
        setcharment2(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat2(prev => prev - 10);
        setcharwtr2(prev => prev - 12);
        setcharment2(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat2(prev => prev - 15);
        setcharwtr2(prev => prev - 20);
        setcharment2(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat2(prev => prev - 20);
        setcharwtr2(prev => prev - 30);
        setcharment2(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat2(prev => prev - 25);
        setcharwtr2(prev => prev - 40);
        setcharment2(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat2(prev => prev - 30);
        setcharwtr2(prev => prev - 52);
        setcharment2(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat2(prev => prev - 50);
        setcharwtr2(prev => prev - 65);
        setcharment2(prev => prev - 40);
      }   
      }
      else if(charch === 3 && tam3 === false){
        settam3(true);
        const randomValue = Math.floor(Math.random() * 3) + 4;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(5);
       if (randomValue === 1){
        setchareat3(prev => prev - 5);
        setcharwtr3(prev => prev - 5);
        setcharment3(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat3(prev => prev - 10);
        setcharwtr3(prev => prev - 12);
        setcharment3(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat3(prev => prev - 15);
        setcharwtr3(prev => prev - 20);
        setcharment3(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat3(prev => prev - 20);
        setcharwtr3(prev => prev - 30);
        setcharment3(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat3(prev => prev - 25);
        setcharwtr3(prev => prev - 40);
        setcharment3(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat3(prev => prev - 30);
        setcharwtr3(prev => prev - 52);
        setcharment3(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat3(prev => prev - 50);
        setcharwtr3(prev => prev - 65);
        setcharment3(prev => prev - 40);
      } 
    }
      else if(charch === 4 && tam4 === false){
        settam4(true);
        const randomValue = Math.floor(Math.random() * 3) + 4;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(5);
       if (randomValue === 1){
        setchareat4(prev => prev - 5);
        setcharwtr4(prev => prev - 5);
        setcharment4(prev => prev - 10);
       } 
       else if (randomValue === 2){
        setchareat4(prev => prev - 10);
        setcharwtr4(prev => prev - 12);
        setcharment4(prev => prev - 15);
       } 
       else if (randomValue === 3){
        setchareat4(prev => prev - 15);
        setcharwtr4(prev => prev - 20);
        setcharment4(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat4(prev => prev - 20);
        setcharwtr4(prev => prev - 30);
        setcharment4(prev => prev - 25);
       }        
       else if (randomValue === 5){
        setchareat4(prev => prev - 25);
        setcharwtr4(prev => prev - 40);
        setcharment4(prev => prev - 30);
       }   
       else if (randomValue === 6){
        setchareat4(prev => prev - 30);
        setcharwtr4(prev => prev - 52);
        setcharment4(prev => prev - 35);
       } 
       else if (randomValue === 7){
        setchareat4(prev => prev - 50);
        setcharwtr4(prev => prev - 65);
        setcharment4(prev => prev - 40);
      } 
      }
    }
    else {
      if(charch === 1)
      {
        setDie1(true);
        settam1(true);
        set외로움(prev => prev + 1);
      }
      if(charch === 2)
      {
        setDie2(true);
        settam2(true);
        set외로움(prev => prev + 1);
      }
      if(charch === 3)
      {
        setDie3(true);
        settam3(true);
        set외로움(prev => prev + 1);
      }
      if(charch === 4)
      {
        setDie4(true);
        settam4(true);
        set외로움(prev => prev + 1);
      }
    }
     if(무기 == "도끼" || 무기1 == "도끼" || 무기2 == "도끼" || 무기3 == "도끼")
      {
        const randomValue = Math.floor(Math.random() * 10) + 1;
        if(randomValue <= 1 && 무기1 == "도끼")
        {
          set무기1("");
        }
        else if(randomValue <= 4 && 무기 == "도끼")
        {
          set무기("");
        }
        else if(randomValue <= 4 && 무기2 == "도끼")
        {
          set무기2("");
        }
        else if(randomValue <= 4 && 무기3 == "도끼")
        {
          set무기3("");
        }
      }
      else if(무기 == "진압봉" || 무기1 == "진압봉" || 무기2 == "진압봉" || 무기3 == "진압봉")
      {
        const randomValue = Math.floor(Math.random() * 20) + 1;
        if(randomValue <= 1 && 무기 == "진압봉")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "진압봉")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "진압봉")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "진압봉")
        {
          set무기3("");
        }
      }
      else if(무기 == "헬멧" || 무기1 == "헬멧" || 무기2 == "헬멧" || 무기3 == "헬멧")
      {
        const randomValue = Math.floor(Math.random() * 30) + 1;
        if(randomValue <= 1 && 무기 == "헬멧")
        {
          set무기("");
        }
        else if(randomValue <= 3 && 무기1 == "헬멧")
        {
          set무기1("");
        }
        else if(randomValue <= 3 && 무기2 == "헬멧")
        {
          set무기2("");
        }
        else if(randomValue <= 3 && 무기3 == "헬멧")
        {
          set무기3("");
        }
      }
      else if(무기 == "야구방망이" || 무기1 == "야구방망이" || 무기2 == "야구방망이" || 무기3 == "야구방망이")
        {
          const randomValue = Math.floor(Math.random() * 15) + 1;
          if(randomValue <= 1 && 무기 == "야구방망이")
          {
            set무기("");
          }
          else if(randomValue <= 3 && 무기1 == "야구방망이")
          {
            set무기1("");
          }
          else if(randomValue <= 3 && 무기2 == "야구방망이")
          {
            set무기2("");
          }
          else if(randomValue <= 3 && 무기3 == "야구방망이")
          {
            set무기3("");
          }
        }
  }
 if (수치 >= 30 && 열림 === true && 사람1 === true && masg1 == 1) {
      seteat1(prev => prev + 문통조림랜덤);
      setetc1(prev => prev + 1);
      seteat2(prev => prev + 문물랜덤);
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);         
    }
  else if(수치 < 30 && 열림 === true && 사람1 === true && masg1 == 1)
  {
    set거래실패(true);
    set열림(false);
  }

 if (수치 >= 15 && 열림 === true && 사람1 === true && masg1 == 2) {
      seteat1(prev => prev + 문통조림랜덤);
      setetc3(prev => prev + 1);
      seteat2(prev => prev + 문물랜덤);
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);
    }
  else if(수치 < 15 && 열림 === true && 사람1 === true && masg2 == 2)
  {
    set거래실패(true);
    set열림(false);
  }

 if (수치 >= 15 && 열림 === true && 사람1 === true && masg1 == 3) {
      seteat1(prev => prev + 문통조림랜덤);
      setetc4(prev => prev + 1);
      seteat2(prev => prev + 문물랜덤);
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);
    }
  else if(수치 < 15 && 열림 === true && 사람1 === true && masg1 == 3)
  {
    set거래실패(true);
    set열림(false);
  }

 if (수치 >= 10 && 열림 === true && 사람1 === true && masg1 == 4) {
      seteat1(prev => prev + 문통조림랜덤);
      seteat2(prev => prev + 문물랜덤);
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);
    }
  else if(수치 < 10 && 열림 === true && 사람1 === true && masg1 == 4)
  {
    set거래실패(true);
    set열림(false);
  }



  if (수치 >= 10 && 열림 === true && 사람2 === true && masg2 == 1) {
      const q = Math.floor(Math.random() * 4) + 1;
      if(q <= 3)
      {
      seteat3(prev => prev + 문라면랜덤);
      seteat4(prev => prev + 문사탕랜덤);
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
  else if(수치 < 10 && 열림 === true && 사람2 === true && masg2 == 1)
  {
    set거래실패(true);
    set열림(false);
  }
  if (수치 >= 15 && 열림 === true && 사람2 === true && masg2 == 2) {
      const q = Math.floor(Math.random() * 4) + 1;
      if(q <= 3)
      {
      seteat3(prev => prev + 문라면랜덤 + 2);
      seteat4(prev => prev + 문사탕랜덤 + 3);
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
else if(수치 < 15 && 열림 === true && 사람2 === true && masg2 == 2)
  {
    set거래실패(true);
    set열림(false);
  }

  if (수치 >= 20 && 열림 === true && 사람2 === true && masg2 == 3) {
      const q = Math.floor(Math.random() * 4) + 1;
      if(q <= 3)
      {
      seteat3(prev => prev + 문통조림랜덤);
      seteat4(prev => prev + 문사탕랜덤);
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
  else if(수치 < 20 && 열림 === true && 사람2 === true && masg2 == 3)
  {
    set거래실패(true);
    set열림(false);
  }

  if (수치 >= 5 && 열림 === true && 사람2 === true && masg2 == 4) {
      const q = Math.floor(Math.random() * 4) + 1;
      if(q <= 3)
      {
      seteat3(prev => prev + 1);
      seteat4(prev => prev + 1);
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
      set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
  else if(수치 < 5 && 열림 === true && 사람2 === true && masg2 == 4)
  {
    set거래실패(true);
    set열림(false);
  }




  if (열림 === true && 사람3 === true) {
      seteat1(prev => prev + 문통조림랜덤);
      seteat3(prev => prev + 문라면랜덤);
      seteat2(prev => prev + 문물랜덤);
      seteat4(prev => prev + 문사탕랜덤);
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set열림(false);
      set거래완료(true);
    }




    if (수치 >= 30 && 열림 === true && 사람4 === true && masg4 == 1) {
      const ra = Math.floor(Math.random() * 4) + 1;
      if(ra <= 2)
      {
        setweap1(1);
        set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
  else if(수치 < 30 && 열림 === true && 사람4 === true && masg4 == 1)
  {
    set거래실패(true);
    set열림(false);
  }

    if (수치 >= 20 && 열림 === true && 사람4 === true && masg4 == 2) {
      const ra = Math.floor(Math.random() * 4) + 1;
      if(ra <= 2)
      {
        setweap2(1);
        set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
  else if(수치 < 20 && 열림 === true && 사람4 === true && masg4 == 2)
  {
    set거래실패(true);
    set열림(false);
  }

    if (수치 >= 25 && 열림 === true && 사람4 === true && masg4 == 3) {
      const ra = Math.floor(Math.random() * 4) + 1;
      if(ra <= 2)
      {
        setweap3(1);
        set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
  else if(수치 < 25 && 열림 === true && 사람4 === true && masg4 == 3)
  {
    set거래실패(true);
    set열림(false);
  }

    if (수치 >= 17 && 열림 === true && 사람4 === true && masg4 == 4) {
      const ra = Math.floor(Math.random() * 4) + 1;
      if(ra <= 2)
      {
        setweap4(1);
        set거래완료(true);
      }
      else{
        set도둑감지(true);
      }
      seteat1(prev => prev - (통조림));
      seteat2(prev => prev - (물));
      seteat3(prev => prev - (라면));
      seteat4(prev => prev - (사탕));
      set통조림(0);
      set물(0);
      set라면(0);
      set사탕(0);
      set수치(0);
      set열림(false);
    }
  else if(수치 < 17 && 열림 === true && 사람4 === true && masg4 == 4)
  {
    set거래실패(true);
    set열림(false);
  }

  if(무기장착여부 === true && weap1 >= 1)
  {
    setweap1(0);
  }
  if(무기장착여부 === true && weap2 >= 1)
  {
    setweap2(0);
  }
  if(무기장착여부 === true && weap3 >= 1)
  {
    setweap3(0);
  }
  if(무기장착여부 === true && weap4 >= 1)
  {
    setweap4(0);
  }


  if(무기장착여부1 === true && weap1 >= 1)
  {
    setweap1(0);
  }
  if(무기장착여부1 === true && weap2 >= 1)
  {
    setweap2(0);
  }
  if(무기장착여부1 === true && weap3 >= 1)
  {
    setweap3(0);
  }
  if(무기장착여부1 === true && weap4 >= 1)
  {
    setweap4(0);
  }


  if(무기장착여부2 === true && weap1 >= 1)
  {
    setweap1(0);
  }
  if(무기장착여부2 === true && weap2 >= 1)
  {
    setweap2(0);
  }
  if(무기장착여부2 === true && weap3 >= 1)
  {
    setweap3(0);
  }
  if(무기장착여부2 === true && weap4 >= 1)
  {
    setweap4(0);
  }

  if(무기장착여부3 === true && weap1 >= 1)
  {
    setweap1(0);
  }
  if(무기장착여부3 === true && weap2 >= 1)
  {
    setweap2(0);
  }
  if(무기장착여부3 === true && weap3 >= 1)
  {
    setweap3(0);
  }
  if(무기장착여부3 === true && weap4 >= 1)
  {
    setweap4(0);
  }


  if(weap1 >= 2)
  {
    setweap1(1);
  }
  if(weap2 >= 2)
  {
    setweap2(1);
  }
  if(weap3 >= 2)
  {
    setweap3(1);
  }
  if(weap4 >= 2)
  {
    setweap4(1);
  }

  if(etc1 >= 2)
  {
    setetc1(1);
  }
  if(etc2 > 1)
  {
    setetc2(1);
  }
    if(charment1 <= -100 && Die1 == false)
    {
      //자살
      setDie1(true);
      settam1(true);
      set외출제한1(true);
    }
    if(charment2 <= -100 && Die2 == false)
    {
      //자살
      setDie2(true);
      settam2(true);
      set외출제한2(true);
    }
    if(charment3 <= -100 && Die3 == false)
    {
      //자살
      setDie3(true);
      settam3(true);
      set외출제한3(true);
    }
    if(charment4 <= -100 && Die4 == false)
    {
      //자살
      setDie4(true);
      settam4(true);
      set외출제한4(true);
    }

  const DayUp = () => { //하루 지남
    set보드게임제한(3);
    if(탈출 == 0)
    {
      if(maplo1 == 3 && maplo2 == 3 && maplo3 == 3 && maplo4 == 3)
      {
        setpage(20);
        setmaplo1(0);
        setmaplo2(0);
        setmaplo3(0);
        setmaplo4(0);
      }
      else
      {
        setpage(22);
      }
    }

    if((감기1-3) >= 0)
    {
      set감기1(prev => prev - 3);
    }
    else if((감기1-3) < 0)
    {
      set감기1(0);
    }
    if((독감1-2) >= 0)
    {
      set독감1(prev => prev - 2);
    }
    else if((독감1-2) < 0)
    {
      set독감1(0);
    }
    if((식중독1-3) >= 0)
    {
      set식중독1(prev => prev - 3);
    }
    else if((식중독1-3) < 0)
    {
      set식중독1(0);
    }
    if((출혈1-3) >= 0)
    {
      set출혈1(prev => prev - 3);
    }
    else if((출혈1-3) < 0)
    {
      set출혈1(0);
    }
    if((골절1-1) >= 0)
    {
      set골절1(prev => prev - 1);
    }
    else if((골절1-1) < 0)
    {
      set골절1(0);
    }

    if((감기2-3) >= 0)
    {
      set감기2(prev => prev - 3);
    }
    else if((감기2-3) < 0)
    {
      set감기2(0);
    }
    if((독감2-2) >= 0)
    {
      set독감2(prev => prev - 2);
    }
    else if((독감2-2) < 0)
    {
      set독감2(0);
    }
    if((식중독2-3) >= 0)
    {
      set식중독2(prev => prev - 3);
    }
    else if((식중독2-3) < 0)
    {
      set식중독2(0);
    }
    if((출혈2-3) >= 0)
    {
      set출혈2(prev => prev - 3);
    }
    else if((출혈2-3) < 0)
    {
      set출혈2(0);
    }
    if((골절2-1) >= 0)
    {
      set골절2(prev => prev - 1);
    }
    else if((골절2-1) < 0)
    {
      set골절2(0);
    }

    if((감기3-3) >= 0)
    {
      set감기3(prev => prev - 3);
    }
    else if((감기3-3) < 0)
    {
      set감기3(0);
    }
    if((독감3-2) >= 0)
    {
      set독감3(prev => prev - 2);
    }
    else if((독감3-2) < 0)
    {
      set독감3(0);
    }
    if((식중독3-3) >= 0)
    {
      set식중독3(prev => prev - 3);
    }
    else if((식중독3-3) < 0)
    {
      set식중독3(0);
    }
    if((출혈3-3) >= 0)
    {
      set출혈3(prev => prev - 3);
    }
    else if((출혈3-3) < 0)
    {
      set출혈3(0);
    }
    if((골절3-1) >= 0)
    {
      set골절3(prev => prev - 1);
    }
    else if((골절3-1) < 0)
    {
      set골절3(0);
    }

    if((감기4-3) >= 0)
    {
      set감기4(prev => prev - 3);
    }
    else if((감기4-3) < 0)
    {
      set감기4(0);
    }
    if((독감4-2) >= 0)
    {
      set독감4(prev => prev - 2);
    }
    else if((독감4-2) < 0)
    {
      set독감4(0);
    }
    if((식중독4-3) >= 0)
    {
      set식중독4(prev => prev - 3);
    }
    else if((식중독4-3) < 0)
    {
      set식중독4(0);
    }
    if((출혈4-3) >= 0)
    {
      set출혈4(prev => prev - 3);
    }
    else if((출혈4-3) < 0)
    {
      set출혈4(0);
    }
    if((골절4-1) >= 0)
    {
      set골절4(prev => prev - 1);
    }
    else if((골절4-1) < 0)
    {
      set골절4(0);
    }


    if(etc2 >= 1)
    {
      if(라디오확률 <= 0)
      {
        set라디오확률(Math.floor(Math.random() * 5) + 5);
        set라디오대사(prev => prev + 1);

      }
      set라디오확률(prev => prev -1);
      set라디오하루대사(5);
      if(라디오대사 == 2)
      {
        set탈출(Math.floor(Math.random() * 20) + 10);
      }
      if(라디오대사 >= 3)
      {
        set탈출(prev => prev -1);
      }
    }

    seteat1표시(0);
    seteat2표시(0);
    seteat3표시(0);
    seteat4표시(0);

    setmed1표시(0);
    setmed2표시(0);

    setetc1표시(0);
    setetc2표시(0);
    setetc3표시(0);
    setetc4표시(0);

    setweap1표시(0);
    setweap2표시(0);
    setweap3표시(0);
    setweap4표시(0);
    if(감기1 <= 0)
    {
      set감기여부1(false);
    }
    if(감기2 <= 0)
    {
      set감기여부2(false);
    }
    if(감기3 <= 0)
    {
      set감기여부3(false);
    }
    if(감기4 <= 0)
    {
      set감기여부4(false);
    }

    if(출혈1 <= 0)
    {
      set출혈여부1(false);
    }
    if(출혈2 <= 0)
    {
      set출혈여부2(false);
    }
    if(출혈3 <= 0)
    {
      set출혈여부3(false);
    }
    if(출혈4 <= 0)
    {
      set출혈여부4(false);
    }

    if(독감1 <= 0)
    {
      set독감여부1(false);
    }
    if(독감2 <= 0)
    {
      set독감여부2(false);
    }
    if(독감3 <= 0)
    {
      set독감여부3(false);
    }
    if(독감4 <= 0)
    {
      set독감여부4(false);
    }

    if(골절1 <= 0)
    {
      set골절여부1(false);
    }
    if(골절2 <= 0)
    {
      set골절여부2(false);
    }
    if(골절3 <= 0)
    {
      set골절여부3(false);
    }
    if(골절4 <= 0)
    {
      set골절여부4(false);
    }

    if(식중독1 <= 0)
    {
      set식중독여부1(false);
    }
    if(식중독2 <= 0)
    {
      set식중독여부2(false);
    }
    if(식중독3 <= 0)
    {
      set식중독여부3(false);
    }
    if(식중독4 <= 0)
    {
      set식중독여부4(false);
    }
    const 바이러스 = Math.floor(Math.random() * 100);
    if(바이러스 <= 3)
    {
      const 얻는량 = Math.floor(Math.random() * 10)+ 1;
      const 종류 = Math.floor(Math.random() * 5);
      if (종류 === 0)
      {
        set감기1(prev => prev + 얻는량);
        set감기여부1(true);
      }
      else if (종류 === 1)
      {
        set출혈1(prev => prev + 얻는량);
        set출혈여부1(true);
      }
      else if (종류 === 2)
      {
        set독감1(prev => prev + 얻는량);
        set독감여부1(true);
      }
      else if (종류 === 3)
      {
        set골절1(prev => prev + 얻는량);
        set골절여부1(true);
      }
      else if (종류 === 4)
      {
        set식중독1(prev => prev + 얻는량);
        set식중독여부1(true);
      }
    }
    const 바이러스2 = Math.floor(Math.random() * 100) + 1;
    if(바이러스2 <= 3)
    {
      const 얻는량2 = Math.floor(Math.random() * 10)+ 1;
      const 종류2 = Math.floor(Math.random() * 5);
      if (종류2 === 0)
      {
        set감기2(prev => prev + 얻는량2);
        set감기여부2(true);
      }
      else if (종류2 === 1)
      {
        set출혈2(prev => prev + 얻는량2);
        set출혈여부2(true);
      }
      else if (종류2 === 2)
      {
        set독감2(prev => prev + 얻는량2);
        set독감여부2(true);
      }
      else if (종류2 === 3)
      {
        set골절2(prev => prev + 얻는량2);
        set골절여부2(true);
      }
      else if (종류2 === 4)
      {
        set식중독2(prev => prev + 얻는량2);
        set식중독여부2(true);
      }
    }
    const 바이러스3 = Math.floor(Math.random() * 100)+1;
    if(바이러스3 <= 2)
    {
      const 얻는량3 = Math.floor(Math.random() * 10)+ 1;
      const 종류3 = Math.floor(Math.random() * 5);
      if (종류3 === 0)
      {
        set감기3(prev => prev + 얻는량3);
        set감기여부3(true);
      }
      else if (종류3 === 1)
      {
        set출혈3(prev => prev + 얻는량3);
        set출혈여부3(true);
      }
      else if (종류3 === 2)
      {
        set독감3(prev => prev + 얻는량3);
        set독감여부3(true);
      }
      else if (종류3 === 3)
      {
        set골절3(prev => prev + 얻는량3);
        set골절여부3(true);
      }
      else if (종류3 === 4)
      {
        set식중독3(prev => prev + 얻는량3);
        set식중독여부3(true);
      }
    }
    const 바이러스4 = Math.floor(Math.random() * 100)+1;
    if(바이러스4 <= 2)
    {
      const 얻는량4 = Math.floor(Math.random() * 10)+ 1;
      const 종류4 = Math.floor(Math.random() * 5);
      if (종류4 === 0)
      {
        set감기4(prev => prev + 얻는량4);
        set감기여부4(true);
      }
      else if (종류4 === 1)
      {
        set출혈4(prev => prev + 얻는량4);
        set출혈여부4(true);
      }
      else if (종류4 === 2)
      {
        set독감4(prev => prev + 얻는량4);
        set독감여부4(true);
      }
      else if (종류4 === 3)
      {
        set골절4(prev => prev + 얻는량4);
        set골절여부4(true);
      }
      else if (종류4 === 4)
      {
        set식중독4(prev => prev + 얻는량4);
        set식중독여부4(true);
      }
    }

    if (chareat1 > 0 && tam1 == false)
    {      
      setchareat1(prev => prev - 7);
    }
    else if(tam1 == false && chareat1-7 <= 0){
      setchareat1(0);
    }

    if(charwtr1 > 0 && tam1 == false)
    {
      setcharwtr1(prev => prev - 10);
    }
    else if(tam1 == false && charwtr1-10 <= 0){
      setcharwtr1(0);
    }
    if(tam1 == false)
    {
      if(외로움 === 1)
      {
        setcharment1(prev => prev - 5);
      }
      else if(외로움 === 2)
      {
        setcharment1(prev => prev - 7);
      }
      else if(외로움 === 3)
      {
        setcharment1(prev => prev - 10);
      }
      else if(외로움 >= 4)
      {
        setcharment1(prev => prev - 15);
      }
    }




    if (chareat2 > 0 && tam2 == false) //하루 닳는 배고픔, 물 , 외로움
    {     
      setchareat2(prev => prev - 6);
    }
    else if(tam2 == false && chareat2-6 <= 0){
      setchareat2(0);
    }
    if(charwtr2 > 0 && tam2 == false)
    {
      setcharwtr2(prev => prev - 12);
    }
    else if(tam2 == false && charwtr2-12 <= 0){
      setcharwtr2(0);
    }
    if(tam2 == false)
    {
      if(외로움 === 1)
      {
        setcharment2(prev => prev - 5);
      }
      else if(외로움 === 2)
      {
        setcharment2(prev => prev - 8);
      }
      else if(외로움 === 3)
      {
        setcharment2(prev => prev - 12);
      }
      else if(외로움 === 4)
      {
        setcharment2(prev => prev - 15);
      }
    }



    if (chareat3 > 0 && tam3 == false)
    {
      setchareat3(prev => prev - 10);
    }
    else if(tam3 == false && chareat3-10 <= 0){
      setchareat3(0);
    }
    if(charwtr3 > 0 && tam3 == false)
    {
      setcharwtr3(prev => prev - 9);
    }
    else if(tam3 == false && charwtr3-9 <= 0){
      setcharwtr3(0);
    }
    if(tam3 == false)
    {
      if(외로움 === 1)
      {
        setcharment3(prev => prev - 4);
      }
      else if(외로움 === 2)
      {
        setcharment3(prev => prev - 6);
      }
      else if(외로움 === 3)
      {
        setcharment3(prev => prev - 8);
      }
      else if(외로움 === 4)
      {
        setcharment3(prev => prev - 20);
      }
    }



    if (chareat4 > 0 && tam4 == false)
    {   
      setchareat4(prev => prev - 5);
    }
    else if(tam4 == false && chareat4-5 <= 0){
      setchareat4(0);
    }
    if(charwtr4 > 0 && tam4 == false)
    {
      setcharwtr4(prev => prev - 11);
    }
    else if(tam4 == false && charwtr4-11 <= 0){
      setcharwtr4(0);
    }
    if(tam4 == false)
    {
      if(외로움 === 1)
      {
        setcharment4(prev => prev - 7);
      }
      else if(외로움 === 2)
      {
        setcharment4(prev => prev - 8);
      }
      else if(외로움 === 3)
      {
        setcharment4(prev => prev - 9);
      }
      else if(외로움 === 4)
      {
        setcharment4(prev => prev - 10);
      }
    }



  setDay(prev => prev +1);
  setpage(11); 
  const rand = Math.floor(Math.random() * 10);
  setr1(rand);
  if (tam1 == true && Die1 == false){
    setDay1(prev => prev + 1);
  }
  if(tam2 == true && Die2 == false){
    setDay2(prev => prev + 1);
  }
  if(tam3 == true && Die3 == false){
    setDay3(prev => prev + 1);
  }
  if(tam4 == true && Die4 == false){
    setDay4(prev => prev + 1);
  }

  if (DayD1 < Day1 && Die1 === false && tam1 === true){
    setDayD1(0);
    settam1(false);
    set외로움(prev => prev - 1);
    setDay1(2);
    setmaplo1(0);
  }
  if (DayD2 < Day2 && Die2 === false && tam2 === true){
    setDayD2(0);
    settam2(false);
    set외로움(prev => prev - 1);
    setDay2(2);
    setmaplo2(0);
  }
  if (DayD3 < Day3 && Die3 === false && tam3 === true){
    setDayD3(0);
    settam3(false);
    set외로움(prev => prev - 1);
    setDay3(2);
    setmaplo3(0);
  }
  if (DayD4 < Day4 && Die4 === false && tam4 === true){
    setDayD4(0);
    settam4(false);
    set외로움(prev => prev - 1);
    setDay4(2);
    setmaplo4(0);
  }

  if (DayD1 < Day1){
    if (Die1 == false){
   if (maplo1 === 1)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        if(weap4 < 1 && 무기 != "헬멧")
        {
          const rand1 = 1;
          setweap4(prev => prev + rand1);
          setweap4표시(prev => prev + rand1);
        }

      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 5) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 100){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo1 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      if(etc2 < 1)
      {
        const rand1 = 1;
        setetc2(prev => prev + rand1);
        setetc2표시(prev => prev + rand1);
      }
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 <= 60){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat2(prev => prev + rand1);
      seteat2표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 <= 30){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 <= 25){
        const rand1 = Math.floor(Math.random() * 4) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 <= 100){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      if(weap2 < 1 && 무기 != "진압봉")
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }
    }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo1 === 3)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        setmed1(prev => prev + rand1);
        setmed1표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        const rand1 = 1;
        setmed2(prev => prev + rand1);
        setmed2표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
          const rand1 = Math.floor(Math.random() * 2) + 1;
          seteat2(prev => prev + rand1);
          seteat2표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 100){
          const rand1 = Math.floor(Math.random() * 3) + 1;
          seteat1(prev => prev + rand1);
          seteat1표시(prev => prev + rand1);
      }
      const rand4 = Math.floor(Math.random() * 100) + 1;
      if (rand4 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        setetc4(prev => prev + rand1);
        setetc4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if(maplo1 === 4)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 35){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat4(prev => prev + rand1);
      seteat4표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat1(prev => prev + rand1);
        seteat1표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 30){
        const rand1 = 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 20){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setmed1(prev => prev + rand1);
      setmed1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      if(etc1 < 1)
      {
        setetc1(prev => prev + 1);
        setetc1표시(prev => prev + 1);
      }

    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1 && 무기 != "야구방망이")
      {
        setweap3(prev => prev + 1);
        setweap3표시(prev => prev + 1);
      }

    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setetc4(prev => prev + rand1);
      setetc4표시(prev => prev + rand1);
    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo1 === 5){
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 35){
      const rand1 = Math.floor(Math.random() * 2) + 2;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 45){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 25){
      if(weap1 < 1 && 무기 != "도끼")
      {
        setweap1(prev => prev + 1);
        setweap1표시(prev => prev + 1);
      }

    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      if(etc2 < 1)
      {
        setetc2(prev => prev + 1);
        setetc2표시(prev => prev + 1);
      }

    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }



    
  }
  
}
  if (DayD2 < Day2){
    if (Die2 == false)
    {
   if (maplo2 === 1)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        if(weap4 < 1 && 무기1 != "헬멧")
        {
          const rand1 = 1;
          setweap4(prev => prev + rand1);
          setweap4표시(prev => prev + rand1);
        }

      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 5) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo2 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      if(etc2 < 1)
      {
        const rand1 = 1;
        setetc2(prev => prev + rand1);
        setetc2표시(prev => prev + rand1);
      }

    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 <= 60){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat2(prev => prev + rand1);
      seteat2표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 <= 30){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 <= 25){
        const rand1 = Math.floor(Math.random() * 4) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 <= 100){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      if(weap2 < 1 && 무기1 != "진압봉")
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }
    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo2 === 3)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        setmed1(prev => prev + rand1);
        setmed1표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        const rand1 = 1;
        setmed2(prev => prev + rand1);
        setmed2표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
          const rand1 = Math.floor(Math.random() * 2) + 1;
          seteat2(prev => prev + rand1);
          seteat2표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 100){
          const rand1 = Math.floor(Math.random() * 3) + 1;
          seteat1(prev => prev + rand1);
          seteat1표시(prev => prev + rand1);
      }
      const rand4 = Math.floor(Math.random() * 100) + 1;
      if (rand4 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        setetc4(prev => prev + rand1);
        setetc4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if(maplo2 === 4)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 35){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat4(prev => prev + rand1);
      seteat4표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat1(prev => prev + rand1);
        seteat1표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 30){
        const rand1 = 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 20){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setmed1(prev => prev + rand1);
      setmed1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      if(etc1 < 1)
      {
      setetc1(prev => prev + 1);
      setetc1표시(prev => prev + 1);
      }

    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1 && 무기1 != "야구방망이")
      {
        setweap3(prev => prev + 1);
        setweap3표시(prev => prev + 1);
      }

    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setetc4(prev => prev + rand1);
      setetc4표시(prev => prev + rand1);
    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo2 === 5){
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 35){
      const rand1 = Math.floor(Math.random() * 2) + 2;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 45){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 25){
      if(weap1 < 1 && 무기1 != "도끼")
      {
        setweap1(prev => prev + 1);
        setweap1표시(prev => prev + 1);
      }

    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      if(etc2 < 1)
      {
        setetc2(prev => prev + 1);
        setetc2표시(prev => prev + 1);
      }

    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
  }
 
  }
}
  if (Day3 > DayD3){
    if (Die3 == false)
    {
   if (maplo3 === 1)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        if(weap4 < 1 && 무기2 != "헬멧")
        {
          const rand1 = 1;
          setweap4(prev => prev + rand1);
          setweap4표시(prev => prev + rand1);
        }

      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 5) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo3 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      if(etc2 < 1)
      {
        const rand1 = 1;
        setetc2(prev => prev + rand1);
        setetc2표시(prev => prev + rand1);
      }

    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 <= 60){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat2(prev => prev + rand1);
      seteat2표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 <= 30){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 <= 25){
        const rand1 = Math.floor(Math.random() * 4) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 <= 100){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      if(weap2 < 1 && 무기2 != "진압봉")
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }

    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo3 === 3)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        setmed1(prev => prev + rand1);
        setmed1표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        const rand1 = 1;
        setmed2(prev => prev + rand1);
        setmed2표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
          const rand1 = Math.floor(Math.random() * 2) + 1;
          seteat2(prev => prev + rand1);
          seteat2표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 100){
          const rand1 = Math.floor(Math.random() * 3) + 1;
          seteat1(prev => prev + rand1);
          seteat1표시(prev => prev + rand1);
      }
      const rand4 = Math.floor(Math.random() * 100) + 1;
      if (rand4 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        setetc4(prev => prev + rand1);
        setetc4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if(maplo3 === 4)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 35){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat4(prev => prev + rand1);
      seteat4표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat1(prev => prev + rand1);
        seteat1표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 30){
        const rand1 = 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 20){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setmed1(prev => prev + rand1);
      setmed1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 <  15){
      if(etc1 < 1)
      {
      setetc1(prev => prev + 1);
      setetc1표시(prev => prev + 1);
      }

    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1 && 무기2 != "야구방망이")
      {
        setweap3(prev => prev + 1);
        setweap3표시(prev => prev + 1);
      }

    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setetc4(prev => prev + rand1);
      setetc4표시(prev => prev + rand1);
    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo3 === 5){
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 35){
      const rand1 = Math.floor(Math.random() * 2) + 2;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 45){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 25){
      if(weap1 < 25 && 무기2 != "도끼")
      {
        setweap1(prev => prev + 1);
        setweap1표시(prev => prev + 1);
      }

    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      if(etc2 < 1)
      {
        setetc2(prev => prev + 1);
        setetc2표시(prev => prev + 1);
      }

    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
  }
  }
}
  if (Day4 > DayD4){
    if(Die4 === false)
    {

    if (maplo4 === 1)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        if(weap4 < 1 && 무기3 != "헬멧")
        {
          const rand1 = 1;
          setweap4(prev => prev + rand1);
          setweap4표시(prev => prev + rand1);
        }

      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 5) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo4 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      if(etc2 < 1)
      {
        const rand1 = 1;
        setetc2(prev => prev + rand1);
        setetc2표시(prev => prev + rand1);
      }

    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 <= 60){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat2(prev => prev + rand1);
      seteat2표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 <= 30){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 <= 25){
        const rand1 = Math.floor(Math.random() * 4) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 <= 100){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      if(weap2 < 1 && 무기3 != "진압봉")
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }
    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo4 === 3)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
      if (rand <= 40){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        setmed1(prev => prev + rand1);
        setmed1표시(prev => prev + rand1);
      }
      const rand1 = Math.floor(Math.random() * 100) + 1;
      if (rand1 <= 20){
        const rand1 = 1;
        setmed2(prev => prev + rand1);
        setmed2표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
          const rand1 = Math.floor(Math.random() * 2) + 1;
          seteat2(prev => prev + rand1);
          seteat2표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 100){
          const rand1 = Math.floor(Math.random() * 3) + 1;
          seteat1(prev => prev + rand1);
          seteat1표시(prev => prev + rand1);
      }
      const rand4 = Math.floor(Math.random() * 100) + 1;
      if (rand4 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        setetc4(prev => prev + rand1);
        setetc4표시(prev => prev + rand1);
      }
      const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if(maplo4 === 4)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 35){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat4(prev => prev + rand1);
      seteat4표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat1(prev => prev + rand1);
        seteat1표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 30){
        const rand1 = 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 20){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setmed1(prev => prev + rand1);
      setmed1표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      if(etc1 < 1)
      {
      setetc1(prev => prev + 1);
      setetc1표시(prev => prev + 1);
      }

    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1 && 무기3 != "야구방망이")
      {
        setweap3(prev => prev + 1);
        setweap3표시(prev => prev + 1);
      }

    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setetc4(prev => prev + rand1);
      setetc4표시(prev => prev + rand1);
    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
    }
    if (maplo4 === 5){
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand < 35){
      const rand1 = Math.floor(Math.random() * 2) + 2;
      seteat1(prev => prev + rand1);
      seteat1표시(prev => prev + rand1);
    }
    const rand1 = Math.floor(Math.random() * 100) + 1;
    if (rand1 < 40){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      seteat3(prev => prev + rand1);
      seteat3표시(prev => prev + rand1);
    }
    const rand2 = Math.floor(Math.random() * 100) + 1;
    if (rand2 < 25){
        const rand1 = Math.floor(Math.random() * 2) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
    }
    const rand3 = Math.floor(Math.random() * 100) + 1;
    if (rand3 < 45){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat2(prev => prev + rand1);
        seteat2표시(prev => prev + rand1);
    }
    const rand4 = Math.floor(Math.random() * 100) + 1;
    if (rand4 < 25){
      if(weap1 < 1 && 무기3 != "도끼")
      {
        setweap1(prev => prev + 1);
        setweap1표시(prev => prev + 1);
      }

    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      if(etc2 < 1)
      {
        setetc2(prev => prev + 1);
        setetc2표시(prev => prev + 1);
      }

    }
    const rand100 = Math.floor(Math.random() * 100) + 1;
      if (rand100 <= 15){
        const rand1 = Math.floor(Math.random() * 36);
        let copy = [...쪽지];
        copy[rand1] = true;
        set쪽지(copy);
      }
  }

  }
}
  const randman = Math.floor(Math.random() * 10) + 1;
    if(randman <= 1)
      {
        set문사람감지(true);
        const rand사람 = Math.floor(Math.random() * 4) + 1;
      if(rand사람 === 1)
      {
        set사람1(true);
        set사람2(false);
        set사람3(false);
        set사람4(false);
        const randt = Math.floor(Math.random() * 4) + 1;
        setmasg1(randt);
        if(randt === 1)
        {
          set문클릭(2);
        }
        else if(randt === 2)
        {
          set문클릭(2);
        }
        else if(randt === 3)
        {
          set문클릭(4);
        }
        else if(randt === 4)
        {
          set문클릭(3);
        }
        set문통조림랜덤(Math.floor(Math.random() * 3) + 1);
        set문물랜덤(Math.floor(Math.random() * 2) + 1);
      }
      else if(rand사람 === 2)
      {
        set사람2(true);
        set사람1(false);
        set사람3(false);
        set사람4(false);
        const randt = Math.floor(Math.random() * 4) + 1;
        setmasg2(randt);
        const randt3 = Math.floor(Math.random() * 6) + 1;
        set문라면랜덤(Math.floor(Math.random() * 3) + 1);
        set문사탕랜덤(Math.floor(Math.random() * 4) + 1);
     }
      else if(rand사람 === 3)
     {
       set사람3(true);
        set사람1(false);
        set사람2(false);
        set사람4(false);
        const randt = Math.floor(Math.random() * 4) + 1;
        setmasg3(randt);
        set문통조림랜덤(Math.floor(Math.random() * 2) + 1);
        set문물랜덤(Math.floor(Math.random() * 4) + 1);
        set문라면랜덤(Math.floor(Math.random() * 3) + 1);
        set문사탕랜덤(Math.floor(Math.random() * 5) + 1);
      }
      else if(rand사람 === 4)
      {
       set사람4(true);
        set사람1(false);
        set사람2(false);
        set사람3(false);
        const randt = Math.floor(Math.random() * 4) + 1;
        setmasg4(randt);
        set문클릭(2);
     }
      }
    else{
        set문사람감지(false);
    }


    if(charment1 < 0 && charment1 >= -30)
    {
      //슬퍼짐 -> 배고픔, 목마름 평소보다 (- 3)
      setchareat1(prev => prev - 3);
      setcharwtr1(prev => prev - 3);
    if (!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1) {
        set외출제한1(false);
    }
    if((chareat1- 10) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    if((charwtr1-13) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    }
    else if(charment1 < -30 && charment1 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat1(prev => prev - 5);
      setcharwtr1(prev => prev - 5);
      set외출제한1(true);
    if((chareat1-12) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    if((charwtr1-15) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    }
    else if(charment1 < -60 && charment1 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat1(prev => prev - 10);
      setcharwtr1(prev => prev - 10);
      set외출제한1(true);
    if((chareat1-17) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    if((charwtr1-20) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    }

    
    if(charment1 >= 0 && charment1 <= 50)
    {
      //그냥그럼
    if (!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1) {
        set외출제한1(false);
    }
    if((chareat1-7) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    if((charwtr1-10) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    }
    else if(charment1 > 50 && charment1 <= 200)
    {
      //행복함 -> 배고픔, 갈증 평소보다 (+ 3)
      setchareat1(prev => prev + 3);
      setcharwtr1(prev => prev + 3);
    if (!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1) {
        set외출제한1(false);
    }
    if((chareat1-4) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    if((charwtr1-7) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    }
    else if(charment1 > 200)
    {
      //미침
      set외출제한1(true);
    if((chareat1-7) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    if((charwtr1-10) <= 0)
    {
      setDie1(true);
      settam1(true);
    }
    }


    if(charment2 < 0 && charment2 >= -30)
    {
      //슬퍼짐 -> 배고픔, 목마름 평소보다 (- 3)
      setchareat2(prev => prev - 3);
      setcharwtr2(prev => prev - 3);
    if (!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2) {
        set외출제한2(false);
    }
    if((chareat2-9) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    if((charwtr2-15) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    }
    else if(charment2 < -30 && charment2 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat2(prev => prev - 5);
      setcharwtr2(prev => prev - 5);
      set외출제한2(true);
    if((chareat2-11) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    if((charwtr2-17) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    }
    else if(charment2 < -60 && charment2 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat2(prev => prev - 10);
      setcharwtr2(prev => prev - 10);
      set외출제한2(true);
    if((chareat2-16) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    if((charwtr2-27) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    }


    
    if(charment2 >= 0 && charment2 <= 50)
    {
      //그냥그럼
    if (!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2) {
        set외출제한2(false);
    }
    if((chareat2-6) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    if((charwtr2-12) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    }
    else if(charment2 > 50 && charment2 <= 200)
    {
      //행복함 -> 배고픔, 갈증 평소보다 (+ 3)
      setchareat2(prev => prev + 3);
      setcharwtr2(prev => prev + 3);
    if (!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2) {
        set외출제한2(false);
    }
    if((chareat2-4) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    if((charwtr2-7) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    }
    else if(charment2 > 200)
    {
      //미침
      set외출제한2(true);
    if((chareat2-6) <= 0)
    {
      setDie2(true);
      settam2(true);
    }
    if((charwtr2-12) <= 0)
    {
      setDie2(true);
      settam2(true);
    }     

    }

    if(charment3 < 0 && charment3 >= -30)
    {
      //슬퍼짐 -> 배고픔, 목마름 평소보다 (- 3)
      setchareat3(prev => prev - 3);
      setcharwtr3(prev => prev - 3);
    if (!감기여부3 && !독감여부3 && !식중독여부3 && !출혈여부3 && !골절여부3) {
        set외출제한3(false);
    }
    if((chareat3-13) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    if((charwtr3-12) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    }
    else if(charment3 < -30 && charment3 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat3(prev => prev - 5);
      setcharwtr3(prev => prev - 5);
      set외출제한3(true);
    if((chareat3-15) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    if((charwtr3-14) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    }
    else if(charment3 < -60 && charment3 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat3(prev => prev - 10);
      setcharwtr3(prev => prev - 10);
      set외출제한3(true);
    if((chareat3-20) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    if((charwtr3-19) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    }


    
    if(charment3 >= 0 && charment3 <= 50)
    {
      //그냥그럼
    if (!감기여부3 && !독감여부3 && !식중독여부3 && !출혈여부3 && !골절여부3) {
        set외출제한3(false);
    }
    if((chareat3-10) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    if((charwtr3-9) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    }
    else if(charment3 > 50 && charment3 <= 200)
    {
      //행복함 -> 배고픔, 갈증 평소보다 (+ 3)
      setchareat3(prev => prev + 3);
      setcharwtr3(prev => prev + 3);
    if (!감기여부3 && !독감여부3 && !식중독여부3 && !출혈여부3 && !골절여부3) {
        set외출제한3(false);
    }
    if((chareat3-7) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    if((charwtr3-6) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    }
    else if(charment3 > 200)
    {
      //미침
      set외출제한3(true);
    if((chareat3-10) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    if((charwtr3-9) <= 0)
    {
      setDie3(true);
      settam3(true);
    }
    }

    if(charment4 < 0 && charment4 >= -30)
    {
      //슬퍼짐 -> 배고픔, 목마름 평소보다 (- 3)
      setchareat4(prev => prev - 3);
      setcharwtr4(prev => prev - 3);
    if (!감기여부4 && !독감여부4 && !식중독여부4 && !출혈여부4 && !골절여부4) {
        set외출제한4(false);
    }
    if((chareat4-8) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    if((charwtr4-14) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    }
    else if(charment4 < -30 && charment4 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat4(prev => prev - 5);
      setcharwtr4(prev => prev - 5);
      set외출제한4(true);
    if((chareat4-10) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    if((charwtr4-16) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    }
    else if(charment4 < -60 && charment4 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat4(prev => prev - 10);
      setcharwtr4(prev => prev - 10);
      set외출제한4(true);
    if((chareat4-15) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    if((charwtr4-21) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    }


    
    if(charment4 >= 0 && charment4 <= 50)
    {
      //그냥그럼
    if (!감기여부4 && !독감여부4 && !식중독여부4 && !출혈여부4 && !골절여부4) {
        set외출제한4(false);
    }
    if((chareat4-5) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    if((charwtr4-11) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    }
    else if(charment4 > 50 && charment4 <= 200)
    {
      //행복함 -> 배고픔, 갈증 평소보다 (+ 3)
      setchareat4(prev => prev + 3);
      setcharwtr4(prev => prev + 3);
    if (!감기여부4 && !독감여부4 && !식중독여부4 && !출혈여부4 && !골절여부4) {
        set외출제한4(false);
    }
    if((chareat4-2) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    if((charwtr4-8) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    }
    else if(charment4 > 200)
    {
      //미침
      set외출제한4(true);
    if((chareat4-5) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    if((charwtr4-11) <= 0)
    {
      setDie4(true);
      settam4(true);
    }
    }

   
}

    useEffect(() => {
    let timer;
    if(page === 0) return;
      timer = setTimeout(() => {
        setShow(true);
      }, 500);
    return () => clearTimeout(timer); // cleanup
  }, [page]);





  function 통조림증가량()
  {
    if(통조림 < eat1)
    {
      set통조림(prev => prev + 1);
      set수치(prev => prev + 5);
    }
    else{
      set수치(prev => prev - (5 * 통조림));
      set통조림(0);
    }
  }
  function 물증가량()
  {
    if(물 < eat2)
    {
      set물(prev => prev + 1);
      set수치(prev => prev + 3);
    }
    else{
      set물(0);
      set수치(prev => prev - (3 * 물));
    }
  }
  function 라면증가량()
  {
    if(라면 < eat3)
    {
      set라면(prev => prev + 1);
      set수치(prev => prev + 6);
    }
    else{
      set라면(0);
      set수치(prev => prev - (6 * 라면));
    }
  }
  function 사탕증가량()
  {
    if(사탕 < eat4)
    {
      set사탕(prev => prev + 1);
      set수치(prev => prev + 4);
    }
    else{
      set사탕(0);
      set수치(prev => prev - (4 * 사탕));
    }
  }
  function 신문증가()
  {
    const rand = Math.floor(Math.random() * 3) + 1;
    if(rand == 1)
    {
      setetc4(prev => prev -1);
      if(charch1 == 1)
      {
        setcharment1(prev => prev + 5);
      }
      else if(charch1 == 2)
      {
        setcharment2(prev => prev + 5);
      }
      else if(charch1 == 3)
      {
        setcharment3(prev => prev + 5);
      }
      else if(charch1 == 4)
      {
        setcharment4(prev => prev + 5);
      }

    }
    else{
      if(charch1 == 1)
      {
        setcharment1(prev => prev + 5);
      }
      else if(charch1 == 2)
      {
        setcharment2(prev => prev + 5);
      }
      else if(charch1 == 3)
      {
        setcharment3(prev => prev + 5);
      }
      else if(charch1 == 4)
      {
        setcharment4(prev => prev + 5);
      }
    }
  }

  function 책증가()
  {
    const rand = Math.floor(Math.random() * 4) + 1;
    if(rand <= 2)
    {
      setetc3(prev => prev -1);
      if(charch1 == 1)
      {
        setcharment1(prev => prev + 10);
      }
      else if(charch1 == 2)
      {
        setcharment2(prev => prev + 10);
      }
      else if(charch1 == 3)
      {
        setcharment3(prev => prev + 10);
      }
      else if(charch1 == 4)
      {
        setcharment4(prev => prev + 10);
      }

    }
    else{
      if(charch1 == 1)
      {
        setcharment1(prev => prev + 10);
      }
      else if(charch1 == 2)
      {
        setcharment2(prev => prev + 10);
      }
      else if(charch1 == 3)
      {
        setcharment3(prev => prev + 10);
      }
      else if(charch1 == 4)
      {
        setcharment4(prev => prev + 10);
      }
    }
  }


  function 구금상자증가()
  { //독감 -> 골절 -> 출혈 -> 감기 -> 식중독
    
    if(charch1 == 1 && (출혈1 > 0 || 골절1 > 0 || 감기1 > 0 || 독감1 > 0 || 식중독1 > 0))
    {
      setmed2(prev => prev -1);
      setcharment1(prev => prev + 10);
      if((출혈1-8) >= 0)
      {
        set출혈1(prev => prev - 8);
      }
      else if((출혈1 - 8) < 0)
      {
        set출혈1(0);
      }

      if((골절1-5) >= 0)
      {
        set골절1(prev => prev - 5);
      }
      else if((골절1 - 5) < 0)
      {
        set골절1(0);
      }
      
      if((감기1-9) >= 0)
      {
        set감기1(prev => prev - 9);
      }
      else if((감기1 - 9) < 0)
      {
        set감기1(0);
      }

      if((독감1-5) >= 0)
      {
        set독감1(prev => prev - 5);
      }
      else if((독감1 - 5) < 0)
      {
        set독감1(0);
      }

      if((식중독1-10) >= 0)
      {
        set식중독1(prev => prev - 10);
      }
      else if((식중독1 - 10) < 0)
      {
        set식중독1(0);
      }
    }
 if(charch1 == 2 && (출혈2 > 0 || 골절2 > 0 || 감기2 > 0 || 독감2 > 0 || 식중독2 > 0))
    {
      setmed2(prev => prev -1);
      setcharment2(prev => prev + 10);
      if((출혈2-8) >= 0)
      {
        set출혈2(prev => prev - 8);
      }
      else if((출혈2 - 8) < 0)
      {
        set출혈2(0);
      }

      if((골절2-5) >= 0)
      {
        set골절2(prev => prev - 5);
      }
      else if((골절2 - 5) < 0)
      {
        set골절2(0);
      }
      
      if((감기2-9) >= 0)
      {
        set감기2(prev => prev - 9);
      }
      else if((감기2 - 9) < 0)
      {
        set감기2(0);
      }

      if((독감2-5) >= 0)
      {
        set독감2(prev => prev - 5);
      }
      else if((독감2 - 5) < 0)
      {
        set독감2(0);
      }

      if((식중독2-10) >= 0)
      {
        set식중독2(prev => prev - 10);
      }
      else if((식중독2 - 10) < 0)
      {
        set식중독2(0);
      }
    }

     if(charch1 == 3 && (출혈3 > 0 || 골절3 > 0 || 감기3 > 0 || 독감3 > 0 || 식중독3 > 0))
    {
      setmed2(prev => prev -1);
      setcharment3(prev => prev + 10);
      if((출혈3-8) >= 0)
      {
        set출혈3(prev => prev - 8);
      }
      else if((출혈3 - 8) < 0)
      {
        set출혈3(0);
      }

      if((골절3-5) >= 0)
      {
        set골절3(prev => prev - 5);
      }
      else if((골절3 - 5) < 0)
      {
        set골절3(0);
      }
      
      if((감기3-9) >= 0)
      {
        set감기3(prev => prev - 9);
      }
      else if((감기3 - 9) < 0)
      {
        set감기3(0);
      }

      if((독감3-5) >= 0)
      {
        set독감3(prev => prev - 5);
      }
      else if((독감3 - 5) < 0)
      {
        set독감3(0);
      }

      if((식중독3-10) >= 0)
      {
        set식중독3(prev => prev - 10);
      }
      else if((식중독3 - 10) < 0)
      {
        set식중독3(0);
      }
    }

     if(charch1 == 4 && (출혈4 > 0 || 골절4 > 0 || 감기4 > 0 || 독감4 > 0 || 식중독4 > 0))
    {
      setmed2(prev => prev -1);
      setcharment4(prev => prev + 10);
      if((출혈4-8) >= 0)
      {
        set출혈4(prev => prev - 8);
      }
      else if((출혈4 - 8) < 0)
      {
        set출혈4(0);
      }

      if((골절4-5) >= 0)
      {
        set골절4(prev => prev - 5);
      }
      else if((골절4 - 5) < 0)
      {
        set골절4(0);
      }
      
      if((감기4-9) >= 0)
      {
        set감기4(prev => prev - 9);
      }
      else if((감기4 - 9) < 0)
      {
        set감기4(0);
      }

      if((독감4-5) >= 0)
      {
        set독감4(prev => prev - 5);
      }
      else if((독감4 - 5) < 0)
      {
        set독감4(0);
      }

      if((식중독4-10) >= 0)
      {
        set식중독4(prev => prev - 10);
      }
      else if((식중독4 - 10) < 0)
      {
        set식중독4(0);
      }
    }
  
  }


  function 키트증가()
  { //독감 -> 골절 -> 출혈 -> 감기 -> 식중독
    
    if(charch1 == 1 && (출혈1 > 0 || 골절1 > 0 || 감기1 > 0 || 독감1 > 0 || 식중독1 > 0))
    {
      setmed1(prev => prev -1);
      setcharment1(prev => prev + 5);
      if((출혈1-4) >= 0)
      {
        set출혈1(prev => prev - 4);
      }
      else if((출혈1 - 4) < 0)
      {
        set출혈1(0);
      }

      if((골절1-2) >= 0)
      {
        set골절1(prev => prev - 2);
      }
      else if((골절1 - 2) < 0)
      {
        set골절1(0);
      }
      
      if((감기1-5) >= 0)
      {
        set감기1(prev => prev - 5);
      }
      else if((감기1 - 5) < 0)
      {
        set감기1(0);
      }

      if((독감1-2) >= 0)
      {
        set독감1(prev => prev - 2);
      }
      else if((독감1 - 2) < 0)
      {
        set독감1(0);
      }

      if((식중독1-6) >= 0)
      {
        set식중독1(prev => prev - 3);
      }
      else if((식중독1 - 6) < 0)
      {
        set식중독1(0);
      }
    }

    if(charch1 == 2 && (출혈2 > 0 || 골절2 > 0 || 감기2 > 0 || 독감2 > 0 || 식중독2 > 0))
    {
      setmed1(prev => prev -1);
      setcharment1(prev => prev + 5);
      if((출혈2-4) >= 0)
      {
        set출혈2(prev => prev - 4);
      }
      else if((출혈2 - 4) < 0)
      {
        set출혈2(0);
      }

      if((골절2-2) >= 0)
      {
        set골절2(prev => prev - 2);
      }
      else if((골절2 - 2) < 0)
      {
        set골절2(0);
      }
      
      if((감기2-5) >= 0)
      {
        set감기2(prev => prev - 5);
      }
      else if((감기2 - 5) < 0)
      {
        set감기2(0);
      }

      if((독감2-2) >= 0)
      {
        set독감2(prev => prev - 2);
      }
      else if((독감2 - 2) < 0)
      {
        set독감2(0);
      }

      if((식중독2-6) >= 0)
      {
        set식중독2(prev => prev - 3);
      }
      else if((식중독2 - 6) < 0)
      {
        set식중독2(0);
      }
    }

    if(charch1 == 3 && (출혈3 > 0 || 골절3 > 0 || 감기3 > 0 || 독감3 > 0 || 식중독3 > 0))
    {
      setmed1(prev => prev -1);
      setcharment1(prev => prev + 5);
      if((출혈3-4) >= 0)
      {
        set출혈3(prev => prev - 4);
      }
      else if((출혈3 - 4) < 0)
      {
        set출혈3(0);
      }

      if((골절3-2) >= 0)
      {
        set골절3(prev => prev - 2);
      }
      else if((골절3 - 2) < 0)
      {
        set골절3(0);
      }
      
      if((감기3-5) >= 0)
      {
        set감기3(prev => prev - 5);
      }
      else if((감기3 - 5) < 0)
      {
        set감기3(0);
      }

      if((독감3-2) >= 0)
      {
        set독감3(prev => prev - 2);
      }
      else if((독감3 - 2) < 0)
      {
        set독감3(0);
      }

      if((식중독3-6) >= 0)
      {
        set식중독3(prev => prev - 3);
      }
      else if((식중독3 - 6) < 0)
      {
        set식중독3(0);
      }
    }

    if(charch1 == 4 && (출혈4 > 0 || 골절4 > 0 || 감기4 > 0 || 독감4 > 0 || 식중독4 > 0))
    {
      setmed1(prev => prev -1);
      setcharment1(prev => prev + 5);
      if((출혈4-4) >= 0)
      {
        set출혈4(prev => prev - 4);
      }
      else if((출혈4 - 4) < 0)
      {
        set출혈4(0);
      }

      if((골절4-2) >= 0)
      {
        set골절4(prev => prev - 2);
      }
      else if((골절4 - 2) < 0)
      {
        set골절4(0);
      }
      
      if((감기4-5) >= 0)
      {
        set감기4(prev => prev - 5);
      }
      else if((감기4 - 5) < 0)
      {
        set감기4(0);
      }

      if((독감4-2) >= 0)
      {
        set독감4(prev => prev - 2);
      }
      else if((독감4 - 2) < 0)
      {
        set독감4(0);
      }

      if((식중독4-6) >= 0)
      {
        set식중독4(prev => prev - 3);
      }
      else if((식중독4 - 6) < 0)
      {
        set식중독4(0);
      }
    }
  }

  function 쪽지열기(a)
  {
    let copy2 = [...쪽지열람]
    copy2[a] = true
    set쪽지열람(copy2)
  }

  function 쪽지닫기(a)
  {
    let copy2 = [...쪽지열람]
    copy2[a] = false
    set쪽지열람(copy2)
  }

  function 보드게임용()
  {
      if(보드게임제한 > 0)
      {
        set보드게임제한(prev => prev -1);
        if(외로움 === 1)
        {
          if(tam1 === false)
          {
            setcharment1(prev => prev + 15);
          }
          if(tam2 === false)
          {
            setcharment2(prev => prev + 15);
          }
          if(tam3 === false)
          {
            setcharment3(prev => prev + 15);
          }
          if(tam4 === false)
          {
            setcharment4(prev => prev + 15);
          }
        }
        else if(외로움 === 2)
        {
          if(tam1 === false)
          {
            setcharment1(prev => prev + 10);
          }
          if(tam2 === false)
          {
            setcharment2(prev => prev + 10);
          }
          if(tam3 === false)
          {
            setcharment3(prev => prev + 10);
          }
          if(tam4 === false)
          {
            setcharment4(prev => prev + 10);
          }          
        }
        else if(외로움 === 3)
        {
          if(tam1 === false)
          {
            setcharment1(prev => prev + 7);
          }
          if(tam2 === false)
          {
            setcharment2(prev => prev + 7);
          }
          if(tam3 === false)
          {
            setcharment3(prev => prev + 7);
          }
          if(tam4 === false)
          {
            setcharment4(prev => prev + 7);
          }
        }
        else{
          if(tam1 === false)
          {
            setcharment1(prev => prev + 5);
          }
          if(tam2 === false)
          {
            setcharment2(prev => prev + 5);
          }
          if(tam3 === false)
          {
            setcharment3(prev => prev + 5);
          }
          if(tam4 === false)
          {
            setcharment4(prev => prev + 5);
          }
        }
      }
  }

  return (
    <div className="App">
      {/* 스토리 스킵과 다음단계 */}
      {page < 6 && <img src='/a.png' className='img1' onClick={pagecound}></img>}
      {page < 6 && <img src='/a1.png' className='img2' onClick={() => setpage(6)}></img>}

{/* // 1~5 : 스토리 6 : 시작화면 7 : 도전과제 8 : *게임시작* 9 : 선반 10 : 지도 11 : 어둠(침대 클릭 후) 12 : 설명 13: 문입장
// 20 : 해피엔딩 21 : 배드엔딩 22: 세드엔딩 */}

      {page === 10 && <div className='없는배경'></div>}

      {/* 스토리 형식 1~5 */}
      <div className='틀'>
        {page === 1 && show && <h1 className='튜틀'>{year-1}년 8월 1일 대부분의 인류는 멸망하였다.</h1>}
        {/* {page ===1 && <img src='a4.png'></img>} */}
        {page === 2 && show && <h1 className='튜틀1'>멸망 후 {year}년 8월 1일 정확히 1년뒤 우리는 대부분의 식량이 바닥났다.</h1>}
        {page === 3 && show && <h1 className='튜틀2'>우리는 식량을 구하기 위해 위험한 외부로 나가야만 했다.</h1>}
        {page === 4 && show && <h1 className='튜틀3'>밖은 위험이 넘쳐나지만 방법이 없다.</h1>}
        {page === 5 && show && <h1 className='튜틀4'>우리는 꼭 살아남을 것이다.</h1>}


        {/* 시작화면 형식 6 */}
        <div className='onepage'>
          {page === 6 && <button className='startbutton' onClick={() => setpage(8)}>START</button>}
          {page === 6 && <button className='storybutton' onClick={() =>setpage(1)}>STORY</button>}
          {page === 6 && <button className='challbutton' onClick={() =>setpage(7)}>RECORD</button>}
          {page === 6 && <button className='ttbutton' onClick={() => {setpage(12); settpage(0);}}>TUTORIAL</button>}
        </div>
          {page === 6 && <div className='mainbackground'></div>}
          {page === 6 && <div className='mainbackground2'></div>}
          {page === 6 && <img src='d1.png' className='mainbackground3'></img>}
          {page === 6 && <img src='d1.png' className='mainbackground4'></img>}
          {page === 6 && <div className='mainbackground5'></div>}
        {/* 도전과제 형식 7 */}
        {page === 7 && <h1 className='도전과제text'>기록</h1>}
        {page === 7 && <img src='/a2.png' className='img3' onClick={() => setpage(6)}></img>}
        {/* <div className='도전과제'>
          <h1>처음 죽음을 맞이하세요.</h1>
        </div> */}



          {/* {page === 8 && <img src='/a7.png' className='배경'></img>} */}
        {/* 배경모음 */}
        {page === 1 && <img src='/a32.png' className='배경1'></img>}

        {page === 8 && <img src='/a18.png'className='메인배경'></img>}
        {page === 8 && <img src='/a43.png'className='메인배경'></img>}      
        {page === 8 && <img src='a44.png' className='메인배경2'></img>}  
        {page === 8 && <h1 className='살아남은날'>Day-{Day}</h1>}
        {/* 지도 형식 10 */}
        {page === 8 && <img src='/a3.png' className='지도' onClick={() => setpage(10)}></img>}
        {page === 10 && <img src='/a2.png' className='img3' onClick={() => setpage(8)}></img>}

        {!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1 && 외출제한1 == false && charch == 1 && page === 10 && <h1 onClick={mapa1} className='지도표시1'>소방서</h1>}
        {!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1 && 외출제한1 == false && charch == 1 && page === 10 && <h1 onClick={mapa2} className='지도표시2'>경찰서</h1>}
        {!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1 && 외출제한1 == false && charch == 1 && page === 10 && <h1 onClick={mapa3} className='지도표시3'>병원</h1>}
        {!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1 && 외출제한1 == false && charch == 1 && page === 10 && <h1 onClick={mapa4} className='지도표시4'>서로고</h1>}
        {!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1 && 외출제한1 == false && charch == 1 && page === 10 && <h1 onClick={mapa5} className='지도표시5'>산</h1>}

        {!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2 && 외출제한2 == false && charch == 2 && page === 10 && <h1 onClick={mapa1} className='지도표시1'>소방서</h1>}
        {!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2 && 외출제한2 == false && charch == 2 && page === 10 && <h1 onClick={mapa2} className='지도표시2'>경찰서</h1>}
        {!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2 && 외출제한2 == false && charch == 2 && page === 10 && <h1 onClick={mapa3} className='지도표시3'>병원</h1>}
        {!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2 && 외출제한2 == false && charch == 2 && page === 10 && <h1 onClick={mapa4} className='지도표시4'>서로고</h1>}
        {!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2 && 외출제한2 == false && charch == 2 && page === 10 && <h1 onClick={mapa5} className='지도표시5'>산</h1>}

        {!감기3 && !독감3 && !식중독3 && !출혈여부3 && !골절여부3 && 외출제한3 == false && charch == 3 && page === 10 && <h1 onClick={mapa1} className='지도표시1'>소방서</h1>}
        {!감기3 && !독감3 && !식중독3 && !출혈여부3 && !골절여부3 && 외출제한3 == false && charch == 3 && page === 10 && <h1 onClick={mapa2} className='지도표시2'>경찰서</h1>}
        {!감기3 && !독감3 && !식중독3 && !출혈여부3 && !골절여부3 && 외출제한3 == false && charch == 3 && page === 10 && <h1 onClick={mapa3} className='지도표시3'>병원</h1>}
        {!감기3 && !독감3 && !식중독3 && !출혈여부3 && !골절여부3 && 외출제한3 == false && charch == 3 && page === 10 && <h1 onClick={mapa4} className='지도표시4'>서로고</h1>}
        {!감기3 && !독감3 && !식중독3 && !출혈여부3 && !골절여부3 && 외출제한3 == false && charch == 3 && page === 10 && <h1 onClick={mapa5} className='지도표시5'>산</h1>}

        {!감기4 && !독감4 && !식중독4 && !출혈여부4 && !골절여부4 && 외출제한4 == false && charch == 4 && page === 10 && <h1 onClick={mapa1} className='지도표시1'>소방서</h1>}
        {!감기4 && !독감4 && !식중독4 && !출혈여부4 && !골절여부4 && 외출제한4 == false &&  charch == 4 && page === 10 && <h1 onClick={mapa2} className='지도표시2'>경찰서</h1>}
        {!감기4 && !독감4 && !식중독4 && !출혈여부4 && !골절여부4 && 외출제한4 == false && charch == 4 && page === 10 && <h1 onClick={mapa3} className='지도표시3'>병원</h1>}
        {!감기4 && !독감4 && !식중독4 && !출혈여부4 && !골절여부4 && 외출제한4 == false && charch == 4 && page === 10 && <h1 onClick={mapa4} className='지도표시4'>서로고</h1>}
        {!감기4 && !독감4 && !식중독4 && !출혈여부4 && !골절여부4 && 외출제한4 == false && charch == 4 && page === 10 && <h1 onClick={mapa5} className='지도표시5'>산</h1>}

        

        {page === 10 && <img src='/a14.png' className='큰지도'></img>}

        {charch === 1 &&무기장착여부 == false && weap1 >= 1 && tam1 === false && page === 10 && <img src='/a27.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기("도끼"); set무기장착여부(true)}}></img>}
        {charch === 1 &&무기장착여부 == false && weap2 >= 1 && tam1 === false  && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기("진압봉"); set무기장착여부(true)}}></img>}
        {charch === 1 &&무기장착여부 == false && weap3 >= 1 && tam1 === false  && page === 10 && <img src='/a26.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기("야구방망이"); set무기장착여부(true)}}></img>}
        {charch === 1 &&무기장착여부 == false &&weap4 >= 1 && tam1 === false  && page === 10 && <img src='/a16.png' className='헬멧' onClick={()=> {set무기장착(5); setweap4(prev => prev - 1); set무기("헬멧"); set무기장착여부(true)}}></img>}
        {/* 개수 차감 */}
        {charch === 1 &&무기 === "도끼" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap1(prev => prev + 1); set무기장착여부(false)}}></img>}
        {charch === 1 &&무기 === "진압봉" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap2(prev => prev + 1); set무기장착여부(false)}}></img>}
        {charch === 1 &&무기 === "야구방망이" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap3(prev => prev + 1); set무기장착여부(false)}}></img>}
        {charch === 1 &&무기 === "헬멧" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap4(prev => prev + 1); set무기장착여부(false)}}></img>}



        {charch === 2 &&무기장착여부1 == false && weap1 >= 1 && tam2 === false && page === 10 && <img src='/a27.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기1("도끼"); set무기장착여부1(true)}}></img>}
        {charch === 2 &&무기장착여부1 == false && weap2 >= 1 && tam2 === false && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기1("진압봉"); set무기장착여부1(true)}}></img>}
        {charch === 2 &&무기장착여부1 == false && weap3 >= 1 && tam2 === false && page === 10 && <img src='/a26.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기1("야구방망이"); set무기장착여부1(true)}}></img>}
        {charch === 2 &&무기장착여부1 == false &&weap4 >= 1 && tam2 === false && page === 10 && <img src='/a16.png' className='헬멧' onClick={()=> {set무기장착(5); setweap4(prev => prev - 1); set무기1("헬멧"); set무기장착여부1(true)}}></img>}
        {/* 개수 차감 */}
        {charch === 2 &&무기1 === "도끼" && tam2 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap1(prev => prev + 1); set무기장착여부1(false)}}></img>}
        {charch === 2 &&무기1 === "진압봉" && tam2 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap2(prev => prev + 1); set무기장착여부1(false)}}></img>}
        {charch === 2 &&무기1 === "야구방망이" &&  tam2 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap3(prev => prev + 1); set무기장착여부1(false)}}></img>}
        {charch === 2 &&무기1 === "헬멧" && tam2 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap4(prev => prev + 1); set무기장착여부1(false)}}></img>}



        {charch === 3 &&무기장착여부2 == false && weap1 >= 1 && tam3 === false && page === 10 && <img src='/a27.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기2("도끼"); set무기장착여부2(true)}}></img>}
        {charch === 3 &&무기장착여부2 == false && weap2 >= 1 && tam3 === false  && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기2("진압봉"); set무기장착여부2(true)}}></img>}
        {charch === 3 &&무기장착여부2 == false && weap3 >= 1 && tam3 === false  && page === 10 && <img src='/a26.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기2("야구방망이"); set무기장착여부2(true)}}></img>}
        {charch === 3 &&무기장착여부2 == false &&weap4 >= 1 && tam3 === false  && page === 10 && <img src='/a16.png' className='헬멧' onClick={()=> {set무기장착(5); setweap4(prev => prev - 1); set무기2("헬멧"); set무기장착여부2(true)}}></img>}
        {/* 개수 차감 */}
        {charch === 3 &&무기2 === "도끼" && tam3 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap1(prev => prev + 1); set무기장착여부2(false)}}></img>}
        {charch === 3 &&무기2 === "진압봉" &&  tam3 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap2(prev => prev + 1); set무기장착여부2(false)}}></img>}
        {charch === 3 &&무기2 === "야구방망이" &&  tam3 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap3(prev => prev + 1); set무기장착여부2(false)}}></img>}
        {charch === 3 &&무기2 === "헬멧" &&  tam3 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap4(prev => prev + 1); set무기장착여부2(false)}}></img>}



        {charch === 4 &&무기장착여부3 == false && weap1 >= 1 && tam4 === false && page === 10 && <img src='/a27.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기3("도끼"); set무기장착여부3(true)}}></img>}
        {charch === 4 &&무기장착여부3 == false && weap2 >= 1 && tam4 === false && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기3("진압봉"); set무기장착여부3(true)}}></img>}
        {charch === 4 &&무기장착여부3 == false && weap3 >= 1 && tam4 === false && page === 10 && <img src='/a26.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기3("야구방망이"); set무기장착여부3(true)}}></img>}
        {charch === 4 &&무기장착여부3 == false &&weap4 >= 1 &&  tam4 === false && page === 10 && <img src='/a16.png' className='헬멧' onClick={()=> {set무기장착(5); setweap4(prev => prev - 1); set무기3("헬멧"); set무기장착여부3(true)}}></img>}
        {/* 개수 차감 */}
        {charch === 4 &&무기3 === "도끼" && tam4 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기3(""); setweap1(prev => prev + 1); set무기장착여부3(false)}}></img>}
        {charch === 4 &&무기3 === "진압봉" &&  tam4 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기3(""); setweap2(prev => prev + 1); set무기장착여부3(false)}}></img>}
        {charch === 4 &&무기3 === "야구방망이" &&  tam4 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기3(""); setweap3(prev => prev + 1); set무기장착여부3(false)}}></img>}
        {charch === 4 &&무기3 === "헬멧" &&  tam4 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기3(""); setweap4(prev => prev + 1); set무기장착여부3(false)}}></img>}




        {/* 선반 형식 9*/}
        {page === 8 && <img src='/a16.png' className='선반' onClick={()=> setpage(9)}></img>}  

        {page === 9 && <img src='/a16.png' className='통조림'></img>} 
        {tam1 === false && chareat1+75 < 100 && eat1 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='통조림' onClick={() => {setchareat1(prev => prev + 50); seteat1(prev => prev -1); }}></img>}
        {tam1 === false  && chareat1 != 100 && chareat1+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='통조림' onClick={() => {setchareat1(100); seteat1(prev => prev -1); }}></img>}

        {tam2 === false && chareat2+75 < 100 && eat1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='통조림' onClick={() => {setchareat2(prev => prev + 50); seteat1(prev => prev -1); }}></img>} 
        {tam2 === false && chareat2 != 100 && chareat2+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='통조림' onClick={() => {setchareat2(100); seteat1(prev => prev -1); }}></img>} 

        {tam3 === false && chareat3+75 < 100 && eat1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='통조림' onClick={() => {setchareat3(prev => prev + 50); seteat1(prev => prev -1); }}></img>}
        {tam3 === false&& chareat3 != 100  && chareat3+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='통조림' onClick={() => {setchareat3(100); seteat1(prev => prev -1); }}></img>}  

        {tam4 === false && chareat4+75 < 100 && eat1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='통조림' onClick={() => {setchareat4(prev => prev + 50); seteat1(prev => prev -1);}}></img>} 
        {tam4 === false && chareat4 != 100 && chareat4+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='통조림' onClick={() => {setchareat4(100); seteat1(prev => prev -1);}}></img>} 
        {page === 9 && <h2 className='통조림개수'>: {eat1}개</h2>}

        {page === 9 && <img src='/a17.png' className='물'></img>}
        {tam1 === false && charwtr1+25 < 100 && eat2 > 0 && charch1 === 1 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr1(perv => perv + 45); seteat2(prev => prev -1);}}></img>} 
        {tam1 === false && charwtr1 != 100 && charwtr1+25 >= 100 && eat2 > 0 && charch1 === 1 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr1(100); seteat2(prev => prev -1);}}></img>}

        {tam2 === false && charwtr2+25 < 100 && eat2 > 0 && charch1 === 2 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr2(perv => perv + 45); seteat2(prev => prev -1); }}></img>}
        {tam2 === false && charwtr2 != 100 &&charwtr2+25 >= 100 && eat2 > 0 && charch1 === 2 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr2(100); seteat2(prev => prev -1); }}></img>}

        {tam3 === false &&charwtr3+25 < 100 && eat2 > 0 && charch1 === 3 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr3(perv => perv + 45); seteat2(prev => prev -1); }}></img>}
        {tam3 === false && charwtr3 != 100 && charwtr3+25 >= 100 && eat2 > 0 && charch1 === 3 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr3(100); seteat2(prev => prev -1); }}></img>}

        {tam4 === false &&charwtr4+25 < 100 && eat2 > 0 && charch1 === 4 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr4(perv => perv + 45); seteat2(prev => prev -1); }}></img>}
        {tam4 === false && charwtr4 != 100 &&charwtr4+25 >= 100 && eat2 > 0 && charch1 === 4 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr4(100); seteat2(prev => prev -1); }}></img>}
        {page === 9 && <h2 className='물개수'>: {eat2}개</h2>} 


        {page === 9 && <img src='/a22.png' className='라면'></img>} 
        {tam1 === false &&chareat1+50 < 100 && eat3 > 0 && page === 9 && charch1 === 1 && <img src='/a22.png' className='라면' onClick={() => {setchareat1(prev => prev + 35); seteat3(prev => prev -1); }}></img>} 
        {tam1 === false && chareat1 != 100 &&chareat1+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 1 && <img src='/a22.png' className='라면' onClick={() => {setchareat1(100); seteat3(prev => prev -1); }}></img>} 

        {tam2 === false &&chareat2+50 < 100 && eat3 > 0 && page === 9 && charch1 === 2 && <img src='/a22.png' className='라면' onClick={() => {setchareat2(prev => prev + 35); seteat3(prev => prev -1); }}></img>} 
        {tam2 === false && chareat2 != 100 &&chareat2+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 2 && <img src='/a22.png' className='라면' onClick={() => {setchareat2(100); seteat3(prev => prev -1); }}></img>}

        {tam3 === false &&chareat3+50 < 100 && eat3 > 0 && page === 9 && charch1 === 3 && <img src='/a22.png' className='라면' onClick={() => {setchareat3(prev => prev + 35); seteat3(prev => prev -1); }}></img>} 
        {tam3 === false && chareat3 != 100 &&chareat3+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 3 && <img src='/a22.png' className='라면' onClick={() => {setchareat3(100); seteat3(prev => prev -1); }}></img>}

        {tam4 === false &&chareat4+50 < 100 && eat3 > 0 && page === 9 && charch1 === 4 && <img src='/a22.png' className='라면' onClick={() => {setchareat4(prev => prev + 35); seteat3(prev => prev -1); }}></img>}
        {tam4 === false && chareat4 != 100 &&chareat4+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 4 && <img src='/a22.png' className='라면' onClick={() => {setchareat4(100); seteat3(prev => prev -1); }}></img>}
        {page === 9 && <h2 className='라면개수'>: {eat3}개</h2>}

        {page === 9 && <img src='/a25.png' className='사탕'></img>} 
        {tam1 === false &&chareat1+10 < 100 && eat4 > 0 && page === 9 && charch1 === 1 && <img src='/a25.png' className='사탕' onClick={() => {setchareat1(prev => prev + 10); seteat4(prev => prev -1); setcharment1(prev => prev + 7); }}></img>}
        {tam1 === false && chareat1 != 100 &&chareat1+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 1 && <img src='/a25.png' className='사탕' onClick={() => {setchareat1(100); seteat4(prev => prev -1); setcharment1(prev => prev + 7);}}></img>}  

        {tam2 === false &&chareat2+10 < 100 && eat4 > 0 && page === 9 && charch1 === 2 && <img src='/a25.png' className='사탕' onClick={() => {setchareat2(prev => prev + 10); seteat4(prev => prev -1); setcharment2(prev => prev + 7); }}></img>} 
        {tam2 === false && chareat2 != 100 &&chareat2+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 2 && <img src='/a25.png' className='사탕' onClick={() => {setchareat2(100); seteat4(prev => prev -1); setcharment2(prev => prev + 7);}}></img>} 

        {tam3 === false &&chareat3+10 < 100 && eat4 > 0 && page === 9 && charch1 === 3 && <img src='/a25.png' className='사탕' onClick={() => {setchareat3(prev => prev + 10); seteat4(prev => prev -1); setcharment3(prev => prev + 7); }}></img>} 
        {tam3 === false && chareat3 != 100 &&chareat3+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 3 && <img src='/a25.png' className='사탕' onClick={() => {setchareat3(100); seteat4(prev => prev -1); setcharment3(prev => prev + 7);}}></img>} 

        {tam4 === false &&chareat4+10 < 100 && eat4 > 0 && page === 9 && charch1 === 4 && <img src='/a25.png' className='사탕' onClick={() => {setchareat4(prev => prev + 10); seteat4(prev => prev -1); setcharment4(prev => prev + 7);}}></img>}
        {tam4 === false && chareat4 != 100 &&chareat4+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 4 && <img src='/a25.png' className='사탕' onClick={() => {setchareat4(100); seteat4(prev => prev -1); setcharment4(prev => prev + 7);}}></img>} 
        {page === 9 && <h2 className='사탕개수'>: {eat4}개</h2>}

        {page === 9 && <img src='/a24.png' className='키트'></img>} 
        {tam1 === false &&charment1+10 < 100 && med1 > 0 && page === 9 && charch1 === 1 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 
        {tam1 === false && charment1+10 >= 100 && med1 > 0 && page === 9 && charch1 === 1 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 

        {tam2 === false &&charment2+10 < 100 && med1 > 0 && page === 9 && charch1 === 2 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 
        {tam2 === false && charment2+10 >= 100 && med1 > 0 && page === 9 && charch1 === 2 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 

        {tam3 === false &&charment3+10 < 100 && med1 > 0 && page === 9 && charch1 === 3 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 
        {tam3 === false && charment3+10 >= 100 && med1 > 0 && page === 9 && charch1 === 3 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 

        {tam4 === false &&charment4+10 < 100 && med1 > 0 && page === 9 && charch1 === 4 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 
        {tam4 === false&& charment4+10 >= 100 && med1 > 0 && page === 9 && charch1 === 4 && <img src='/a24.png' className='키트' onClick={() => 키트증가()}></img>} 
        {page === 9 && <h2 className='키트개수'>: {med1}개</h2>}

        {page === 9 && <img src='/a24.png' className='구급상자'></img>} 
        {tam1 === false &&charment1+10 < 100 && med2 > 0 && page === 9 && charch1 === 1 && <img src='/a24.png' className= '구급상자' onClick={() => 구금상자증가()}></img>} 
        {tam1 === false && charment1+10 >= 100 && med2 > 0 && page === 9 && charch1 === 1 && <img src='/a24.png' className= '구급상자' onClick={() =>구금상자증가()}></img>} 

        {tam2 === false &&charment2+10 < 100 && med2 > 0 && page === 9 && charch1 === 2 && <img src='/a24.png' className='구급상자' onClick={() => 구금상자증가()}></img>} 
        {tam2 === false && charment2+10 >= 100 && med2 > 0 && page === 9 && charch1 === 2 && <img src='/a24.png' className='구급상자' onClick={() => 구금상자증가()}></img>} 

        {tam3 === false &&charment3+10 < 100 && med2 > 0 && page === 9 && charch1 === 3 && <img src='/a24.png' className='구급상자' onClick={() => 구금상자증가()}></img>}
        {tam3 === false && charment3+10 >= 100 && med2 > 0 && page === 9 && charch1 === 3 && <img src='/a24.png' className='구급상자' onClick={() => 구금상자증가()}></img>}  

        {tam4 === false &&charment4+10 < 100 && med2 > 0 && page === 9 && charch1 === 4 && <img src='/a24.png' className='구급상자' onClick={() => 구금상자증가()}></img>} 
        {tam4 === false && charment4+10 >= 100 && med2 > 0 && page === 9 && charch1 === 4 && <img src='/a24.png' className='구급상자' onClick={() => 구금상자증가()}></img>} 
        {page === 9 && <h2 className='구급상자개수'>: {med2}개</h2>}

        {page === 9 && <img src='/a23.png' className='책'></img>} 
        {tam1 === false &&charment1+30 < 100 && etc3 > 0 && page === 9 && charch1 === 1 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>}
        {tam1 === false &&charment1+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 1 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>} 

        {tam2 === false &&charment2+30 < 100 && etc3 > 0 && page === 9 && charch1 === 2 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>}
        {tam2 === false && charment2+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 2 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>}  

        {tam3 === false &&charment3+30 < 100 && etc3 > 0 && page === 9 && charch1 === 3 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>} 
        {tam3 === false &&charment3+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 3 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>} 

        {tam4 === false &&charment4+30 < 100 && etc3 > 0 && page === 9 && charch1 === 4 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>} 
        {tam4 === false &&charment4+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 4 && <img src='/a23.png' className='책' onClick={() => 책증가()}></img>} 
        {page === 9 && <h2 className='책개수'>: {etc3}개</h2>}

        
        {page === 9 && <img src='/a16.png' className='신문'></img>} 
        {tam1 === false &&charment1+20 < 100 && etc4 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>}
        {tam1 === false && charment1+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>}  

        {tam2 === false &&charment2+20 < 100 && etc4 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>}
        {tam2 === false && charment2+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>}  

        {tam3 === false &&charment3+20 < 100 && etc4 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>} 
        {tam3 === false && charment3+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>} 

        {tam4 === false &&charment4+20 < 100 && etc4 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>} 
        {tam4 === false && charment4+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='신문' onClick={() => 신문증가()}></img>}
        {page === 9 && <h2 className='신문개수'>: {etc4}개</h2>}

        {page === 9 && <img src='/a2.png' className='img3' onClick={() => setpage(8)}></img>}


        {/* 침대 형식 11*/}
        {page === 11 && <img src='/a8.png' className='어둠' onClick={() => setloading(prev => prev + 1)}></img>}
        {page === 8 && <img src='/a28.png' className='침대' onClick={DayUp}></img>} 
        {page === 11 && <h1 className='어둠text'>Day-{Day}</h1>}
        {loading === 1 && page === 11 && <h1 className='어둠로딩'>.</h1>}
        {loading === 2 && page === 11 && <h1 className='어둠로딩'>..</h1>}
        {loading === 3 && page === 11 && <h1 className='어둠로딩'>...</h1>}
        {loading >= 4 && page === 11 && Darkup()}


        {r1 === 0 && page === 11 && <h1 className='어둠text1'>너무 힘들어...</h1>}
        {r1 === 1 && page === 11 && <h1 className='어둠text1'>참 깊은 밤이었다.</h1>}
        {r1 === 2 && page === 11 && <h1 className='어둠text1'>내일은 좋은일만 있길..</h1>}
        {r1 === 3 && page === 11 && <h1 className='어둠text1'>밖은 또 얼마나 위험할까..</h1>}
        {r1 === 4 && page === 11 && <h1 className='어둠text1'>우린 꼭 살아남을 것이다..</h1>}
        {r1 === 5 && page === 11 && <h1 className='어둠text1'>참.. 피곤한 하루였어</h1>}
        {r1 === 6 && page === 11 && <h1 className='어둠text1'>엄마 보고싶다..</h1>}
        {r1 === 7 && page === 11 && <h1 className='어둠text1'>갑자기 왜 이런일이 일어난걸까..</h1>}
        {r1 === 8 && page === 11 && <h1 className='어둠text1'>너무 무서운 하루였어</h1>}
        {r1 === 9 && page === 11 && <h1 className='어둠text1'>이젠 조금씩 지쳐간다..</h1>}


        {/* 캐릭터 형식 */}
        {(무기장착여부 === false && 무기장착여부1 == false && 무기장착여부2 == false && 무기장착여부3 == false)&& page === 10 && charch < 4 && <img src='/a.png' className='charchane' onClick={() =>setcharch(prev => prev +1)}></img>}
        {(무기장착여부 === false && 무기장착여부1 == false && 무기장착여부2 == false && 무기장착여부3 == false)&&page === 10 && charch == 4 && <img src='/a.png' className='charchane' onClick={() =>setcharch(1)}></img>}
        {(무기장착여부 === false && 무기장착여부1 == false && 무기장착여부2 == false && 무기장착여부3 == false)&&page === 10 && charch > 1 && <img src='/a.png' className='charchane1' onClick={() =>setcharch(prev => prev -1)}></img>}
        {(무기장착여부 === false && 무기장착여부1 == false && 무기장착여부2 == false && 무기장착여부3 == false)&&page === 10 && charch == 1 && <img src='/a.png' className='charchane1' onClick={() =>setcharch(4)}></img>}

        {Die1 === false && tam1 === false && charch === 1 && page === 10 && <img src='/a10.png' className='char1'></img>}
        {tam1 === true && charch === 1 && page === 10 && <img src='/a15.png' className='물음표'></img>}
        {tam1 === true && charch === 1 && page === 10 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}

        {Die2 === false && tam2 === false && charch === 2 && page === 10 && <img src='/a11.png' className='char2'></img>}
        {tam2 === true && charch === 2 && page === 10 && <img src='/a15.png' className='물음표'></img>}
        {tam2 === true && charch === 2 && page === 10 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}

        {Die3 === false && tam3 === false && charch === 3 && page === 10 && <img src='/a12.png' className='char3'></img>}
        {tam3=== true && charch === 3 && page === 10 && <img src='/a15.png' className='물음표'></img>}        
        {tam3 === true && charch === 3 && page === 10 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}

        {Die4 === false && tam4 === false && charch === 4 && page === 10 && <img src='/a13.png' className='char4'></img>}
        {tam4 === true && charch === 4 && page === 10 && <img src='/a15.png' className='물음표'></img>}
        {tam4 === true && charch === 4 && page === 10 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}


        {/* 선반 ?와 아직 메시지 */}
        {tam1 === true && charch1 === 1 && page === 9 && <img src='/a15.png' className='물음표'></img>}
        {tam1 === true && charch1 === 1 && page === 9 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}


        {tam2 === true && charch1 === 2 && page === 9 && <img src='/a15.png' className='물음표'></img>}
        {tam2 === true && charch1 === 2 && page === 9 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}


        {tam3=== true && charch1 === 3 && page === 9 && <img src='/a15.png' className='물음표'></img>}        
        {tam3 === true && charch1 === 3 && page === 9 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}


        {tam4 === true && charch1 === 4 && page === 9 && <img src='/a15.png' className='물음표'></img>}
        {tam4 === true && charch1 === 4 && page === 9 && <h1 className='char1no'>아직 돌아오지 않았습니다.</h1>}

        {Die1 === false && tam1 === false && page === 8 && <img src='/a38.png' className='mainchar1'></img>}
        {Die2 === false && tam2 === false && page === 8 && <img src='/a34.png' className='mainchar2'></img>}
        {Die3 === false && tam3 === false && page === 8 && <img src='/a40.png' className='mainchar3'></img>}
        {Die4 === false && tam4 === false && page === 8 && <img src='/a35.png' className='mainchar4'></img>}

        {Die1 === false && charch1 === 1 && tam1 === false && page === 9 && <img src='/a10.png' className='char1'></img>}
        {Die1 === false && charch1 === 1 && tam1 === false && page === 9 && <h1 className='hW1'>포만감 : {chareat1} / 수분 : {charwtr1} / 정신력   : {charment1}</h1>}

        {Die2 === false && charch1 === 2 && tam2 === false && page === 9 && <img src='/a11.png' className='char2'></img>}
        {Die2 === false && charch1 === 2 && tam2 === false && page === 9 && <h1 className='hW1'>포만감 : {chareat2} / 수분 : {charwtr2} / 정신력 : {charment2}</h1>}

        {Die3 === false && charch1 === 3 && tam3 === false && page === 9 && <img src='/a12.png' className='char3'></img>}
        {Die3 === false && charch1 === 3 && tam3 === false && page === 9 && <h1 className='hW1'>포만감 : {chareat3} / 수분 : {charwtr3} / 정신력 : {charment3} </h1>}        
        {Die4 === false && charch1 === 4 && tam4 === false && page === 9 && <img src='/a13.png' className='char4'></img>}
        {Die4 === false && charch1 === 4 && tam4 === false && page === 9 && <h1 className='hW1'>포만감 : {chareat4} / 수분 : {charwtr4} / 정신력 : {charment4} </h1>}

        {page === 9 && charch1 < 4 && <img src='/a.png' className='charchane' onClick={() =>setcharch1(prev => prev +1)}></img>}
        {page === 9 && charch1 == 4 && <img src='/a.png' className='charchane' onClick={() =>setcharch1(1)}></img>}
        {page === 9 && charch1 > 1 && <img src='/a.png' className='charchane1' onClick={() =>setcharch1(prev => prev -1)}></img>}
        {page === 9 && charch1 == 1 && <img src='/a.png' className='charchane1' onClick={() =>setcharch1(4)}></img>}
        
        {상태창1 === false && page === 8 && <img src='/a19.png' className='정보' onClick={() => set상태창1(true)}></img>}
        {상태창1 === true && page === 8 && <img src='/a19.png' className='정보' onClick={() => set상태창1(false)}></img>}
        {상태창1 === true && page === 8 && <div className='정보창'></div>}
        {상태창1 === true && page === 8 && Die1 === false && tam1 === false && <div className='희섭정보'>
          <h1>희섭: </h1>
          {감기여부1 === false && <p>감기 : X</p>}
          {감기여부1 === true && <p>감기 : O</p>}
          {독감여부1 === false && <p>독감 : X</p>}
          {독감여부1 === true && <p>독감 : O</p>}
          {골절여부1 === false && <p>골절 : X</p>}
          {골절여부1 === true && <p>골절 : O</p>}
          {식중독여부1 === false && <p>식중독 : X</p>}
          {식중독여부1 === true && <p>식중독 : O</p>}
          {출혈여부1 === false && <p>출혈 : X</p>}
          {출혈여부1 === true && <p>출혈 : O</p>}
          </div>}
        {상태창1 === true && page === 8 && Die2 === false && tam2 === false &&  <div className='민정정보'>
          <h1>민정: </h1>
          {감기여부2 === false && <p>감기 : X</p>}
          {감기여부2 === true && <p>감기 : O</p>}
          {독감여부2 === false && <p>독감 : X</p>}
          {독감여부2 === true && <p>독감 : O</p>}
          {골절여부2 === false && <p>골절 : X</p>}
          {골절여부2 === true && <p>골절 : O</p>}
          {식중독여부2 === false && <p>식중독 : X</p>}
          {식중독여부2 === true && <p>식중독 : O</p>}
          {출혈여부2 === false && <p>출혈 : X</p>}
          {출혈여부2 === true && <p>출혈 : O</p>}
          </div>}
        {상태창1 === true && page === 8 && Die3 === false && tam3 === false && <div className='은택정보'>
          <h1>은택: </h1>
          {감기여부3 === false && <p>감기 : X</p>}
          {감기여부3 === true && <p>감기 : O</p>}
          {독감여부3 === false && <p>독감 : X</p>}
          {독감여부3 === true && <p>독감 : O</p>}
          {골절여부3 === false && <p>골절 : X</p>}
          {골절여부3 === true && <p>골절 : O</p>}
          {식중독여부3 === false && <p>식중독 : X</p>}
          {식중독여부3 === true && <p>식중독 : O</p>}
          {출혈여부3 === false && <p>출혈 : X</p>}
          {출혈여부3 === true && <p>출혈 : O</p>}
          </div>}
        {상태창1 === true && page === 8 && Die4 === false && tam4 === false && <div className='예린정보'>
          <h1>예린: </h1>
          {감기여부4 === false && <p>감기 : X</p>}
          {감기여부4 === true && <p>감기 : O</p>}
          {독감여부4 === false && <p>독감 : X</p>}
          {독감여부4 === true && <p>독감 : O</p>}
          {골절여부4 === false && <p>골절 : X</p>}
          {골절여부4 === true && <p>골절 : O</p>}
          {식중독여부4 === false && <p>식중독 : X</p>}
          {식중독여부4 === true && <p>식중독 : O</p>}
          {출혈여부4 === false && <p>출혈 : X</p>}
          {출혈여부4 === true && <p>출혈 : O</p>}
          </div>}
        <div className='캐릭터이름'>
          
          {charch === 1 && page === 10 && <h1>최희섭</h1>}
        
          
          {charch === 2 && page === 10 && <h1>권민정</h1>}

          
          {charch === 3 && page === 10 && <h1>이은택</h1>}

          
          {charch === 4 && page === 10 && <h1>선예린</h1>} 
        </div>
          {book === false && page === 8 && <img src='/a23.png' className='하루책' onClick={()=> setbook(true)}></img>}
          {book === true && page === 8 && <img src='/a2.png' className='하루나가기' onClick={()=> setbook(false)}></img>}
          {page === 8 && book === true && <img className='통조림플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='통조림플러스텍스트'> +{eat2표시}</h1>}

          {page === 8 && book === true && <img className='물플러스' src='/a17.png'></img>}
          {page === 8 && book === true && <h1 className='물플러스텍스트'> +{eat2표시}</h1>}

          {page === 8 && book === true && <img className='라면플러스' src='/a22.png'></img>}
          {page === 8 && book === true && <h1 className='라면플러스텍스트'> +{eat3표시}</h1>}

          {page === 8 && book === true && <img className='사탕플러스' src='/a25.png'></img>}
          {page === 8 && book === true && <h1 className='사탕플러스텍스트'> +{eat4표시}</h1>}

          {page === 8 && book === true && <img className='키트플러스' src='/a24.png'></img>}
          {page === 8 && book === true && <h1 className='키트플러스텍스트'> +{med1표시}</h1>}
        
          {page === 8 && book === true && <img className='구급상자플러스' src='/a24.png'></img>}
          {page === 8 && book === true && <h1 className='구급상자플러스텍스트'> +{med2표시}</h1>}

          {page === 8 && book === true && <img className='도끼플러스' src='/a27.png'></img>}
          {page === 8 && book === true && <h1 className='도끼플러스텍스트'> +{weap1표시}</h1>}

          {page === 8 && book === true && <img className='진압봉플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='진압봉플러스텍스트'> +{weap2표시}</h1>}
        
        
          {page === 8 && book === true && <img className='야구방망이플러스' src='/a26.png'></img>}
          {page === 8 && book === true && <h1 className='야구방망이플러스텍스트'> +{weap3표시}</h1>}

          {page === 8 && book === true && <img className='헬멧플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='헬멧플러스텍스트'> +{weap4표시}</h1>}

          {page === 8 && book === true && <img className='보드게임플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='보드게임플러스텍스트'> +{etc1표시}</h1>}

          {page === 8 && book === true && <img className='라디오플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='라디오플러스텍스트'> +{etc2표시}</h1>}

          {page === 8 && book === true && <img className='책플러스' src='/a23.png'></img>}
          {page === 8 && book === true && <h1 className='책플러스텍스트'> +{etc3표시}</h1>}

          {page === 8 && book === true && <img className='신문플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='신문플러스텍스트'> +{etc4표시}</h1>}

          {page === 8 &&  book === true && <img src='/a20.png' className='하루상태창'></img>}

          {page === 13 && 거래완료 === true && <h1 className='거래완료'>거래가 완료되었습니다.</h1>}
          {page === 13 && 도둑감지 === true && <h1 className='도둑감지'>그는 도둑이였습니다...</h1>}
          {page === 13 && 거래실패 === true && <h1 className='거래실패'>거래가 실패하였습니다.</h1>}

          {(tam1 != true || tam2 != true || tam3 != true || tam4 != true) && page === 8 && <div className='문감지' onClick={() => {set문감지(true); setpage(13); }}></div>}
          {page === 13 && <img src='a2.png' className='문나가기' onClick={() => {set문감지(false); setpage(8); set문얻는거(false); set거래완료(false); set도둑감지(false); set거래실패(false);} }></img>}
          {page === 13 && <img src='a30.png' className='문확대'></img>}
          {page === 13 && 문사람감지 === false && <h1 className='없는사람'>아무도 없다. . .</h1>}
          {page === 13 && 문사람감지 === true && <h1 className='있는사람'>누군가 있다!</h1>}
          {page === 13 && 문사람감지 === true && <h1 className='열어준다' onClick={() => {set열림(true); set문사람감지(false); set문얻는거(true);}}>열어준다.</h1>} 
          {page === 13 && 문사람감지 === true && <h1 className='열어주지않는다' onClick={()=> {set문사람감지(false); set거래실패(true);}}>열어주지않는다.</h1>}
          {page === 8 && 문사람감지 === true && <h1 className='감지'>!</h1>}


          {page === 13 && 사람1 == true && 수치 < 10 && 문사람감지 === true && masg1 === 1 && <h1 className='수치적'>(상인은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 10 && 수치 < 30 && 문사람감지 === true &&  masg1 === 1 && <h1 className='수치적'>(상인은 애매한것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 30 && 문사람감지 === true &&  masg1 === 1 &&  <h1 className='수치적'>(상인은 만족스럽다.)</h1>}

          {page === 13 && 사람1 == true && 수치 < 7 && 문사람감지 === true && masg1 === 2 && <h1 className='수치적'>(상인은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 7 && 수치 < 15 && 문사람감지 === true &&  masg1 === 2 && <h1 className='수치적'>(상인은 애매한것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 15 && 문사람감지 === true &&  masg1 === 2 &&  <h1 className='수치적'>(상인은 만족스럽다.)</h1>}

          {page === 13 && 사람1 == true && 수치 < 7 && 문사람감지 === true && masg1 === 3 && <h1 className='수치적'>(상인은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 7 && 수치 < 15 && 문사람감지 === true &&  masg1 === 3 && <h1 className='수치적'>(상인은 애매한것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 15 && 문사람감지 === true &&  masg1 === 3 &&  <h1 className='수치적'>(상인은 만족스럽다.)</h1>}

          {page === 13 && 사람1 == true && 수치 < 3 && 문사람감지 === true && masg1 === 4 && <h1 className='수치적'>(상인은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 3 && 수치 < 10 && 문사람감지 === true &&  masg1 === 4 && <h1 className='수치적'>(상인은 애매한것같다.)</h1>}
          {page === 13 && 사람1 == true && 수치 >= 10 && 문사람감지 === true &&  masg1 === 4 &&  <h1 className='수치적'>(상인은 만족스럽다.)</h1>}



          {page === 13 && 사람2 == true && 수치 < 3 && 문사람감지 === true && masg2 == 1 && <h1 className='수치적'>(??는 아직 불만인것같다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 3 && 수치 < 10 && 문사람감지 === true && masg2 == 1 &&  <h1 className='수치적'>(??는 아직 애매하다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 10 && 문사람감지 === true && masg2 == 1 && <h1 className='수치적'>(??는 만족스럽다.)</h1>}

          {page === 13 && 사람2 == true && 수치 < 7 && 문사람감지 === true && masg2 == 2 && <h1 className='수치적'>(??는 아직 불만인것같다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 7 && 수치 < 15 && 문사람감지 === true && masg2 == 2 &&  <h1 className='수치적'>(??는 아직 애매하다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 15 && 문사람감지 === true && masg2 == 2 && <h1 className='수치적'>(??는 만족스럽다.)</h1>}

          {page === 13 && 사람2 == true && 수치 < 15 && 문사람감지 === true && masg2 == 3 && <h1 className='수치적'>(??는 아직 불만인것같다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 15 && 수치 < 20 && 문사람감지 === true && masg2 == 3 &&  <h1 className='수치적'>(??는 아직 애매하다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 20 && 문사람감지 === true && masg2 == 3 && <h1 className='수치적'>(??는 만족스럽다.)</h1>}

          {page === 13 && 사람2 == true && 수치 < 1 && 문사람감지 === true && masg2 == 4 && <h1 className='수치적'>(??는 아직 불만인것같다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 1 && 수치 < 5 && 문사람감지 === true && masg2 == 4 &&  <h1 className='수치적'>(??는 아직 애매하다.)</h1>}
          {page === 13 && 사람2 == true && 수치 >= 5 && 문사람감지 === true && masg2 == 4 && <h1 className='수치적'>(??는 만족스럽다.)</h1>}



          {page === 13 && 사람3 == true && 문사람감지 === true && <h1 className='수치적'>(할머니는 만족스럽다.)</h1>}

          {page === 13 && <div className='투명잉박스'></div>}





          {page === 13 && 사람4 == true && 수치 < 10 && 문사람감지 === true && masg4 == 1 && <h1 className='수치적'>(수상한사람은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 10 && 수치 < 30 && 문사람감지 === true && masg4 == 1 && <h1 className='수치적'>(수상한사람은 아직 애매하다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 30 && 문사람감지 === true && masg4 == 1 && <h1 className='수치적'>(수상한사람은 만족스럽다.)</h1>}

          {page === 13 && 사람4 == true && 수치 < 10 && 문사람감지 === true && masg4 == 2 && <h1 className='수치적'>(수상한사람은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 10 && 수치 < 20 && 문사람감지 === true && masg4 == 2 && <h1 className='수치적'>(수상한사람은 아직 애매하다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 20 && 문사람감지 === true && masg4 == 2 && <h1 className='수치적'>(수상한사람은 만족스럽다.)</h1>}

          {page === 13 && 사람4 == true && 수치 < 15 && 문사람감지 === true && masg4 == 3 && <h1 className='수치적'>(수상한사람은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 15 && 수치 < 25 && 문사람감지 === true && masg4 == 3 && <h1 className='수치적'>(수상한사람은 아직 애매하다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 25 && 문사람감지 === true && masg4 == 3 && <h1 className='수치적'>(수상한사람은 만족스럽다.)</h1>}

          {page === 13 && 사람4 == true && 수치 < 10 && 문사람감지 === true && masg4 == 4 && <h1 className='수치적'>(수상한사람은 아직 불만인것같다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 10 && 수치 < 17 && 문사람감지 === true && masg4 == 4 && <h1 className='수치적'>(수상한사람은 아직 애매하다.)</h1>}
          {page === 13 && 사람4 == true && 수치 >= 17 && 문사람감지 === true && masg4 == 4 && <h1 className='수치적'>(수상한사람은 만족스럽다.)</h1>}


          {page === 13 && 문클릭 > 1 && <div className='투명블록' onClick={() => set문클릭(prev => prev - 1)}></div>}
          {page === 13 && 문사람감지 === true && 사람1 == true &&  <h1 className='사람1'>상인</h1>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 == 1 && <div className='상인글1'>
            <h1>오랜만에 살아 있는 인간을 보네.</h1>
            {문클릭 <= 1 && <h1>통조림 {문통조림랜덤}개, 물 {문물랜덤}개, 보드게임을 줄게</h1>}
          </div>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 == 2 && <div className='상인글1'>
            <h1>음식 조금만 나눠줄래?</h1>
            {문클릭 <= 1 && <h1> 통조림 {문통조림랜덤}개, 물 {문물랜덤}개, 책을 드릴게요!</h1>}
          </div>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 == 3 && <div className='상인글1'>
            <h1>안녕하세요!</h1>
            {문클릭 <= 3 && <h1>저는 그저 거래를 하고싶어서 찾아왔습니다!</h1>}
            {문클릭 <= 2 && <h1>나도 오래 굶었거든. 그러니까 서로 도와보자?</h1>}
            {문클릭 <= 1 && <h1> 통조림 {문통조림랜덤}개, 물 {문물랜덤}개, 신문을 줄게</h1>}
          </div>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 === 4 && <div className='상인글1'>
           <h1>안녕하세요!</h1>
            {문클릭 <= 2 && <h1>저는 그저 거래를 하고싶어서 찾아왔습니다!</h1>}
            {문클릭 <= 1 && <h1> 통조림 {문통조림랜덤}개, 물 {문물랜덤}개를 드릴게요!</h1>}
          </div>}
          {page === 13 && 문사람감지 === true && 사람2 == true && <h1 className='사람1'>??</h1>}
          {page === 13 && 문사람감지 === true && 사람2 == true && masg2 === 1 && <div className='엥글1'>
            <h1>문을 열어주세요. . .</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람2 == true && masg2 === 2 && <div className='엥글1'>
            <h1>. . .</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람2 == true && masg2 === 3 && <div className='엥글1'>
            <h1>미안해요...</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람2 == true && masg2 === 4 && <div className='엥글1'>
            <h1>..</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람3 == true && <h1 className='사람1'>할머니</h1>}
          {page === 13 && 문사람감지 === true && 사람3 == true && masg3 === 1 && <div className='할머니글1'>
            <h1>왜 이렇게 말랐니... 이거 먹고 힘내렴</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람3 == true && masg3 === 2 && <div className='할머니글1'>
            <h1>에고.. 힐들겠다. 고생했다</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람3 == true && masg3 === 3 && <div className='할머니글1'>
            <h1>왜 이렇게 말랐니... 이거 먹고 힘내렴</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람3 == true && masg3 === 4 && <div className='할머니글1'>
            <h1>너네가 고생이 많다..</h1>
          </div>}

          {page === 13 && 문사람감지 === true && 사람4 == true && <h1 className='사람1'>수상한 사람</h1>}
          {page === 13 && 문사람감지 === true && 사람4 == true && masg4 === 1 && <div className='수상한사람글1'>
            <h1>헿 도끼를 줄게</h1>
            {문클릭 <= 1 && <h1>설마 그냥 받아갈생각은 아니지?</h1>}
          </div>}
          {page === 13 && 문사람감지 === true && 사람4 == true && masg4 === 2 && <div className='수상한사람글1'>
            <h1>헿 진압봉을 줄게</h1>
            {문클릭 <= 1 && <h1>설마 그냥 받아갈생각은 아니지?</h1>}
          </div>}
          {page === 13 && 문사람감지 === true && 사람4 == true && masg4 === 3 && <div className='수상한사람글1'>
            <h1>ㅎ 야구방망이을 줄게</h1>
            {문클릭 <= 1 && <h1>설마 그냥 받아갈생각은 아니지?</h1>}
          </div>}
          {page === 13 && 문사람감지 === true && 사람4 == true && masg4 === 4 && <div className='수상한사람글1'>
            <h1>ㅎ 헬멧을 줄게</h1>
            {문클릭 <= 1 && <h1>설마 그냥 받아갈생각은 아니지?</h1>}
          </div>}

            <div className='음식'>
              {page === 13 && <img src="a16.png" className='크기' onClick={()=> 통조림증가량()}></img>}
              {page === 13 && <img src="a17.png" className='크기' onClick={() => 물증가량()}></img>}
              {page === 13 && <img src="a22.png" className='크기' onClick={()=> 라면증가량()}></img>}        
              {page === 13 && <img src="a25.png" className='크기' onClick={()=> 사탕증가량()}></img>}              
            </div>
            {page===13 && <div>
              <h1 className='통조림13'>{eat1}/{통조림}</h1>
              <h1 className='물13'>{eat2}/{물}</h1>
              <h1 className='라면13'>{eat3}/{라면}</h1>
              <h1 className='사탕13'>{eat4}/{사탕}</h1>
            </div>}
          
            
            {/* 라디오 */}

            {etc2 == 1 && page === 8 && <img src="a33.png" className='라디오'></img>}
            {라디오확률 == 1 && 라디오하루대사 > 0 && etc2 == 1 && page === 8 && <img src="a33.png" className='라디오' onClick={() => set라디오하루대사(prev => prev -1)}></img>}

            {page == 8 && 라디오하루대사 === 5 && 라디오대사 === 1 && 라디오확률 == 1 && <h1 className="라디오텍스트1">... 드.. 안..기지를 확보하..니다.</h1>} {/*우리는 드디어 안전한 기지를 확보하였습니다.*/}
            {page == 8 && 라디오하루대사 === 4 && 라디오대사 === 1 && 라디오확률 == 1 && <h1 className="라디오텍스트2">만약 이 신.가 잡..면</h1>} {/*만약 이 신호가 잡힌다면*/}
            {page == 8 && 라디오하루대사 === 3 && 라디오대사 === 1 && 라디오확률 == 1 && <h1 className="라디오텍스트3">헬기. .. 계획이니</h1>} {/*헬기를 띄울 계획이니*/}
            {page == 8 && 라디오하루대사 === 2 && 라디오대사 === 1 && 라디오확률 == 1 && <h1 className="라디오텍스트4">꼭 안전하.길</h1>} {/*꼭 안전하시길*/}
            {page == 8 && 라디오하루대사 === 1 && 라디오대사 === 1 && 라디오확률 == 1 && <h1 className="라디오텍스트">(라디오신호가 불안전한것같다.)</h1>}

            {page == 8 && 라디오하루대사 === 5 && 라디오대사 === 2 && 라디오확률 == 1 && <h1 className="라디오텍스트5">헬기를 여.번 띄울수..지는</h1>} {/*헬기를 여러번 띄울수있을지는*/}
            {page == 8 && 라디오하루대사 === 4 && 라디오대사 === 2 && 라디오확률 == 1 && <h1 className="라디오텍스트6">..히 말해서 모르..니다.</h1>} {/*솔직히 말해서 모르겠습니다.*/}
            {page == 8 && 라디오하루대사 === 3 && 라디오대사 === 2 && 라디오확률 == 1 && <h1 className="라디오텍스트7">위치는 북. ..을 고려.고 있습...</h1>} {/*위치는 북동쪽 병원을 고려하고 있습니다.*/}
            {page == 8 && 라디오하루대사 === 2 && 라디오대사 === 2 && 라디오확률 == 1 && <h1 className="라디오텍스트8">..이 되면 방송하..니다.</h1>} {/*확정이 되면 방송하겠습니다*/}
            {page == 8 && 라디오하루대사 === 1 && 라디오대사 === 2 && 라디오확률 == 1 && <h1 className="라디오텍스트">(라디오신호가 불안전한것같다.)</h1>}

            {page == 8 && 라디오하루대사 === 5 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트9">동쪽 ..으로 확정이 났습니다.</h1>} {/*.동쪽 병원으로 확정이 났습니다.*/}
            {page == 8 && 라디오하루대사 === 4 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트10">헬기는 . .번. 여.. 띄울 예정이므로</h1>} {/*헬기는 단 한번만 여러대 띄울 예정이므로*/}
            {page == 8 && 라디오하루대사 === 3 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트11">정.. {탈출}일뒤 오전에 오시길 바..다.</h1>} {/*정확히 10~30일뒤 오전에 오시길 바랍니다.*/}
            {page == 8 && 라디오하루대사 === 2 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트12">미리 오시. 위.합니다.</h1>} {/*미리 오시면 위험합니다.*/}
            {page == 8 && 라디오하루대사 === 1 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트13">(라디오가 고장났다.)</h1>}


            {/* 튜토리얼 12 */}
            {tpage < 9 && page === 12 && <img src="a.png" className='TRight' onClick={() => settpage(prev => prev +1)}></img>}
            {tpage > 0 && page === 12 && <img src="a.png" className='TLeft' onClick={()=> settpage(prev => prev - 1)}></img>}

            {page === 12 && <img src='/a42.png' className='튜나가기' onClick={()=> setpage(6)}></img>}
            {tpage != 9 && page === 12 && <h3 className='튜다음'>다음으로 이동</h3>}
            {tpage != 0 && page === 12 && <h3 className='튜전'>전으로 이동</h3>}
            {page === 12 && <h3 className='튜나가기2'>나가기</h3>}
            {page === 12 && <div className='튜배경'></div>}

            {tpage === 0 && page === 12 && <h1 className='튜1'>튜토리얼</h1>}
            {tpage === 0 && page === 12 && <h2 className='튜2'>클릭 가능한 아이템</h2>}


            {tpage === 1 && page === 12 && <img src='a3.png' className='튜이1'></img>}
            {tpage === 1 && page === 12 && <h1 className='튜3'>지도</h1>}

            {tpage === 1 && page === 12 && <h1 className='튜4'>지도를 클릭시 탐험을 보낼수 있는 공간으로 이동됩니다.</h1>}            


            {tpage === 2 && page === 12 && <img src='a14.png' className='튜이2'></img>}
            {tpage === 2 && page === 12 && <h1 className='튜3'>펼친 지도</h1>}
            {tpage === 2 && page === 12 && <h1 className='튜4'>산, 서로고, 소방서, 경찰서, 병원등의 텍스트가 있는데</h1>}
            {tpage === 2 && page === 12 && <h1 className='튜5'>그 텍스트를 클릭시 선택된 캐릭터가 이동합니다.</h1>}

            {tpage === 3 && page === 12 && <img src='a26.png' className='튜이2'></img>}
            {tpage === 3 && page === 12 && <h1 className='튜3'>무기</h1>}
            {tpage === 3 && page === 12 && <h1 className='튜12'>무기를 장착시 죽을 확률이 조금 더 떨어집니다.</h1>}

            {tpage === 4 && page === 12 && <img src='a16.png' className='튜이3'></img>}
            {tpage === 4 && page === 12 && <h1 className='튜3'>제어</h1>}
            {tpage === 4 && page === 12 && <h1 className='튜6'>통조림을 클릭시 캐릭터의 상태를 제어할 수 있는 공간으로 이동됩니다.</h1>}

            {tpage === 5 && page === 12 && <img src='a16.png' className='튜이3'></img>}
            {tpage === 5 && page === 12 && <img src='a17.png' className='튜이4'></img>}
            {tpage === 5 && page === 12 && <img src='a22.png' className='튜이5'></img>}
            {tpage === 5 && page === 12 && <img src='a25.png' className='튜이6'></img>}
            {tpage === 5 && page === 12 && <h1 className='튜7'>음식들</h1>}
            {tpage === 5 && page === 12 && <h1 className='튜8'>음식들을 클릭시 포만감이 증가합니다.</h1>}

            {tpage === 6 && page === 12 && <img src='a24.png' className='튜이7'></img>}
            {tpage === 6 && page === 12 && <h1 className='튜9'>기타 아이템</h1>}
            {tpage === 6 && page === 12 && <h1 className='튜10'>신문, 책들은 25%, 50%확률로 소모가 안되고 정신력을 증가시킵니다.</h1>}
            {tpage === 6 && page === 12 && <h1 className='튜11'>키트, 구급상자는 부상이있으면 질병이 조금 더 빨리 치료됩니다.</h1>}

            {tpage === 7 && page === 12 && <img src='a28.png' className='튜이7'></img>}
            {tpage === 7 && page === 12 && <h1 className='튜9'>침대</h1>}
            {tpage === 7 && page === 12 && <h1 className='튜13'>하루를 넘깁니다.</h1>}

            {tpage === 8 && page === 12 && <div className='튜14'></div>}
            {tpage === 8 && page === 12 && <img src='a19.png' className='튜이8'></img>}
            {tpage === 8 && page === 12 && <h1 className='튜9'>정보</h1>}
            {tpage === 8 && page === 12 && <h1 className='튜15'>캐릭터의 상태를 나타냅니다.</h1>}

            {tpage === 9 && page === 12 && <img src='a37.png' className='튜이8'></img>}
            {tpage === 9 && page === 12 && <h1 className='튜17'>쪽지</h1>}
            {tpage === 9 && page === 12 && <h1 className='튜16'>탐험을 갔을때 10%의 확률로 얻어 재밌는 말이 있습니다.</h1>}


            {page === 21 && <img src='/b1.png' className='튜1'></img>}
            {page === 21 && <img src='/a2.png' className="튜나가기"></img>}
            {page === 8 && 큰쪽지 === false && <img src = 'a36.png' className='작은쪽지' onClick={()=> set큰쪽지(true)}></img>}
            {page === 8 && 큰쪽지 === true && <img src = 'a36.png' className='작은쪽지' onClick={()=> set큰쪽지(false)}></img>}

          {page === 8 && 큰쪽지 === true && <img src="a20.png" className='하루상태창'></img>}
              {쪽지[0] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지1'></img>}
              {쪽지[1] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지2'></img>}
              {쪽지[2] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지3'></img>}
              {쪽지[3] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지4'></img>}
              {쪽지[4] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지5'></img>}
              {쪽지[5] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지6'></img>}
              {쪽지[6] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지7'></img>}
              {쪽지[7] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지8'></img>}
              {쪽지[8] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지9'></img>}
              {쪽지[9] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지10'></img>}
              {쪽지[10] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지11'></img>}
              {쪽지[11] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지12'></img>}
              {쪽지[12] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지13'></img>}
              {쪽지[13] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지14'></img>}
              {쪽지[14] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지15'></img>}
              {쪽지[15] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지16'></img>}
              {쪽지[16] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지17'></img>}
              {쪽지[17] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지18'></img>}
              {쪽지[18] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지19'></img>}
              {쪽지[19] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지20'></img>}
              {쪽지[20] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지21'></img>}
              {쪽지[21] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지22'></img>}
              {쪽지[22] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지23'></img>}
              {쪽지[23] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지24'></img>}
              {쪽지[24] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지25'></img>}
              {쪽지[25] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지26'></img>}
              {쪽지[26] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지27'></img>}
              {쪽지[27] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지28'></img>}
              {쪽지[28] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지29'></img>}
              {쪽지[29] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지30'></img>}
              {쪽지[30] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지31'></img>}
              {쪽지[31] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지32'></img>}
              {쪽지[32] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지33'></img>}
              {쪽지[33] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지34'></img>}
              {쪽지[34] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지35'></img>}
              {쪽지[35] == false && page === 8 && 큰쪽지 === true && <img src="a39.png" className='쪽지36'></img>}

              {쪽지[0] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지1' onClick={() => 쪽지열기(0)}></img>}
              {쪽지[1] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지2' onClick={() => 쪽지열기(1)}></img>}
              {쪽지[2] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지3' onClick={() => 쪽지열기(2)}></img>}
              {쪽지[3] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지4' onClick={() => 쪽지열기(3)}></img>}
              {쪽지[4] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지5' onClick={() => 쪽지열기(4)}></img>}
              {쪽지[5] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지6' onClick={() => 쪽지열기(5)}></img>}
              {쪽지[6] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지7' onClick={() => 쪽지열기(6)}></img>}
              {쪽지[7] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지8' onClick={() => 쪽지열기(7)}></img>}
              {쪽지[8] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지9' onClick={() => 쪽지열기(8)}></img>}
              {쪽지[9] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지10' onClick={() => 쪽지열기(9)}></img>}
              {쪽지[10] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지11' onClick={() => 쪽지열기(10)}></img>}
              {쪽지[11] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지12' onClick={() => 쪽지열기(11)}></img>}
              {쪽지[12] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지13' onClick={() => 쪽지열기(12)}></img>}
              {쪽지[13] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지14' onClick={() => 쪽지열기(13)}></img>}
              {쪽지[14] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지15' onClick={() => 쪽지열기(14)}></img>}
              {쪽지[15] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지16' onClick={() => 쪽지열기(15)}></img>}
              {쪽지[16] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지17' onClick={() => 쪽지열기(16)}></img>}
              {쪽지[17] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지18' onClick={() => 쪽지열기(17)}></img>}
              {쪽지[18] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지19' onClick={() => 쪽지열기(18)}></img>}
              {쪽지[19] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지20' onClick={() => 쪽지열기(19)}></img>}
              {쪽지[20] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지21' onClick={() => 쪽지열기(20)}></img>}
              {쪽지[21] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지22' onClick={() => 쪽지열기(21)}></img>}
              {쪽지[22] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지23' onClick={() => 쪽지열기(22)}></img>}
              {쪽지[23] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지24' onClick={() => 쪽지열기(23)}></img>}
              {쪽지[24] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지25' onClick={() => 쪽지열기(24)}></img>}
              {쪽지[25] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지26' onClick={() => 쪽지열기(25)}></img>}
              {쪽지[26] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지27' onClick={() => 쪽지열기(26)}></img>}
              {쪽지[27] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지28' onClick={() => 쪽지열기(27)}></img>}
              {쪽지[28] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지29' onClick={() => 쪽지열기(28)}></img>}
              {쪽지[29] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지30' onClick={() => 쪽지열기(29)}></img>}
              {쪽지[30] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지31' onClick={() => 쪽지열기(30)}></img>}
              {쪽지[31] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지32' onClick={() => 쪽지열기(31)}></img>}
              {쪽지[32] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지33' onClick={() => 쪽지열기(32)}></img>}
              {쪽지[33] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지34' onClick={() => 쪽지열기(33)}></img>}
              {쪽지[34] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지35' onClick={() => 쪽지열기(34)}></img>}
              {쪽지[35] == true && page === 8 && 큰쪽지 === true && <img src="a37.png" className='쪽지36' onClick={() => 쪽지열기(35)}></img>}

          {page == 8 && 쪽지열람[0] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(0)} ></img>}
          {page == 8 && 쪽지열람[0] === true && <h1 className="쪽지이름">한서진</h1>}
          {page == 8 && 쪽지열람[0] === true && 
          <duv className = "쪽지글1">
              <h2>이런.. 이 지역은 틀려먹었어..</h2>
              <h2>좀비가 이렇게 많을줄이야....</h2>
              <h2>하...</h2>
              <h2>만약 이걸 읽는다면</h2>
              <h2>밖에 이왕이면 나가지마..</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[1] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(1)} ></img>}
          {page == 8 && 쪽지열람[1] === true && <h1 className="쪽지이름">강유나</h1>}
          {page == 8 && 쪽지열람[1] === true && 
          <duv className = "쪽지글1">
              <h2>산에는 식량이 참 많은거같아~</h2>
              <h2>물론 좀비는 그만큼 많지만</h2>
              <h2>길도 복잡해서 어디서 습격할지 몰라서 무섭더라고</h2>
              <h2>하지만 가볼만해</h2>
          </duv>
            }            

          {page == 8 && 쪽지열람[2] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(2)} ></img>}
          {page == 8 && 쪽지열람[2] === true && <h1 className="쪽지이름">김환웅</h1>}
          {page == 8 && 쪽지열람[2] === true && 
          <duv className = "쪽지글1">
              <h2>학교는 정말 끔직했어..</h2>
              <h2>내 친구들이 다른애들을 물다니...</h2>
              <h2>생각만해도 역겨워</h2>
              <h2>뭐.. 그냥 그렇다고</h2>
          </duv>
          }         

          {page == 8 && 쪽지열람[3] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(3)} ></img>}
          {page == 8 && 쪽지열람[3] === true && <h1 className="쪽지이름">최희준</h1>}
          {page == 8 && 쪽지열람[3] === true && 
          <duv className = "쪽지글1">
              <h2>라디오 주파수가 잘 안터져서 이상하게 들릴꺼야</h2>
              <h2>뭐.. 별 방법은 없고</h2>
              <h2>잘 들어봐 그럼 해석할수있겠지</h2>
              <h2>물론 난 포기했지만</h2>
          </duv>
            }           

          {page == 8 && 쪽지열람[4] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(4)} ></img>}
          {page == 8 && 쪽지열람[4] === true && <h1 className="쪽지이름">최희동</h1>}
          {page == 8 && 쪽지열람[4] === true && 
          <duv className = "쪽지글1">
              <h2>ㅇ..아냐 나 때문에 죽은게 아닐거야..</h2>
              <h2>하....</h2>
              <h2>이렇게 살거면 그냥....</h2>
              <h2>넌 포기하지마.. 군 부대가 있다했으닌깐</h2>
          </duv>
            }      

          {page == 8 && 쪽지열람[5] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(5)} ></img>}
          {page == 8 && 쪽지열람[5] === true && <h1 className="쪽지이름">이시훈</h1>}
          {page == 8 && 쪽지열람[5] === true && 
          <duv className = "쪽지글1">
              <h2>이상하게 좀비는</h2>
              <h2>야구방망이, 진압봉, 도끼만 공격이 통하더라?</h2>
              <h2>이유는 모르겠는데</h2>
              <h2>그것때문에 불행해진거겠지</h2>
          </duv>
            }    


          {page == 8 && 쪽지열람[6] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(6)} ></img>}
          {page == 8 && 쪽지열람[6] === true && <h1 className="쪽지이름">김만덕</h1>}
          {page == 8 && 쪽지열람[6] === true && 
          <duv className = "쪽지글1">
              <h2>위험상에 이유랑 많은 좀비때문에</h2>
              <h2>헬기는 한번만 운영한다는 소문이있더라</h2>
              <h2>근데 과연 한번만 운영한다고 안전할까?</h2>
              <h2>잘 생각해봐</h2>
          </duv>
            }    

          {page == 8 && 쪽지열람[7] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(7)} ></img>}
          {page == 8 && 쪽지열람[7] === true && <h1 className="쪽지이름">박시민</h1>}
          {page == 8 && 쪽지열람[7] === true && 
          <duv className = "쪽지글1">
              <h2>역시 허기를 채우는건</h2>
              <h2>통조림이 가장 최고야~</h2>
              <h2>배부르잖아~ 한번먹으면</h2>
          </duv>
            }    

          {page == 8 && 쪽지열람[8] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(8)} ></img>}
          {page == 8 && 쪽지열람[8] === true && <h1 className="쪽지이름">서정훈</h1>}
          {page == 8 && 쪽지열람[8] === true && 
          <duv className = "쪽지글1">
              <h2>과1등..전교1등..하면 뭐해...</h2>
              <h2>어짜피 죽는데</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[9] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(9)} ></img>}
          {page == 8 && 쪽지열람[9] === true && <h1 className="쪽지이름">최영석</h1>}
          {page == 8 && 쪽지열람[9] === true && 
          <duv className = "쪽지글1">
              <h2>그거알아?</h2>
              <h2>사실 이 세계는 누군가 조작한것이고</h2>
              <h2>우린 그저 명령에 따르는 사람이라는거?</h2>
              <h2>그냥.. 그렇다고</h2>
              <h2>아님 이런일이 일어나지않았겠지</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[10] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(10)} ></img>}
          {page == 8 && 쪽지열람[10] === true && <h1 className="쪽지이름">이성균</h1>}
          {page == 8 && 쪽지열람[10] === true && 
          <duv className = "쪽지글1">
              <h2>정신적으로 체력적으로 이제 한계다..</h2>
              <h2>미안 애들아..</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[11] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(11)} ></img>}
          {page == 8 && 쪽지열람[11] === true && <h1 className="쪽지이름">김민후</h1>}
          {page == 8 && 쪽지열람[11] === true && 
          <duv className = "쪽지글1">
              <h2>배고프다...</h2>
              <h2>통조림이 가장 맛있고 라면도 맛있고.. 사탕도 맛있는데...</h2>
              <h2>밖은 너무 위험해..</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[12] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(12)} ></img>}
          {page == 8 && 쪽지열람[12] === true && <h1 className="쪽지이름">정시우</h1>}
          {page == 8 && 쪽지열람[12] === true && 
          <duv className = "쪽지글1">
              <h2>그거 알아?</h2>
              <h2>내가 어디서 들었는데</h2>
              <h2>산에 좀비가 없다는데?</h2>
              <h2>뭐 믿는지 말든지~</h2>
          </duv>
            }
          
          {page == 8 && 쪽지열람[13] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(13)} ></img>}
          {page == 8 && 쪽지열람[13] === true && <h1 className="쪽지이름">이상한 사람</h1>}
          {page == 8 && 쪽지열람[13] === true && 
          <duv className = "쪽지글1">
              <h2>요즘 내 모습, 목소리, 스타일이 다 똑같은애가</h2>
              <h2>나를 사칭해 사기를 친다던데</h2>
              <h2>잡히기만해봐 ㅎ</h2>
          </duv>
            }
{/* 여기카지 */}
          {page == 8 && 쪽지열람[14] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(14)} ></img>}
          {page == 8 && 쪽지열람[14] === true && <h1 className="쪽지이름">최희수</h1>}
          {page == 8 && 쪽지열람[14] === true && 
          <duv className = "쪽지글1">
              <h2>아프거나 미치면 밖에 잘 못나가</h2>
              <h2>병원에 키트나 구급상자가 잘나오닌깐</h2>
              <h2>참고해~</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[15] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(15)} ></img>}
          {page == 8 && 쪽지열람[15] === true && <h1 className="쪽지이름">이하랑</h1>}
          {page == 8 && 쪽지열람[15] === true && 
          <duv className = "쪽지글1">
              <h2>나..나는 죽기 싫어!!</h2>
              <h2>이렇게 죽을 순 없어 제발 이걸 본다면</h2>
              <h2>나를 구해줘 제발!!!</h2>
              <h2>(피로 쓰여진 글이다)</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[16] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(16)} ></img>}
          {page == 8 && 쪽지열람[16] === true && <h1 className="쪽지이름">이예랑</h1>}
          {page == 8 && 쪽지열람[16] === true && 
          <duv className = "쪽지글1">
              <h2>보넥도 최고!!!!</h2>
              <h2>많이 사랑해줘요</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[17] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(17)} ></img>}
          {page == 8 && 쪽지열람[17] === true && <h1 className="쪽지이름">선하율</h1>}
          {page == 8 && 쪽지열람[17] === true && 
          <duv className = "쪽지글1">
              <h2>산에서 노랫소리가 들려</h2>
              <h2>뭔가 큰소리가 들려</h2>
              <h2>무슨 헬기라고 했던 것 같은데?</h2>
              <h2></h2>
          </duv>
            }

          {page == 8 && 쪽지열람[18] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(18)} ></img>}
          {page == 8 && 쪽지열람[18] === true && <h1 className="쪽지이름">상인</h1>}
          {page == 8 && 쪽지열람[18] === true && 
          <duv className = "쪽지글1">
              <h2>목숨을 걸고 여러집을 다니는데</h2>
              <h2>참 거래를 안해주는사람이 많더라고</h2>
              <h2>아! 참고로 난 만족해야지만 거래를 해줘 ^^</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[19] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(19)} ></img>}
          {page == 8 && 쪽지열람[19] === true && <h1 className="쪽지이름">연구원</h1>}
          {page == 8 && 쪽지열람[19] === true && 
          <duv className = "쪽지글1">
              <h2>B-21 프로젝트 1071차.. 실패...</h2>
              <h2>이제 점점 희망이 안보인다....</h2>
              <h2>좀비들은 몸안에서도 계속 적응해나가기때문에</h2>
              <h2>영원히 죽지않겠지...</h2>
              <h2>그래서 백신도 만들기가 어려운거다..</h2>
              <h2>그냥 다같이 포기하자..</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[20] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(20)} ></img>}
          {page == 8 && 쪽지열람[20] === true && <h1 className="쪽지이름">스피노자</h1>}
          {page == 8 && 쪽지열람[20] === true && 
          <duv className = "쪽지글1">
              <h2>난 사과나무를 심겠어</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[21] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(21)} ></img>}
          {page == 8 && 쪽지열람[21] === true && <h1 className="쪽지이름">한아름</h1>}
          {page == 8 && 쪽지열람[21] === true && 
          <duv className = "쪽지글1">
              <h2>엄마 미안해.. 못난 아들이라서 </h2>
              <h2>이럴 줄 알았으면 말이라도 좀 잘 들을 걸 그랬어..</h2>
              <h2>아빠도 미안해 많이 보고 싶어</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[22] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(22)} ></img>}
          {page == 8 && 쪽지열람[22] === true && <h1 className="쪽지이름">강한나</h1>}
          {page == 8 && 쪽지열람[22] === true && 
          <duv className = "쪽지글1">
              <h2>산은 정말 멀어 한번 다녀오기 힘들단 말이지.. </h2>
              <h2>최대 7일 정도 걸릴 것 같아 </h2>
              <h2>그동안 잘 기다릴 수 있지? </h2>
              <h2>내가 음식을 구해 올 동안 잘 버티고 있어야 해!</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[23] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(23)} ></img>}
          {page == 8 && 쪽지열람[23] === true && <h1 className="쪽지이름">신예나</h1>}
          {page == 8 && 쪽지열람[23] === true && 
          <duv className = "쪽지글1">
              <h2>요즘 정신력이 떨어지는 걸 느끼고 있어..</h2>
              <h2>사탕을 먹으니 조금 나아지는 것 같아</h2>
              <h2>배고픔도 조금 채워지는 것 같고..</h2>
          </duv>
            }

          {page == 8 && 쪽지열람[24] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(24)} ></img>}
          {page == 8 && 쪽지열람[24] === true && <h1 className="쪽지이름">송유리</h1>}
          {page == 8 && 쪽지열람[24] === true && 
          <duv className = "쪽지글1">
              <h2>우리에겐 아직 희망이 있을 거야!</h2>
              <h2>백신이 나오기만 한다면</h2>
              <h2>그때 다시 만나자 너가 너무 보고 싶어</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[25] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(25)} ></img>}
          {page == 8 && 쪽지열람[25] === true && <h1 className="쪽지이름">윤정한</h1>}
          {page == 8 && 쪽지열람[25] === true && 
          <duv className = "쪽지글1">
              <h2>죽고 싶어 이렇게 살거면 차라리 포기하는 것이 나을 지도..</h2>
              <h2>왜 이렇게 버티는 것이 힘든 건지.. </h2>
              <h2>내가 음식을 두고 갈게 이걸 본 너라도 행복했으면</h2>
              <h2>끝까지 잘 버티길 바라</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[26] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(26)} ></img>}
          {page == 8 && 쪽지열람[26] === true && <h1 className="쪽지이름">금마리</h1>}
          {page == 8 && 쪽지열람[26] === true && 
          <duv className = "쪽지글1">
              <h2>가끔 이상한 할버니가 음식을 주고 간대 </h2>
              <h2>받아도 되는 걸까?? </h2>
              <h2>너무 의심되는데..</h2>
              <h2>위험하지는 않겠지?</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[27] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(27)} ></img>}
          {page == 8 && 쪽지열람[27] === true && <h1 className="쪽지이름">김운학</h1>}
          {page == 8 && 쪽지열람[27] === true && 
          <duv className = "쪽지글1">
              <h2>으악!!</h2>
              <h2>오늘 이상한 사람들에게 문을 열어주니</h2>
              <h2>우리 집의 물건을 다 들고 가버렸어!!</h2>
              <h2>문을 절대 열어주어서 안 돼!</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[28] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(28)} ></img>}
          {page == 8 && 쪽지열람[28] === true && <h1 className="쪽지이름">우정인</h1>}
          {page == 8 && 쪽지열람[28] === true && 
          <duv className = "쪽지글1">
              <h2>이상한 사람들이 찾아왔는데</h2>
              <h2>음식을 주니 거래를 하자고 하였어</h2>
              <h2>착한 사람들인 것 같아!</h2>
              <h2>꼭 만나면 문을 열어주도록 해!</h2>
          </duv>
          }
          {page == 8 && 쪽지열람[29] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(29)} ></img>}
          {page == 8 && 쪽지열람[29] === true && <h1 className="쪽지이름">김지원</h1>}
          {page == 8 && 쪽지열람[29] === true && 
          <duv className = "쪽지글1">
              <h2>서로고에선 학생들이 숨겨둔 간식들이 많이 있을 거야!</h2>
              <h2>어쩌면 우리가 먹을 몫도 있을 지도?</h2>
              <h2>신문이나 책들이 있지 않을까?</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[30] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(30)} ></img>}
          {page == 8 && 쪽지열람[30] === true && <h1 className="쪽지이름">손재영</h1>}
          {page == 8 && 쪽지열람[30] === true && 
          <duv className = "쪽지글1">
              <h2>산에서 가끔 등산하면서 먹을 음식들을 두었어</h2>
              <h2>근데 내가 숨겼지 어차피 이젠 그곳으로 가지 않을 거야 </h2>
              <h2>그러니 잘 찾아보든지ㅋ</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[31] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(31)} ></img>}
          {page == 8 && 쪽지열람[31] === true && <h1 className="쪽지이름">박지호</h1>}
          {page == 8 && 쪽지열람[31] === true && 
          <duv className = "쪽지글1">
              <h2>다쳤다고?? 그럼 이걸 알려줄게 </h2>
              <h2>좀비가 많아서 병원이 위험하기는 할 거야</h2>
              <h2>하지만 다치면 밖에 나가기 힘들 거야 </h2>
              <h2>다쳤다면 꼭 가!</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[32] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(32)} ></img>}
          {page == 8 && 쪽지열람[32] === true && <h1 className="쪽지이름">홍현준</h1>}
          {page == 8 && 쪽지열람[32] === true && 
          <duv className = "쪽지글1">
              <h2>오늘은 벌써 2024년 11월 10일이야</h2>
              <h2>원래라면 내일을 위해 빼빼로를 만들었을 거야.. </h2>
              <h2>하지만 그런 건 이제 사치일 뿐야..</h2>
              <h2>예전으로 돌아가고 싶어 </h2>
          </duv>
            }
          {page == 8 && 쪽지열람[33] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(33)} ></img>}
          {page == 8 && 쪽지열람[33] === true && <h1 className="쪽지이름">정형준</h1>}
          {page == 8 && 쪽지열람[33] === true && 
          <duv className = "쪽지글1">
              <h2>헬기소리를 들었어 구조대인 걸까??</h2>
              <h2>이럴 줄 알았으면 말이라도 좀 잘 들을 걸 그랬어..</h2>
              <h2>아빠도 미안해 많이 보고 싶어</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[34] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(34)} ></img>}
          {page == 8 && 쪽지열람[34] === true && <h1 className="쪽지이름">서한솔</h1>}
          {page == 8 && 쪽지열람[34] === true && 
          <duv className = "쪽지글1">
                <h2>나는 좀비에게 물리게 되었어</h2>
                <h2>사랑하는 가족을 위해서 떠나기로 결정을 했지..</h2>
                <h2>벌써 너무 그립고 보고싶다</h2>
                <h2>갑자기 이렇게 떠나게 되어서 미안해 그리고 사랑해</h2>
          </duv>
            }
          {page == 8 && 쪽지열람[35] === true && <img src="a37.png" className='쪽지열람' onClick={() => 쪽지닫기(35)} ></img>}
          {page == 8 && 쪽지열람[35] === true && <h1 className="쪽지이름">권세준</h1>}
          {page == 8 && 쪽지열람[35] === true && 
          <duv className = "쪽지글1">
              <h2>파란장미의 꽃말을 아니?</h2>
              <h2>파란장미는 사실 이 세상에 만들어 질 수 없는</h2>
              <h2>꽃이였어 그래서 "불가능"이라는 꽃말이었지</h2>
              <h2>하지만 인공적으로 만들어지게 되면서 세상에 나왔지</h2>
              <h2>그 후 꽃말은 "기적"또는 "기적 같은 사랑"이야</h2>
              <h2>우리도 포기하지 말자고 하고 싶었어</h2>
          </duv>
            }

        {쪽지[0] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지1글1'onClick={() => 쪽지열기(0)}>1</h2>}
        {쪽지[1] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지2글1'onClick={() => 쪽지열기(1)}>2</h2>}
        {쪽지[2] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지3글1'onClick={() => 쪽지열기(2)}>3</h2>}
        {쪽지[3] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지4글1'onClick={() => 쪽지열기(3)}>4</h2>}
        {쪽지[4] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지5글1'onClick={()=>쪽지열기(4)}>5</h2>}
        {쪽지[5] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지6글1'onClick={() => 쪽지열기(5)}>6</h2>}
        {쪽지[6] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지7글1'onClick={() => 쪽지열기(6)}>7</h2>}
        {쪽지[7] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지8글1'onClick={() => 쪽지열기(7)}>8</h2>}
        {쪽지[8] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지9글1'onClick={() => 쪽지열기(8)}>9</h2>}
        {쪽지[9] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지10글1'onClick={() => 쪽지열기(9)}>10</h2>}
        {쪽지[10] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지11글1'onClick={() => 쪽지열기(10)}>11</h2>}
        {쪽지[11] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지12글1'onClick={() => 쪽지열기(11)}>12</h2>}
        {쪽지[12] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지13글1'onClick={() => 쪽지열기(12)}>13</h2>}
        {쪽지[13] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지14글1'onClick={() => 쪽지열기(13)}>14</h2>}
        {쪽지[14] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지15글1'onClick={() => 쪽지열기(14)}>15</h2>}
        {쪽지[15] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지16글1'onClick={() => 쪽지열기(15)}>16</h2>}
        {쪽지[16] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지17글1'onClick={() => 쪽지열기(16)}>17</h2>}
        {쪽지[17] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지18글1'onClick={() => 쪽지열기(17)}>18</h2>}
        {쪽지[18] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지19글1'onClick={() => 쪽지열기(18)}>19</h2>}
        {쪽지[19] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지20글1'onClick={() => 쪽지열기(19)}>20</h2>}
        {쪽지[20] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지21글1'onClick={() => 쪽지열기(20)}>21</h2>}
        {쪽지[21] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지11글1'onClick={() => 쪽지열기(21)}>22</h2>}
        {쪽지[22] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지12글1'onClick={() => 쪽지열기(22)}>23</h2>}
        {쪽지[23] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지13글1'onClick={() => 쪽지열기(23)}>24</h2>}
        {쪽지[24] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지14글1'onClick={() => 쪽지열기(24)}>25</h2>}
        {쪽지[25] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지15글1'onClick={() => 쪽지열기(25)}>26</h2>}
        {쪽지[26] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지16글1'onClick={() => 쪽지열기(26)}>27</h2>}
        {쪽지[27] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지17글1'onClick={() => 쪽지열기(27)}>28</h2>}
        {쪽지[28] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지18글1'onClick={() => 쪽지열기(28)}>29</h2>}
        {쪽지[29] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지19글1'onClick={() => 쪽지열기(29)}>30</h2>}
        {쪽지[30] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지20글1'onClick={() => 쪽지열기(30)}>31</h2>}
        {쪽지[31] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지21글1'onClick={() => 쪽지열기(31)}>32</h2>}
        {쪽지[32] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지18글1'onClick={() => 쪽지열기(32)}>33</h2>}
        {쪽지[33] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지19글1'onClick={() => 쪽지열기(33)}>34</h2>}
        {쪽지[34] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지20글1'onClick={() => 쪽지열기(34)}>35</h2>}
        {쪽지[35] == true && page === 8 && 큰쪽지 === true && <h2 className='쪽지21글1'onClick={() => 쪽지열기(35)}>36</h2>}

        {쪽지[0] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지1글'>1</h2>}
        {쪽지[1] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지2글'>2</h2>}
        {쪽지[2] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지3글'>3</h2>}
        {쪽지[3] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지4글'>4</h2>}
        {쪽지[4] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지5글'>5</h2>}
        {쪽지[5] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지6글'>6</h2>}
        {쪽지[6] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지7글'>7</h2>}
        {쪽지[7] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지8글'>8</h2>}
        {쪽지[8] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지9글'>9</h2>}
        {쪽지[9] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지10글'>10</h2>}
        {쪽지[10] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지11글'>11</h2>}
        {쪽지[11] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지12글'>12</h2>}
        {쪽지[12] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지13글'>13</h2>}
        {쪽지[13] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지14글'>14</h2>}
        {쪽지[14] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지15글'>15</h2>}
        {쪽지[15] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지16글'>16</h2>}
        {쪽지[16] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지17글'>17</h2>}
        {쪽지[17] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지18글'>18</h2>}
        {쪽지[18] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지19글'>19</h2>}
        {쪽지[19] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지20글'>20</h2>}
        {쪽지[20] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지21글'>21</h2>}
        {쪽지[21] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지22글'>22</h2>}
        {쪽지[22] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지23글'>23</h2>}
        {쪽지[23] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지24글'>24</h2>}
        {쪽지[24] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지25글'>25</h2>}
        {쪽지[25] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지26글'>26</h2>}
        {쪽지[26] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지27글'>27</h2>}
        {쪽지[27] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지28글'>28</h2>}
        {쪽지[28] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지29글'>29</h2>}
        {쪽지[29] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지30글'>30</h2>}
        {쪽지[30] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지31글'>31</h2>}
        {쪽지[31] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지32글'>32</h2>}
        {쪽지[32] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지33글'>33</h2>}
        {쪽지[33] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지34글'>34</h2>}
        {쪽지[34] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지35글'>35</h2>}  
        {쪽지[35] == false && page === 8 && 큰쪽지 === true && <h2 className='쪽지36글'>36</h2>}

        {etc1 === 1 && page === 8 && <img src='a41.png' className='보드게임' onClick={() => 보드게임용()}></img>}
        {etc1 === 1 && page === 8 && <p className='보드게임2'>{보드게임제한}</p>}

        {tam1 == false && page === 8 && <h3 className='섭'>{chareat1}/{charwtr1}/{charment1 }</h3>}
        {tam2 == false && page === 8 && <h3 className='정'>{chareat2}/{charwtr2}/{charment2}</h3>}       
        {tam3 == false && page === 8 && <h3 className='택'>{chareat3}/{charwtr3}/{charment3}</h3>}       
        {tam4 == false && page === 8 && <h3 className='린'>{chareat4}/{charwtr4}/{charment4}</h3>}      
      </div>
       
    </div>
  );

}

export default App;
