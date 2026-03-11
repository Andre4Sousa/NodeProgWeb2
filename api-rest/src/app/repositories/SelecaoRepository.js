class SelecaoRepository {
    findAll() {
        const slq = "SELECT * FROM dbselecao.bdcopa;"
        return new Promise((resolve, reject) => {
            conexao.query(slq, (erro, resultado) => {
            if (erro) {
                return reject(erro)
            }else{
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            }
        })
        })
    }      
}     