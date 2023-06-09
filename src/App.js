import './App.css';
import Header from "./components/Header.js"
import Addform from "./components/AddForm.js"
import Item from "./components/Item.js"
import { useState,useEffect } from "react"

function App() {
  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem("tasks"))||[])

  const [title,setTitle]=useState("");

  const [editId,setEditID] = useState(null);
  
  const [theme,setTheme] = useState("light");

  //first useEffect
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  function deleteTask(id){
    const result = tasks.filter(item=>item.id !==id)
    setTasks(result)
  }
  function editTask(id){
    setEditID(id)
    const editTask = tasks.find((item)=>item.id === id)
    setTitle(editTask.title)
  }
  function saveTask(e){

    e.preventDefault();
    if(!title){
      alert("Please put text")
    }else if(editId){
     const updateTask = tasks.map((item)=>{
        //รายการใดมีีหะาตรงกับแก้ไข
        if(item.id === editId){
          return {...item,title:title}
        }
        return item;
      })
      setTasks(updateTask)
      setEditID(null)
      setTitle("")
    }else{
      //add newitem
      const newTask={
        id:Math.floor(Math.random()*1000),
        title:title
      }
      setTasks([...tasks,newTask])
      setTitle("")
    }
  }
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        <Addform title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
            {
              tasks.map((data)=>(
                <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
              ))
            }
        </section>
      </div>
    </div>
  );
}

export default App;
