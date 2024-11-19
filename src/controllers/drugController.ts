// import axios from 'axios';
// import { API_APPROXIMATE_NAME, OPENFDA_BASE_URL } from 'constants.js';
// import { GetAproximTypes } from 'types.js';

// export const getAproximmateName = async (name: string) => {
//   const res = await axios.get<GetAproximTypes>(API_APPROXIMATE_NAME + encodeURI(name) + '&maxEntries=5');

//   console.log(res.data.approximateGroup.candidate);

//   return res.data.approximateGroup.candidate.filter(
//     item => (item.source === 'RXNORM' || item.source === 'ATC') && item.name,
//   )[0]?.name;
// };

// export const getDrugInfo = async (name: string) => {
//   const res = await axios.get(OPENFDA_BASE_URL + encodeURI(name));
//   console.log("fda",res.data);
//   return res.data;
// };
