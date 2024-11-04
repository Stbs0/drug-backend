import admin from 'firebase-admin';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import firebaseServiceAccount from '@config/firebaseServiceAccount.json';
admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceAccount),
});
initializeApp({
    credential: cert(firebaseServiceAccount),
});
export const db = getFirestore();
//# sourceMappingURL=firebase.js.map