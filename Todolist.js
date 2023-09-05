import React from 'react';
import Dolist from './Dolist';
import Donelist from './Donelist';
let todoarr=[ {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }]
class Todolist extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={todoarr:todoarr}
    }
    getDoItems =()=>
    {
      return this.state.todoarr.filter((todo)=>todo.completed===false)
    }
    getDoneItems =()=>
    {
       return this.state.todoarr.filter((todo)=>todo.completed!=false)
    }
    render()
    {
        return(<>
          <Dolist doitem={this.getDoItems()}></Dolist>
          <Donelist doneitem={this.getDoneItems()}></Donelist>

        </>)
    }
}
export default Todolist