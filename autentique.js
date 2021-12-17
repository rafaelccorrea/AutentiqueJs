const { default: api} = require('autentique-v2-nodejs')
const { criarServico } = require('../serviceHelper')

 api.token = process.env.AUTENTIQUE_TOKEN;
 api.url = process.env.URL;

 const token = {token: api.token}

exports.createAutentique = criarServico(
    async (conexao, dados) => {
        //Passar atributos como um objeto
        const attributes = {
            document: {
                name: 'Dev-Teste'
            },
            signers: [
                {
                    email: 'rafaelgustavocorrea@gmail.com',
                    action: 'SIGN'
                }
            ],
            file: 'https://cucafresca.blob.core.windows.net/cucafresca-apps-dev/contrato-modelo-web/1639503660539.pdf'
        };

        const signature = await api.document.create(attributes).then((response) => {
            return response
        }).catch(err => {
            const error = err.response.data
        });

        const result = signature

        return { result };
    },
    {
        onSucesso: 'Documento criado com sucesso!',
        onErroInterno: 'Erro ao criar Documento!'
    }
)

exports.listAutentiqueId = criarServico (

    async (conexao, dados) => {
        //Id Principal do documento
        const documentId = {
            documentId: 'f1b30b8c6c5df95728e2f0e764b7586a4a7567f3034146495'
        }

        const signature = await api.document.listById(documentId).then(res => {
            return res
        }).catch(err => {
            const error = err.response.data
        });
        const result = signature
        return { result };
    },
    {
        onSucesso: 'Documento consultado com sucesso!',
        onErroInterno: 'Erro ao consultar Documento!'
    }
)


exports.deleteDocument = criarServico (

    async (conexao, dados) => {

        const documentId = {
            documentId: 'f1b30b8c6c5df95728e2f0e764b7586a4a7567f3034146495'
        }

        const signature = await api.document.deleteById(documentId).then(res => {
            return res
        }).catch(err => {
            const error = err
        });
        console.log(signature)
        return { signature };
    },
    {
        onSucesso: 'Documento deletado com sucesso!',
        onErroInterno: 'Erro ao deletar Documento!'
    }
)

exports.signDocument = criarServico (

    async (conexao, dados) => {

        //Para assinar Documento necessita que o Token seja o do cliente que ira assinar o documento.
        const documentId = {
            documentId: '538887b01d4c551558622cf042be8a0d28d3354f54c93d916'
        }

        const signature = await api.document.signById(documentId).then(res => {
            return res
        }).catch(err => {
            const error = err
        });

        const result = signature
        return { result };
    },
    {
        onSucesso: 'Documento assinado com sucesso!',
        onErroInterno: 'Erro ao assinar Documento!'
    }

)

exports.listAll = criarServico (

    //Passar quantidade de paginas como parametro. (limit: 60)
    async (conexao, dados) => {

        const signature = await api.document.listAll(1).then((response)=> {
            return response
        }).catch(err => {
            return err
        });
        const result = signature

        return { result };
    },
    {
        onSucesso: 'Documentos Listados com sucesso!',
        onErroInterno: 'Erro ao listar Documentos!'
    }

)
