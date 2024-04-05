//AJOUT D UNE todoCard

//1. FAIRE FONCTIONNER LE BOUTON <<ADD A TASK>>

//ON CREE LA FONCTION D'AJOUT

const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");


//ON AJOUTE UN ECOUTEUR D EVENEMENT SUR LE BOUTON POUR APPELER UNE FONCTION AJOUT

addBtn.addEventListener('click', addTask); //add a task on click


function addTask(){
    const newTask = taskCard.cloneNode(true)  //clone the task card
    const newTextArea = newTask.querySelector('.task')//on définit la valeur de la zone pour qu'elle ne soit pas vide

    newTextArea.value = "New Task"; //set new task text to "New Task"

    tasksContainer.appendChild(newTask)  // append new task to the tasks container
}

//SUPPRIMER UNE todoCard

//2. FAIRE FONCTIONNER LE BOUTON DE SUPPRESSION

//ON AJOUTE UN ECOUTEUR D EVENEMENT SUR LE BOUTON POUR APPELER UNE FONCTION SUPPRESSION

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click',function(){// Delete default task on click
 deleteTask(taskCard); //target the right task
});


//ON AJOUTE L ECOUTEUR D EVENEMENT SUR L ELEMENT CLONE DANS LA FONCTION AJOUT
//AFIN DE FAIRE FONCTIONNER LE BOUTON SUPPRESSION SUR LES NOUVELLES CARDS

function addTask(){
 const newTask = taskCard.cloneNode(true)// clone the task card
 const newDelBtn = newTasK.querySelector('.delBtn')
 const newTextArea = newTask.querySelector('.task')

 newTextArea.value = "New Task" //set new task text to "New Task"
 newDelBtn.addEventListener('click', function(){// add delete event listener to new task
 deleteTask(newTask); //target the new task
  });

  tasksContainer.appendChild(newTask) //append new task to the tasks container
  updateCount();
}


//ON CREE LA FONCTION DE SUPPRESSION

function deleteTask(task){
  task.remove(); //remove the task
}


  //FONCTION POUR METTRE A JOUR LE OOMPTEUR DE CARDS
    function updateCount(){ 
    const cardCounter = document.getElementById('cardCounter'); //Récupèration de la div cardCounter créée
    const tasks = document.querySelectorAll('.todoCard'); //to select all todoCards 
    const count = tasks.length; //to count the tasks
    cardCounter.textContent = `Total: ${count}`; //to display the number of tasks
    }

    //ON AJOUTE L ECOUTEUR D EVENEMENT SUR L ELEMENT CLONE DANS LA FONCTION AJOUT
    //AFIN DE FAIRE FONCTIONNER LE BOUTON SUPPRESSION SUR LES NOUVELLES CARDS
     function addTask(){ 
     const newTask = taskCard.cloneNode(true)// clone the task card
     const newDelBtn = newTask.querySelector('.delBtn')
     const newTextArea = newTask.querySelector('.task')

     newTextArea.value = "New Task" //set new task text to "New Task" 
     newDelBtn.addEventListener('click', function(){// add delete event listener to new task 
     deleteTask(newTask); //target the new task
     updateCount(); //UPDATE COUNTER
     });

     tasksContainer.appendChild(newTask) //append new task to the tasks container 
     updateCount();//UPDATE COUNTER
    }
    
    function deleteTask(task){
        task.remove(); //remove the task
        updateCount(); //UPDATE COUNTER
      }


   

       