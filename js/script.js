// SCROLL
$(document).ready(function(){
    $(".scroll_topo").hide();
    $(window).on('scroll', function() {
        

      if($(window).scrollTop() > 400) {
        $(".scroll_topo").show(); 
      }else{
        $(".scroll_topo").hide();
      }
  
    });    
  });


  //FORM
  function validaNome() {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = document.getElementById("nome").value;
    let campo = document.getElementById("nome");

    if (nome.match(letras)) {
        campo.style.backgroundColor = "";
    }
    else {
        campo.style.backgroundColor = "#F98091";
        
    }

}


function validaSobrenome() {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = document.getElementById("sobrenome").value;
    let campo = document.getElementById("sobrenome");

    if (nome.match(letras)) {
        campo.style.backgroundColor = "";
    }
    else {
        campo.style.backgroundColor = "#F98091";
        
    }

}

function validaTelefone(input){
    input.maxLength = 15;//propriedade maxlength adicionada ao campo por javascript
    setTimeout(//set timeout usado para atualização mais precisa
        function(){
            input.value = formataTelefone(input.value);//atualização do campo com seu valor formatado em formataTelefone()
        }
        ,1//atualização do campo a cada milisegundo
    );
}
function formataTelefone(value){
    value = value.replace(/\D/g,"");//Remove tudo o que não é dígito
    
    value = value.replace(/^(\d\d)(\d)/g,"($1) $2");//Coloca parênteses em volta dos dois primeiros dígitos
    
    if(value.length < 14) value = value.replace(/(\d{4})(\d)/,"$1-$2");//Número com 8 dígitos. Formato: (99) 9999-9999
    else value = value.replace(/(\d{5})(\d)/,"$1-$2");//Número com 9 dígitos. Formato: (99) 99999-9999
    
    return value;
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById("msgemail").style.backgroundColor = "";
    }
    else{
        document.getElementById("msgemail").style.backgroundColor = "#F98091";
    }
}

function exibirInfo() {
    
    let inputNome = document.getElementById("nome").value;
    let inputSobrenome = document.getElementById("sobrenome").value;
    let inputEmail = document.getElementById("msgemail").value;    
    let inputTelefone = document.getElementById("telefone").value;
    let inputs = document.getElementsByTagName("input");
    let ok;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].style.backgroundColor == "red" || inputs[i].value == "") {
            ok = false;
            break;
        }
        else {
            ok = true;
        }
    }
    if (ok) {
        divInfo.innerHTML = `enviado com sucesso`;
    }
    else {
        alert("Dados inválidos, por favor preencha corretamente.");
    }
}
