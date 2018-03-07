var properties = require('../../../lib/check/get-property')
module.exports = function(router) {

  router.get('/check/', function (req, res) {

    
    res.render('./check/index.html',{
      'property': properties.load(req),
      'h1': 'Tell us about a change to your property',
      'form': {
        'action':'/check-change-submit',
        'name': 'check-change-submit',
        'inputs':[
          {
            'type': 'snippet',
            'path': 'includes/check/_check-change-intro.html'
          },



          //Initial selection on check

          {
            'type': 'radio',
            'groupName': 'checkchangetype',
            'inline': false,
            'label': 'I want to (pick the one that applies):',
            'required': true,
            'errorText': 'Please select an option.',
            'radios':[
              {
                'id': 'internal',
                'label': 'confirm or change the information held for this property (for example if you’ve added a floor or floor area measurements are incorrect)',
                'value': 'internal'
              },
              {
                'id': 'external',
                'label': 'tell you something external to this property has affected its value (such as long-term disruptive roadworks or scaffolding outside it)',
                'value': 'external'
              },
              {
                'id': 'split',
                'label': 'tell you this property needs to be split into more than one',
                'value': 'split'
              },

              {
                'id': 'merged',
                'label': 'tell you this property needs to be merged with others (you’ll need to repeat this for each of the properties you want to merge)',
                'value': 'merged'
              },
              {
                'id': 'removed',
                'label': 'tell you this property is not used for business or has been demolished',
                'value': 'removed'
              },

              {
                'id': 'courtdecision',
                'label': 'tell you this property has been subject to a court decision (including Supreme Court, High Court, Lands Tribunal or Valuation Tribunal decisions)',
                'value': 'courtdecision'
              }
            ]
          }
        ],
        'continueText': 'Continue',
        'continueDisabled': false,
        'backTo': '#'
      }
    })
  }),






  router.get('/check-change-submit', function (req, res) {

    var checkchangetype = req.query.checkchangetype
    switch (checkchangetype) {
    case 'internal':
      res.redirect('/check/confirm-or-change');
      break;
    case 'external':
        res.redirect('/check/external');
      break;

    case 'split':
    res.redirect('/check/split');
  break;
  case 'merged':
  res.redirect('/check/merged');
  break;
  case 'removed':
  res.redirect('/check/removed');
  break;
  case 'courtdecision':
  res.redirect('/check/courtdecision');
  break;

  }
  }),

  router.get('/check/confirm-or-change', function (req, res) {
    res.render('./check/confirm-or-change',{
      'property': properties.load(req)
    })
  }),

  router.get('/check/basic-property-details', function (req, res) {
    res.render('./check/basic-property-details',{
      'property': properties.load(req)
    })
  }),


  router.get('/check/property-features', function (req, res) {


      var proposedChange = req.query
      if (Object.keys(proposedChange)[0] != undefined){
        for (var key in proposedChange) {
          req.session.data.dashboardData.clientProperties.find(property => property.laRef == req.session.data.laRef).proposedChanges[key] = proposedChange[key]
        }
      }

    res.render('./check/property-features/index.html',{
      'property': properties.load(req),
      'errors': req.query.errors
    })
  })

  router.get('/check/floor-areas', function (req, res) {
    res.render('./check/floor-areas.html',{
      'property': properties.load(req)
    })
  })

  router.get('/check/parking', function (req, res) {
    res.render('./check/parking.html',{
      'property': properties.load(req)
    })
  })


  router.get('/check/supporting-documents', function (req, res) {
    res.render('./check/supporting-documents.html',{
        'property': properties.load(req),
        'form': {
        'action': '/check/supporting-documents-submit',
        'method': 'post',
        'inputs': [
          {'type': 'html',
          'html': '<div class="clearfix"></div><div class="notice"><i class="icon icon-important"><span class="visually-hidden">Warning</span></i><strong class="bold-small">You should provide evidence to support any changes as this will help us make a decision.</strong></div>'
        },
        {
          'type': 'file',
          'name': 'newFile',
          'label': ''
        }
        ],
        'continueText': 'Continue',
        'continueDisabled': false,
      }
    })
  })

router.get('/check/supporting-documents-submit', function (req, res) {
    if (req.query){
      let formContents = req.query

      req.session.data.dashboardData.clientProperties.find(property => property.laRef == req.session.data.laRef).uploadedFile = formContents
    }
    res.redirect('/check/check-summary')
    }
  )

  router.get('/check/check-summary', function (req, res) {
    res.render('./check/check-summary.html',{
      'property': properties.load(req)
    })
  })


}
