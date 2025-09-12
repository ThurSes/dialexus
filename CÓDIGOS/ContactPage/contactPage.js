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
