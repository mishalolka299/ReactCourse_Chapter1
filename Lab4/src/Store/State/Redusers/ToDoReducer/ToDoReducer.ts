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
        toDoList: state.toDoList?.map((toDo) =>
          toDo.id === action.payload.id ? action.payload : toDo
        ),
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
