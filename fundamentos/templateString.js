const dia = '03/02/2022';
const nomeAluno = 'Shara';
const sobreNomeAluno = 'Jane';
const curso = 'Arquitetura';
const semestre = 3;
const motivo = 'Falta de interesse';
const subMotivo = 'Não gostar de curso';

// Concatenação
const relatorioDeSolicitacaoConcatenado = 'No dia' + ' ' + dia + ' ' + 'o aluno' + ' ' + nomeAluno + ' ' + sobreNomeAluno + ' ' + 'cursando o curso de' + ' ' + curso + 'do semestre' + ' '+ semestre
    + ' ' + 'quis trancar o curso pelo motivo'
    + motivo + ' ' + 'submotivo' + ' ' + subMotivo + ' ' 
    + '. Esse relatório esta sendo enviado no dia da solicitação do aluno' + ' ' + dia + '.'; 

    console.log('Isso é uma concatenação:' + ' ' + relatorioDeSolicitacaoConcatenado);
    
// Template String
const relatorioDeSolicitacaoTemplateString = `No dia ${dia} o aluno ${nomeAluno} ${sobreNomeAluno} cursando o curso de ${curso} do semestre ${semestre} quis trancar o curso pelo motivo ${motivo} submotivo ${subMotivo}. Esse relatório esta sendo enviado no dia da solicitação do aluno ${dia}.`

console.log(`Isso é uma template string ${relatorioDeSolicitacaoTemplateString}`);