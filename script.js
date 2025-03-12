let titulo = document.getElementById("titulo")
console.log(titulo)
titulo.innerText = "Aula de JavaScript de uma forma simplificada";

let tagListaUl = document.getElementsByTagName("ul")[0];
console.log(tagListaUl);
tagListaUl.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`;
let tagLink = document.getElementsByTagName("a")
console.log(tagLink);

if (tagLink.length > 0) {
    tagLink[0].innerText = "Clique aqui para saber mais informações";
} 

let listaOrdenada = document.getElementById("lista-ordenada")
console.log(listaOrdenada)
document.getElementById("lista-ordenada").innerHTML = `
<li><a href="https://www.google.com" target="_blank">Google</a></li>
<li><a href="https://talentocloud.joyclass.com" target="_blank">Talento Cloud</a></li>
<li><a href="https://www.github.com" target="_blank">GitHub</a></li>
`;