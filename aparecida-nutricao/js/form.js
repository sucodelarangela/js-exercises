const botaoAdicionar = document.querySelector('#adicionar-paciente');

function obtemInfoPaciente(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };

  return paciente;
}

function montaTd(dado, classe) {
  let td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function montaTr(paciente) {
  let pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

botaoAdicionar.addEventListener('click', e => {
  // Prevenindo o comportamento padrão
  e.preventDefault();

  // Extraindo informações do paciente do form
  const form = document.querySelector('#form-adiciona');
  let paciente = obtemInfoPaciente(form);

  // Criando a tr e as tds do paciente
  let pacienteTr = montaTr(paciente);

  const tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);

  form.reset();
});
