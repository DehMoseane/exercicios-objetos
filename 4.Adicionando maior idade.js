const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];
for (const usuario of usuarios) {
    if (usuario.idade > 17) {
        usuario.maior_Idade = true;
    } else {
        usuario.maior_Idade = false;
    }
}
console.log(usuarios);

