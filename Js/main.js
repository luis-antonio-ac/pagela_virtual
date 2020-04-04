// ALTERA O FORMULARIO DO PROFESSOR ENTRE AS OPÇÕES DE CADASTRO  E LOGIN
function alterarFormulario(tipo_formulario) {
    if(tipo_formulario === 'cadastrar') {  
        const formCadastro = `
            <form action="cadastrarProfessor.php" method="POST" class="form" id="formCadastrarProfessor">
                <div class="item">
                    <label for="cNome">Nome Completo</label>
                    <div class="campoEntrada">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                        <input type="text" id="cNome" name="tNome" placeholder="Meu Nome Completo"/>
                    </div>
                </div>
        
                <div class="item">
                    <label for="cEmail">E-mail</label>
                    <div class="campoEntrada">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="email" id="cEmail" name="tEmail" placeholder="meuemail@gmail.com"/>
                    </div>
                </div>
        
                <div class="item">
                    <label for="cSenha">Senha</label>
                    <div class="campoEntrada">
                        <i class="fa fa-key" aria-hidden="true"></i>
                        <input type="password" id="cSenha" name="tSenha" placeholder="minhasenha"/>
                    </div>
                </div>
        
                <div class="item">
                    <label for="cConfirmacao">Confirme sua senha</label>
                    <div class="campoEntrada">
                        <i class="fa fa-key" aria-hidden="true"></i>
                        <input type="password" id="cConfirmacao" name="tConfirmacao" onkeyup="validarSenha()" placeholder="minhasenha"/>
                    </div>
                </div>
        
                <div class="botoes">
                    <a href="#" class="btn" id="btnAlterarForm" onclick="alterarFormulario('login')">Voltar</a>
                    <button class="btn">Cadastrar</button>
                </div>
            </form>`
        
        // Insere os campos acima no formulario do professor
        document.querySelector('#contentProfessor').innerHTML = formCadastro;
    }

    if(tipo_formulario === 'login') {
        const formLogin = `
            <form action="loginProfessor.php" method="POST" class="form" id="formLoginProfessor">
                <div class="item">
                    <label for="cEmail">E-mail</label>
                    <div class="campoEntrada">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="email" id="cEmail" name="tEmail" placeholder="meuemail@gmail.com"/>
                    </div>
                </div>

                <div class="item">
                    <label for="cEmail">Senha</label>
                    <div class="campoEntrada">
                    <i class="fa fa-key" aria-hidden="true"></i>
                        <input type="password" id="cSenha" name="tSenha" placeholder="minhasenha"/>
                    </div>
                </div>

                <div class="botoes">
                    <a href="#" class="btn" id="btnAlterarForm" onclick="alterarFormulario('cadastrar')">Cadastrar-se</a>
                    <button class="btn">Entrar</button>
                </div>
            </form>`
        document.querySelector('#contentProfessor').innerHTML = formLogin;
        
        btnAlterarForm = document.querySelector('#btnAlterarForm');
        btnAlterarForm.setAttribute('onclick', 'alterarFormulario("cadastrar")');
    }
}

// VERIFICA SE AS DUAS SENHAS DIGITADAS SÃO IGUAIS
function validarSenha() {
    const campo_senha = document.querySelector('#cSenha');
    const campo_confirmacao = document.querySelector('#cConfirmacao');

    if(campo_senha.value === campo_confirmacao.value) {
        campo_senha.style.boxShadow = '1px 1px 1px #4bb543';
        campo_confirmacao.style.boxShadow = '1px 1px 1px #4bb543';
    }

    if(campo_senha.value !== campo_confirmacao.value) {
        campo_senha.style.boxShadow = '1px 1px 1px #fc100d';
        campo_confirmacao.style.boxShadow = '1px 1px 1px #fc100d';
    }
}