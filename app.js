
const { request, response, Router } = require('express')
const express = require('express')

const app = express()
const path = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); // un middleware, il analyse les requêtes entrantes avec des charges utiles codées en URL

const port = 3000
app.use(express.static('public'))
app.use(express.json())  // pour lire le fichier JSON dans le HTML

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const transactions = require ("./src/transaction")
const view = require ("./src/view")

//_____________________________________________________________________________________________________________________________

// route Get pour tous les transactions en JSON  //

app.get('/get-transactions', (request, response) => {
    console.log(request.query) 
    response.json(transactions.get_transactions())
})

// route Get pour tous les transactions en HTML //

app.get('/html/all-transactions', (request, response) => {
    const result_HTML = transactions.get_transactions()
    response.send(view.DisplayAllTransactions(result_HTML))
})

//  route Get un seul transaction en format JSON

app.get('/get-transaction/:id',(request,response)=>{
    let id = request.params.id

    if(id>=transactions.get_transactions().length){
        response.json({message:"Error transaction not found !!! "})
        return
    }
    response.json(transactions.get_transaction(id)) 
})

//  route Get un seul transaction en format HTML by id

app.get('/html/get-transaction/:id', (request,response)=>{
    let id = request.params.id
    if(id>=transactions.get_transactions().length){
        response.send({message:"Error transaction not found !!! "})
        return
    }
    let result_html = transactions.get_transaction(id) 
    response.send(view.DisplayTransaction(result_html))

})

// une route de type Post en format JSON avec Postman

app.post('/add_transaction', (request, response) => {
    transactions.new_transaction(
        request.body.nom_client,
        request.body.montant,
        request.body.date_execution,
        request.body.emetteur,
        request.body.destinataire)
  
    response.json("Transaction ajoutée avec succés!")
})

// une route de type Post recu du formulaire html 

app.post('/html/add-transaction',(request, response) => {

    const nom_client = request.body.nom_client
    const montant =  request.body.montant
    const date_execution =  request.body.date_execution
    const emetteur =  request.body.emetteur
    const destinataire =  request.body.destinataire

    transactions.new_transaction(nom_client,montant,date_execution,emetteur,destinataire)
    response.setHeader("Content-Type", "text/html")
    response.redirect('/html/all-transactions')
    response.status(200).send("Transaction ajoutée avec succés!")
})

// une route pour afficher le fomulaire d'ajout de transaction.html
app.get('/form-Add-Transaction',function(request,response){
    response.sendFile(path.join(__dirname+'/formulaire_transaction.html'));
})
