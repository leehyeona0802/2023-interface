const select = document.querySelector(".select");
const ifListLayout = document.querySelector(".ifListLayout");
const questionItemLayout = document.querySelector(".questionItemLayout");

const data = [
  {
    if: "오늘은 설레는 대학교 개강총회! 첫 눈에 반해버린 동기가 뒤풀이에 왔다! 이때 나는..?",
    q: "안녕하세요! <br/> 잘 부탁드립니다~!",
    a: [
      { text: "옆자리에 앉는다.", type: 4 },
      { text: "앞자리에 앉는다.", type: 3 },
      { text: "대각선 자리에 앉는다.", type: 2 },
      { text: "상황을 지켜볼 수 있도록 멀리 떨어져 앉는다.", type: 0 },
    ],
  },
  {
    if: "뒤풀이 도중, 어라 얘 좀 취해보이는데 ,, 어떡하지?",
    q: "아니ㅣ야 ㄴㅏ 더 마실ㄹ 수 있어~~@ <br/> 이정도느ㄴ 괜ㄴ찬하 !!",
    a: [
      { text: '"같이 아이스크림 사러 나가자"고 말한다.', type: 4 },
      { text: "아이스크림을 사와서 나눠줄 때 따로 챙겨준다.", type: 3 },
      { text: "물을 따라준다.", type: 2 },
      { text: "상황을 지켜본다.", type: 0 },
    ],
  },

  {
    if: "헉 나랑 집 방향이 비슷하잖아 !? 집에 같이 가고 싶은데,,",
    q: "나 노원역 살아!",
    a: [
      { text: '"와 나돈데! 같이 가자!"고 말한다.', type: 3 },
      {
        text: "나갈 때 타이밍을 맞춰 같이 일어나 자연스럽게 같이 간다.",
        type: 4,
      },
      { text: "우연을 가장해 집 가는 길에 마주친다.", type: 2 },
      { text: "가만히 상황을 지켜본다.", type: 1 },
      { text: "부담스러워 할 수도 있으니 얘기하지 않는다.", type: 0 },
    ],
  },
  {
    if: "카톡! 먼저 뭐하냐고 카톡이 왔다. 어라 뭐지,, 바로 지워버렸네 바로 답장하는게 좋을까? 어떻게 해야하지?!",
    q: "삭제된 메세지입니다.",
    a: [
      { text: "오는 순간 읽고 칼답한다.", type: 4 },
      { text: "고민을 충분히하고 10분 내에 답장한다.", type: 3 },
      { text: "신중을 가해 6시간 간격으로 답장한다.", type: 0 },
      { text: "나는 밀당의 고수! 하루동안 안 읽씹한다.", type: 0 },
    ],
  },
  {
    if: "1교시 수업은 역시 너무 힘들다,,, 빨리 애들이랑 밥 먹으러 가야지~ 뭐? 걔도 온다고? ... 어쩌다보니 맞은편에 앉게 되었네",
    q: "🍔🍟 <br/> 우와 이거 진짜 맛있다!",
    a: [
      { text: "밥을 먹는 모습을 장난스럽게 놀린다.", type: 4 },
      { text: "밥을 먹는 모습이 복스럽다고 칭찬한다.", type: 0 },
      { text: "밥을 먹다가 물잔이 비어있으면 따라준다.", type: 1 },
      { text: "먼저 말을 걸지 않는다.", type: 0 },
    ],
  },
  {
    if: "카톡하다 보니 벌써 3시..? 내일 일교시인데,, 하지만 더 연락하고 싶어 ㅠㅠㅠ ...",
    q: "너도 내일 일교시지? <br/> 지옥철 탈 생각에 벌써 지친다...",
    a: [
      { text: "새벽 통화는 썸의 국룰이기 때문에 전화를 건다..", type: 4 },
      {
        text: "둘 다 내일 할 일이 있으니 잘자고 내일 연락한다고 한다.",
        type: 1,
      },
      { text: "졸음을 참고 계속 연락한다.", type: 2 },
      { text: "졸음을 참지 못하고 답장하지 못한채 잠든다.", type: 0 },
    ],
  },
  {
    if: "이제 연락도 꽤 길게 했고.. 내가 호감있는걸 표현하고 싶은데 어떻게 다가가면 좋을까..?",
    q: " 아무튼 저번에 같이 갔던 식당 엄청 <br> 맛있었어 !!",
    a: [
      { text: "맛집을 찾았다며 당장 만나자는 약속을 잡는다.", type: 4 },
      {
        text: "밥 뭐 먹는지, 지금 뭐하는지 등 일상 사진을 찍어서 보낸다.",
        type: 3,
      },
      { text: "답장 없으면 답장을 받기 위해 이것저것 다 보내본다.", type: 2 },
      {
        text: "시크해보이기 위해 선톡은 하지 않고 오는 톡에만 답장한다.",
        type: 0,
      },
    ],
  },
  {
    if: "어쩌다보니 점심팟에 우리 둘 밖에 없네.. 둘이서 먹으면 부담스러워하려나? 어떤 메뉴 먹어야하지? 어딜가면 좋을까..?",
    q: " 오늘은 다들 바쁘네,, <br/> 점심팟은 우리 둘밖에 없나보다 <br/> 아 혹시 점심 먹었어?",
    a: [
      { text: "한번도 안 가본 새로운 식당을 찾아서 가본다.", type: 4 },
      { text: "동아리 내에서 유명한 항상 가던 식당을 간다. (특: 아는 사람 있을수도 있음)", type: 2 },
      {
        text: "밥은 여럿이서 먹어야지! 다같이 학식을 먹으러 간다.",
        type: 3,
      },
      {
        text: "단둘이 밥을 먹으면 체할 수 있으니 이미 먹고 왔다고 거짓말한다.",
        type: 0,
      },
    ],
  },
  {
    if: "벌써 다음주면 이번학기 마지막 시험기간이네,, 도서관에서 애들이랑 다같이 공부하는것도 다음주면 끝! 옆에 ㅇㅇ이 있어서 그런가 더 집중이 안되네,,, 어라 잠들어버렸잖아..? 피곤할만하지..",
    q: "😴",
    a: [
      { text: "자는 모습이 귀여워 얼굴을 마주보고 나란히 엎드린다.", type: 0 },
      { text: "팔을 톡톡치며 깨워준 뒤 같이 편의점에 가자고 한다.", type: 4 },
      {
        text: "혼자 편의점에 갔다와 카페인 음료를 머리 맡에 두고 마저 공부한다.",
        type: 3,
      },
      {
        text: "그래, 다음주가 시험이니 피곤할만도,, 가만히 두고 내 공부를 한다.",
        type: 1,
      },
    ],
  },
  {
    if: "내일은 둘이 술을 마시기로 했다... 내일 꼭 고백하려고 하는데 어디가 좋을까..?!",
    q: "저녁은 너가 저번에 말했던데 가볼까? <br/>아님 다른 곳도 좋아!",
    a: [
      { text: "사장님의 생일파티가 진행되고 있는 지그재그", type: 2 },
      { text: "아는 사람들이 있을수도 있는 웨이브", type: 3 },
      { text: "노을이 지고 있는 뚝섬유원지", type: 4 },
      { text: "아직 한번도 초대하지 않은 나의 시크릿 자취방", type: 0 },
    ],
  },
  {
    if: "드디어 고백했다..! 받아주려나..?",
    q: "...그래서 내 대답은..!",
    a: [{ text: "다음", type: "" }],
  },
];
let index = 0;

