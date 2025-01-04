import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import app from './app/app.js';

console.log(process.env.NODE_ENV);
const port = process.env.PORT;
process.on('uncaughtException', (err) => console.error('Uncaught Exception:', err));
process.on('unhandledRejection', (reason, _promise) => console.error('Unhandled Rejection:', reason));

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
