Trabalhando com API autentique - GraphQL
IMPORTANTE
Os nomes dos atributos das variáveis deveram ser exatamente iguais para que o GraphQL
possa interpretar os parâmetros.

Sandbox com Plataforma Altair => https://altair.autentique.com.br/
Npm => npm i autentique-v2-nodejs
Repositório da biblioteca => https://github.com/thiagozampieri/autentique-v2-nodejs

- Configurações Iniciais
Para que a API possa funcionar corretamente a biblioteca informa, que devera ser instanciado
no arquivo .ENV os atributos Token, URL e caso queira realizar testes em sanbox instanciar
DEV_MODE

exemplo:

image.png

apos instanciar no arquivo .ENV os atributos deveram ser chamados no nosso serviço,
para que a biblioteca possa identificar o token existente.

image.png

caso não seja instanciado o token, a biblioteca automaticamente ira gerar um token default,
ocasionando divergência de Informacoes.

- Criando um documento
Para que possa ser criado um novo documento e necessário passar
alguns atributos obrigatórios em forma de objetos.

exemplo:

image.png

- Listando Documento Por Id
Para realizar a listagem de determinado documento e necessário passar para API
o id do documento que sera buscado via parâmetro, que devera estar dentro de
um objeto conforme a imagem abaixo nos mostra.

exemplo:

image.png

- Listando Todos os Documentos
Para que possa realizar a busca de todos os documentos e necessário que o token esteja
instanciado ja que a API buscara todos os documentos que estão vinculados com o token
passado.

A biblioteca deixa com o limite de paginas a serem exibidas apos a busca entre 1 a 60 paginas,
deixando como padrão o valor inicial de 1 pagina, caso não seja passado nenhum parâmetro.

exemplo:

image.png

- Assinar Documento
Para que o documento possa ser assinado via Api e necessário que seja passado via paramento o ID
do documento que devera ser assinado.

Porem para que seja possível assinar o documento e necessário que o token do assinante esteja instanciado,
ou seja so assinara o documento se o token de que vai assinar esteja ativo no sistema.

O id do documento que sera assinado devera ser passado em forma de objeto conforme o exemplo abaixo
nos mostra.

exemplo:

image.png

- Deletar Documento
Para que o documento possa ser Deletado e necessário que o id do documento seja passado como objeto,
via parâmetro para API conforme o exemplo abaixo nos mostra.

exemplo:

image.png

- Criar Pasta
Para que possa ser criado uma pasta na plataforma Autentique, e necessário enviar o atributo
name dentro de um objeto folder, e enviar via parâmetros para a API conforme o
exemplo abaixo nos mostra,

exemplo:

image.png

- Listar Todas as Pastas
Para que possa ser listada todas as pastas basta que o token esteja instanciado para que a API use como
base de busca.

Podendo passar como parâmetro também a quantidade de paginas que serão exibidas na API.

Exemplo:

image.png

- Listar Pastas Por ID
Para que possa buscar determinada pasta, e necessário que seja enviado via parâmetro
para a API o Id da pasta, que devera estar dentro de um objeto conforme o exemplo abaixo
nos mostra.

Exemplo:

image.png

- Deletando Pasta
Para que a pasta possa ser deletada e necessário que seja informado para a API o ID da pasta
que sera deletada, que devera estar dentro de um objeto conforme o exemplo abaixo nos mostra.

Ressaltando que somente a pasta sera deletada, caso haja documentos dentro da pasta, automaticamente
sera movido para a aba documentos dentro da plataforma Autentique.

image.png

- Mover Documentos Para Pastas.
Para que algum documento possa ser movido para determinada pasta, e necessário que seja passado 2 parâmetros
para a API, sendo eles o Id do documento que sera movido e o Id da pasta aonde o documento sera armazenado.

Os Ids deveram estar dentro de um objeto conforme o exemplo abaixo nos mostra.

exemplo:

image.png
