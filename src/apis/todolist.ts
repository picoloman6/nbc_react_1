import db from './firebase.ts';
import {
  getDocs,
  addDoc,
  collection,
  query,
  orderBy
} from 'firebase/firestore/lite';
import { TodoInputTypes } from '../TodoList/TodosTypes.ts';

export const getTodoList = async () => {
  try {
    const comment = query(collection(db, 'todolist'), orderBy('id', 'asc'));
    const res = await getDocs(comment);
    const data = res.docs.map((v) => v.data());

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addTodoList = async (todo: TodoInputTypes) => {
  await addDoc(collection(db, 'todolist'), todo);
};
