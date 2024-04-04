//AJOUT D UNE todoCard

//1. FAIRE FONCTIONNER LE BOUTON <<ADD A TASK>>

//ON CREE LA FONCTION D'AJOUT

const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");


//ON AJOUTE UN ECOUTEUR D EVENEMENT SUR LE BOUTON POUR APPELER UEN FONCTION AJOUT

addBtn.addEventListener('click', addTask); //add a task on click


function addTask(){
    const newTask = taskCard.cloneNode(true)  //clone the task card
    const newTestArea = newTask.querySelector('.task') //on définit la valeur de la zone pour qu'elle ne soit pas vide

    newTextArea.value = "New Task" //set new task text to "Nex Task"

  // tasksContainer.appendChild(newTask)  // append new task to the tasks container
}