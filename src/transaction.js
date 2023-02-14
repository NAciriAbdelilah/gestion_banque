let lodash = require ("lodash") 
const displayHTML = require ("./view")

var tab_transaction = [
    {nom_client: "karim", montant : 1000, date_execution: "12/02/2020", emetteur:"TOUDUI", destinataire: "KAOUTAR"},
    {nom_client: "Reda",montant : 2300, date_execution: "11/05/2021", emetteur:"GEORGE", destinataire: "DALOU"},
    {nom_client: "Samira",montant : 100, date_execution: "17/03/2021", emetteur:"FILOU", destinataire: "MOUAD"},
    {nom_client: "laurant",  montant : 1030, date_execution: "22/11/2022", emetteur:"TAOULI", destinataire: "OUSSAMA"},
    {nom_client: "mamadou",montant : 35, date_execution: "30/04/2022", emetteur:"HICHAM", destinataire: "QUASSI"},
    {nom_client: "youssef",montant : 230, date_execution: "09/03/2022", emetteur:"BOB", destinataire: "RIMAY"},
    {nom_client: "Dakir",montant : 2600, date_execution: "10/02/2023", emetteur:"TITA", destinataire: "VICTORE"}
]

function get_transactions(){
    
    return tab_transaction
}

function get_transaction(transaction_number){

    return tab_transaction[transaction_number]
}

function new_transaction(nom_client, montant, date_execution, emetteur, destinataire){

    let newtransact =  {nom_client: nom_client, montant : montant, date_execution: date_execution, emetteur: emetteur, destinataire: destinataire}
    tab_transaction.push(newtransact)
}

module.exports = {get_transactions,get_transaction,new_transaction}