import admin from 'firebase-admin';

import { ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import FirebaeAccount from './FirebaeAccount.json';
import { getAuth } from 'firebase-admin/auth';

admin.initializeApp({
  credential: admin.credential.cert(FirebaeAccount as ServiceAccount),
});

const db = getFirestore();
export const auth = getAuth();

export default db;
