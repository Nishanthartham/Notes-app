import React from 'react';
import TodoItem from './TodoItem';

export const Todo = (props) => {
  return <div>
      <p>hello this is from to do</p>
      {/* {props.todotransfer} */}
      {/* packing */}
      <h2 className='text-center my-3'>To do List</h2>
      {props.todotransfer.length === 0?
      // <span style={{color: "red"}}>All of them are deleted</span>
      <span className='text-danger'>All of them are deleted</span>
      :
      props.todotransfer.map((todo_map) => {
      return (
      <TodoItem todo = {todo_map} onDelete = {props.ondel}/>
      )
      })}
      {/* <TodoItem todo = {props.todotransfer[1]}/> */}
  </div>
};
