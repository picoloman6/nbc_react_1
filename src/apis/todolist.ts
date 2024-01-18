import db from './firebase.ts';
import {
  getDocs,
  addDoc,
  // updateDoc,
  collection,
  query
} from 'firebase/firestore/lite';
import {
  TodoInputTypes
  // TodosTypes
} from '../components/TodoList/TodosTypes.ts';

export const getTodoList = async () => {
  try {
    const comment = query(collection(db, 'todolist'));
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

export const addTodoList = async (todo: TodoInputTypes) => {
  await addDoc(collection(db, 'todolist'), todo);
};

// export const updateTodoList =async (todo: TodosTypes) => {
//   await updateDoc(collection(db, ))
// }
