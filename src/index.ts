import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import app from './app/app.js';

console.log(process.env.NODE_ENV);
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
