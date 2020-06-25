const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.post('/default/views-out-of-hand-submit', (req, res) => {
  let areViewsOutOfHand = req.session.data['views-out-of-hand']
  if (areViewsOutOfHand === 'yes') {
    res.redirect('/default/use')
  } else {
    res.redirect('/default/ok')
  }
})
