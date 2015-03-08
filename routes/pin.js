var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('../public/javascripts/keys')
var _ = require('lodash')

/* GET users listing. */
router.get('/list', function(req, res, next) {

  unirest.get("https://ismaelc-pinterest.p.mashape.com/Nilauro/pins?page=1")
  .header("X-Mashape-Key", "NAAs0SFAfXmshCft0XJiMBkCUET0p1CkBJijsnro0cXrYPDosV")
  //.header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .end(function (result) {
    // //console.log(result.body);
    // var n = result.body.body

    // for(x in n){
    // 	// var index = n[x].name.indexOf('\n')
    // 	// n[x].name = n[x].name.substring(0,index)
    //   n[x].href = n[x].href.substring(0,n[x].href.length-1)
	   // }

	   // //console.log(n)
    // res.render('pinlist', { title: 'Pinterest', data: n});

    console.log(result.body)
  });

});

router.get('/view/pin/:id', function(req, res, next) {

  unirest.get("https://ismaelc-pinterest.p.mashape.com/Nilauro/pins?page=1")
  .header("X-Mashape-Key", "NAAs0SFAfXmshCft0XJiMBkCUET0p1CkBJijsnro0cXrYPDosV")
  //.header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .end(function (result) {
    //console.log(req.prams.id);
    
    var id = req.params.id
    var n = result.body.body

    var a = _.find(n, function(chr){
    	return (chr.href.indexOf(id) != -1)
    })

    console.log(a)
    res.render('boardview', { title: 'Pinterest', data: a });

    console.log(a)
  });

	
});

module.exports = router;
