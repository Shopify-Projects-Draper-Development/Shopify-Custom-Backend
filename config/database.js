// // Example database configuration file
// const mongoose = require('mongoose');
// const config = require('./index');

// // Connect to the database
// mongoose.connect(config.database.url, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to the database');
// });


// We may end up creating another file similar to this for our
// GraphQL queries/connection info. This came from ChatGPT.