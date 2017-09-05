module.exports = function(){

  const regList = [];

  const add = function(req, res){

    var registration = req.body.registration;
    //var regResult = registration.substr(0,3).toUpperCase();

     var foundRegistration = regList.find(function(currentRegistration){
       return currentRegistration === registration;
     });

    if (!registration){
      req.flash('error', 'Registration Number should not be blank');
    }

     else if (!foundRegistration){
       regList.push(registration);
       req.flash('addRegistration', 'Registration Number added successfully');
     }
     else{
       req.flash('error', 'You have inputed registration number before, please input different registration number')
     }

     res.render('registration/add', {registration : regList});
   }

  return {

    add
  }

}
