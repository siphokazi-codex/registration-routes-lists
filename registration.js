module.exports = function(){

  const regList = [];

  const getForm = function(req, res){

    var registration = req.params.registration;
    res.render('registration/add', {registration : regList});
  };

  const add = function(req, res){


    var registration = req.body.registration;
    var regResult = registration.toUpperCase();

    var foundRegistration = regList.find(function(currentRegistration){
      return currentRegistration === regResult;
    });

    if (!regResult){
      req.flash('error', 'Registration Number should not be blank');
    }
    else if (!foundRegistration){
      regList.push(regResult);
      req.flash('addRegistration', 'Registration Number added successfully');
    }
    else{
      req.flash('error', 'You have inputed registration number before, please input different registration number')
    }

    res.render('registration/add', {registration : regList});
  }

  return {

    getForm,
    add
  }

}
