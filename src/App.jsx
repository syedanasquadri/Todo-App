import { useState } from "react"

const App = () => {
  const[Todos, setTodos] = useState([])
  const [inputVal, setinputVal] = useState("");
  function handleChange(e){
   setinputVal(e.target.value)
  }
  function AddTodo(){
    if(!inputVal.trim()){
      alert("first add something")
      return;
    }
    const newTodo = {
      text: inputVal,
      createdAt: new Date().toLocaleString()
    };

    setTodos([...Todos,newTodo]);
    setinputVal("");
  }
  // function DeleteTodo(index){
  //   const newArr=[Todos.filter((Todos) => Todos=!Todos.index)]
  //   setTodos([newArr])
  // }
  function DeleteTodo(index){
    setTodos(Todos.filter((_,i) => i!==index))
  }

  return <div>
    <h1>Todo</h1>
    <input
     type="text"
     onChange={handleChange}
     value={inputVal}
    />
    <button onClick={AddTodo}>Add</button>
    <ul>
      {Todos.map((todos,index) => 
      <li key={index}>{todos.text}{" "}{todos.createdAt}<button onClick={() => DeleteTodo(index)}>Delete</button></li>)}
    </ul>
  </div>
}

export default App