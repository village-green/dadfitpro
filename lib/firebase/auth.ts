import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  User
} from 'firebase/auth';
import { auth } from './config';

export interface AuthError {
  code: string;
  message: string;
}

export const signUp = async (
  email: string,
  password: string,
  displayName: string
): Promise<User> => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName });
    return user;
  } catch (error) {
    throw error as AuthError;
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw error as AuthError;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    throw error as AuthError;
  }
};

export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error as AuthError;
  }
};