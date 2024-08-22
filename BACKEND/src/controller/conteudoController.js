const connection = require('../config/db')
// async function getConteudoById(request,reponse) {
//     const { id } = request.params;
 
//     const query = "SELECT * FROM conteudos WHERE id = ?";
 
//     connection.query(query, [id], (err, results) => {
//         if(results.length > 0) {
//             response.status(200).json({
//                 success: true,
//                 message:"Sucesso!",
//                 data: results[0]
//             })
//         } else {
//             response.status(400).json({
//                 success: false,
//                 message: "Restaurante não encontrado!"
//             })
//         }
//     });
// }

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