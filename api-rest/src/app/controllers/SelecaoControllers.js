import conexao from "../database/conexao.js"
class SelecaoController{
    //Listar tudo
    async index(req,res){
        const row = await new SelecaoRepository().findAll()
        res.json(row)
    }
    

    //Listar por id
    show(req,res){

        const id = req.params.id
        const slq = "SELECT * FROM dbselecao.bdcopa WHERE id=?;"
        conexao.query(slq, id, (erro, resultado)=>{
        const linha = resultado[0]
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })
    }
    //Criar dados
    store(req, res) {const selecao = req.body
    const sql = "INSERT INTO dbselecao.bdcopa SET ?;"
    conexao.query(sql, selecao, (erro, resultado)=>{
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })}

    // Atualizar dados
    update(req, res) {const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE dbselecao.bdcopa SET ? WHERE id=?;"
        conexao.query(sql, [selecao, id], (erro, resultado)=>{
        const linha = resultado[0]
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })
    }

    // Remover dados
    delete(req, res){
        const id = req.params.id
    const sql = "DELETE FROM dbselecao.bdcopa WHERE id=?"
    conexao.query(sql, id, (erro, resultado)=>{
        const linha = resultado[0]
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })
}
    }

// Padrão singleton
export default new SelecaoController()

