const members = [
    {
        image:'assets/members/wallac.jpg',
        name:'Wallacy Sebastian',
        cargo:'Diretor Presidente',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'wallacy@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
    {
        image:'assets/members/pedrophs.jpg',
        name:'Pedro PHS',
        cargo:'Diretor de Marketing',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'pedrophs@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
    {
        image:'assets/members/Anonymous.png',
        name:'Anderson',
        cargo:'Diretor Financeiro',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'anderson@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
    {
        image:'assets/members/lucca.jpg',
        name:'Lucca Motta',
        cargo:'Membro',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'luccamotta@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
    {
        image:'assets/members/gabriel.jpg',
        name:'Gabriel Henrique',
        cargo:'Membro',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'gabrielhenrique@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
    {
        image:'assets/members/jao.jpg',
        name:'João Gabriel',
        cargo:'Membro',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'joaogabriel@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
];




let list =document.getElementById("membros")
let membrosHTML = []
let selected = 0;

function selectMember(member) {
    membrosHTML[selected].removeAttribute("class");
    membrosHTML[member].setAttribute("class","selected")
    memberDetail(members[member])
    selected=member
}

function memberDetail(member) {
    document.getElementById("name-detail").childNodes[0]!=undefined && document.getElementById("name-detail").childNodes[0].remove()
    document.getElementById("position-detail").childNodes[0]!=undefined && document.getElementById("position-detail").childNodes[0].remove()
    document.getElementById("bio-detail").childNodes[0]!=undefined && document.getElementById("bio-detail").childNodes[0].remove()
    document.getElementById("email-detail").childNodes[0]!=undefined && document.getElementById("email-detail").childNodes[0].remove()

    let name = document.createTextNode(member.name)
    let cargo = document.createTextNode(member.cargo)
    let bio = document.createTextNode(member.bio)
    let email = document.createTextNode(member.email)


    document.getElementById("image-detail").setAttribute("src",member.image)
    document.getElementById("name-detail").appendChild(name)
    document.getElementById("position-detail").appendChild(cargo)
    document.getElementById("bio-detail").appendChild(bio)
    document.getElementById("email-detail").appendChild(email)
}

members.map((member,i)=>{
    let li = document.createElement("li")
    li.addEventListener("click",()=>selectMember(i))

    let img = document.createElement("img")
    img.setAttribute("class","avatar")
    img.setAttribute("src",member.image)

    let nome = document.createElement("span")
    nome.setAttribute("class","name")
    let nameNode = document.createTextNode(member.name)
    nome.appendChild(nameNode)
    let cargo = document.createElement("span")
    cargo.setAttribute("class","position")
    let cargoNode = document.createTextNode(member.cargo)
    cargo.appendChild(cargoNode)

    if(i==0){
        li.setAttribute("class","selected")
        memberDetail(member)
    }

    li.appendChild(img)
    li.appendChild(nome)
    li.appendChild(cargo)
    membrosHTML.push(li);
    list.appendChild(li)
})