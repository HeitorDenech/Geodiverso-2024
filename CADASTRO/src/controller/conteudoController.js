// const connection = require('../config/db');

// async function storeConteudo(request, response) {
//     const query = "SELECT * FROM conteudo WHERE id = 1";

//     connection.query(query, (err, results) => {
//         if (err) {
//             response.status(400).json({
//                 success: false,
//                 message: "Erro ao executar a consulta.",
//                 error: err
//             });
//         } else {
//             response.status(200).json({
//                 success: true,
//                 message: "Consulta executada com sucesso.",
//                 data: results
//             });
//         }
//     });
// }

// module.exports = {
//     storeConteudo
// };











// const connection = require('../config/db');

// async function storeConteudo(request, response) {
//     const params = Array(
//         request.body.nome_conteudo,
//         request.body.descricao
//     );

//     const query = "INSERT INTO conteudo(nome_conteudo,descricao) VALUE(?,?)";

//     connection.query(query, params, (err, results) =>{
//         if (results) {
//             response
//                 .status(201)
//                 .json({
//                     success: true,
//                     message: "Sucesso!",
//                     data: results
//                 });
//         } else {
//             response
//                 .status(400)
//                 .json({
//                     success: false,
//                     message: "Ops! Não deu...",
//                     query: err.sql,
//                     sqlMessage: err.sqlMessage
//                 })
//         }
//     })
// }

// module.exports = {
//     storeConteudo
// }