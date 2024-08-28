const connection = require('../config/db')

async function getConteudo(request, response) {
    let query = "SELECT * FROM conteudos;";

    connection.query(query, (err, results) => {
        console.log(err, results)
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "S",
                    data: results
                })
        }
    })
}

module.exports = {
    // getConteudoById,
    getConteudo
}