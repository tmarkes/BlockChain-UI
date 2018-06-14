var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var moment = require('moment');

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.PROMO_API_HOSTNAME);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/retrieve/promotion', function (req, res, $http) {
  request(process.env.PROMO_API_HOSTNAME+'/promotion/getAllPromotions',
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).send(body);
    }
  });
});

app.get('/retrieve/approvedPromotion', function (req, res, $http) {
  request(process.env.PROMO_API_HOSTNAME+'/promotion/getApprovedPromotions',
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).send(body);
    }
  });
});

app.put('/retrieve/promotionByHashCode', function (req, res) {
  var hashCode = {
    hash : req.body.hashCode,
  };
  request.put(process.env.PROMO_API_HOSTNAME+'/promotion/getBlockByHashCode',
      { json: hashCode },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.status(200).send(body);
        } else {
          console.log(error);
          res.status(404).send(body);
        }
  });
});

app.post('/approve/promotion', function (req, res) {
  var promoData = {
    hash : req.body.hashCode,
    data : {
    promoName : req.body.promoName,
    promoLongDescription : req.body.promoLongDescription,
    businessBenefit : req.body.businessBenefit,
    tc : req.body.tc,
    startDate : moment(req.body.startDate).format('YYYY-MM-DD'),
    endDate : moment(req.body.endDate).format('YYYY-MM-DD'),
    rules : req.body.rule,
    reminderNotificationDays : req.body.reminderNotificationDays,
    enrollmentDeadlineDays : req.body.enrollmentDeadlineDays,
    benefit : req.body.benefit,
    status : req.body.status
    }
  };
  request.post(process.env.PROMO_API_HOSTNAME+'/promotion/approvePromotion',
      { json: promoData },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.status(200).send(body);
        } else {
          console.log(error);
          res.status(404).send(body);
        }
  });
});

app.post('/deny/promotion', function (req, res) {
  var promoData = {
    hash : req.body.hashCode,
    data : {
    promoName : req.body.promoName,
    promoLongDescription : req.body.promoLongDescription,
    businessBenefit : req.body.businessBenefit,
    tc : req.body.tc,
    startDate : moment(req.body.startDate).format('YYYY-MM-DD'),
    endDate : moment(req.body.endDate).format('YYYY-MM-DD'),
    rules : req.body.rule,
    reminderNotificationDays : req.body.reminderNotificationDays,
    enrollmentDeadlineDays : req.body.enrollmentDeadlineDays,
    benefit : req.body.benefit,
    status : req.body.status
    }
  };
  request.post(process.env.PROMO_API_HOSTNAME+'/promotion/denyPromotion',
    { json: promoData },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.status(200).send(body);
        } else {
          console.log(error);
          res.status(404).send(body);
        }
  });
});

app.post('/update/promotion', function (req, res) {
  var newPromoData = {
    previousHash : req.body.hashCode,
    data : {
    promoName : req.body.promoName,
    promoLongDescription : req.body.promoLongDescription,
    businessBenefit : req.body.businessBenefit,
    tc : req.body.tc,
    startDate : moment(req.body.startDate).format('YYYY-MM-DD'),
    endDate : moment(req.body.endDate).format('YYYY-MM-DD'),
    rules : req.body.rule,
    reminderNotificationDays : req.body.reminderNotificationDays,
    enrollmentDeadlineDays : req.body.enrollmentDeadlineDays,
    benefit : req.body.benefit,
    status : req.body.status
    }
  };
  request.post(process.env.PROMO_API_HOSTNAME+'/promotion/savePromotion',
    { json: newPromoData },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var oldPromoData = {
            hash : req.body.hashCode,
            data : {
            promoName : req.body.promoName,
            promoLongDescription : req.body.promoLongDescription,
            businessBenefit : req.body.businessBenefit,
            tc : req.body.tc,
            startDate : moment(req.body.startDate).format('YYYY-MM-DD'),
            endDate : moment(req.body.endDate).format('YYYY-MM-DD'),
            rules : req.body.rule,
            reminderNotificationDays : req.body.reminderNotificationDays,
            enrollmentDeadlineDays : req.body.enrollmentDeadlineDays,
            benefit : req.body.benefit,
            status : 'Denied'
            }
          };
          request.post(process.env.PROMO_API_HOSTNAME+'/promotion/denyPromotion',
            { json: oldPromoData },
            function (error, response, body) {
              if (!error && response.statusCode == 200) {
              } else {
                console.log(error);
              }
          });
          res.status(200).send(body);
        } else {
          console.log(error);
          res.status(404).send(body);
        }
    });
});

app.post('/create/promotion', function (req, res) {
  var newPromoData = { data : {
    promoName : req.body.promoName,
    promoLongDescription : req.body.promoLongDescription,
    businessBenefit : req.body.businessBenefit,
    tc : req.body.tc,
    startDate : moment(req.body.startDate).format('YYYY-MM-DD'),
    endDate : moment(req.body.endDate).format('YYYY-MM-DD'),
    rules : req.body.rule,
    reminderNotificationDays : req.body.reminderNotificationDays,
    enrollmentDeadlineDays : req.body.enrollmentDeadlineDays,
    benefit : req.body.benefit,
    status : req.body.status
    }
  };
  console.log(newPromoData);
  request.post(process.env.PROMO_API_HOSTNAME+'/promotion/savePromotion',
      { json: newPromoData },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.status(200).send(body);
        } else {
          console.log(error);
          res.status(404).send(body);
        }
  });
});

app.get('/', function (req, res) {
  res.send();
  res.status(404).send('No file found.');
});

app.listen(process.env.API_PORT);
