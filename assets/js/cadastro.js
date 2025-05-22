'use strict'

const cadastroSection = document.querySelector('.cadastro-section');

// Cria o título


const title = document.createElement('h2');
title.textContent = 'Cadastre-se!';
cadastroSection.appendChild(title);

// Cria o parágrafo de descrição
const description = document.createElement('p');
description.textContent = 'VENHA CONFERIR AS MELHORES RECEITAS!.';
cadastroSection.appendChild(description);

// Cria o formulário
const form = document.createElement('form');

// Cria campos do formulário

// Campo Email
const emailGroup = document.createElement('div');
emailGroup.classList.add('input-group');
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'E-mail';
const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'E-mail';
emailGroup.appendChild(emailInput);
emailGroup.appendChild(emailLabel);
form.appendChild(emailGroup);

// Campo Nome
const nomeGroup = document.createElement('div');
nomeGroup.classList.add('input-group');
const nomeInput = document.createElement('input');
nomeInput.type = 'text';
nomeInput.id = 'nome';
nomeInput.placeholder = 'Nome Completo';
const nomeLabel = document.createElement('label');
nomeLabel.setAttribute('for', 'nome');
nomeLabel.textContent = 'Nome Completo';
nomeGroup.appendChild(nomeInput);
nomeGroup.appendChild(nomeLabel);
form.appendChild(nomeGroup);

// Campo Senha
const senhaGroup = document.createElement('div');
senhaGroup.classList.add('input-group');
const senhaInput = document.createElement('input');
senhaInput.type = 'password';
senhaInput.id = 'senha';
senhaInput.placeholder = 'Senha';
const senhaLabel = document.createElement('label');
senhaLabel.setAttribute('for', 'senha');
senhaLabel.textContent = 'Senha';
senhaGroup.appendChild(senhaInput);
senhaGroup.appendChild(senhaLabel);
form.appendChild(senhaGroup);

// Campo Senha de Recuperação
const senhaRecuperacaoGroup = document.createElement('div');
senhaRecuperacaoGroup.classList.add('input-group');
const senhaRecuperacaoInput = document.createElement('input');
senhaRecuperacaoInput.type = 'password';
senhaRecuperacaoInput.id = 'senhaRecuperacao';
senhaRecuperacaoInput.placeholder = 'Senha de Recuperação';
const senhaRecuperacaoLabel = document.createElement('label');
senhaRecuperacaoLabel.setAttribute('for', 'senhaRecuperacao');
senhaRecuperacaoLabel.textContent = 'Senha de Recuperação';
senhaRecuperacaoGroup.appendChild(senhaRecuperacaoInput);
senhaRecuperacaoGroup.appendChild(senhaRecuperacaoLabel);
form.appendChild(senhaRecuperacaoGroup);


const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Cadastre-se';
form.appendChild(submitButton);

// Adiciona o formulário à seção
cadastroSection.appendChild(form);

// Cria elemento para exibir mensagens de erro
const errorMessage = document.createElement('p');
errorMessage.style.color = 'red';
errorMessage.style.display = 'none';
cadastroSection.appendChild(errorMessage);

// Cria o link "Já tem um login? Faça login"
const loginLink = document.createElement('p');
loginLink.innerHTML = 'Já tem um? <a href="../index.html">login</a>';
cadastroSection.appendChild(loginLink);