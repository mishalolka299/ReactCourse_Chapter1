import axios from "axios";
import { Dispatch } from "react";
import { CreateToDoAction, EditToDoAction, DeleteToDoAction, IToDo, ToDoActionTypes, ToDoAllAction } from "../Types/ToDoTypes";

export const ToDoAll = () => async (dispatch: Dispatch<ToDoAllAction>) => {
    try {
        const {data} = 
         await axios.get(
            `https://jsonplaceholder.typicode.com/todos`
        );
        console.log("data", data);
        dispatch({
            type: ToDoActionTypes.TODO_ALL,
            payload: data,
        });
    } catch (error: any) { }
};

export const CreateToDo = (toDo : IToDo) => async (dispatch: Dispatch<CreateToDoAction>) => {
    try {
        dispatch({
            type: ToDoActionTypes.CREATE_TODO,
            payload: toDo,
        });
    } catch (error: any) { }
};

export const EditToDo = (toDo : IToDo) => async (dispatch: Dispatch<EditToDoAction>) => {
    try {
        dispatch({
            type: ToDoActionTypes.EDIT_TODO,
            payload: toDo,
        });
    } catch (error: any) { }
};

export const DeleteToDo = (id : number) => async (dispatch: Dispatch<DeleteToDoAction>) => {
    try {
        dispatch({
            type: ToDoActionTypes.DELETE_TODO,
            payload: id,
        });
    } catch (error: any) { }
};
