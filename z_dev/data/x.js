clientes_old=require('./clientes_old');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) +1;
}


let lista= clientes_old;

let listaCampos=['nombre','apaterno','amaterno','tel','origen'];
let listaFinal=lista.map(c=>{

  let model={};
  listaCampos.forEach(campo=>{
    model[campo]=c[campo]
  });

  let funelIndex= getRandomInt(4);

  model.email1=c.email;
  model.indicadores = {
    funelIndex
  };


  return model;
});

console.log(JSON.stringify(listaFinal));
