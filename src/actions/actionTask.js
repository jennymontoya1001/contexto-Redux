import { addDoc, collection, getDoc, getDocs, query, where } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { types } from "../types/types"

export const TaskAsincrono = (tarea) => {
    
    return async(dispatch) => {
        const newTask = {
            tarea,
        }
       // await addDoc(collection(db,"task"),newTask)
       console.log(newTask)
       dispatch(taskSincrono(newTask))
    }
}

export const taskSincrono = (tarea) => {
    return{
        type: types.task,
        payload: tarea
    }
}



export const TaskBuscar = (uid) => {
    
    return async() => {

            /*  const taskCollections = collection(db,"task");
             const q = query(taskCollections,where("usuario","==",uid))
             const datos = await getDocs(q);
             const tareas = [];
             datos.forEach((docu) => {
                 tareas.push(docu.data())
             })

             console.log(tareas); */
    }
}




