exports.render = function(req, res){
  var matches = [{
      name: 'Jessica',
      age: 24,
      imageLink: 'http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg'
    }]
  res.render('index', {data: matches});
}
