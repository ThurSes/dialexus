function enviarForm() {
  const form = document.getElementById("formContato");
  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/street.communication67@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          title: "Obrigado pela mensagem!",
          icon: "success",
        });
      } else {
        throw new Error("Erro no envio");
      }
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
      });
    });
}

const btnHamburguer = document.getElementById("hamburguer");
const icon = document.getElementById("hamburguer-icon");
const navList = document.getElementById("nav-list");

btnHamburguer.addEventListener("click", () => {
  navList.classList.toggle("show");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});