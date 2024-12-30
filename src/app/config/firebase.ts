import admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import path from 'path';

const env = process.env.NODE_ENV || 'production';
const FireBaseAccount = JSON.parse(
  readFileSync(path.join(process.cwd(), `/src/firebase.${env}.json`), 'utf-8')
) as ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(FireBaseAccount),
});

const db = getFirestore();
export const auth = getAuth();

export default db;
