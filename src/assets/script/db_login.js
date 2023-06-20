// declara um conjunto inicial de contatos
var db_login_inicial = {
    "data": [
        {
            "nome": "Sander Batista",
            "CRM": "123456",
            "email": "sanderbatista@abc.com",
            "senha": "password"
        },
        {
            "nome": "Mariana Silva",
            "CRM": "654321",
            "email": "marianasilva@abc.com",
            "senha": "0000"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_usuario'));
if (!db) {
    db = db_contatos_inicial
};

function insertContato(usuario) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "nome": usuario.nome,
        "email" : usuario.email,
        "CRM": usuario.CRM,
        "senha": usuario.senha        
    };
}