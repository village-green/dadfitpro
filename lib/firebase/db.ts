import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  DocumentData,
  QueryConstraint
} from 'firebase/firestore';
import { db } from './config';

export const createDocument = async <T extends DocumentData>(
  collectionName: string,
  docId: string,
  data: T
): Promise<void> => {
  await setDoc(doc(db, collectionName, docId), data);
};

export const updateDocument = async <T extends DocumentData>(
  collectionName: string,
  docId: string,
  data: Partial<T>
): Promise<void> => {
  await updateDoc(doc(db, collectionName, docId), data);
};

export const deleteDocument = async (
  collectionName: string,
  docId: string
): Promise<void> => {
  await deleteDoc(doc(db, collectionName, docId));
};

export const getDocument = async <T extends DocumentData>(
  collectionName: string,
  docId: string
): Promise<T | null> => {
  const docSnap = await getDoc(doc(db, collectionName, docId));
  return docSnap.exists() ? docSnap.data() as T : null;
};

export const queryDocuments = async <T extends DocumentData>(
  collectionName: string,
  constraints: QueryConstraint[] = []
): Promise<T[]> => {
  const q = query(collection(db, collectionName), ...constraints);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as T);
};