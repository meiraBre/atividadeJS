const titulo = document.createElement("h1");
titulo.textContent = "Meu Título Criado com JavaScript";
titulo.id = "titulo";
document.body.appendChild(titulo);

const produtos = [
    {
        titulo: "Doce Encanto - Brigadeiro Gourmet",
        descricao: "Delicioso brigadeiro artesanal feito com chocolate belga.",
        preco: "R$ 5,00",
        imagem: "Brigadeiro.webp",
        alt: "Imagem do Brigadeiro Gourmet"
    }
];

const produto = produtos[0]; 
document.body.innerHTML += `
    <h2>${produto.titulo}</h2>
    <p>${produto.descricao}</p>
    <p><strong>Preço:</strong> ${produto.preco}</p>
    <img src="${produto.imagem}" alt="${produto.alt}">
`;