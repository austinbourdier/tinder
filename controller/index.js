exports.render = function(req, res){
  var matches = [{
      name: 'Emma',
      age: 24,
      imageLink: 'http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg'
    },{
      name: 'Caitlin',
      age: 32,
      imageLink: 'https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg'
    },{
      name: 'Alexandra',
      age: 22,
      imageLink: 'http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg'
    },{
      name: 'Janelle',
      age: 26,
      imageLink: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg'
    },{
      name: 'Olivia',
      age: 31,
      imageLink: 'http://www.vetprofessionals.com/catprofessional/images/home-cat.jpg'
    },{
      name: 'Jennifer',
      age: 22,
      imageLink: 'http://i.huffpost.com/gen/1860407/images/o-BLACK-FOOTED-CAT-KITTENS-facebook.jpg'
    },{
      name: 'Misha',
      age: 21,
      imageLink: 'http://i.ytimg.com/vi/mSFTRoBY99s/hqdefault.jpg'
    },{
      name: 'Melissa',
      age: 23,
      imageLink: 'https://www.petfinder.com/wp-content/uploads/2012/11/99950237-why-cats-meow-632x475.jpg'
    },{
      name: 'Celeste',
      age: 29,
      imageLink: 'http://images.medicaldaily.com/sites/medicaldaily.com/files/2013/08/04/0/62/6259.jpg'
    },{
      name: 'Kelsey',
      age: 32,
      imageLink: 'http://scienceblogs.com/gregladen/files/2012/12/Beautifull-cat-cats-14749885-1600-1200.jpg'
    }]
  res.render('index', {data: matches});
}
