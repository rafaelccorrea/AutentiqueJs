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
    const folder = {
        folder: {
            name: dados.id_cliente + ' - ' + dados.chave
        }
    }

    return await api.folder.create(folder);

}

const moveDocumentsFolder = async (arquivo, assinatura) => {

    const folder = {
            documentId: assinatura.data.createDocument.id,
            folderId: arquivo.data.createFolder.id
    }
    
    return await api.folder.moveDocumentById(folder);
}

const listFolderAll = async () => {

    const folder = await api.folder.listAll(1);
    const result = folder.data.folders
    return { result };

};

//Inativo
const listFolderById = async (folder) => {
    const folderId = {
        folderId: folder.data.createFolder.id || folder
    }
    const folder = await api.folder.listById(folderId);
    return { folder };
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

    const folder = await api.folder.deleteById(deleteFolder)
    return { folder };
    
}

module.exports = {
    createDocument,
    listDocumentById,
    listDocumentAll,
    signDocument,
    createFolder,
    moveDocumentsFolder,
    listFolderById,
    deleteDocument,
    listFolderAll,
    deleteFolder
}
