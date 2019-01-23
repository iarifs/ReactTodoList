/*Importing react files and 
our main css 
also Completed component form Completed.js
*/


import React ,{Component}from 'react';
import Todo from './Todo'
import Completed from './Completed'

/*creating TodoList class with es6 and extends from React component
and render Complete and exporting as a TodoList component*/

class TodoList extends Component{

    //declearign state and assign empty string in task value.
    state = {
        task:"",
        newTask:[],
        completeTask:[],
    }

    update = (event) => {
    
        this.setState({task:event.target.value})
    }

    dataSubmit = (e) => {

        e.preventDefault();
        this.setState(prevState => ({
            task :"",
            newTask :[{task:prevState.task},...prevState.newTask]
        }))

    }

   incompleteTask = (task) => {
    this.setState(prevState => ({
       newTask:prevState.newTask.filter(t => {
        return t!== task
       }),
       
    })) 
        
    }


   completedTask = (value) => {

    this.setState(prevState => ({
        completeTask:[...prevState.completeTask,{task:value.task}],
        newTask:prevState.newTask.filter(t => {
            return t!== value
           })
    }))

   }

render(){
    return(


             <div className = "wrapper">

                <h1 style ={{color:"#333398"}}>Create your  Todo list</h1>

                    <form onSubmit = {this.dataSubmit}>
                        <input type = "text"
                        name = "todo"
                        value = {this.state.task}
                        placeholder = "Start typing"
                        onChange = {this.update}
                        />
                        <button> + </button>
                    </form>
                    

                    <section style = {{borderColor:'#FF5049'}} className = "incompleteWrapper">
                    
                    <h3 style = {{color:'#FF5049'}} >Inomplete task</h3>
                    
                    {
                        this.state.newTask.map((elem,index) => 

                            <Todo 
                                key ={index}
                                value = {elem.task}
                                remove = {() => this.incompleteTask(elem)}
                                complete = {() => this.completedTask(elem)}
                             />
                        )
                    }
                    </section>


                    <section style = {{borderColor:'#28B9B5'}} className = "completeWrapper">
                   
                    <h3 style = {{color:'#28B9B5'}}>Completed task</h3>
                    {
                        this.state.completeTask.map ((elem,index) => 
                        
                        <Completed 
                            value = {elem.task}
                            key = {index} 
                        />
                        )
                    }
                    </section>
                    
            </div>
    )
}

}

export default TodoList;