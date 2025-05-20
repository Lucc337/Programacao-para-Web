function getIndexView(req, res){
    res.render('index.html', {dados_consulta: {}, campos_invalidos: [], form_invalido: false});
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let { campos_invalidos, form_invalido } = validarRequisicaoAgendamentoConsulta(dados_consulta);

    if (form_invalido) {
        return res.render('index.html', { campos_invalidos, form_invalido, dados_consulta });
    }

    // Aqui você pode salvar os dados no banco, enviar email, etc.
    // Por enquanto, só retornamos uma mensagem simples de sucesso.

    res.send(`<h2>Consulta agendada com sucesso para ${dados_consulta.nome} ${dados_consulta.sobrenome}!</h2>
              <p>Data e hora: ${dados_consulta.data_consulta} ${dados_consulta.hora_consulta}</p>
              <a href="/">Voltar</a>`);
}

function validarRequisicaoAgendamentoConsulta(dados_consulta){
    let campos_invalidos = [];
    let form_invalido = false;

    function validarCampo(campo, nomeCampo){
        if (!campo || campo.trim().length === 0) {
            campos_invalidos.push(nomeCampo);
            form_invalido = true;
        }
    }

    validarCampo(dados_consulta.nome, "Nome");
    validarCampo(dados_consulta.sobrenome, "Sobrenome");
    validarCampo(dados_consulta.cpf, "CPF");
    validarCampo(dados_consulta.data_nascimento, "Data de nascimento");
    validarCampo(dados_consulta.telefone, "Telefone");
    validarCampo(dados_consulta.cep, "CEP");
    validarCampo(dados_consulta.endereco, "Endereço");
    validarCampo(dados_consulta.clinica, "Clínica");
    validarCampo(dados_consulta.especialidade, "Especialidade");
    validarCampo(dados_consulta.data_consulta, "Data da consulta");
    validarCampo(dados_consulta.hora_consulta, "Hora da consulta");

    if (dados_consulta.data_consulta && dados_consulta.hora_consulta) {
        const dataHoraConsulta = new Date(`${dados_consulta.data_consulta}T${dados_consulta.hora_consulta}`);
        const agora = new Date();

        if (dataHoraConsulta <= agora) {
            campos_invalidos.push("Data/Hora da consulta (não pode ser no passado)");
            form_invalido = true;
        }
    }

    return { campos_invalidos, form_invalido };
}

module.exports = {
    getIndexView,
    postAgendarConsulta
};
