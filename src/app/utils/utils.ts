// import { DRUG_SALTS } from 'constants.js';

// export const removeSalts = (name: string) => {
//   let result = name;

//   DRUG_SALTS.forEach(salt => {
//     const regex = new RegExp(`\\s*${salt}\\b`, 'gi');
//     console.log(regex); // Match the salt as a word boundary
//     result = result.replace(regex, ''); // Replace the salt with an empty string
//   });

//   return result.trim();
// };

// export const getToken = (authHeader: string) => {
//   if (authHeader.startsWith('Bearer ')) {
//     return authHeader.substring(7, authHeader.length);
//   }
//   return null;
// };
