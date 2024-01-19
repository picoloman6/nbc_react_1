import db from './firebase.ts';
import {
  getDocs,
  setDoc,
  deleteDoc,
  // updateDoc,
  doc,
  collection,
  query,
  orderBy
} from 'firebase/firestore/lite';
import {
  // TodoInputTypes
  TodosTypes
} from '../components/TodoList/TodosTypes.ts';

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
  await setDoc(doc(db, 'todolist', id), todo);
};

export const removeTodoListApi = async (id: string) => {
  await deleteDoc(doc(db, 'todolist', id));
};

// export const updateTodoList =async (todo: TodosTypes) => {
//   await updateDoc(collection(db, ))
// }
