const express = require('express')
const router = express.Router()

let user = {
  email: '',
}

router.get('/', (req, res) => {
  res.status(200).render('index', {
    title: 'NodePug | A nodejs app',
    name: user.email,
  })
})

router.get('/login', (req, res) => {
  res.status(200).render('login', {
    title: 'Login | NodePug',
  })
})

router.post('/login', (req, res) => {
  const data = req.body
  const { email, password } = data
  if (email == '7828@gmail.com') {
    if (password == '123456') {
      user.email = email
      res.status(300).redirect('/')
      return
    }
  }

  res
    .status(400)
    .json({ msg: 'Invalid Credentials', goBack: 'http://localhost:4040/login' })
})
module.exports = router
