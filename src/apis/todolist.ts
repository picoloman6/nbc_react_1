import db from './firebase.ts';
import { getDocs, collection, query, orderBy } from 'firebase/firestore/lite';

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

export const setTodoList = async (todo) => {};
