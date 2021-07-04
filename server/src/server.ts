import 'dotenv/config';
import chalk from 'chalk';
import http from 'http';
import app from './app';
import socketConfig from './config/socket';

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 5000;

socketConfig(httpServer);

httpServer.listen(PORT, () => {
  console.log(
    chalk.blueBright.bold(`🚀 API is running on http://localhost:${PORT}`),
  );
});
