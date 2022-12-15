function enviar_msg() {
  let nome = document.getElementById("nomeid").value;

  let msg = document.getElementById("msgcontato").value;

  let win = window.open(`https://wa.me/5561981803923?text=Olá,%20meu%20nome%20é:%20${nome}.%20${msg}`, '_blank');
}