import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  const setVh = () => {
    const vh = window.innerHeight = 0.01;
    document.documentElement.style.setProperty('--vh','${vh}px')
  }
  useEffect(()=>{
    setVh()
    function onResize(){
      setVh()
    }
    window.addEventListener('resize',onResize)
  },[])

  const[page,setPage] = useState(0)

  const [userName, setUserName] = useState('');


 
  

  const [userInfo, setUserInfo] = useState({
    name: '',
    gender: '',
    mbtiType: '',
    idealType: ''
  });

  useEffect(() => {
    setVh();
    window.addEventListener('resize', setVh);

    const name = localStorage.getItem('name') || '이름';
    const gender = localStorage.getItem('gender') || '성별';
    const mbtiType = localStorage.getItem('mbtiType') || 'MBTI';
    const idealType = localStorage.getItem('idealType') || '이상형';

    setUserInfo({ name, gender, mbtiType, idealType });
  }, []);

  

  const questionList = [
    
  { if : ['오늘은 설레는 대학교 개강총회! 첫 눈에 반해버린 동기가 뒤풀이에 왔다! 이때 나는..?'],
    q: ['안녕하세요! 컴퓨터공학과 23학번 ${name}입니다!' ,'잘 부탁드립니다~!'],
    a : [
      {text: '옆자리에 앉는다.', type: ['4']},
      {text: '앞자리에 앉는다.', type: ['3']},
      {text: '대각선 자리에 앉는다.', type: ['2']},
      {text: '상황을 지켜볼 수 있도록 멀리 떨어져 앉는다.', type: ['0']},
    ]
  },
  { if : ['뒤풀이 도중, 어라 얘 좀 취해보이는데 ,, 어떡하지?'],
    q : ['아니ㅣ야 ㄴㅏ 더 마실ㄹ 수 있어 ~~@','이정도느ㄴ 괜ㄴ찬하 !!'],
    a : [
      {text: '"같이 아이스크림 사러 나가자"고 말한다.', type: ['4']},
      {text: '아이스크림을 사와서 나눠줄 때 따로 챙겨준다.', type: ['3']},
      {text: '물을 따라준다.', type: ['2']},
      {text: '상황을 지켜본다.', type: ['0']},
    ]
  },

  { if : ['헉 나랑 집 방향이 비슷하잖아 !? 집에 같이 가고 싶은데,,'],
    q : ['나 노원역 살아!'],
    a : [
      {text: '"와 나돈데! 같이 가자!"고 말한다.', type: ['3']},
      {text: '나갈 때 타이밍을 맞춰 같이 일어나 자연스럽게 같이 간다.', type: ['4']},
      {text: '우연을 가장해 집 가는 길에 마주친다.', type: ['2']},
      {text: '가만히 상황을 지켜본다.', type: ['1']},
      {text: '부담스러워 할 수도 있으니 얘기하지 않는다.', type: ['0']},
    ]
  },
  { if : ['카톡! ㅇㅇㅇ에게서 먼저 뭐하냐고 카톡이 왔다. 어라 뭐지,, 바로 지워버렸네 바로 답장하는게 좋을까? 어떻게 해야하지?!'],
    q : ['상대가 메세지를 삭제했습니다.'],
    a : [
      {text: '오는 순간 읽고 칼답한다.', type: ['4']},
      {text: '고민을 충분히하고 10분 내에 답장한다.', type: ['3']},
      {text: '신중을 가해 6시간 간격으로 답장한다.', type: ['0']},
      {text: '나는 밀당의 고수! 하루동안 안 읽씹한다.', type: ['0']},
    ]
  },
  { if : ['1교시 수업은 역시 너무 힘들다,,, 빨리 애들이랑 밥 먹으러 가야지~ 뭐? ㅇㅇㅇ도 온다고? ... 어쩌다보니 맞은편에 앉게 되었네'],
    q : ['🍔🍟','우와 이거 진짜 맛있다!'],
    a : [
      {text: '밥을 먹는 모습을 장난스럽게 놀린다.', type: ['4']},
      {text: '밥을 먹는 모습이 복스럽다고 칭찬한다.', type: ['0']},
      {text: '밥을 먹다가 물잔이 비어있으면 따라준다.', type: ['1']},
      {text: '먼저 말을 걸지 않는다.', type: ['0']},
    ]
  },
  { if : ['ㅇㅇ이랑 카톡하다 보니 벌써 3시..? 내일 일교시인데,, 하지만 더 연락하고 싶어 ㅠㅠㅠ ...'],
    q : ['너도 내일 일교시지?','지옥철 탈 생각에 벌써 지친다...'],
    a : [
      {text: '새벽 통화는 썸의 국룰이기 때문에 전화를 건다..', type: ['4']},
      {text: '둘 다 내일 할 일이 있으니 잘자고 내일 연락한다고 한다.', type: ['1']},
      {text: '졸음을 참고 계속 연락한다.', type: ['2']},
      {text: '졸음을 참지 못하고 답장하지 못한채 잠든다.', type: ['0']},
    ]
  },
  { if : ['이제 연락도 꽤 길게 했고.. 내가 호감있는걸 표현하고 싶은데 어떻게 다가가면 좋을까..?'],
    q : ['ㅎㅎ'],
    a : [
      {text: '맛집을 찾았다며 당장 만나자는 약속을 잡는다.', type: ['4']},
      {text: '밥 뭐 먹는지, 지금 뭐하는지 등 일상 사진을 찍어서 보낸다.', type: ['2']},
      {text: '답장 없으면 답장을 받기 위해 이것저것 다 보내본다.', type: ['3']},
      {text: '시크해보이기 위해 선톡은 하지 않고 오는 톡에만 답장한다.', type: ['0']},
    ]
  },
  { if : ['어쩌다보니 점심팟에 나랑 ㅇㅇ이 둘 밖에 없네.. 둘이서 먹으면 부담스러워하려나? 어떤 메뉴 먹어야하지? 어딜가면 좋을까..?'],
    q : ['오늘은 다들 바쁘네,,','점심팟은 우리 둘밖에 없나보다','아 혹시 점심 먹었어?'],
    a : [
      {text: '한번도 안 가본 새로운 식당을 찾아서 가본다.', type: ['4']},
      {text: '동아리 내에서 유명한 항상 가던 식당을 간다.', type: ['2']},
      {text: '밥은 여럿이서 먹어야지! 선배들과 다같이 학식을 먹으러 간다.', type: ['3']},
      {text: '단둘이 밥을 먹으면 체할 수 있으니 이미 먹고 왔다고 거짓말한다.', type: ['0']},
    ]
    },
  { if : ['벌써 다음주면 이번학기 마지막 시험기간이네,, 도서관에서 애들이랑 다같이 공부하는것도 다음주면 끝! 옆에 ㅇㅇ이 있어서 그런가 더 집중이 안되네,,, 어라 잠들어버렸잖아..? 피곤할만하지..'],
    q : ['😴'],
    a : [
      {text: '자는 모습이 귀여워 얼굴을 마주보고 나란히 엎드린다.', type: ['0']},
      {text: '팔을 톡톡치며 때운뒤 같이 편의점에 가자고 한다.', type: ['4']},
      {text: '혼자 편의점에 갔다와 카페인 음료를 머리 맡에 두고 마저 공부한다.', type: ['3']},
      {text: '그래, 다음주가 시험이니 피곤할만도,, 가만히 두고 내 공부를 한다.', type: ['1']},
    ]
  },
  { if : ['내일은 ㅇㅇ이랑 둘이 술을 마시기로 했다... 내일 꼭 고백하려고 하는데 어디가 좋을까..?!'],
    q : ['저녁은 너가 저번에 말했던데 가볼까?','아님 다른 곳도 좋아!'],
    a : [
      {text: '사장님의 생일파티가 진행되고 있는 지그재그', type: ['2']},
      {text: '동아리 부원들이 있을수도 있는 웨이브', type: ['3']},
      {text: '노을이 지고 있는 뚝섬유원지', type: ['4']},
      {text: '아직 한번도 초대하지 않은 나의 시크릿 자취방', type: ['0']},
    ]},

    { if : ['드디어 말했다..! 받아주려나..?'],
      q:['...그래서 내 대답은..!'],

  a:[{type:'', text:'결과 보러 가기'}]}

  ]

  const [flirtinglist, setFlirtingList] = useState ([
    {name:'0',count:0}, {name:'1',count:0},{name:'2',count:0},{name:'3',count:0},{name:'4',count:0}])
  const handleCkAnswer = (type,idx) => {
    let ls = flirtinglist;

    console.log(type[0]);
    for(let i = 0; i < ls.length; i++){
      if (ls[i].name===type[0]){
        ls[i].count++;
      }
    }
    setFlirtingList(ls);
    setPage(page+1);

    if (idx+1 === questionList.length){
      console.log('결과보기')
    }

    let s = 0;
    flirtinglist.forEach((n) => {
      s += (Number(n.name) * n.count);
    });
    console.log(s);
  }










  return (
    
    <div className="flirting Layout">
      {page===0?
      <div className='startPageLayout'>
        <div className='startLogo'>
        <div>Flirting</div>
        <div>▼</div>
         </div>
        <div onClick={()=>setPage(1)}className = 'startButton'>테스트 시작하기</div>
        </div>
       :page <= questionList.length?

       <div className='questionLayout'>
         <div className='flirtingTitle'>
          <div> ⟨ 80+ </div>
          <div>{`${page} / ${questionList.length}`}</div>
         </div>
         
            {questionList.map((val,idx) =>
             <div className='questionList' style={{display:page===idx+1? 'flex':'none'}} key={idx}> 
             {console.log(flirtinglist)}
             
             <div className='ifListLayout'>
                {console.log(val)}
                {console.log(questionList[0].if)}
                <div>{questionList[idx].if}</div>
              </div>

              <div className='questionItemLayout'>
                <div className='profileImg'>
                  <div></div>
                </div>

                

                <div className='chatListLayout'>
                  {val.q.map((qval,qidx)=>
                    <div key={qidx} className='chatBox'>
                      <div>◀</div> <div>{qval}</div>
                      </div>
                  )}
                </div>
              </div>


              <div className='answerItemLayout'>
                <div className='aChatBox'>
                  <div>+</div>  <div>#</div>
                </div>
                {val.a.map((aval,aidx)=>
                  <div key={aidx} className='answerBox' onClick = {()=>handleCkAnswer(aval.type,idx)}>
                    {aval.text}
                  </div>
                )}
              </div>
             </div>
            )}
            
       </div>
       :






       <div>
              <div className='questionLayout'>
         <div className='flirtingTitle'>
          <div> ⟨ 80+ </div>
          <div onClick={()=>window.location.reload()}>테스트 다시하기</div>
         </div>
         
           
             <div className='questionList' style={{display:'flex'}}> 
             {console.log(flirtinglist)}
             
              <div className='questionItemLayout'>
                <div className='profileImg'>
                  <div></div>
                </div>

                <div className='ifListLayout'>
                {console.log(questionList.if)}
                <div>{questionList.if}</div>
                
              </div>

                <div className='chatListLayout'>
                    <div className='chatBox'>
                      <div>◀</div> <div>내용</div>
                      </div>
                  </div>
               </div>
             </div>           
         </div>
       </div>
      }
    </div>
  );
}



export default App;