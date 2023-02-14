const { findIndex, indexOf } = require("lodash");
var transactions = require ("./transaction")

function DisplayTransaction(get_transaction){
    let 
        result_HTML = `<html><head><style>
        h2{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            border: 2px solid #dcdcdc;
            border-radius: 10px;
            text-align: left;
            width: 88%;
            font-size: 120%;
            padding: 10px 20px;
            background-color: rgba(176, 185, 187, 0.963);
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 90%;
        }
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
          column-width: 120px;
        }
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        </style></head><body> <h2>Détails du transaction:</h2>`
        result_HTML += `<strong><a href ="/html/all-transactions">Retour à la Liste des transactions</a></strong><br>
        <table>
        <strong><br>
            <tr>
                <th>Nom Client</th>
                <th>Montant</th>
                <th>Date d'exécution</th>
                <th>Emetteur</th>
                <th>Déstinataire</th>
            </tr></table>`
            result_HTML += ` <table>
            <tr>
                 <td>${get_transaction.nom_client}</td>
                 <td>${get_transaction.montant} EUR</td>
                 <td>${get_transaction.date_execution}</td>
                 <td>${get_transaction.emetteur} </td>
                 <td>${get_transaction.destinataire}</td>
             </tr>
             </strong>
             </table>`
    
    return result_HTML;
}

function DisplayAllTransactions(get_transactions){
    let 
        result_HTML = `<html><head><style>
        h2{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            border: 2px solid #dcdcdc;
            border-radius: 10px;
            text-align: left;
            width: 88%;
            font-size: 120%;
            padding: 10px 20px;
            background-color: rgba(176, 185, 187, 0.963);
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 90%;
        }
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
          column-width: 120px;
        }
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        </style></head><body> <h2>Liste de toutes les transactions:</h2>`
        result_HTML += `<strong><a href ="/form-Add-Transaction">Ajouter une transaction</a></strong><br>
        <table>
        <strong><br>
            <tr>
                <th>Id</th>
                <th>Nom Client</th>
                <th>Montant</th>
                <th>Date d'exécution</th>
                <th>Emetteur</th>
                <th>Déstinataire</th>
                <th>Action</th>
            </tr></table>`
            get_transactions.map((element)=>{
           result_HTML += ` <table>
           <tr>
                <td>${get_transactions.indexOf(element)}</td>
                <td>${element.nom_client}</td>
                <td>${element.montant} EUR</td>
                <td>${element.date_execution}</td>
                <td>${element.emetteur} </td>
                <td>${element.destinataire}</td>
                <td><a href ="/html/get-transaction/${get_transactions.indexOf(element)}">Voir transaction</a></td>
            </tr>
            </strong>
            </table>`
        })
    
    return result_HTML;
}


module.exports = {DisplayTransaction, DisplayAllTransactions}