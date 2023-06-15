import React, {useState} from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {

    const [listToDo, SetListToDo]=useState([]);
    
    let addList=(inputText)=>{
       
        if(inputText!=='')
       SetListToDo([...listToDo,inputText]);

    }


    const deleteListItem=(key)=>{
 
        let newListTodo=[...listToDo]
         
        newListTodo.splice(key,1)

        SetListToDo(...newListTodo)

    }

  return (
     
     <div className='main-container'>
      <div className='center-container'>
       
       
       <TodoInput addList={addList}/>
       <h1 className='app-heading'>TODO</h1>
       <hr/>
       
       {listToDo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}


      </div>
     </div>


  )
}

export default App
