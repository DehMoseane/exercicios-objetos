
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };


const produtos = {
    tv: { nome: "TV Samsung 4K", valorEmCentavos: 129900 },
    caboUsb: { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 },
    webcam: { nome: "Webcam C920s", valorEmCentavos: 80000 },
    teclado: { nome: "Teclado Keychron K8", valorEmCentavos: 50000 },
    carregador: { nome: "Carregador portátil", valorEmCentavos: 4590 },
    mouse: { nome: "Mouse MX Master 3", valorEmCentavos: 23000 },
    monitor: { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 },
};

function adicionarAoCarrinho(cliente, item, quantidade) {
    cliente.carrinho.push({ item: produtos[item], quantidade });
}

adicionarAoCarrinho(jose, 'tv', 1);
adicionarAoCarrinho(jose, 'caboUsb', 2);
adicionarAoCarrinho(jose, 'webcam', 1);

adicionarAoCarrinho(carlos, 'teclado', 2);

adicionarAoCarrinho(patricia, 'teclado', 1);
adicionarAoCarrinho(patricia, 'caboUsb', 2);
adicionarAoCarrinho(patricia, 'carregador', 1);
adicionarAoCarrinho(patricia, 'mouse', 1);
adicionarAoCarrinho(patricia, 'monitor', 1);

adicionarAoCarrinho(renato, 'webcam', 5);

adicionarAoCarrinho(roberto, 'webcam', 1);
adicionarAoCarrinho(roberto, 'caboUsb', 2);
adicionarAoCarrinho(roberto, 'monitor', 1);


console.log("Carrinho da Patricia:", patricia.carrinho);
console.log("Carrinho do Carlos:", carlos.carrinho);
console.log("Carrinho do Renato:", renato.carrinho);
console.log("Carrinho do José:", jose.carrinho);
console.log("Carrinho do Roberto:", roberto.carrinho);
