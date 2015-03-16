/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  list: function(req, res) {

    User.find({}, function(err, data){

      var usernameList = _.map(data, function(user){

        return user.username

      })

      res.json(usernameList)

    })

  }

};

