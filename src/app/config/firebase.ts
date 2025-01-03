import admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import path from 'path';

const env = process.env.NODE_ENV || 'production';
let FireBaseAccount;
if (env === 'production') {
  FireBaseAccount = JSON.parse(
    readFileSync(path.join(process.cwd(), `/etc/secrets/firebase.production.json`), 'utf-8')
  ) as ServiceAccount;
} else {
  FireBaseAccount = JSON.parse(
    readFileSync(path.join(process.cwd(), `/firebase.development.json`), 'utf-8')
  ) as ServiceAccount;
}

admin.initializeApp({
  credential: admin.credential.cert(FireBaseAccount),
});

const db = getFirestore();
export const auth = getAuth();

export default db;
