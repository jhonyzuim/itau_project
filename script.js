/*Código JavaScript criado por Jhony Zuim*/

function enviarDados(){
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var celular = document.getElementById("celular").value;
    var endereco = document.getElementById("endereco").value;
    var numero = document.getElementById("numero").value;

    if(nome.length < 6 || nome.length > 30)
        alert('Nome Inválido');
    else{
        if(cpf.length < 10)
            alert('CPF Inválido');
        else{
            if(celular.length < 10)
                alert('Celular Inválido');
            else{
                if(endereco.length < 4)
                    alert('Endereço Inválido');
                else{
                    if(numero.length < 1)
                        alert('Numero Inválido');
                    else
                        alert('Cadastro realizado com sucesso!')
                }
            }
        }
    }
}
