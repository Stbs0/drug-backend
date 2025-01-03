import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// let FireBaseAccount;
// if (env === 'production') {
//   FireBaseAccount = JSON.parse(
//     readFileSync(`../../../etc/secrets/firebase.production.json`, 'utf-8')
//   ) as ServiceAccount;
// } else {
//   FireBaseAccount = JSON.parse(
//     readFileSync(path.join(process.cwd(), `/firebase.development.json`), 'utf-8')
//   ) as ServiceAccount;
// }
const config = {
  credential: admin.credential.cert({
    // @ts-expect-error i dont care
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN,
  }),
};
admin.initializeApp(config);

const db = getFirestore();
export const auth = getAuth();

export default db;
