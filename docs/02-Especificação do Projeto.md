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
|RF-001| A aplicação deve possuir um cadastro do médico. | ALTA | 
|RF-002|A aplicação deve exibir cada questão avaliada pelo método wifi com as opções de resposta pré-definidas em uma caixa de respostas anexa à questão.  | ALTA |
|RF-003|A aplicação deve exibir cada questionamento associado à caixa de respostas individualmente.|ALTA|
|RF004|A aplicação deve exibir ambos os resultados do método wifi (risco de amputação e estimativa de benefício de revascularização) em dois campos distintos com uma legenda que os identifique, em negrito e fonte maior que os outros textos.|ALTA|

### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|A aplicação deve ser disponibilizada via html.| ALTA | 
|RNF-002|O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.| ALTA | 
|RNF-003|O site deve ser compatível com os principais navegadores do mercado (google chrome, firefox, microsoft edge).|ALTA|

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 25/06/2023. |
|02|O aplicativo deve se restringir às tecnologias básicas da web no frontend. |
|03|A equipe não pode subcontratar o desenvolvimento do trabalho|


