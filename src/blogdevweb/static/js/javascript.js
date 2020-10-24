const cpf = document.querySelector("#cpf");


$(document).on('change', '[id$=cpf]', function() {
    cpf.addEventListener("blur", () => {
        let value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
        cpf.value = value;
    });

});