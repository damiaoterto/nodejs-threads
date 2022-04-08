import createLogging from 'logging';
import app from './app';

const logger = createLogging('Server');

app.listen(3333, () => logger.info('running on port 3333'));
