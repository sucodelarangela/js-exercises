let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  let tdPeso = paciente.querySelector('.info-peso');
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector('.info-altura');
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector('.info-imc');

  let pesoEhValido = validaPeso(peso);
  let alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }

  if (!alturaEhValida) {
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('paciente-invalido');
  }

  if (pesoEhValido && alturaEhValida) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 500) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 2.5) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
