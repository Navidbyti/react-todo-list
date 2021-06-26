
import "./todoitem.css";

function TodoItem({id, isComplete, text ,removeTodo}) {
  let isChecked;
  
  

  
  return (
    <div className="todo-container">
      <p>TODO: {text}</p>
      <button onClick={() => {
         removeTodo(id);
         console.log(id)
      }}>Delete</button>
      <input
        type="checkbox"
        onChange={() => {
          isChecked = !isComplete;
        }}
        checked={isChecked}
      />
    </div>
  );
}

export default TodoItem;
