import admin from 'firebase-admin';

import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import firebaseServiceAccount from '@config/firebaseServiceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount as ServiceAccount),
});

initializeApp({
  credential: cert(firebaseServiceAccount as ServiceAccount),
});

export const db = getFirestore();

