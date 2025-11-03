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
  // 식량
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
  let [etc3, setetc3] = useState(2); //책
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
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(5);
       if (randomValue === 1){
        setchareat1(prev => prev - 5);
        setcharwtr1(prev => prev - 5);
       } 
       else if (randomValue === 2){
        setchareat1(prev => prev - 10);
        setcharwtr1(prev => prev - 12);
       } 
       else if (randomValue === 3){
        setchareat1(prev => prev - 15);
        setcharwtr1(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat1(prev => prev - 20);
        setcharwtr1(prev => prev - 30);
       }        
       else if (randomValue === 5){
        setchareat1(prev => prev - 25);
        setcharwtr1(prev => prev - 40);
       }   
       else if (randomValue === 6){
        setchareat1(prev => prev - 30);
        setcharwtr1(prev => prev - 52);
       } 
       else if (randomValue === 7){
        setchareat1(prev => prev - 50);
        setcharwtr1(prev => prev - 65);
      } 
      }
      else if(charch === 2 && tam2 === false){
        settam2(true);
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(5);
       if (randomValue === 1){
        setchareat2(prev => prev - 5);
        setcharwtr2(prev => prev - 5);
       } 
       else if (randomValue === 2){
        setchareat2(prev => prev - 10);
        setcharwtr2(prev => prev - 12);
       } 
       else if (randomValue === 3){
        setchareat2(prev => prev - 15);
        setcharwtr2(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat2(prev => prev - 20);
        setcharwtr2(prev => prev - 30);
       }        
       else if (randomValue === 5){
        setchareat2(prev => prev - 25);
        setcharwtr2(prev => prev - 40);
       }   
       else if (randomValue === 6){
        setchareat2(prev => prev - 30);
        setcharwtr2(prev => prev - 52);
       } 
       else if (randomValue === 7){
        setchareat2(prev => prev - 50);
        setcharwtr2(prev => prev - 65);
      }   
      }
      else if(charch === 3 && tam3 === false){
        settam3(true);
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(5);
       if (randomValue === 1){
        setchareat3(prev => prev - 5);
        setcharwtr3(prev => prev - 5);
       } 
       else if (randomValue === 2){
        setchareat3(prev => prev - 10);
        setcharwtr3(prev => prev - 12);
       } 
       else if (randomValue === 3){
        setchareat3(prev => prev - 15);
        setcharwtr3(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat3(prev => prev - 20);
        setcharwtr3(prev => prev - 30);
       }        
       else if (randomValue === 5){
        setchareat3(prev => prev - 25);
        setcharwtr3(prev => prev - 40);
       }   
       else if (randomValue === 6){
        setchareat3(prev => prev - 30);
        setcharwtr3(prev => prev - 52);
       } 
       else if (randomValue === 7){
        setchareat3(prev => prev - 50);
        setcharwtr3(prev => prev - 65);
      } 
    }
      else if(charch === 4 && tam4 === false){
        settam4(true);
        const randomValue = Math.floor(Math.random() * 3) + 3;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(5);
       if (randomValue === 1){
        setchareat4(prev => prev - 5);
        setcharwtr4(prev => prev - 5);
       } 
       else if (randomValue === 2){
        setchareat4(prev => prev - 10);
        setcharwtr4(prev => prev - 12);
       } 
       else if (randomValue === 3){
        setchareat4(prev => prev - 15);
        setcharwtr4(prev => prev - 20);
       }
       else if (randomValue === 4){
        setchareat4(prev => prev - 20);
        setcharwtr4(prev => prev - 30);
       }        
       else if (randomValue === 5){
        setchareat4(prev => prev - 25);
        setcharwtr4(prev => prev - 40);
       }   
       else if (randomValue === 6){
        setchareat4(prev => prev - 30);
        setcharwtr4(prev => prev - 52);
       } 
       else if (randomValue === 7){
        setchareat4(prev => prev - 50);
        setcharwtr4(prev => prev - 65);
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
      set거래완료(true);          //아 진짜 왜 이따위로 만들어놨지??????????????????? 이해할수가없네 바로 업로드좀 시켜주지 진심 갑자기 난이도가 헬로 만들어버리는 클라스;;
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

  if(etc2 > 1)
  {
    setetc2(1);
  }
    if(charment1 <= -100 && Die1 == false)
    {
      //자살
      setDie1(true);
      set외출제한1(true);
    }
    if(charment2 <= -100 && Die2 == false)
    {
      //자살
      setDie2(true);
      set외출제한2(true);
    }
    if(charment3 <= -100 && Die3 == false)
    {
      //자살
      setDie3(true);
      set외출제한3(true);
    }
    if(charment4 <= -100 && Die4 == false)
    {
      //자살
      setDie4(true);
      set외출제한4(true);
    }
  const DayUp = () => { //하루 지남

    if(etc2 >= 1)
    {
      if(라디오확률 <= 0)
      {
        set라디오확률(Math.floor(Math.random() * 5) + 5);
        set라디오대사(prev => prev + 1);

      }
      set라디오확률(prev => prev -1);
      set라디오하루대사(5);
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

    if((chareat1-7) <= 0)
    {
      setDie1(true);
    }
    if((charwtr1-10) <= 0)
    {
      setDie1(true);
    }

    if((chareat2-6) <= 0)
    {
      setDie2(true);
    }
    if((charwtr2-12) <= 0)
    {
      setDie2(true);
    }

    if((chareat3-10) <= 0)
    {
      setDie3(true);
    }
    if((charwtr3-9) <= 0)
    {
      setDie3(true);
    }

    if((chareat4-5) <= 0)
    {
      setDie4(true);
    }
    if((charwtr4-11) <= 0)
    {
      setDie4(true);
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
        if(weap4 < 1)
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
      if(weap2 < 1)
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }
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
      setetc1(prev => prev + 1);
      setetc1표시(prev => prev + 1);
    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1)
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
      if(weap1 < 1)
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
        if(weap4 < 1)
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
      if(weap2 < 1)
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }

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
      setetc1(prev => prev + 1);
      setetc1표시(prev => prev + 1);
    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1)
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
      if(weap1 < 1)
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

    }}
 
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
        if(weap4 < 1)
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
      if(weap2 < 1)
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }

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
      setetc1(prev => prev + 1);
      setetc1표시(prev => prev + 1);
    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1)
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
      if(weap1 < 25)
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
        if(weap4 < 1)
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
      if(weap2 < 1)
      {
        const rand1 = 1;
        setweap2(prev => prev + rand1);
        setweap2표시(prev => prev + rand1);
      }

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
      setetc1(prev => prev + 1);
      setetc1표시(prev => prev + 1);
    }
    const rand6 = Math.floor(Math.random() * 100) + 1;
    if (rand6 < 35){
      const rand1 = Math.floor(Math.random() * 2) + 1;
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand7 = Math.floor(Math.random() * 100) + 1;
    if (rand7 < 10){
      if(weap3 < 1)
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
      if(weap1 < 1)
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
  }
  }
}
  const randman = Math.floor(Math.random() * 10) + 1;
    if(randman <= 10)
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
    }
    else if(charment1 < -30 && charment1 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat1(prev => prev - 5);
      setcharwtr1(prev => prev - 5);
      set외출제한1(true);
    }
    else if(charment1 < -60 && charment1 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat1(prev => prev - 10);
      setcharwtr1(prev => prev - 10);
      set외출제한1(true);
    }

    
    if(charment1 >= 0 && charment1 <= 50)
    {
      //그냥그럼
    if (!감기여부1 && !독감여부1 && !식중독여부1 && !출혈여부1 && !골절여부1) {
        set외출제한1(false);
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
    }
    else if(charment1 > 200)
    {
      //미침
      set외출제한1(true);

    }


    if(charment2 < 0 && charment2 >= -30)
    {
      //슬퍼짐 -> 배고픔, 목마름 평소보다 (- 3)
      setchareat2(prev => prev - 3);
      setcharwtr2(prev => prev - 3);
    if (!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2) {
        set외출제한2(false);
    }
    }
    else if(charment2 < -30 && charment2 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat2(prev => prev - 5);
      setcharwtr2(prev => prev - 5);
      set외출제한2(true);
    }
    else if(charment2 < -60 && charment2 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat2(prev => prev - 10);
      setcharwtr2(prev => prev - 10);
      set외출제한2(true);
    }


    
    if(charment2 >= 0 && charment2 <= 50)
    {
      //그냥그럼
    if (!감기여부2 && !독감여부2 && !식중독여부2 && !출혈여부2 && !골절여부2) {
        set외출제한2(false);
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
    }
    else if(charment2 > 200)
    {
      //미침
      set외출제한2(true);

    }

    if(charment3 < 0 && charment3 >= -30)
    {
      //슬퍼짐 -> 배고픔, 목마름 평소보다 (- 3)
      setchareat3(prev => prev - 3);
      setcharwtr3(prev => prev - 3);
    if (!감기여부3 && !독감여부3 && !식중독여부3 && !출혈여부3 && !골절여부3) {
        set외출제한3(false);
    }
    }
    else if(charment3 < -30 && charment3 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat3(prev => prev - 5);
      setcharwtr3(prev => prev - 5);
      set외출제한3(true);
    }
    else if(charment3 < -60 && charment3 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat3(prev => prev - 10);
      setcharwtr3(prev => prev - 10);
      set외출제한3(true);
    }


    
    if(charment3 >= 0 && charment3 <= 50)
    {
      //그냥그럼
    if (!감기여부3 && !독감여부3 && !식중독여부3 && !출혈여부3 && !골절여부3) {
        set외출제한3(false);
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
    }
    else if(charment3 > 200)
    {
      //미침
      set외출제한3(true);

    }

    if(charment4 < 0 && charment4 >= -30)
    {
      //슬퍼짐 -> 배고픔, 목마름 평소보다 (- 3)
      setchareat4(prev => prev - 3);
      setcharwtr4(prev => prev - 3);
    if (!감기여부4 && !독감여부4 && !식중독여부4 && !출혈여부4 && !골절여부4) {
        set외출제한4(false);
    }
    }
    else if(charment4 < -30 && charment4 >= -60)
    {
      //약간 우울함 -> 외출 제한, 배고픔, 갈증 평소보다 (- 5)
      setchareat4(prev => prev - 5);
      setcharwtr4(prev => prev - 5);
      set외출제한4(true);
    }
    else if(charment4 < -60 && charment4 > -100)
    {
      //우울함 -> 배고픔, 갈증 평소보다 (- 10), 외출 제한
      setchareat4(prev => prev - 10);
      setcharwtr4(prev => prev - 10);
      set외출제한4(true);
    }


    
    if(charment4 >= 0 && charment4 <= 50)
    {
      //그냥그럼
    if (!감기여부4 && !독감여부4 && !식중독여부4 && !출혈여부4 && !골절여부4) {
        set외출제한4(false);
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
    }
    else if(charment4 > 200)
    {
      //미침
      set외출제한4(true);

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

  return (
    <div className="App">
      {/* 스토리 스킵과 다음단계 */}
      {page < 6 && <img src='/a.png' className='img1' onClick={pagecound}></img>}
      {page < 6 && <img src='/a1.png' className='img2' onClick={() => setpage(6)}></img>}



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
          {page === 6 && <button className='challbutton' onClick={() =>setpage(7)}>CHALLENGE</button>}
          {page === 6 && <button className='ttbutton' onClick={() => {setpage(12); settpage(0);}}>TUTORIAL</button>}
        </div>


        {/* 도전과제 형식 7 */}
        {page === 7 && <h1 className='도전과제text'>도전과제</h1>}
        {page === 7 && <img src='/a2.png' className='img3' onClick={() => setpage(6)}></img>}
        {/* <div className='도전과제'>
          <h1>처음 죽음을 맞이하세요.</h1>
        </div> */}



          {/* {page === 8 && <img src='/a7.png' className='배경'></img>} */}
        {/* 배경모음 */}
        {page === 1 && <img src='/a32.png' className='배경1'></img>}

        {page === 8 && <img src='/a18.png'className='메인배경'></img>}
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
        {page === 8 && <img src='/a4.png' className='선반' onClick={()=> setpage(9)}></img>}  

        {page === 9 && <img src='/a16.png' className='통조림'></img>} 
        {tam1 === false && chareat1+75 < 100 && eat1 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='통조림' onClick={() => {setchareat1(prev => prev + 75); seteat1(prev => prev -1); }}></img>}
        {tam1 === false  && chareat1 != 100 && chareat1+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='통조림' onClick={() => {setchareat1(100); seteat1(prev => prev -1); }}></img>}

        {tam2 === false && chareat2+75 < 100 && eat1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='통조림' onClick={() => {setchareat2(prev => prev + 75); seteat1(prev => prev -1); }}></img>} 
        {tam2 === false && chareat2 != 100 && chareat2+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='통조림' onClick={() => {setchareat2(100); seteat1(prev => prev -1); }}></img>} 

        {tam3 === false && chareat3+75 < 100 && eat1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='통조림' onClick={() => {setchareat3(prev => prev + 75); seteat1(prev => prev -1); }}></img>}
        {tam3 === false&& chareat3 != 100  && chareat3+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='통조림' onClick={() => {setchareat3(100); seteat1(prev => prev -1); }}></img>}  

        {tam4 === false && chareat4+75 < 100 && eat1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='통조림' onClick={() => {setchareat4(prev => prev + 75); seteat1(prev => prev -1);}}></img>} 
        {tam4 === false && chareat4 != 100 && chareat4+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='통조림' onClick={() => {setchareat4(100); seteat1(prev => prev -1);}}></img>} 
        {page === 9 && <h2 className='통조림개수'>: {eat1}개</h2>}

        {page === 9 && <img src='/a17.png' className='물'></img>}
        {tam1 === false && charwtr1+25 < 100 && eat2 > 0 && charch1 === 1 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr1(perv => perv + 25); seteat2(prev => prev -1);}}></img>} 
        {tam1 === false && charwtr1 != 100 && charwtr1+25 >= 100 && eat2 > 0 && charch1 === 1 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr1(100); seteat2(prev => prev -1);}}></img>}

        {tam2 === false && charwtr2+25 < 100 && eat2 > 0 && charch1 === 2 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr2(perv => perv + 25); seteat2(prev => prev -1); }}></img>}
        {tam2 === false && charwtr2 != 100 &&charwtr2+25 >= 100 && eat2 > 0 && charch1 === 2 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr2(100); seteat2(prev => prev -1); }}></img>}

        {tam3 === false &&charwtr3+25 < 100 && eat2 > 0 && charch1 === 3 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr3(perv => perv + 25); seteat2(prev => prev -1); }}></img>}
        {tam3 === false && charwtr3 != 100 && charwtr3+25 >= 100 && eat2 > 0 && charch1 === 3 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr3(100); seteat2(prev => prev -1); }}></img>}

        {tam4 === false &&charwtr4+25 < 100 && eat2 > 0 && charch1 === 4 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr4(perv => perv + 25); seteat2(prev => prev -1); }}></img>}
        {tam4 === false && charwtr4 != 100 &&charwtr4+25 >= 100 && eat2 > 0 && charch1 === 4 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr4(100); seteat2(prev => prev -1); }}></img>}
        {page === 9 && <h2 className='물개수'>: {eat2}개</h2>} 


        {page === 9 && <img src='/a22.png' className='라면'></img>} 
        {tam1 === false &&chareat1+50 < 100 && eat3 > 0 && page === 9 && charch1 === 1 && <img src='/a22.png' className='라면' onClick={() => {setchareat1(prev => prev + 50); seteat3(prev => prev -1); }}></img>} 
        {tam1 === false && chareat1 != 100 &&chareat1+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 1 && <img src='/a22.png' className='라면' onClick={() => {setchareat1(100); seteat3(prev => prev -1); }}></img>} 

        {tam2 === false &&chareat2+50 < 100 && eat3 > 0 && page === 9 && charch1 === 2 && <img src='/a22.png' className='라면' onClick={() => {setchareat2(prev => prev + 50); seteat3(prev => prev -1); }}></img>} 
        {tam2 === false && chareat2 != 100 &&chareat2+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 2 && <img src='/a22.png' className='라면' onClick={() => {setchareat2(100); seteat3(prev => prev -1); }}></img>}

        {tam3 === false &&chareat3+50 < 100 && eat3 > 0 && page === 9 && charch1 === 3 && <img src='/a22.png' className='라면' onClick={() => {setchareat3(prev => prev + 50); seteat3(prev => prev -1); }}></img>} 
        {tam3 === false && chareat3 != 100 &&chareat3+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 3 && <img src='/a22.png' className='라면' onClick={() => {setchareat3(100); seteat3(prev => prev -1); }}></img>}

        {tam4 === false &&chareat4+50 < 100 && eat3 > 0 && page === 9 && charch1 === 4 && <img src='/a22.png' className='라면' onClick={() => {setchareat4(prev => prev + 50); seteat3(prev => prev -1); }}></img>}
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
        {tam1 === false &&charment1+10 < 100 && med2 > 0 && page === 9 && charch1 === 1 && <img src='/a24.png' className= '구급상자' onClick={() => {setcharment1(prev => prev + 10); setmed2(prev => prev -1); }}></img>} 
        {tam1 === false && charment1+10 >= 100 && med2 > 0 && page === 9 && charch1 === 1 && <img src='/a24.png' className= '구급상자' onClick={() => {setcharment1(100); setmed2(prev => prev -1); }}></img>} 

        {tam2 === false &&charment2+10 < 100 && med2 > 0 && page === 9 && charch1 === 2 && <img src='/a24.png' className='구급상자' onClick={() => {setcharment2(prev => prev + 10); setmed2(prev => prev -1); }}></img>} 
        {tam2 === false && charment2+10 >= 100 && med2 > 0 && page === 9 && charch1 === 2 && <img src='/a24.png' className='구급상자' onClick={() => {setcharment2(100); setmed2(prev => prev -1); }}></img>} 

        {tam3 === false &&charment3+10 < 100 && med2 > 0 && page === 9 && charch1 === 3 && <img src='/a24.png' className='구급상자' onClick={() => {setcharment3(prev => prev + 10); setmed2(prev => prev -1); }}></img>}
        {tam3 === false && charment3+10 >= 100 && med2 > 0 && page === 9 && charch1 === 3 && <img src='/a24.png' className='구급상자' onClick={() => {setcharment3(100); setmed2(prev => prev -1); }}></img>}  

        {tam4 === false &&charment4+10 < 100 && med2 > 0 && page === 9 && charch1 === 4 && <img src='/a24.png' className='구급상자' onClick={() => {setcharment4(prev => prev + 10); setmed2(prev => prev -1); }}></img>} 
        {tam4 === false && charment4+10 >= 100 && med2 > 0 && page === 9 && charch1 === 4 && <img src='/a24.png' className='구급상자' onClick={() => {setcharment4(100); setmed2(prev => prev -1); }}></img>} 
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

        {Die1 === false && tam1 === false && page === 8 && <img src='/a10.png' className='mainchar1'></img>}
        {Die2 === false && tam2 === false && page === 8 && <img src='/a34.png' className='mainchar2'></img>}
        {Die3 === false && tam3 === false && page === 8 && <img src='/a12.png' className='mainchar3'></img>}
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



          {page === 13 && 문사람감지 === true && 사람1 == true &&  <h1 className='사람1'>상인</h1>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 == 1 && <div className='상인글1'>
            <h1>오랜만에 살아 있는 인간을 보네. 교환 좀 하지 않을래?</h1>
            <h1>통조림 {문통조림랜덤}개, 물 {문물랜덤}개, 보드게임을 드릴게요!</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 == 2 && <div className='상인글1'>
            <h1>음식 조금만 나눠줄래?</h1>
            <h1> 통조림 {문통조림랜덤}개, 물 {문물랜덤}개, 책을 드릴게요!</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 == 3 && <div className='상인글1'>
            <h1>안녕하세요!</h1>
            <h1>저는 그저 거래를 하고싶어서 찾아왔습니다!</h1>
            <h1>나도 오래 굶었거든. 그러니까 서로 도와보자?</h1>
            <h1> 통조림 {문통조림랜덤}개, 물 {문물랜덤}개, 신문을 줄게</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람1 == true && masg1 === 4 && <div className='상인글1'>
           <h1>안녕하세요!</h1>
            <h1>저는 그저 거래를 하고싶어서 찾아왔습니다!</h1>
            <h1> 통조림 {문통조림랜덤}개, 물 {문물랜덤}개를 드릴게요!</h1>
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
            <h1>헿 도끼를 줄개</h1>
            <h1>설마 그냥 받아갈생각은 아니지?</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람4 == true && masg4 === 2 && <div className='수상한사람글1'>
            <h1>헿 진압봉을 줄게</h1>
            <h1>설마 그냥 받아갈생각은 아니지?</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람4 == true && masg4 === 3 && <div className='수상한사람글1'>
            <h1>ㅎ 야구방망이을 줄게</h1>
            <h1>설마 그냥 받아갈생각은 아니지?</h1>
          </div>}
          {page === 13 && 문사람감지 === true && 사람4 == true && masg4 === 4 && <div className='수상한사람글1'>
            <h1>ㅎ 헬멧을 줄게</h1>
            <h1>설마 그냥 받아갈생각은 아니지?</h1>
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
            {page == 8 && 라디오하루대사 === 3 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트11">정.. 20일뒤 오전에 오시길 바..다.</h1>} {/*정확히 20일뒤 오전에 오시길 바랍니다.*/}
            {page == 8 && 라디오하루대사 === 2 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트12">미리 오시. 위.합니다.</h1>} {/*미리 오시면 위험합니다.*/}
            {page == 8 && 라디오하루대사 === 1 && 라디오대사 === 3 && 라디오확률 == 1 && <h1 className="라디오텍스트13">(라디오가 고장났다.)</h1>}


            {/* 튜토리얼 12 */}
            {tpage < 6 && page === 12 && <img src="a.png" className='TRight' onClick={() => settpage(prev => prev +1)}></img>}
            {tpage > 0 && page === 12 && <img src="a.png" className='TLeft' onClick={()=> settpage(prev => prev - 1)}></img>}

            {tpage == 0 && page === 12 && <img src='/b1.png' className='튜1'></img>}
            {tpage == 0 && page === 12 && <h3 className='튜글1'>하루가 지나갑니다.</h3>}
            {tpage == 0 && page === 12 && <h3 className='튜글2'>각 캐릭터의 질병상태를 나타냅니다.</h3>}
            {tpage == 0 && page === 12 && <h3 className='튜글3'>아이템을 사용할 수 있는 공간이 나타납니다.</h3>}
            {tpage == 0 && page === 12 && <h3 className='튜글4'>거래를 할 수 있는 공간이 나타납니다.</h3>}
            {tpage == 0 && page === 12 && <h3 className='튜글5'>몇일 지났는지 표시합니다.</h3>}
            {tpage == 0 && page === 12 && <h3 className='튜글6'>하루동안 얻는 양을 나타냅니다.</h3>}
            {tpage == 0 && page === 12 && <h3 className='튜글7'>탐험 갈 수 있는 공간을 나타냅니다.</h3>}

            {tpage != 3 && page === 12 && <img src='/a2.png' className='튜나가기' onClick={()=> setpage(6)}></img>}
            {tpage != 6 && page === 12 && <h3 className='튜다음'>다음으로 이동</h3>}
            {tpage != 0 && page === 12 && <h3 className='튜전'>전으로 이동</h3>}
            {page === 12 && <h3 className='튜나가기2'>나가기</h3>}

            {tpage == 3 && page === 12 && <h3 className='튜다음2'>다음으로 이동</h3>}
            {tpage == 3 && page === 12 && <h3 className='튜전2'>전으로 이동</h3>}

            {tpage == 1 && page === 12 && <img src='/b2.png' className='튜1'></img>}
            {tpage == 1 && page === 12 && <img src='/a3.png' className='튜2'></img>}
            {tpage == 1 && page === 12 && <h3 className='튜2세트'>(클릭시 이동창)</h3>}
            {tpage == 1 && page === 12 && <h2 className='튜글8'>텍스트를 클릭하면 그 위치로 탐험을 갑니다.</h2>}
            {tpage == 1 && page === 12 && <h2 className='튜글9'>1~7일 사이로 돌아오고 각종 아이템을 가져옵니다.</h2>}
            {tpage == 1 && page === 12 && <h2 className='튜글10'>캐릭터를 선택한 후 클릭시 그 캐릭터가 이동합니다.</h2>}

            {tpage == 2 && page === 12 && <img src='/b3.png' className='튜1'></img>}
            {tpage == 2 && page === 12 && <h2 className='튜글11'>하루동안 탐험으로 얻은 아이템을 표시해줍니다.</h2>}
            {tpage == 2 && page === 12 && <img src='/a23.png' className='튜3'></img>}
            {tpage == 2 && page === 12 && <h3 className='튜2세트'>(클릭시 이동창)</h3>}

            {tpage == 3 && page === 12 && <img src='/b4.png' className='튜1'></img>}
            {tpage == 3 && page === 12 && <h2 className='튜글12'>3번클릭시 다음날로 이동됩니다.</h2>}
            {tpage == 3 && page === 12 && <img src='/a28.png' className='튜3'></img>}
            {tpage == 3 && page === 12 && <h3 className='튜2세트2'>(클릭시 이동창)</h3>}

            {tpage == 4 && page === 12 && <img src='/b5.png' className='튜1'></img>}
            {tpage == 4 && page === 12 && <h2 className='튜글14'>각 캐릭터의 상태를 표시합니다.</h2>}
            {tpage == 4 && page === 12 && <h2 className='튜글13'>키트나 구급상자를 통해 치료를 할 수 있습니다.</h2>}
            {tpage == 4 && page === 12 && <img src='/a19.png' className='튜4'></img>}
            {tpage == 4 && page === 12 && <h3 className='튜4세트'>(클릭시 이동창)</h3>}

            {tpage == 5 && page === 12 && <img src='/b6.png' className='튜1'></img>}
            {tpage == 5 && page === 12 && <h2 className='튜글15'>통조림</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글16'>물</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글17'>라면</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글18'>사탕</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글19'>키트</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글20'>구급상자</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글21'>책</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글22'>신문</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글23'>포만감 / 수분 / 정신력을 자세히 확인할 수 있습니다</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글24'>포만감 / 수분이 0이 되면 사망하니 관리를 잘해줘야 합니다.</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글25'>포만감 / 수분은 최소 0 최대 100입니다.</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글26'>정신력은 최소, 최대가 정해져있지는않으나 관리를 못한다면 미칠수도있으니 적당히 관리해야 합니다.</h2>}
            {tpage == 5 && page === 12 && <h2 className='튜글27'>정신력은 무조건 많다고 좋은것이 아니며 적당히 유지할시 이로운 효과도 얻을 수 있습니다.</h2>}

            {tpage == 6 && page === 12 && <img src='/b7.png' className='튜1'></img>}
            {tpage == 6 && page === 12 && <h2 className='튜글28'>누가왔는지 어떤 아이템을 교환하는지 확인할 수 있습니다.</h2>}
            {tpage == 6 && page === 12 && <h2 className='튜글29'>통조림 / 물 / 라면 / 사탕으로 거래를 할 수 있고</h2>}
            {tpage == 6 && page === 12 && <h2 className='튜글30'>그림을 클릭시 가지고있는 개수/올려놓은 개수가 올라갑니다.</h2>}
            {tpage == 6 && page === 12 && <h2 className='튜글31'>만족도가 표시가되는데 만족할경우에만 거래가 진행되며 무조건 거래가 완료되는것은 아닙니다.</h2>}


            {/* {베드로딩 < 3 && page === 21 && <img src='/b1.png' className='튜1' onClick={set베드로딩(prev => prev + 1)}></img>}
            {베드로딩 >= 3 && page === 21 && <img src='/b1.png' className='튜1' onClick={() => {set베드로딩(0); setpage(6);}}></img>} */}
            
            {/* 바로 클릭 막기 */}
      </div>
    </div>
  );

}

export default App;
