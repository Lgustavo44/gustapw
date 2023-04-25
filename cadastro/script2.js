const form = document.getElementById("cadastro-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const senha = document.getElementById("senha").value;
  const confirmaSenha = document.getElementById("confirmar").value;

  if (senha !== confirmaSenha) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return;
  }

  if ((senha, confirmaSenha <= 7)) {
    alert("Ambas as senhas precisam ter ter 8 caracteres ou mais!");
    alert("Cadastre sua senha novamente.");
    return;
  }

  document.querySelector("#button__form").addEventListener("click", (w) => {
    w.preventDefault();
    let login = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let confirmaSenha = document.querySelector("#confirmar").value;
    let numero = document.querySelector("#numero").value;
    let primeiroNome = document.querySelector("#primeiroNome").value;
    
    let sobreNome = document.querySelector("#sobreNome").value;
    salvar(login, senha, confirmaSenha, numero, primeiroNome, sobreNome);
  });

  function salvar(e, s, cs, n, pn, sb) {
    //verifica se tem dados no localstorage, senao, cria um vetor vazio
    let db = JSON.parse(localStorage.getItem("usuarios") || "[]");
    //crio um objeto
    let usuario = {
      id: db.length + 1,
      login: e,
      senha: s,
      confirmaSenha: cs,
      numero: n,
      primeiroNome: pn,
      sobreNome: sb,
    };
    //jogo o objeto usuario dentro do vetor
    db.push(usuario);
    //salvo no Localstorage agora um vetor que pode receber vários objetos
    localStorage.setItem("usuarios", JSON.stringify(db));
    location.href = "index.html";
  }
});


