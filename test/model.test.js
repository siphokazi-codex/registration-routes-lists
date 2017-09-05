const assert = require('assert');
const Models = require('../models');

describe('models should be able to', function(){

  var models = Models('mongodb://localhost/registration-test');

  beforeEach(function(done) {
    models.Registration.remove({}, function(err){
      done(err);
    })
  });

  it('store registration entered by user to MongoDB', function(done){

    var regData = { registration : 'The test registration'};
    models.Registration
      .create( function(err){
        done(err);

        models.Registration.find({registration : 'The registration test'}, function(err, registration){
            assert.equal(1, registration.length);
            done(err);
        });
      });
  });

   it('should not allow duplicate registration numbers', function(done){
     var regData = { registration : 'The registration test'};
     models.Registration.create(regData, function(err){
       var regData = { registration : 'The registration test'};
       models.Registration.create(regData, function(err){
         assert.ok(err, 'Should give an error for duplicate registration numbers');
         done();
       });
     });
   });
});
