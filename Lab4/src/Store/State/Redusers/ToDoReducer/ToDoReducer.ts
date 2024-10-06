import { IToDoState, ToDoActions, ToDoActionTypes } from '../../Types/ToDoTypes'

const initialState: IToDoState = {
  toDoList: [],
  currentToDo: undefined,
  isLoading: false,
}

const ToDoReducer = (state = initialState, action: ToDoActions): IToDoState => {
  switch (action.type) {
    case ToDoActionTypes.GET_ALL_TODO:
      return { ...state, toDoList: action.payload }
    case ToDoActionTypes.CREATE_TODO:
      return { ...state, toDoList: [action.payload, ...state.toDoList] }
    case ToDoActionTypes.EDIT_TODO:
      return {
        ...state,
        // currentToDo: action.payload,
        toDoList: state.toDoList?.map((toDo) =>
          toDo.id === action.payload.id ? {...toDo, title: action.payload.title } : toDo
        ),
      }
    case ToDoActionTypes.SET_STATUS_TODO:
      return {
        ...state,
        // currentToDo: action.payload,
        toDoList: state.toDoList?.map((toDo) =>
          toDo.id === action.payload.id ? {...toDo, completed: action.payload.completed } : toDo
        ),
      }
    case ToDoActionTypes.SET_CURRENT_TODO:
      return {
        ...state,
        currentToDo: action.payload
      }
    case ToDoActionTypes.DELETE_TODO:
      return {
        ...state,
        toDoList: state.toDoList?.filter((toDo) => toDo.id !== action.payload),
      }
    case ToDoActionTypes.IS_LOADING_SET:
      return { ...state, isLoading: action.payload };
    default:
      return state
  }
}

export default ToDoReducer
