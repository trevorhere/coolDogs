var express = require('express');
var router = express.Router();
var request = require('request')


/* GET home page. */
router.get('/', function(req, res) {
res.sendFile('index.html', {root: 'public' });
});


router.get('/pokemon', function(req, res) {
var pokemon = [
 {
   name: 'Hungry Dog',
   avatarUrl: 'http://4.bp.blogspot.com/-EXEAR_Muh-Q/UI_X9hP8OKI/AAAAAAAADMA/MUB54301cc0/s1600/dog+eating+grass.jpg'
 },
 {
   name: 'Spotted Dog',
   avatarUrl: 'https://s-media-cache-ak0.pinimg.com/564x/1a/ea/b3/1aeab33ca9df04b2b8de04ca79e3a28c.jpg'

 },
 {
   name: 'White Dog',
   avatarUrl: 'https://pbs.twimg.com/profile_images/607224338698207233/ywebapKu.jpg'
 },
 {
   name: 'German Dog',
   avatarUrl: 'http://cdn1.medicalnewstoday.com/content/images/headlines/290/290600/german-shepherd.jpg'
 },
 {
   name: 'Sad Dog',
   avatarUrl: 'https://pbs.twimg.com/profile_images/585733410838163457/jusb106_.jpg'
 },
 {
   name: 'Happy Dog',
   avatarUrl: 'http://www.adoptapet.com/blog/uploads/2011/08/one-eye-dog.jpg'
 }
];

res.send(pokemon);
});

module.exports = router;


