import React from 'react'
import Nav from "./components/Navbar"
import { useState } from 'react'
import {Footer} from "./components/Footer"
import { Todo } from './components/Todo' 
import { AddToDoItem } from './components/AddToDoItem'
function App() {

    const addToDo = (title,desc,date)=>{
        console.log(title,desc,date);
        const sno = tododisp.length+1
        Settododisp([...tododisp,{'Sno' : sno,
        'Task': title,
        'Desc': desc,
        'Date' : date}])
    }

    const Ondelete= (del_todo) => {
        Settododisp(tododisp.filter((e)=>{
            return (
                e !== del_todo
            )
        })
        )
        // if (tododisp.length == 1) {
        //     console.log("empty");
        // }
        // console.log(tododisp.);
    }
    
    // let tododisp = [
        const [tododisp,Settododisp] = useState([
        {
            'Sno' : 1,
            'Task': 'Complete react web page',
            'Desc':'Today isnt a great day but i hope to complete the task in time lets hope for the best',
            'Date' : 'Today'
        },
        {
            'Sno' : 2,
            'Task': 'Update my record',
            'Desc':'Today isnt a great day but i hope to complete the task in time lets hope for the best',
            'Date' : 'Tomorrow'
        }

    ])
    
    
    return (
        <div>
            <Nav title="Notes" SearchBar = {false}/>
            <AddToDoItem add = {addToDo}/>
            <Todo todotransfer = {tododisp} ondel ={Ondelete}/>
            <Footer/>
        </div>
        // <h1>hi</h1>
        
    )
}
export default App;


