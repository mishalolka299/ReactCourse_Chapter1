import { IToDoState, ToDoActions, ToDoActionTypes } from '../../Types/ToDoTypes';

const initialState: IToDoState = {
  toDoList: [],
  currentToDo: undefined,
}

const ToDoReducer = (state = initialState, action: ToDoActions): IToDoState => {
  switch (action.type) {
    case ToDoActionTypes.TODO_ALL:
      return { ...state, toDoList: action.payload }
    case ToDoActionTypes.CREATE_TODO:
      return { ...state, toDoList: [ action.payload ,...(state.toDoList || [])] };
    case ToDoActionTypes.EDIT_TODO:
      return {
        ...state,
        toDoList: state.toDoList?.map((toDo) => (toDo.id === action.payload.id ? action.payload : toDo)) || [],
      };
    case ToDoActionTypes.DELETE_TODO:
      return {
        ...state,
        toDoList: state.toDoList?.filter((toDo) => toDo.id !== action.payload) || [],
      };
    default:
      return state
  }
}

export default ToDoReducer


