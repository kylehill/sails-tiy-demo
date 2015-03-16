/**
 * ChannelController
 *
 * @description :: Server-side logic for managing channels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  display: function(req, res) {

    var channelId = req.param("id")

    Channel.findOne({ id: channelId }).populate("createdBy").exec(function(err, data){

      res.json({
        name: "#" + data.name,
        text: "Created by " + data.createdBy.username + " on " + data.createdAt
      })

    })

  }
	
};

