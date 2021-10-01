const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const mensagem = document.getElementById('mensagem')
const resposta = document.getElementById('resposta')
const enviar = document.getElementById('enviar')
const telefone = document.getElementById('telefone')

enviar.onclick = event = () => {

  if (
    !validarMensagem() |
    !validarTelefone() |
    !validarEmail() |
    !validarSobrenome() |
    !validarNome()
  )
    return

  resposta.textContent = 'Mensagem enviada com sucesso, logo entraremos em contato.'
  nome.value = ''
  sobrenome.value = ''
  telefone.value = ''
  email.value = ''
  mensagem.value = ''
  nome.focus()
  resposta.className = 'success'
}

function validarNome() {
  nome.value = nome.value.trim()

  if (!nome.value) {
    resposta.textContent = 'Campo nome é obrigatório!'
    resposta.className = 'error'
    nome.classList.add('error')
    nome.focus()
    return false
  }

  const regex = /^([a-z]{2,})$/gi

  if (!regex.test(nome.value)) {
    resposta.textContent = 'Formato de nome inválido!'
    resposta.className = 'error'
    nome.classList.add('error')
    nome.focus()
    return false
  }

  nome.classList.remove('error')
  return true
}

function validarSobrenome() {
    sobrenome.value = sobrenome.value.trim()
  
    if (!sobrenome.value) {
      resposta.textContent = 'Campo sobrenome é obrigatório!'
      resposta.className = 'error'
      sobrenome.classList.add('error')
      sobrenome.focus()
      return false
    }
  
    const regex = /^([a-z]{2,})$/gi
  
    if (!regex.test(sobrenome.value)) {
      resposta.textContent = 'Formato de sobrenome inválido!'
      resposta.className = 'error'
      sobrenome.classList.add('error')
      sobrenome.focus()
      return false
    }
  
    sobrenome.classList.remove('error')
    return true
  }
function validarEmail() {
  email.value = email.value.trim()

  if (!email.value) {
    resposta.textContent = 'Campo e-mail é obrigatório!'
    resposta.className = 'error'
    email.classList.add('error')
    email.focus()
    return false
  }

  // Utilização de expressões regulares (ou RegEx).
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

  if (!regex.test(email.value)) {
    resposta.textContent = 'Formato de e-mail inválido!'
    resposta.className = 'error'
    email.classList.add('error')
    email.focus()
    return false
  }

  email.classList.remove('error')
  return true
}
function validarTelefone() {
  telefone.value = telefone.value.trim()

  if (!telefone.value) {
    resposta.textContent = 'Campo telefone é obrigatório!'
    resposta.className = 'error'
    telefone.classList.add('error')
    telefone.focus()
    return false
  }

  // Utilização de expressões regulares (ou RegEx).
  const regex = /[1-9]{2}[9]{0,1}[6-9]{1}[0-9]{3}[0-9]{4}/gi

  if (!regex.test(telefone.value)) {
    resposta.textContent = 'Formato de telefone inválido!'
    resposta.className = 'error'
    telefone.classList.add('error')
    telefone.focus()
    return false
  }

  email.classList.remove('error')
  return true
}



function validarMensagem() {
  mensagem.value = mensagem.value.trim()

  if (!mensagem.value) {
    resposta.textContent = 'Campo mensagem é obrigatório!'
    resposta.className = 'error'
    mensagem.classList.add('error')
    mensagem.focus()
    return false
  }

  if (mensagem.value.length < 50) {
    resposta.textContent = 'Informe ao menos 50 caracteres!'
    resposta.className = 'error'
    mensagem.classList.add('error')
    mensagem.focus()
    return false
  }

  mensagem.classList.remove('error')
  return true
}

