const express = require('./config/express');

const port = 3000;
express().listen(port);
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);