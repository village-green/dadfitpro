import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';
import type { UserProfile } from '@/types/firebase';

export const createUserProfile = async (
  uid: string,
  data: Partial<UserProfile>
): Promise<void> => {
  const userRef = doc(db, 'users', uid);
  
  const userData = {
    uid,
    email: data.email,
    displayName: data.displayName,
    photoURL: data.photoURL || null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(userRef, userData);
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const userRef = doc(db, 'users', uid);
  const userDoc = await getDoc(userRef);
  
  if (!userDoc.exists()) {
    return null;
  }
  
  return userDoc.data() as UserProfile;
};