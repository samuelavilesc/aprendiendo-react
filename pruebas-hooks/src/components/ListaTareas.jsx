import { useForm } from "../hooks/useForm"
import { useReducer } from "react"
const initialState = [{
    id: 1,
    tarea: 'Comprar pan',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Comprar leche',
    finalizada: false
}



const editarTarea = {
    type: '[Tarea] Editar Tarea',
    payload: nuevaTarea
}

const eliminarTarea = {
    type: '[Tarea] Eliminar Tarea',

}

const borrarTareas = {
    type: '[Tarea] Borrar Tareas',

}
const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[Tarea] Agregar Tarea':
            return [...state, action.payload]
        case '[Tarea] Finalizar Tarea':
            return state.map(tarea => tarea.id === action.payload ? {...tarea, finalizada: !tarea.finalizada} : tarea)
        case '[Tarea] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case '[Tarea] Borrar Tareas':
            return []
        default:
            return state;
    }
}




export const ListaTareas = () => {
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)
    const { tarea, formState, onInputChange } = useForm({ tarea: '' })
    const agregarTareaForm = (event) => {
        event.preventDefault()
        if(formState.tarea == '') return
        console.log(formState)
        const action = {
            type: '[Tarea] Agregar Tarea',
            payload: {
                id: new Date().getTime(),
                tarea: formState.tarea,
                finalizada: false
            }
        }
        dispatch(action)
    }
    const finalizarTarea = ({id}) => {    

        const action = {
            type: '[Tarea] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }
    const borrarTarea = ({id}) => {
        const action = {
            type: '[Tarea] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }
    const reset = () => {
        const action = {
            type: '[Tarea] Borrar Tareas'
        }
        dispatch(action)
    }
    return (
        <>
            <form onSubmit={agregarTareaForm}>
                <div className="form-group">
                    <label htmlFor="tarea">Tarea</label>
                    <input

                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingresa tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Añadir</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className="list-group">
            {tareasState.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between">
                    <span className="lead">{item.tarea}</span>
                    <div>
                        <input 
                        type="checkbox"
                        value={item.finalizada}
                        onChange={() => finalizarTarea(item)}
                    />
                    <button className="btn btn-danger"onClick={()=> borrarTarea(item)}>Borrar </button>
                    </div>
                </li>
            ))}
            </ul>
        </>
    )
}
