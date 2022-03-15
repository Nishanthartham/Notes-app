import React from 'react';

function TodoItem({ todo,onDelete }) {
  let box = {
    border : "solid 5px cyan ",
  }
  return <div>

    <div className='container bg-primary mb-3' style={box} >
      {/* Unpacking */}
      <h3>{todo.Sno}.){' '}{todo.Task}</h3>
      <p>{todo.Desc}</p>
      <h4 className='mb-3'><strong>Time :</strong>{todo.Date}</h4>
      <button className='btn btn-danger mb-3' onClick={()=>onDelete(todo)}>delete</button>
    </div>
  </div>;
}

export default TodoItem;
