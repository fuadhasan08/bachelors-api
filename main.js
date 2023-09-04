import express from 'express';
import memberRoute from './routes/member.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/members', memberRoute);

app.listen(8000, () => {
  console.log(`App is Listening to port 8000`);
});
