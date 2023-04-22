# Especificações do Projeto

O problema a ser solucionado por este projeto, bem como os aspectos que deveriam ser abrangidos por ele foram estabelecidos a partir de um diálogo com especialistas em cirurgia vascular e áreas conexas nas quais a aplicação a ser desenvolvida pretende ser útil. Ainda como fruto dessa interlocução, foram levantados artigos de referência médica que devem garantir o manejo adequado dos parâmetros a serem utilizados pela aplicação. O perfil de usuário, suas necessidades e expectativas foram consolidadas sob a forma de personas e histórias de usuários conforme veremos a seguir.


## Personas

Mariana Silva, médica e coordenadora da equipe de amputações do Hospital João XXIII em Belo Horizonte, possui 37 anos de idade e atua como clínica geral, além de possuir especialização em cirurgia vascular.

Sander Batista é um médico com 41 anos de idade, cuja especialidade abrange ortopedia e cirurgia geral. Com uma vasta experiência em ambas as áreas. Com sua ampla expertise, Sander é um colaborador valioso em projetos relacionados à saúde e medicina.

Luiza Oliveira é uma médica de 26 anos de idade, que atualmente se dedica à residência em cirurgia vascular. Luiza está empenhada em aprimorar seus conhecimentos em cirurgia vascular, o que a torna uma profissional de destaque na área da saúde. 

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Mariana Silva       |Ser apresentada às perguntas que devo responder no sistema wifi.  |Para evitar que algum critério necessário seja deixado de lado.|
|Luiza Oliveira      |Cadastro médico para o histórico de avaliações dos pacientes.               |Possibilitar um registro e histórico de atendimento. |
|Sander Batista      |Agilizar o resultado do sistema wifi.|A velocidade no diagnóstico pode auxiliar o tratamento e conter danos à saúde do paciente. |
|Luiza Oliveira      |Aprender a utilizar o método wifi com segurança.|Para não ocasionar erro médico.|
|Mariana Silva       |Possibilidade de realizar anotações sobre particularidades de cada caso.|Para incluir informações relevantes ao diagnóstico, que extrapolem o método|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
