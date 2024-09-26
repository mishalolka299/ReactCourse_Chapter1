import axios from 'axios'
import { Dispatch } from 'react'
import { store } from '../../Store'
import {
  CreateToDoAction,
  DeleteToDoAction,
  EditToDoAction,
  IToDo,
  SetIsLoadingAction,
  ToDoActionTypes,
  ToDoAllAction,
} from '../Types/ToDoTypes'

export const ToDoAll = () => async (dispatch: Dispatch<ToDoAllAction>) => {
  try {
    SetIsLoading(true)(store.dispatch)
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    )
    console.log('data', data)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    SetIsLoading(false)(store.dispatch)
    dispatch({
      type: ToDoActionTypes.GET_ALL_TODO,
      payload: data,
    })
  } catch (error: any) {}
}

export const CreateToDo =
  (toDo: IToDo) => async (dispatch: Dispatch<CreateToDoAction>) => {
    try {
      dispatch({
        type: ToDoActionTypes.CREATE_TODO,
        payload: toDo,
      })
    } catch (error: any) {}
  }

export const EditToDo =
  (toDo: IToDo) => async (dispatch: Dispatch<EditToDoAction>) => {
    try {
      dispatch({
        type: ToDoActionTypes.EDIT_TODO,
        payload: toDo,
      })
    } catch (error: any) {}
  }

export const DeleteToDo =
  (id: number) => async (dispatch: Dispatch<DeleteToDoAction>) => {
    try {
      dispatch({
        type: ToDoActionTypes.DELETE_TODO,
        payload: id,
      })
    } catch (error: any) {}
  }
  export const SetIsLoading =
  (isLoading: boolean) => async (dispatch: Dispatch<SetIsLoadingAction>) => {
    try {
      dispatch({
        type: ToDoActionTypes.IS_LOADING_SET,
        payload: isLoading,
      });
    } catch (error: any) {}
  };
