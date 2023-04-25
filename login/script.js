document.querySelector("#logar").addEventListener("click", (e) => {
  e.preventDefault();
  entrar();
});

function entrar() {
  // capturando os dados do login e senha
  let usuario = document.querySelector("#email");
  let senha = document.querySelector("#senha");
  let confirmaSenha = document.querySelector("#confirma-senha");

  // vetor vazio
  let listaUser = [];
  // crio um objeto vazio
  let usuarioValido = {
    login: "",
    senha: "",
    confirmaSenha: "",
  };
  // recebendo o vetor de objetos
  listaUser = JSON.parse(localStorage.getItem("usuarios"));
  // vai varrer todos os itens
  listaUser.forEach(elemento => {
    // capturar o usuario
    if (
      usuario.value === elemento.login &&
      senha.value === elemento.senha &&
      confirmaSenha.value === elemento.confirmaSenha
    ) {
      usuarioValido = {
        id: elemento.id,
        login: elemento.login,
        senha: elemento.senha,
        confirmaSenha: elemento.confirmaSenha,
      };
    }
  });
  if (
    usuario.value === usuarioValido.login &&
    senha.value === usuarioValido.senha &&
    confirmaSenha.value === usuarioValido.confirmaSenha
  ) {
    alert("Login realizado!");
    alert("Seja bem vindo!");
    saveSession(usuarioValido.id);
    window.location.href = "dash.html";
  } else {
    alert("Usuario não cadastrado!");
    alert("Por favor faça o cadastro acessando o link a baixo!");
  }
}

function saveSession(data) {
  if (saveSession) {
    localStorage.setItem("session", data);
  }
  sessionStorage.setItem("logado", JSON.stringify(data));
}

const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const handleChange = () => {
  const [usuario, senha, confirmaSenha] = inputs;

  if (
    usuario.value &&
    confirmaSenha.value.length >= 8 &&
    senha.value.length >= 8
  ) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};
/**Adição de eventos
O terceiro bloco de código adiciona ouvintes de eventos para cada campo de entrada no formulário de cadastro. 
Isso garante que as funções de manipulação definidas anteriormente sejam chamadas quando o usuário interagir com o formulário.
 O código usa o método forEach() para percorrer cada elemento de entrada e adicionar os ouvintes de eventos necessários. 
 
 
 
  if (senha !== confirmaSenha) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return;
  }*/

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
inputs.forEach((input) => input.addEventListener("input", handleChange));
