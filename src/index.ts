import dotenv from 'dotenv';
import app from './app/app.js';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('Server started on port 3000');
});
