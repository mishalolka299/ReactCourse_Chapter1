export interface IToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface IToDoState {
  toDoList: Array<IToDo>
  currentToDo?: IToDo
  isLoading: boolean
}
export interface IToDoDto {
  id: number
  title: string
}
export interface IToDoStatus {
  id: number
  completed: boolean
}

export enum ToDoActionTypes {
  GET_ALL_TODO = 'GET_ALL_TODO',
  CREATE_TODO = 'CREATE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  DELETE_TODO = 'DELETE_TODO',
  IS_LOADING_SET = 'IS_LOADING_SET',
  SET_CURRENT_TODO = 'SET_CURRENT_TODO',
  SET_STATUS_TODO = 'SET_STATUS_TODO',
}

export interface ToDoAllAction {
  type: ToDoActionTypes.GET_ALL_TODO
  payload: Array<IToDo>
}
export interface CreateToDoAction {
  type: ToDoActionTypes.CREATE_TODO
  payload: IToDo
}
export interface EditToDoAction {
  type: ToDoActionTypes.EDIT_TODO
  payload: IToDoDto
}
export interface SetStatusToDoAction {
  type: ToDoActionTypes.SET_STATUS_TODO
  payload: IToDoStatus
}
export interface SetCurrentToDoAction {
  type: ToDoActionTypes.SET_CURRENT_TODO
  payload: IToDo
}
export interface DeleteToDoAction {
  type: ToDoActionTypes.DELETE_TODO
  payload: number
}

export interface SetIsLoadingAction {
  type: ToDoActionTypes.IS_LOADING_SET;
  payload: boolean;
}

export type ToDoActions =
  | ToDoAllAction
  | CreateToDoAction
  | EditToDoAction
  | DeleteToDoAction
  | SetIsLoadingAction
  | SetCurrentToDoAction
  | SetStatusToDoAction