function init() {
  //localStorage.setItem("score", 0);
  const form = document.createElement("form");
  BtnPutform(index, form);
  ifListLayout.innerText = data[index]["if"];

  const questionText = data[index]["q"];
  const questionItems = questionText.split("<br/>");

  // questionItemLayout을 감싸는 div 생성
  const questionItemDiv = document.createElement("div"); //위에 분리한걸 넣을 div를 생성하고 

  console.log("dafdsa " +  questionText)
  for (let i = 0; i < questionItems.length; i++) {//길이 만큼 돌면서 
    const questionItemDivLine = document.createElement("div");// div 안에 div 요소들을 만들고 
    questionItemDivLine.classList.add("questionItem");//classname 여기서 추가하고 
    questionItemDivLine.innerHTML = questionItems[i];//innerHtml 은 알지?
    questionItemDiv.appendChild(questionItemDivLine);//위에 만든 div를 감쌀 div 안에 넣어
  }

  // select에 questionItemDiv 추가
  select.appendChild(form);
  questionItemLayout.innerHTML = "";
  questionItemLayout.appendChild(questionItemDiv);
}

function itemInit(){ 

  const questionText = data[index]["q"];
  const questionItems = questionText.split("<br/>");
  const questionItemDiv = document.createElement("div"); 
  const questionItemDivLine = document.createElement("div");// div 안에 div 요소들을 만들고 
  questionItemDivLine.innerHTML = questionItems[0];//innerHtml 은 알지?
  questionItemDivLine.classList.add("questionItem");//classname 여기서 추가하고 
  questionItemDiv.appendChild(questionItemDivLine);//위에 만든 div를 감쌀 div 안에 넣어
 
init();



}

function BtnPutform(index, form) {
  for (let i = 0; i < data[index]["a"].length; i++) {
    let ans = document.createElement("button");
    ans.innerText = data[index]["a"][i]["text"];
    ans.value = i;
    ans.addEventListener("click", goToPage);
    form.appendChild(ans);
    if (data[index]["a"][i]["text"].includes("<br/>")) {
      ans.classList.add("break-line");
    }
    if (data[index]["a"][i]["text"].includes("<br/>")) {
        questionItem.classList.add("break-line");
    }
  }
}




function goToPage(event) {
  event.preventDefault();
  if (index === 10) {
    //윤제 친구 페이지로 보내주기
    //let score1 = Number(localStorage.getItem("score")); 
    window.location.href = "resultscreen.html";
  } else {
    let score = Number(localStorage.getItem("score"));
    score += data[index]["a"][event.target.value]["type"];
    localStorage.setItem("score", score);
    select.innerHTML = "";
    const form = document.createElement("form");
    index++;
    ifListLayout.innerText = data[index]["if"];
    questionItemLayout.innerHTML = data[index]["q"];
   
    select.appendChild(form);
    console.log(score);
    itemInit();
  }
}

init();