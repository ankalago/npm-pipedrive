var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('d752036e2dc992ffca732f1e6bd52e5f0fa48c37', { strictMode: true });

function deals(){
  pipedrive.Deals.getAll({}, function(err, deals) {
      if (err) throw err;
      for (var i = 0; i < deals.length; i++) {
          console.log(deals[i].id + '/' + deals[i].title + ' (worth ' + deals[i].value + ' ' + deals[i].currency + ')');
      }
  });
}

function createDeal(){
  data = {
    stage_id: 1,
    title: 'PP OCHOA',
    value: 1000
  };
  pipedrive.Deals.add(data, function(err, deal) {
    if (err) throw err;
    console.log('Deal', deal);
  })
}

function getDeal(id){
  pipedrive.Deals.get(id, function(err, deal) {
      if (err) throw err;
      console.log('Deal', deal);
  });
}

//deals();
//createDeal();
getDeal(11);
