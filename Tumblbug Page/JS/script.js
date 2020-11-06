const image = document.getElementById('slideImg');
const mainTxt1 = document.getElementById('mainTxt1');
const mainTxt2 = document.getElementById('mainTxt2');
const subTxt = document.getElementById('subTxt');
const page = document.getElementById('pageCnt');
const sideWrap = document.getElementById('sideWrap');

var idx = 1;
const object = [
    {
        idx : 0,
        img : "./imgs/img0.jpg",
        mainTxt1 : "2030년 마침내",
        mainTxt2 : "인류 최후의 유토피아",
        subTxt: "전원이 힘을 모아서 기술 중심 유토피아 건설하기"
    },
    {
        idx : 1,
        img : "./imgs/img1.jpg",
        mainTxt1 : "동그란 반지는",
        mainTxt2 : "고정관념이지",
        subTxt: "창에 비치는 달빛을 모티브로 한 사각 반지"
    },
    {
        idx : 2,
        img : "./imgs/img2.jpg",
        mainTxt1 : "성별에 상관없이",
        mainTxt2 : "멋진 우리는",
        subTxt: "말랑과 샤이앤, 트렌스젠더입니다"
    },
    {
        idx : 3,
        img : "./imgs/img3.jpg",
        mainTxt1 : "발그레한 장미색은",
        mainTxt2 : "어떻게 만들어질까",
        subTxt: "디자이너가 직접 만든 CMYK 컬러배합 맞추기"
    },
    {
        idx : 4,
        img : "./imgs/img4.jpg",
        mainTxt1 : "500년의 폐기물보다",
        mainTxt2 : "500년의 지구를 위해",
        subTxt: "CLAP 3기에서 플라스틱Free 창작자를 찾습니다"
    }
]

window.onload = setInterval(() => {
    image.setAttribute("src",object[idx].img);
    mainTxt1.innerHTML=object[idx].mainTxt1;
    mainTxt2.innerHTML=object[idx].mainTxt2;
    subTxt.innerHTML=object[idx].subTxt;
    page.innerHTML = `${idx+1}&nbsp;/&nbsp;${object.length}`;
    if(idx == 0){
        sideWrap.style.backgroundColor = "#222222";
    }else if(idx == 1){
        sideWrap.style.backgroundColor = "#378eb5";
    }else if(idx == 2){
        sideWrap.style.backgroundColor = "#d77847";
    }else if(idx == 3){
        sideWrap.style.backgroundColor = "#f4adac";
    }else if(idx == 4){
        sideWrap.style.backgroundColor = "#2fa789";
    }

    idx+=1;
    if(idx>=object.length){
        idx = 0;
    }

},3000);