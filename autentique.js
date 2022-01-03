const { default: api} = require('autentique-v2-nodejs')

 api.token = process.env.AUTENTIQUE_TOKEN;
 api.url = process.env.URL;

 const createDocument = async (dadoscliente, url) => {

    const attributes = {
        document: {
            name: 'Contrato' + ' - ' + dadoscliente.razaosocial
        },
        signers: [
            {
                email: dadoscliente.email,
                action: 'SIGN'
            }
        ],
        file: url
    };
     return await api.document.create(attributes);

};

const listDocumentById = async (documento) => {

     const documentId = { documentId: documento }
     const contrato =  await api.document.listById(documentId);
     return { contrato };

};

const listDocumentAll = async () => {

    const contrato =  await api.document.listAll(10);
    return { contrato };

};

const signDocument = async (documento) => {

    const documentId = { documentId: documento }
    const contrato = await api.document.signById(documentId)
    return { contrato };

};

const createFolder = async (dados) => {
    const pasta = {
        folder: {
            name: dados.id_cliente + ' - ' + dados.chave
        }
    }

    return await api.folder.create(pasta);

}

const moveDocumentFolder = async (idFolder, assinatura) => {

    const pasta = {
            documentId: assinatura.data.createDocument.id,
            folderId: idFolder
    }
    
    return await api.folder.moveDocumentById(pasta);
}

const listAllFolders = async () => {

    const pasta = await api.folder.listAll(10);
    const result = pasta.data.folders
    return { result };

};

//Inativo
const listFolderById = async (folder) => {
    const folderId = {
        folderId: folder.data.createFolder.id || folder
    }
    const pasta = await api.folder.listById(folderId);
    return { pasta };
}


const deleteDocument = async (documento) => {
    
    const deleteDocument = {
        documentId: documento.id_documento
    }

    const contrato = await api.document.deleteById(deleteDocument)
    return { contrato };
    
}

const deleteFolder = async (folder) => {
    
    const deleteFolder = {
        folderId: folder.id_pasta
    }

    const pasta = await api.folder.deleteById(deleteFolder)
    return { pasta };
    
}

module.exports = {
    createDocument,
    listDocumentById,
    listDocumentAll,
    signDocument,
    createFolder,
    moveDocumentFolder,
    listFolderById,
    deleteDocument,
    listAllFolders,
    deleteFolder
}
