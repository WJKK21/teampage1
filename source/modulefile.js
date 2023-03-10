
// 태그 생성
const root = document.getElementById('root')
const title = document.createElement( "header" )
const main = document.createElement( "main" )
const footer = document.createElement('footer')
const h1 = document.createElement( "h1" )


root.appendChild(title);
root.appendChild(main);
root.appendChild(footer);

//내용 넣기 
root.children[0].appendChild(h1)
console.log(root.children[0])
root.children[0].textContent(세동서유)


main.innerHTML= "<div><div>세대는 급하게 변하지만 우리는 흐르듯 펼친다</div>김동주 <div> </div></div>"
footer.innerHTML= "<div>세동서유</div>"


//body css
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.background = 'cadetblue'


//title css
title.style.display = 'flex'
title.style.flexDirection = ''
title.style.justifyContent = 'space-evenly'
title.children[0].style.margin = '10px'
title.style.background = 'salmon'
title.style.fontSize = '3em'

//main css
main.style.display = 'flex'
main.style.justifyContent = 'center'
main.style.margin = '0'
main.style.padding = '0'
main.style.background = '#ccc'

//footer css
footer.style.display = 'flex'
footer.style.justifyContent = 'center'
footer.style.margin = '0'
footer.style.padding = '0'
footer.style.background = '#333'



const _EXAMDATA = {
  teamInformation: {
    teamNumber : 5,
    teamName: "세동서유",
    teamNameStory: "세대는 급하게 변하지만 우리는 흐르듯 펼친다",
    teamManager: "dongju",
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

}

