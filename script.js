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
        image:'assets/members/wallac.jpg',
        name:'Wallacy Sebastian',
        cargo:'Diretor Presidente',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'wallacy@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
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
        image:'assets/members/wallac.jpg',
        name:'Wallacy Sebastian',
        cargo:'Diretor Presidente',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'wallacy@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
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
        image:'assets/members/wallac.jpg',
        name:'Wallacy Sebastian',
        cargo:'Diretor Presidente',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email:'wallacy@uel.br',
        linkedin:'http://linkedin.com/',
        github:'https://github.com/wallacy',     
    },
];




let list =document.getElementById("membros")

members.map((member,i)=>{
    let li = document.createElement("li")
    console.log(li)
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

    if(i==0) li.setAttribute("class","selected")

    li.appendChild(img)
    li.appendChild(nome)
    li.appendChild(cargo)
    list.appendChild(li)
})