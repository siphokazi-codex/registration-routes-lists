module.exports = function(){

  const regList = [];

  const getForm = function(req, res){

    var registration = req.params.registration;
    res.render('registration/index', {registration : regList});
  };

  const add = function(req, res){

    var registration = req.params.registration;

    regList.push(registration)

    res.render('registration/add', {registration});
}

  return {

    getForm,
    add
  }

}
