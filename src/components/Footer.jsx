import React from 'react';

export const Footer = () => {
  let styling={
    position:"relative",
    bottom:"0px",
    width : "100%"
  }
  return <div className='bg-dark text-light py -5' style={styling}>
    <p className='text-center'>Copyright &copy; MyTodoList.com</p>
    </div>
};
