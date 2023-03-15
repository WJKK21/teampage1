
// 태그 생성
let root = document.getElementById('root')
let title = document.createElement( "header" )
let section = document.createElement( 'main' )
let footer = document.createElement('footer')
let h1 = document.createElement( "h1" )
let div = document.createElement('div')
let element = document.createElement('p');
let main = document.getElementsByTagName('main')
let foot = document.getElementsByTagName('footer')

root.append(title);
root.append(section);
root.append(footer);
title.append(h1)
section.append(div)


h1.innerText = '세동서유'
section.children[0].innerHTML=  "<div>세대는 급하게 변하지만 우리는 흐르듯 펼친다.</div>"

//body css
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.background = 'cadetblue'


//title css
title.style.display = 'flex'
title.style.margin = '20px'
title.style.flexDirection = ''
title.style.justifyContent = 'space-evenly'
title.children[0].style.margin = '10px'
title.style.background = 'salmon'
title.style.fontSize = '3em'

//main css
section.style.display = 'flex'
section.style.justifyContent = 'center'
section.style.margin = '0'
section.style.padding = '0'
section.style.background = '#ccc'

//main.children[0]
section.children[0].style.fontSize = '1.3em'

//footer css
footer.style.display = 'flex'
footer.style.justifyContent = 'center'
footer.style.margin = '0'
footer.style.padding = '10px'
footer.style.background = '#333'
