const mongoose = require('mongoose');

module.exports.connect = () =>
  mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
    .then(() => console.log(`Connected to database ${process.env.DB_URI}`))
    .catch(err => {
      return Promise.reject(err);
    });
