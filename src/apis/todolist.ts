import db from './firebase.ts';
import {
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
  doc,
  collection,
  query,
  orderBy
} from 'firebase/firestore/lite';
import { TodosTypes } from '../components/TodoList/TodosTypes.ts';

export const getTodoListApi = async () => {
  try {
    const comment = query(collection(db, 'todolist'), orderBy('date', 'asc'));
    const res = await getDocs(comment);
    const data = res.docs.map((v) => {
      const tmp = v.data();
      tmp.id = v.id;
      return tmp;
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addTodoListApi = async (todo: TodosTypes, id: string) => {
  try {
    await setDoc(doc(db, 'todolist', id), todo);
  } catch (e) {
    console.log(e);
  }
};

export const removeTodoListApi = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'todolist', id));
  } catch (e) {
    console.log(e);
  }
};

export const updateTodoDoneApi = async (id: string, done: boolean) => {
  try {
    await updateDoc(doc(db, 'todolist', id), {
      done: !done
    });
  } catch (e) {
    console.log(e);
  }
};
