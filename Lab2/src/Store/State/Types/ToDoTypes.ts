export interface IToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface IToDoState {
  toDoList?: Array<IToDo> | undefined;
  currentToDo : IToDo | undefined
}

export enum ToDoActionTypes {
  TODO_ALL = "TODO_ALL",
  CREATE_TODO = "CREATE_TODO",
  EDIT_TODO = "EDIT_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export interface ToDoAllAction {
  type: ToDoActionTypes.TODO_ALL;
  payload: Array<IToDo>;
}
export interface CreateToDoAction {
  type: ToDoActionTypes.CREATE_TODO;
  payload: IToDo;
}
export interface EditToDoAction {
  type: ToDoActionTypes.EDIT_TODO;
  payload: IToDo;
}
export interface DeleteToDoAction {
  type: ToDoActionTypes.DELETE_TODO;
  payload: number;
}


export type ToDoActions = 
        | ToDoAllAction
        | CreateToDoAction
        | EditToDoAction
        | DeleteToDoAction

