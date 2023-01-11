/*---------------------------------------TRACCIA------------------------------------------

Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)

----------------------------------------------------------------------------------------*/

console.log('VUE OK', Vue);

const app = Vue.createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                {
                    task: 'Fare la spesa',
                    done: false,
                },
                {
                    task: 'Pulire la cucina',
                    done: false,
                },
                {
                    task: 'Riordinare documenti',
                    done: true,
                },
            ],
            doneFilter: false,
            notDoneFilter: false
        }
    },
    computed: {
        noAppliedFilters(){
            return !this.doneFilter && !this.notDoneFilter
        },
        doneFilteredArray(){
            return this.tasks.filter((task) => {
                return task.done
            })
        },
        notDoneFilteredArray(){
            return this.tasks.filter((task) => {
                return !task.done
            })
        }
    },
    methods:{
        clearTaskBox(){
            this.newTask = '';
        },
        clearAllTasks(){
            this.tasks = [];
        },
        addTask(){
            console.log('click');
            if(this.newTask) {
                const addedTask = {
                    task: this.newTask,
                    done: false
                }
                this.tasks.push(addedTask);
                this.clearTaskBox();
                this.$refs.input.focus();

            }
        },
        removeTask(i){
            this.tasks.splice(i, 1);
        },
        toggleDoneFilter(){
            this.doneFilter = !this.doneFilter;
        },
        toggleNotDoneFilter(){
            this.notDoneFilter = !this.notDoneFilter;
        }

    }
});

app.mount('#root');

