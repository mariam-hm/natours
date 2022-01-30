const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down!');
  console.log(`💥Error Name💥: ${err.name}`);
  console.log(err);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

async function dbConnect() {
  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

  try {
    await mongoose.connect(DB);
    console.log('Connected to database!');
  } catch (err) {
    console.log('DB Connect: ', err);
  }
}

dbConnect();

//================== START SERVER===================

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log('App runnuing on port ', port, '...');
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Shutting down!');
  console.log(`💥Error Name💥: ${err.name}`);
  server.close(() => {
    process.exit(1);
  });
});
