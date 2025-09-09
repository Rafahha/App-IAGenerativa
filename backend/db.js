const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pitchcraft'
});

const initializeDatabase = () => {
    db.query(`CREATE DATABASE IF NOT EXISTS pitchcraft`, (err) => {
        if (err) throw err;
        console.log('Banco de dados criado ou já existe!');

        db.query(`USE pitchcraft`, (err) => {
            if (err) throw err;

            const createTablePitchsQuery = `
                CREATE TABLE IF NOT EXISTS pitchs (
                    id_pitch INT AUTO_INCREMENT PRIMARY KEY,
                    prompt VARCHAR(255),
                    pitch VARCHAR(255),
                    created_at DATETIME DEFAULT NOW()
                )
            `;
            db.query(createTablePitchsQuery, (err) => {
                if (err) throw err;
                console.log('Tabela de usuários criada ou já existe!');
            });
        });
    });
};

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
    initializeDatabase();
});

const queries = {
    createPitch: (pitch, callback) => {
        db.query('INSERT INTO pitchs (prompt, pitch) VALUES (?, ?)',
            [pitch.prompt, pitch.pitch], callback);
    },
};

module.exports = { db, queries };