import express from 'express';
import cors from 'cors';
import { usersController } from './controllers/users';
import { eventsController } from './controllers/events';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/', router);

router.post('/users/validate', usersController.validateUser);
router.post('/users', usersController.postUser);

router.get('/events', eventsController.takeEvents)
router.post('/events', eventsController.postEvent);
router.patch('/events', eventsController.patchEvent);

app.listen(5000, () => (
  console.log('server is running')
))
