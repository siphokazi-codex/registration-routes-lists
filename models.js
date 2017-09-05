
const mongoose = require('mongoose');
module.exports = function(mongoURL){
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoURL);

  const regSchema = mongoose.Schema(
    {
      registration : String
    });

    regSchema.index({registration : 1}, { unique : true});

    const Registration = mongoose.model('Registration', regSchema);

    return {
      Registration
    };
}
