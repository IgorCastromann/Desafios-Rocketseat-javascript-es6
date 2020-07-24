//========================módulo 1=====================================
//===========================1========================================

// class Usuario{
//     constructor(email, senha){
//         this.email = email
//         this.senha = senha
//     }
//     isAdmin(){
//         return this.admin === true
//     }
// }

// class Admin extends Usuario{
//     constructor(){
//         super()
    
//         this.admin = true

      
//     }
// }




// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

// //===========================2========================================

// const usuarios = [
//  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];
// //===========================2.1========================================

// var mapa = usuarios.map((mapeado) => {return mapeado.idade})
// console.log(mapa)
// //===========================2.2========================================

// var seleciona = usuarios.filter((select) => {return select.idade > 18 && select.empresa.includes('Rocketseat')})
// console.log(seleciona)
// // //===========================2.3========================================

// var busca = usuarios.find((seek) => {return seek.empresa.includes('Google')})
// console.log(busca)

// // //===========================2.4========================================


// var novo = usuarios.map((map) => {return ({...map, idade: map.idade *2})})
// var novoFiltro = novo.filter((nuevo) => {return nuevo.idade < 51})
// console.log(novo)
// console.log(novoFiltro)


 //===========================3========================================

// // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(item => {
//  console.log(item + 10);
// });

// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// var cepoDeMadeira = (usuario) => {
//  return usuario.idade;
// }

// console.log(cepoDeMadeira(usuario))
// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// var mostraUsuario = (nome = 'Diego', idade = 18) => {
//  return { nome, idade };
// }
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// // 3.4
// const promise = () => {
//  return new Promise((resolve, reject) => {
//  return resolve();
//  })
// }
 //===========================4========================================

 //===========================4.1========================================
// const empresa = {
//  nome: 'Rocketseat',
//  endereco: {
//  cidade: 'Rio do Sul',
//  estado: 'SC',
//  }
// };

// var {nome, endereco:{cidade, estado}} = empresa


// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

 //===========================4.2========================================
// 4.2 Desestruturação em parâmetros
// Na seguinte função:
// function mostraInfo(usuario) {
//     var {nome, idade} = usuario
   
//  return `${nome} tem ${idade} anos.`;
// }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

 //===========================5========================================

// Utilizando o operador de rest/spread (...) realize as seguintes operações:
 //===========================5.1========================================

// const arr = [1, 2, 3, 4, 5, 6]

// var [x, ...y] = arr
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// // Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// // // function soma...
// function soma (...banana){
//    return banana.reduce((total, next) =>{ return total + next})
   
// }
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

 //===========================5.2========================================

// const usuario = {
//  nome: 'Diego',
//  idade: 23,
//  endereco: {
//  cidade: 'Rio do Sul',
//  uf: 'SC',
//  pais: 'Brasil',
//  }
// };


// var usuario2 = {...usuario, nome:'Gabriel'}
// var usuario3 = {...usuario, nome:'Lontras'}

// console.log(usuario2)
// console.log(usuario3)



 //===========================6========================================

// const usuario = 'Diego';
// const idade = 23;

// console.log(`O usuário ${usuario} possui ${idade} anos`)

 //===========================7========================================

// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//  nome,
//  idade,
//  cidade: 'Rio do Sul',
// };
// console.log(usuario)


// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//  nome,
//  idade,
//  cidade: 'Rio do Sul',
// };
// console.log(usuario)


//=============================================modulo 2======================================
//==============================================1.1 / 1.2/ 1.3============================================

// import ClasseUsuario, { idade as IdadeUsuario } from './funcoes'

// console.log(ClasseUsuario.info())
// console.log(IdadeUsuario)
 
//=============================================modulo 3======================================


// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// async function umPorSegundo() {

//     await delay()
//         console.log('1s');
//     await delay()
//         console.log('2s');
//     await delay()
//         console.log('3s');

// }
// umPorSegundo();

//=====================================deixar aberto sem comentar======================================

// import axios from 'axios';

//====================================================================================================

// async function getUserFromGithub(user) {
//    const response = await axios.get(`https://api.github.com/users/${user}`)
//    try{
//     console.log(response.data);
//    }catch(err){
//     console.log('Usuário não existe');
//    }

// }


// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');
//===============================================================================================================

// class Github {
//     static async getRepositories(repo) {
//     const response = await axios.get(`https://api.github.com/repos/${repo}`)
//         try{
//             console.log(response)
//         }catch(err){
//             console.log('Repositório não existe')
//         }
//     }
//    }
//    Github.getRepositories('rocketseat/rocketseat.com.br');
//    Github.getRepositories('rocketseat/dslkvmskv');

//=================================================================================================================
// const buscaUsuario =  async (user) => {
//   const response = await axios.get(`https://api.github.com/users/${user}`)
//     try{
//         console.log(response.data)
//     } catch(err){
//         console.log('Usuário não existe')
//     }

// }
// buscaUsuario('diego3g');




