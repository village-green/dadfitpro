import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './config';

export const checkIsAdmin = async (uid: string): Promise<boolean> => {
  try {
    const adminDoc = await getDoc(doc(db, 'admins', uid));
    return adminDoc.exists();
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

export const setAdminStatus = async (uid: string, isAdmin: boolean): Promise<void> => {
  try {
    if (isAdmin) {
      await setDoc(doc(db, 'admins', uid), {
        grantedAt: new Date(),
      });
    } else {
      // Remove admin status
      const adminRef = doc(db, 'admins', uid);
      await adminRef.delete();
    }
  } catch (error) {
    console.error('Error setting admin status:', error);
    throw error;
  }
};