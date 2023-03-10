
const hello = document.createElement( "h1" )
document.body.appendChild(hello);


function addElement () {
var newDiv = document.createElement("div");
var newContent = document.createTextNode("환영합니다!");
newDiv.appendChild(newContent);
const root = document.getElementById('root')
document.body.insertBefore(newDiv, root);
}



document.querySelector("#makeBtn").addEventListener("click",function(){
   
   //-동적으로 요소 추가하고 자식요소로 추가하기 과정 
   //1. 동적으로 만든 요소를 만들고 참조값을 p 변수에 담기
   let p1 = document.createElement("p");

   //2. 만든 p요소에 class 속성 추가하기
   p1.setAttribute("class","my-class");

   //3.만든 p요소에 innerText 추가하기  
   p1.innerText = "p1요소입니다.";

   //4. 만든 p요소를 id가 one인 요소(div)의 자식 요소로 추가하기
   document.querySelector("#one").append(p1);

});


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


