function comboboxLang() {
  const select = document.getElementById("language");

  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = `${lang.name}`;
    select.appendChild(option);
  });
}