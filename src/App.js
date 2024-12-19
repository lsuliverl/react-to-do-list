import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    const deleteBtn = (index) => {
        setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    };
    console.log(toDos);
    console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
    return (
        <div>
            <h1>나의 To Do 리스트 ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
                <button>추가</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteBtn(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;
