var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    var notes = 
    [
        {
            id : 1,
            date : "05-01-2017",
            text : "this is from controller 1"
        },
        {
            id : 2,
            date : "05-01-2017",
            text : "this is from controller 2"
        },
        {
            id : 3,
            date : "05-01-2017",
            text : "this is from controller 3"
        },
        {
            id : 4,
            date : "05-01-2017",
            text : "this is from controller 4"
        }
    ]
  res.send(notes);
});

router.post('/insert', function (req, res) {
  res.send('POST request to the homepage (Add)')
})

router.post('/delete', function (req, res) {
  res.send('POST request to the homepage (Delete)')
})

module.exports = router;


