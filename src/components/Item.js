import "./Item.css"
import { MdDelete,MdEditSquare } from "react-icons/md";
export default function Item(props){
    const {data,deleteTask,editTask} = props;
    return(
        <>
            <div className="list-item">
                <p>{data.title}</p>
                <div className="button-container"> 
                <MdDelete className="btn" onClick={()=>deleteTask(data.id)}/>
                <MdEditSquare className="btn" onClick={()=>editTask(data.id)}/>

                </div>
            </div>
        
        </>
    )
}