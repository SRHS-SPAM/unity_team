import './App.css';
import React, { useState, useEffect, use } from "react";
/* eslint-disable */ 
// 1~5 : 스토리 6 : 시작화면 7 : 도전과제 8 : *게임시작* 9 : 선반 10 : 지도 11 : 어둠(침대 클릭 후) 12 : 설명
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
  let [etc3, setetc3] = useState(0); //책
  let [etc4, setetc4] = useState(0); //신문



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

  let [무기, set무기] = useState("");
  let [무기장착, set무기장착] = useState(0);
  let [무기장착여부, set무기장착여부] = useState(false);

  let [무기1, set무기1] = useState("");
  let [무기장착여부1, set무기장착여부1] = useState(false);

  let [무기2, set무기2] = useState("");
  let [무기장착2, set무기장착2] = useState(0);
  let [무기장착여부2, set무기장착여부2] = useState(false);

  let [무기3, set무기3] = useState("");
  let [무기장착여부3, set무기장착여부3] = useState(false);
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
    setpage(6);
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
        const randomValue = Math.floor(Math.random() * 3) + 1;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(1);
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
        const randomValue = Math.floor(Math.random() * 3) + 1;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(1);
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
        const randomValue = Math.floor(Math.random() * 3) + 1;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(1);
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
    if (rands >= 25){
      if (charch === 1 && tam1 === false){
        settam1(true);
        const randomValue = Math.floor(Math.random() * 4) + 2;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(2);
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
        const randomValue1 = Math.floor(Math.random() * 4) + 2;
        setDayD2(randomValue1);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue1);
        set탐험물2(randomValue1);
        setmaplo2(2);
       if (randomValue1 === 1){
        setchareat2(prev => prev - 5);
        setcharwtr2(prev => prev - 5);
       } 
       else if (randomValue1 === 2){
        setchareat2(prev => prev - 10);
        setcharwtr2(prev => prev - 12);
       } 
       else if (randomValue1 === 3){
        setchareat2(prev => prev - 15);
        setcharwtr2(prev => prev - 20);
       }
       else if (randomValue1 === 4){
        setchareat2(prev => prev - 20);
        setcharwtr2(prev => prev - 30);
       }        
       else if (randomValue1 === 5){
        setchareat2(prev => prev - 25);
        setcharwtr2(prev => prev - 40);
       }   
       else if (randomValue1 === 6){
        setchareat2(prev => prev - 30);
        setcharwtr2(prev => prev - 52);
       } 
       else if (randomValue1 === 7){
        setchareat2(prev => prev - 50);
        setcharwtr2(prev => prev - 65);
      }
      }
      else if(charch === 3 && tam3 === false){
        settam3(true);
        const randomValue2 = Math.floor(Math.random() * 4) + 2;
        setDayD3(randomValue2);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue2);
        set탐험물3(randomValue2);
        setmaplo3(2);
       if (randomValue2 === 1){
        setchareat3(prev => prev - 5);
        setcharwtr3(prev => prev - 5);
       } 
       else if (randomValue2 === 2){
        setchareat3(prev => prev - 10);
        setcharwtr3(prev => prev - 12);
       } 
       else if (randomValue2 === 3){
        setchareat3(prev => prev - 15);
        setcharwtr3(prev => prev - 20);
       }
       else if (randomValue2 === 4){
        setchareat3(prev => prev - 20);
        setcharwtr3(prev => prev - 30);
       }        
       else if (randomValue2 === 5){
        setchareat3(prev => prev - 25);
        setcharwtr3(prev => prev - 40);
       }   
       else if (randomValue2 === 6){
        setchareat3(prev => prev - 30);
        setcharwtr3(prev => prev - 52);
       } 
       else if (randomValue2 === 7){
        setchareat3(prev => prev - 50);
        setcharwtr3(prev => prev - 65);
      }
      }
      else if(charch === 4 && tam4 === false){
        settam4(true);
        const randomValue3 = Math.floor(Math.random() * 4) + 2;
        setDayD4(randomValue3);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue3);
        set탐험물4(randomValue3);
        setmaplo4(2);
       if (randomValue3 === 1){
        setchareat4(prev => prev - 5);
        setcharwtr4(prev => prev - 5);
       } 
       else if (randomValue3 === 2){
        setchareat4(prev => prev - 10);
        setcharwtr4(prev => prev - 12);
       } 
       else if (randomValue3 === 3){
        setchareat4(prev => prev - 15);
        setcharwtr4(prev => prev - 20);
       }
       else if (randomValue3 === 4){
        setchareat4(prev => prev - 20);
        setcharwtr4(prev => prev - 30);
       }        
       else if (randomValue3 === 5){
        setchareat4(prev => prev - 25);
        setcharwtr4(prev => prev - 40);
       }   
       else if (randomValue3 === 6){
        setchareat4(prev => prev - 30);
        setcharwtr4(prev => prev - 52);
       } 
       else if (randomValue3 === 7){
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



  }
  const mapa3 = () => { //맵 3 4~7 병원
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
        const randomValue = Math.floor(Math.random() * 4) + 4;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(3);
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
        const randomValue = Math.floor(Math.random() * 4) + 4;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(3);
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
        const randomValue = Math.floor(Math.random() * 4) + 4;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(3);
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
        const randomValue = Math.floor(Math.random() * 4) + 4;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(3);
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
        set외로움(prev => prev + 1);
        settam1(true);
      }
      else if(charch === 2)
      {
        setDie2(true);
        set외로움(prev => prev + 1);
        settam2(true);
      }
      else if(charch === 3)
      {
        setDie3(true);
        set외로움(prev => prev + 1);
        settam3(true);
      }
      else if(charch === 4)
      {
        setDie4(true);
        settam4(true);
        set외로움(prev => prev + 1);
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
    if (rands >= 30){
      if (charch === 1 && tam1 === false){
        settam1(true);
        const randomValue = Math.floor(Math.random() * 4) + 1;
        setDayD1(randomValue);
        set외로움(prev => prev + 1);
        set탐험배1(randomValue);
        set탐험물1(randomValue);
        setmaplo1(4);
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
        const randomValue = Math.floor(Math.random() * 4) + 1;
        setDayD2(randomValue);
        set외로움(prev => prev + 1);
        set탐험배2(randomValue);
        set탐험물2(randomValue);
        setmaplo2(4);
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
        const randomValue = Math.floor(Math.random() * 4) + 1;
        setDayD3(randomValue);
        set외로움(prev => prev + 1);
        set탐험배3(randomValue);
        set탐험물3(randomValue);
        setmaplo3(4);
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
        const randomValue = Math.floor(Math.random() * 4) + 1;
        setDayD4(randomValue);
        set외로움(prev => prev + 1);
        set탐험배4(randomValue);
        set탐험물4(randomValue);
        setmaplo4(4);
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
        set외로움(prev => prev + 1);
        settam1(true);

      }
      else if(charch === 2)
      {
        setDie2(true);
        set외로움(prev => prev + 1);
        settam2(true);;
      }
      else if(charch === 3)
      {
        setDie3(true);
        set외로움(prev => prev + 1);
        settam3(true);

      }
      else if(charch === 4)
      {
        setDie4(true);
        set외로움(prev => prev + 1);
        settam4(true);

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
    if (rands >= 50){
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
 
  }

  const DayUp = () => { //하루 지남
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
    
    if(감기1 < 0)
    {
      set감기여부1(false);
    }
    if(감기2 < 0)
    {
      set감기여부2(false);
    }
    if(감기3 < 0)
    {
      set감기여부3(false);
    }
    if(감기4 < 0)
    {
      set감기여부4(false);
    }

    if(출혈1 < 0)
    {
      set출혈여부1(false);
    }
    if(출혈2 < 0)
    {
      set출혈여부2(false);
    }
    if(출혈3 < 0)
    {
      set출혈여부3(false);
    }
    if(출혈4 < 0)
    {
      set출혈여부4(false);
    }

    if(독감1 < 0)
    {
      set독감여부1(false);
    }
    if(독감2 < 0)
    {
      set독감여부2(false);
    }
    if(독감3 < 0)
    {
      set독감여부3(false);
    }
    if(독감4 < 0)
    {
      set독감여부4(false);
    }

    if(골절1 < 0)
    {
      set골절여부1(false);
    }
    if(골절2 < 0)
    {
      set골절여부2(false);
    }
    if(골절3 < 0)
    {
      set골절여부3(false);
    }
    if(골절4 < 0)
    {
      set골절여부4(false);
    }

    if(식중독1 < 0)
    {
      set식중독여부1(false);
    }
    if(식중독2 < 0)
    {
      set식중독여부2(false);
    }
    if(식중독3 < 0)
    {
      set식중독여부3(false);
    }
    if(식중독4 < 0)
    {
      set식중독여부4(false);
    }
    const 바이러스 = Math.floor(Math.random() * 100);
    if(바이러스 <= 3)
    {
      const 얻는량 = Math.floor(Math.random() * 10)+ 1;
      const 종류 = Math.floor(Math.random() * 5);
      if (종류 === 0 && tam1 == false)
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
      if (종류2 === 0 && tam2 == false)
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
    if(바이러스3 <= 2 && tam3 == false)
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
    if(바이러스4 <= 2 && tam4 == false)
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
      setchareat1(prev => prev - 20)
      setcharwtr1(prev => prev - 25);
      if(외로움 === 1)
      {
        setcharment1(prev => prev - 10);
      }
      else if(외로움 === 2)
      {
        setcharment1(prev => prev - 12);
      }
      else if(외로움 === 3)
      {
        setcharment1(prev => prev - 15);
      }
      else if(외로움 >= 4)
      {
        setcharment1(prev => prev - 20);
      }
  
    }
    if (chareat2 > 0 && tam2 == false) //하루 닳는 배고픔, 물 , 외로움
    {     
      setchareat2(prev => prev - 15)
      setcharwtr2(prev => prev - 30);
      if(외로움 === 1)
      {
        setcharment2(prev => prev - 10);
      }
      else if(외로움 === 2)
      {
        setcharment2(prev => prev - 12);
      }
      else if(외로움 === 3)
      {
        setcharment2(prev => prev - 15);
      }
      else if(외로움 === 4)
      {
        setcharment2(prev => prev - 20);
      }
    }

    if (chareat3 > 0 && tam3 == false)
    {
      setchareat3(prev => prev - 20)
      setcharwtr3(prev => prev - 10);
      if(외로움 === 1)
      {
        setcharment3(prev => prev - 10);
      }
      else if(외로움 === 2)
      {
        setcharment3(prev => prev - 12);
      }
      else if(외로움 === 3)
      {
        setcharment3(prev => prev - 15);
      }
      else if(외로움 === 4)
      {
        setcharment3(prev => prev - 20);
      }
    }

    if (chareat4 > 0 && tam4 == false)
    {   
      setchareat4(prev => prev - 20);
      setcharwtr4(prev => prev - 30);
      if(외로움 === 1)
      {
        setcharment4(prev => prev - 10);
      }
      else if(외로움 === 2)
      {
        setcharment4(prev => prev - 12);
      }
      else if(외로움 === 3)
      {
        setcharment4(prev => prev - 15);
      }
      else if(외로움 === 4)
      {
        setcharment4(prev => prev - 20);
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
        const rand1 = 1;
        setweap4(prev => prev + rand1);
        setweap4표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
    }
    if (maplo1 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      const rand1 = 1;
      setetc2(prev => prev + rand1);
      setetc2표시(prev => prev + rand1);
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
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      const rand1 = 1;
      setweap2(prev => prev + rand1);
      setweap2표시(prev => prev + rand1);
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
      setetc1표시(prev => prev + rand1);
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
    if (rand5 < 20){
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
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
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
      setweap1(prev => prev + 1);
      setweap1표시(prev => prev + 1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      setetc2(prev => prev + 1);
      setetc2표시(prev => prev + 1);
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
        const rand1 = 1;
        setweap4(prev => prev + rand1);
        setweap4표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
    }
    if (maplo2 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      const rand1 = 1;
      setetc2(prev => prev + rand1);
      setetc2표시(prev => prev + rand1);
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
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      const rand1 = 1;
      setweap2(prev => prev + rand1);
      setweap2표시(prev => prev + rand1);
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
      setetc1표시(prev => prev + rand1);
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
    if (rand5 < 20){
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
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
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
      setweap1(prev => prev + 1);
      setweap1표시(prev => prev + 1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      setetc2(prev => prev + 1);
      setetc2표시(prev => prev + 1);
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
        const rand1 = 1;
        setweap4(prev => prev + rand1);
        setweap4표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
    }
    if (maplo3 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      const rand1 = 1;
      setetc2(prev => prev + rand1);
      setetc2표시(prev => prev + rand1);
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
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      const rand1 = 1;
      setweap2(prev => prev + rand1);
      setweap2표시(prev => prev + rand1);
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
      setetc1표시(prev => prev + rand1);
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
    if (rand5 < 20){
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
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
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
      setweap1(prev => prev + 1);
      setweap1표시(prev => prev + 1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      setetc2(prev => prev + 1);
      setetc2표시(prev => prev + 1);
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
        const rand1 = 1;
        setweap4(prev => prev + rand1);
        setweap4표시(prev => prev + rand1);
      }
      const rand2 = Math.floor(Math.random() * 100) + 1;
      if (rand2 <= 50){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat3(prev => prev + rand1);
        seteat3표시(prev => prev + rand1);
      }
      const rand3 = Math.floor(Math.random() * 100) + 1;
      if (rand3 <= 30){
        const rand1 = Math.floor(Math.random() * 3) + 1;
        seteat4(prev => prev + rand1);
        seteat4표시(prev => prev + rand1);
      }
    }
    if (maplo4 === 2)
    {
      const rand = Math.floor(Math.random() * 100) + 1;
     if (rand <= 12){
      const rand1 = 1;
      setetc2(prev => prev + rand1);
      setetc2표시(prev => prev + rand1);
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
      setetc3(prev => prev + rand1);
      setetc3표시(prev => prev + rand1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 15){
      const rand1 = 1;
      setweap2(prev => prev + rand1);
      setweap2표시(prev => prev + rand1);
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
      setetc1표시(prev => prev + rand1);
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
    if (rand5 < 20){
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
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
    }
    const rand8 = Math.floor(Math.random() * 100) + 1;
    if (rand8 < 45){
      const rand1 = Math.floor(Math.random() * 3) + 1;
      setweap3(prev => prev + 1);
      setweap3표시(prev => prev + 1);
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
      setweap1(prev => prev + 1);
      setweap1표시(prev => prev + 1);
    }
    const rand5 = Math.floor(Math.random() * 100) + 1;
    if (rand5 < 25){
      setetc2(prev => prev + 1);
      setetc2표시(prev => prev + 1);
    }
  }
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


  return (
    
    <div className="App">

      {/* 스토리 스킵과 다음단계 */}
      {page < 6 && <img src='/a.png' className='img1' onClick={pagecound}></img>}
      {page < 6 && <img src='/a1.png' className='img2' onClick={() => setpage(6)}></img>}



      {/* 스토리 형식 1~5 */}
      <div className='틀'>
        {page === 1 && show && <h1>{year-1}년 8월 1일 대부분의 인류는 멸망하였다.</h1>}
        {/* {page ===1 && <img src='a4.png'></img>} */}
        {page === 2 && show && <h1>멸망 후 {year}년 8월 1일 정확히 1년뒤 우리는 대부분의 식량이 바닥났다.</h1>}
        {page === 3 && show && <h1>우리는 식량을 구하기 위해 위험한 외부로 나가야만 했다.</h1>}
        {page === 4 && show && <h1>밖은 위험이 넘쳐나지만 방법이 없다.</h1>}
        {page === 5 && show && <h1>우리는 꼭 살아남을 것이다.</h1>}


        {/* 시작화면 형식 6 */}
        <div className='onepage'>
          {page === 6 && <button className='startbutton' onClick={() => setpage(8)}>START</button>}
          {page === 6 && <button className='storybutton' onClick={() =>setpage(1)}>STORY</button>}
          {page === 6 && <button className='challbutton' onClick={() =>setpage(7)}>CHALLENGE</button>}
          {page === 6 && <button className='ttbutton' onClick={() => setpage(12)}>TUTORIAL</button>}
        </div>


        {/* 도전과제 형식 7 */}
        {page === 7 && <h1 className='도전과제text'>도전과제</h1>}
        {page === 7 && <img src='/a2.png' className='img3' onClick={() => setpage(6)}></img>}
        {/* <div className='도전과제'>
          <h1>처음 죽음을 맞이하세요.</h1>
        </div> */}



          {/* {page === 8 && <img src='/a7.png' className='배경'></img>} */}
        

        {page === 8 && <img src='/a18.png'className='메인배경'></img>}
        {page === 8 && <h1 className='살아남은날'>Day-{Day}</h1>}
        {/* 지도 형식 10 */}
        {page === 8 && <img src='/a3.png' className='지도' onClick={() => setpage(10)}></img>}
        {page === 10 && <img src='/a2.png' className='img3' onClick={() => setpage(8)}></img>}
        {page === 10 && <h1 onClick={mapa1} className='지도표시1'>소방서</h1>}
        {page === 10 && <h1 onClick={mapa2} className='지도표시2'>경찰서</h1>}
        {page === 10 && <h1 onClick={mapa3} className='지도표시3'>병원</h1>}
        {page === 10 && <h1 onClick={mapa4} className='지도표시4'>서로고</h1>}
        {page === 10 && <h1 onClick={mapa5} className='지도표시5'>산</h1>}

        {page === 10 && <img src='/a14.png' className='큰지도'></img>}

        {charch === 1 &&무기장착여부 == false && weap1 >= 1 && tam1 === false && page === 10 && <img src='/a16.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기("도끼"); set무기장착여부(true)}}></img>}
        {charch === 1 &&무기장착여부 == false && weap2 >= 1 && tam1 === false  && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기("진압봉"); set무기장착여부(true)}}></img>}
        {charch === 1 &&무기장착여부 == false && weap3 >= 1 && tam1 === false  && page === 10 && <img src='/a16.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기("야구방망이"); set무기장착여부(true)}}></img>}
        {charch === 1 &&무기장착여부 == false &&weap4 >= 1 && tam1 === false  && page === 10 && <img src='/a16.png' className='헬멧' onClick={()=> {set무기장착(5); setweap4(prev => prev - 1); set무기("헬멧"); set무기장착여부(true)}}></img>}
        {/* 개수 차감 */}
        {charch === 1 &&무기 === "도끼" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap1(prev => prev + 1); set무기장착여부(false)}}></img>}
        {charch === 1 &&무기 === "진압봉" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap2(prev => prev + 1); set무기장착여부(false)}}></img>}
        {charch === 1 &&무기 === "야구방망이" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap3(prev => prev + 1); set무기장착여부(false)}}></img>}
        {charch === 1 &&무기 === "헬멧" && tam1 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기(""); setweap4(prev => prev + 1); set무기장착여부(false)}}></img>}



        {charch === 2 &&무기장착여부1 == false && weap1 >= 1 && tam2 === false && page === 10 && <img src='/a16.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기1("도끼"); set무기장착여부1(true)}}></img>}
        {charch === 2 &&무기장착여부1 == false && weap2 >= 1 && tam2 === false && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기1("진압봉"); set무기장착여부1(true)}}></img>}
        {charch === 2 &&무기장착여부1 == false && weap3 >= 1 && tam2 === false && page === 10 && <img src='/a16.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기1("야구방망이"); set무기장착여부1(true)}}></img>}
        {charch === 2 &&무기장착여부1 == false &&weap4 >= 1 && tam2 === false && page === 10 && <img src='/a16.png' className='헬멧' onClick={()=> {set무기장착(5); setweap4(prev => prev - 1); set무기1("헬멧"); set무기장착여부1(true)}}></img>}
        {/* 개수 차감 */}
        {charch === 2 &&무기1 === "도끼" && tam2 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap1(prev => prev + 1); set무기장착여부1(false)}}></img>}
        {charch === 2 &&무기1 === "진압봉" && tam2 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap2(prev => prev + 1); set무기장착여부1(false)}}></img>}
        {charch === 2 &&무기1 === "야구방망이" &&  tam2 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap3(prev => prev + 1); set무기장착여부1(false)}}></img>}
        {charch === 2 &&무기1 === "헬멧" && tam2 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기1(""); setweap4(prev => prev + 1); set무기장착여부1(false)}}></img>}



        {charch === 3 &&무기장착여부2 == false && weap1 >= 1 && tam3 === false && page === 10 && <img src='/a16.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기2("도끼"); set무기장착여부2(true)}}></img>}
        {charch === 3 &&무기장착여부2 == false && weap2 >= 1 && tam3 === false  && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기2("진압봉"); set무기장착여부2(true)}}></img>}
        {charch === 3 &&무기장착여부2 == false && weap3 >= 1 && tam3 === false  && page === 10 && <img src='/a16.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기2("야구방망이"); set무기장착여부2(true)}}></img>}
        {charch === 3 &&무기장착여부2 == false &&weap4 >= 1 && tam3 === false  && page === 10 && <img src='/a16.png' className='헬멧' onClick={()=> {set무기장착(5); setweap4(prev => prev - 1); set무기2("헬멧"); set무기장착여부2(true)}}></img>}
        {/* 개수 차감 */}
        {charch === 3 &&무기2 === "도끼" && tam3 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap1(prev => prev + 1); set무기장착여부2(false)}}></img>}
        {charch === 3 &&무기2 === "진압봉" &&  tam3 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap2(prev => prev + 1); set무기장착여부2(false)}}></img>}
        {charch === 3 &&무기2 === "야구방망이" &&  tam3 === false  && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap3(prev => prev + 1); set무기장착여부2(false)}}></img>}
        {charch === 3 &&무기2 === "헬멧" &&  tam3 === false && page === 10 && <img src='/a2.png' className='엑스' onClick={()=> {set무기장착(0); set무기2(""); setweap4(prev => prev + 1); set무기장착여부2(false)}}></img>}



        {charch === 4 &&무기장착여부3 == false && weap1 >= 1 && tam4 === false && page === 10 && <img src='/a16.png' className='도끼' onClick={()=> {set무기장착(15); setweap1(prev => prev - 1); set무기3("도끼"); set무기장착여부3(true)}}></img>}
        {charch === 4 &&무기장착여부3 == false && weap2 >= 1 && tam4 === false && page === 10 && <img src='/a16.png' className='진압봉' onClick={()=> {set무기장착(10); setweap2(prev => prev -1); set무기3("진압봉"); set무기장착여부3(true)}}></img>}
        {charch === 4 &&무기장착여부3 == false && weap3 >= 1 && tam4 === false && page === 10 && <img src='/a16.png' className='야구방망이' onClick={()=> {set무기장착(12); setweap3(prev => prev - 1); set무기3("야구방망이"); set무기장착여부3(true)}}></img>}
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
        {tam1 === false && chareat1+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='통조림' onClick={() => {setchareat1(100); seteat1(prev => prev -1); }}></img>}  
        {tam2 === false && chareat2+75 < 100 && eat1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='통조림' onClick={() => {setchareat2(prev => prev + 75); seteat1(prev => prev -1); }}></img>} 
        {tam2 === false && chareat2+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='통조림' onClick={() => {setchareat2(100); seteat1(prev => prev -1); }}></img>} 
        {tam3 === false && chareat3+75 < 100 && eat1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='통조림' onClick={() => {setchareat3(prev => prev + 75); seteat1(prev => prev -1); }}></img>}
        {tam3 === false && chareat3+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='통조림' onClick={() => {setchareat3(100); seteat1(prev => prev -1); }}></img>}  
        {tam4 === false && chareat4+75 < 100 && eat1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='통조림' onClick={() => {setchareat4(prev => prev + 75); seteat1(prev => prev -1);}}></img>} 
        {tam4 === false && chareat4+75 >= 100 && eat1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='통조림' onClick={() => {setchareat4(100); seteat1(prev => prev -1);}}></img>} 
        {page === 9 && <h2 className='통조림개수'>: {eat1}개</h2>}

        {page === 9 && <img src='/a17.png' className='물'></img>}
        {tam1 === false && charwtr1+25 < 100 && eat2 > 0 && charch1 === 1 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr1(perv => perv + 25); seteat2(prev => prev -1);}}></img>} 
        {tam1 === false &&charwtr1+25 >= 100 && eat2 > 0 && charch1 === 1 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr1(100); seteat2(prev => prev -1);}}></img>}
        {tam2 === false &&charwtr2+25 < 100 && eat2 > 0 && charch1 === 2 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr2(perv => perv + 25); seteat2(prev => prev -1); }}></img>}
        {tam2 === false &&charwtr2+25 >= 100 && eat2 > 0 && charch1 === 2 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr2(100); seteat2(prev => prev -1); }}></img>}
        {tam3 === false &&charwtr3+25 < 100 && eat2 > 0 && charch1 === 3 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr3(perv => perv + 25); seteat2(prev => prev -1); }}></img>}
        {tam3 === false &&charwtr3+25 >= 100 && eat2 > 0 && charch1 === 3 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr3(100); seteat2(prev => prev -1); }}></img>}
        {tam4 === false &&charwtr4+25 < 100 && eat2 > 0 && charch1 === 4 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr4(perv => perv + 25); seteat2(prev => prev -1); }}></img>}
        {tam4 === false &&charwtr4+25 >= 100 && eat2 > 0 && charch1 === 4 && page === 9 && <img src='/a17.png' className='물' onClick={() => {setcharwtr4(100); seteat2(prev => prev -1); }}></img>}
        {page === 9 && <h2 className='물개수'>: {eat2}개</h2>} 

        {page === 9 && <img src='/a16.png' className='라면'></img>} 
        {tam1 === false &&chareat1+50 < 100 && eat3 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='라면' onClick={() => {setchareat1(prev => prev + 50); seteat3(prev => prev -1); }}></img>} 
        {tam1 === false &&chareat1+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='라면' onClick={() => {setchareat1(100); seteat3(prev => prev -1); }}></img>} 
        {tam2 === false &&chareat2+50 < 100 && eat3 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='라면' onClick={() => {setchareat2(prev => prev + 50); seteat3(prev => prev -1); }}></img>} 
        {tam2 === false &&chareat2+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='라면' onClick={() => {setchareat2(100); seteat3(prev => prev -1); }}></img>}
        {tam3 === false &&chareat3+50 < 100 && eat3 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='라면' onClick={() => {setchareat3(prev => prev + 50); seteat3(prev => prev -1); }}></img>} 
        {tam3 === false &&chareat3+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='라면' onClick={() => {setchareat3(100); seteat3(prev => prev -1); }}></img>}
        {tam4 === false &&chareat4+50 < 100 && eat3 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='라면' onClick={() => {setchareat4(prev => prev + 50); seteat3(prev => prev -1); }}></img>}
        {tam4 === false &&chareat4+50 >= 100 && eat3 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='라면' onClick={() => {setchareat4(100); seteat3(prev => prev -1); }}></img>}
        {page === 9 && <h2 className='라면개수'>: {eat3}개</h2>}

        {page === 9 && <img src='/a16.png' className='사탕'></img>} 
        {tam1 === false &&chareat1+10 < 100 && eat4 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='사탕' onClick={() => {setchareat1(prev => prev + 10); seteat4(prev => prev -1); }}></img>}
        {tam1 === false &&chareat1+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='사탕' onClick={() => {setchareat1(100); seteat4(prev => prev -1); }}></img>}  
        {tam2 === false &&chareat2+10 < 100 && eat4 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='사탕' onClick={() => {setchareat2(prev => prev + 10); seteat4(prev => prev -1); }}></img>} 
        {tam2 === false &&chareat2+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='사탕' onClick={() => {setchareat2(100); seteat4(prev => prev -1); }}></img>} 
        {tam3 === false &&chareat3+10 < 100 && eat4 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='사탕' onClick={() => {setchareat3(prev => prev + 10); seteat4(prev => prev -1); }}></img>} 
        {tam3 === false &&chareat3+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='사탕' onClick={() => {setchareat3(100); seteat4(prev => prev -1); }}></img>} 
        {tam4 === false &&chareat4+10 < 100 && eat4 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='사탕' onClick={() => {setchareat4(prev => prev + 10); seteat4(prev => prev -1); }}></img>}
        {tam4 === false &&chareat4+10 >= 100 && eat4 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='사탕' onClick={() => {setchareat4(100); seteat4(prev => prev -1); }}></img>} 
        {page === 9 && <h2 className='사탕개수'>: {eat4}개</h2>}

        {page === 9 && <img src='/a16.png' className='키트'></img>} 
        {tam1 === false &&charment1+10 < 100 && med1 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='키트' onClick={() => {setcharment1(prev => prev + 10); setmed1(prev => prev -1); }}></img>} 
        {tam1 === false &&charment1+10 >= 100 && med1 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='키트' onClick={() => {setcharment1(100); setmed1(prev => prev -1); }}></img>} 
        {tam2 === false &&charment2+10 < 100 && med1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='키트' onClick={() => {setcharment2(prev => prev + 10); setmed1(prev => prev -1); }}></img>} 
        {tam2 === false &&charment2+10 >= 100 && med1 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='키트' onClick={() => {setcharment2(100); setmed1(prev => prev -1); }}></img>} 
        {tam3 === false &&charment3+10 < 100 && med1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='키트' onClick={() => {setcharment3(prev => prev + 10); setmed1(prev => prev -1); }}></img>} 
        {tam3 === false &&charment3+10 >= 100 && med1 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='키트' onClick={() => {setcharment3(100); setmed1(prev => prev -1); }}></img>} 
        {tam4 === false &&charment4+10 < 100 && med1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='키트' onClick={() => {setcharment4(prev => prev + 10); setmed1(prev => prev -1); }}></img>} 
        {tam4 === false &&charment4+10 >= 100 && med1 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='키트' onClick={() => {setcharment4(100); setmed1(prev => prev -1); }}></img>} 
        {page === 9 && <h2 className='키트개수'>: {med1}개</h2>}

        {page === 9 && <img src='/a16.png' className='구급상자'></img>} 
        {tam1 === false &&charment1+10 < 100 && med2 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className= '구급상자' onClick={() => {setcharment1(prev => prev + 10); setmed2(prev => prev -1); }}></img>} 
        {tam1 === false &&charment1+10 >= 100 && med2 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className= '구급상자' onClick={() => {setcharment1(100); setmed2(prev => prev -1); }}></img>} 
        {tam2 === false &&charment2+10 < 100 && med2 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='구급상자' onClick={() => {setcharment2(prev => prev + 10); setmed2(prev => prev -1); }}></img>} 
        {tam2 === false &&charment2+10 >= 100 && med2 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='구급상자' onClick={() => {setcharment2(100); setmed2(prev => prev -1); }}></img>} 
        {tam3 === false &&charment3+10 < 100 && med2 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='구급상자' onClick={() => {setcharment3(prev => prev + 10); setmed2(prev => prev -1); }}></img>}
        {tam3 === false &&charment3+10 >= 100 && med2 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='구급상자' onClick={() => {setcharment3(100); setmed2(prev => prev -1); }}></img>}  
        {tam4 === false &&charment4+10 < 100 && med2 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='구급상자' onClick={() => {setcharment4(prev => prev + 10); setmed2(prev => prev -1); }}></img>} 
        {tam4 === false &&charment4+10 >= 100 && med2 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='구급상자' onClick={() => {setcharment4(100); setmed2(prev => prev -1); }}></img>} 
        {page === 9 && <h2 className='구급상자개수'>: {med2}개</h2>}

        {page === 9 && <img src='/a16.png' className='책'></img>} 
        {tam1 === false &&charment1+30 < 100 && etc3 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='책' onClick={() => {setcharment1(prev => prev + 18); setetc3(prev => prev -1); }}></img>}
        {tam1 === false &&charment1+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='책' onClick={() => {setcharment1(100); setetc3(prev => prev -1); }}></img>} 
        {tam2 === false &&charment2+30 < 100 && etc3 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='책' onClick={() => {setcharment2(prev => prev + 18); setetc3(prev => prev -1); }}></img>}
        {tam2 === false &&charment2+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='책' onClick={() => {setcharment2(100); setetc3(prev => prev -1); }}></img>}  
        {tam3 === false &&charment3+30 < 100 && etc3 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='책' onClick={() => {setcharment3(prev => prev + 18); setetc3(prev => prev -1); }}></img>} 
        {tam3 === false &&charment3+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='책' onClick={() => {setcharment3(100); setetc3(prev => prev -1); }}></img>} 
        {tam4 === false &&charment4+30 < 100 && etc3 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='책' onClick={() => {setcharment4(prev => prev + 18); setetc3(prev => prev -1); }}></img>} 
        {tam4 === false &&charment4+30 >= 100 && etc3 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='책' onClick={() => {setcharment4(100); setetc3(prev => prev -1); }}></img>} 
        {page === 9 && <h2 className='책개수'>: {etc3}개</h2>}

        
        {page === 9 && <img src='/a16.png' className='신문'></img>} 
        {tam1 === false &&charment1+20 < 100 && etc4 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='신문' onClick={() => {setcharment1(prev => prev + 10); setetc4(prev => prev -1); }}></img>}
        {tam1 === false &&charment1+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 1 && <img src='/a16.png' className='신문' onClick={() => {setcharment1(100); setetc4(prev => prev -1); }}></img>}  
        {tam2 === false &&charment2+20 < 100 && etc4 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='신문' onClick={() => {setcharment2(prev => prev + 10); setetc4(prev => prev -1); }}></img>}
        {tam2 === false &&charment2+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 2 && <img src='/a16.png' className='신문' onClick={() => {setcharment2(100); setetc4(prev => prev -1); }}></img>}  
        {tam3 === false &&charment3+20 < 100 && etc4 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='신문' onClick={() => {setcharment3(prev => prev + 10); setetc4(prev => prev -1); }}></img>} 
        {tam3 === false &&charment3+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 3 && <img src='/a16.png' className='신문' onClick={() => {setcharment3(100); setetc4(prev => prev -1); }}></img>} 
        {tam4 === false &&charment4+20 < 100 && etc4 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='신문' onClick={() => {setcharment4(prev => prev + 10); setetc4(prev => prev -1); }}></img>} 
        {tam4 === false &&charment4+20 >= 100 && etc4 > 0 && page === 9 && charch1 === 4 && <img src='/a16.png' className='신문' onClick={() => {setcharment4(100); setetc4(prev => prev -1); }}></img>}
        {page === 9 && <h2 className='신문개수'>: {etc4}개</h2>}

        {page === 9 && <img src='/a2.png' className='img3' onClick={() => setpage(8)}></img>}


        {/* 침대 형식 11*/}
        {page === 11 && <img src='/a8.png' className='어둠' onClick={() => setloading(prev => prev + 1)}></img>}
        {page === 8 && <img src='/a6.png' className='침대' onClick={DayUp}></img>} 
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
        {Die2 === false && tam2 === false && page === 8 && <img src='/a11.png' className='mainchar2'></img>}
        {Die3 === false && tam3 === false && page === 8 && <img src='/a12.png' className='mainchar3'></img>}
        {Die4 === false && tam4 === false && page === 8 && <img src='/a13.png' className='mainchar4'></img>}

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
          {book === false && page === 8 && <img src='/a20.png' className='하루책' onClick={()=> setbook(true)}></img>}
          {book === true && page === 8 && <img src='/a2.png' className='하루나가기' onClick={()=> setbook(false)}></img>}
          {page === 8 && book === true && <img className='통조림플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='통조림플러스텍스트'> +{eat2표시}</h1>}

          {page === 8 && book === true && <img className='물플러스' src='/a17.png'></img>}
          {page === 8 && book === true && <h1 className='물플러스텍스트'> +{eat2표시}</h1>}

          {page === 8 && book === true && <img className='라면플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='라면플러스텍스트'> +{eat3표시}</h1>}

          {page === 8 && book === true && <img className='사탕플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='사탕플러스텍스트'> +{eat4표시}</h1>}

          {page === 8 && book === true && <img className='키트플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='키트플러스텍스트'> +{med1표시}</h1>}
        
          {page === 8 && book === true && <img className='구급상자플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='구급상자플러스텍스트'> +{med2표시}</h1>}

          {page === 8 && book === true && <img className='도끼플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='도끼플러스텍스트'> +{weap1표시}</h1>}

          {page === 8 && book === true && <img className='진압봉플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='진압봉플러스텍스트'> +{weap2표시}</h1>}
        
        
          {page === 8 && book === true && <img className='야구방망이플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='야구방망이플러스텍스트'> +{weap3표시}</h1>}

          {page === 8 && book === true && <img className='헬멧플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='헬멧플러스텍스트'> +{weap4표시}</h1>}

          {page === 8 && book === true && <img className='보드게임플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='보드게임플러스텍스트'> +{etc1표시}</h1>}

          {page === 8 && book === true && <img className='라디오플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='라디오플러스텍스트'> +{etc2표시}</h1>}

          {page === 8 && book === true && <img className='책플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='책플러스텍스트'> +{etc3표시}</h1>}

          {page === 8 && book === true && <img className='신문플러스' src='/a16.png'></img>}
          {page === 8 && book === true && <h1 className='신문플러스텍스트'> +{etc4표시}</h1>}

          {page === 8 &&  book === true && <img src='/a20.png' className='하루상태창'></img>}

        
          
        
      </div>
    </div>
  );

}

export default App;
