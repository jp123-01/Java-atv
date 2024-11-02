const colors = require('colors')
const read = require('readline-sync')

let opcao
let lista = []

var nome = read.question('Digite seu nome: ')
console.clear();
console.log(`Olá, ${nome}!`.green)

do {
    opcao = parseInt(read.question(`Escolha uma das opções:\n [1] Inserir\n [2] Apagar\n [3] Listar\n [4] Sair\n`))

    console.clear()
    if (opcao < 1 || opcao > 4) {
        console.log('Opção inválida. Tente novamente.'.red)
        continue
    }

    switch (opcao) {
        case 1:
            console.clear()
            const inserir = read.question('Digite item da lista: ')
            lista.push(inserir)
            console.log('Item adicionado na lista:', inserir.green)
            break

        case 2:
            console.clear()
            const apagar = read.question('Digite o item que deseja apagar: ')
            const index = lista.indexOf(apagar)
            if (index !== -1) {
                lista.splice(index, 1)
                console.log(`Item "${apagar}" apagado da lista.`.green)
            } else {
                console.log(`Item "${apagar}" não encontrado na lista.`.red)
            }
            break

        case 3:
            console.clear
            if (lista.length === 0) {
                console.log('A lista está vazia.')
            } else {
                console.log('Itens listados:\n', lista)
            }
            break

        case 4:
            console.clear()
            console.log('Você escolheu a opção de Sair.'.blue)
            console.log('Saindo...')
            break
    }
} while (opcao !== 4)