const root = document.getElementById('root')


// div 생성
var todo = ['세동서유', '세대는 급하게 변하지만 우리는 흐르듯 펼친다', '팀장 김동주', '팀원 임지성 ', '팀원 이재권', '팀원 최대건', '팀원 정지은'];
for (var i = 0; i < todo.length; i++) {
	var div = document.createElement('div');
	div.textContent = todo[i];
	document.getElementById('root').appendChild(div);
}

//

//body css
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.background = 'cadetblue'

// title css 
root.children[0].style.background = 'tomato'
root.children[0].style.fontSize = '5em'
root.children[0].style.display = 'flex'
root.children[0].style.justifyContent = 'center';
root.children[0].style.margin = '0'

// sub title
root.children[1].style.margin = '0'
root.children[1].style.fontSize = '1.5em'
root.children[1].style.display = 'flex'
root.children[1].style.justifyContent = 'center';

// team list
root.children[2].style.margin = '10px'
root.children[3].style.margin = '10px'
root.children[4].style.margin = '10px'
root.children[5].style.margin = '10px'
root.children[6].style.margin = '10px'

root.children[2].style.fontSize = '1.3em'
root.children[3].style.fontSize = '1.3em'
root.children[4].style.fontSize = '1.3em'
root.children[5].style.fontSize = '1.3em'
root.children[6].style.fontSize = '1.3em'


const _EXAMDATA = {
  teamInformation: {
    teamNumber : 5,
    teamName: "세동서유",
    teamNameStory: "세대는 급하게 변하지만 우리는 흐르듯 펼친다",
    teamManager: "0",
    teamAllMember: [
      {
        memberNumber: 0,
        name: "김동주",
        teamPosition: "팀장",
        githubAddress: "https://github.com/AmondChocolateShake"
      },
      {
        memberNumber: 1,
        name: "임지성",
        teamPosition: "팀원",
        githubAddress: "https://github.com/WJKK21"
      },
      {
        memberNumber: 2,
        name: "이재권",
        teamPosition: "팀원",
        githubAddress: "https://github.com/nowkwon97"
      },
      {
        memberNumber: 3,
        name: "최대건",
        teamPosition: "팀원",
        githubAddress: "https://github.com/dgchoi3904"
      },     
      {   
      memberNumber: 4,
      name: "정지은",
      teamPosition: "팀원",
      githubAddress: "https://github.com/jiny43"
      } 
    ]
  },
  return : teamInformation,
  trainingInformation: {
    subject : [  
    "웹프로그래밍기본(HTML5&CSS3)",
    "Git&GitHub",
    "Babel Javascript",
    "프레임워크 기초",
    "Project C(선택)",
    "백엔드프레임워크런타임",
    "프레임워크활용",
    "Project A(데이터 기반 주식 추천 서비스)",
    "Project B(교통정보제공서비스)",
    ]
  },
  designInformation: {
    colorSet : ["cadetblue", "salmon", "#ccc", "#333"],
    breakPoint : [ "768px", "1280px",  "1920px"]
  },
}

for (let i = 0; i <_EXAMDATA.lenght; i++ ){
  console.log(_EXAMDATA[i])
}

//main.innerHTML= "<div><div>세대는 급하게 변하지만 우리는 흐르듯 펼친다</div>김동주 <div> </div></div>"
//footer.innerHTML= "<div>세동서유</div>"
