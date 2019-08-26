const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'

exports.postRegisterUser = (req: any, res: any) => {
    const userData = {
        id: req.body.id,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        salary: req.body.salary,
        email: req.body.email,
        position: req.body.position,
        tasks: req.body.tasks,
        deadline: req.body.deadline,
        password: req.body.password,
        status: req.body.status
      }
    
      User.findOne({
        where: {
          email: req.body.email
        }
      })
        .then((user: any) => {
          if (!user) {
            bcrypt.hash(req.body.password, 10, (err: any, hash: any) => {
              userData.password = hash
              User.create(userData)
                .then((user: { email: string; }) => {
                  res.json({ status: user.email + 'Registered!' })
                })
                .catch((err: string) => {
                  res.send('error: ' + err)
                })
            })
          } else {
            res.json({ error: 'User already exists' })
          }
        })
        .catch((err: string) => {
          res.send('error: ' + err)
        })
}

exports.postLoginUser = (req: any, res: any) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((user: { password: any; dataValues: any; }) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send({ token: token, dataValues: user.dataValues })
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch((err: any) => {
      res.status(400).json({ error: err })
    })
}

exports.postCreateUser = (req: any, res: any) => {
  const userData = {
    id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    salary: req.body.salary,
    email: req.body.email,
    position: req.body.position,
    tasks: req.body.tasks,
    deadline: req.body.deadline,
    password: req.body.password,
    status: req.body.status
  }
  User.findOne({
    where: {
      id: req.body.id
    }
  })
    .then((user: any) => {
      bcrypt.hash(req.body.password, 10, (err: any, hash: any) => {
        userData.password = hash
        User.create(userData)
          .then((user: { email: string; }) => {
            res.json({ status: user.email + 'Registered!' })
            console.log('created')
          })
          .catch((err: string) => {
            res.send('error: ' + err)
            console.log(err)
          })
      })
    })
    .catch((err: any) => {
      res.status(400).json({ error: err })
    })
}

exports.putEditUser = (req: any, res: any) => {
  const id = req.params.id;
  User.findOne({
    where: {
      id: id
    }
  })
    .then((user: any) => {
      User.update({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        salary: req.body.salary,
        email: req.body.email,
        position: req.body.position,
        tasks: req.body.tasks,
        deadline: req.body.deadline,
        password: req.body.password,
        status: req.body.status
      }, { where: { id: id } })
        .then((user: { email: string; }) => {
          res.json({ status: user.email + 'Updated !' })
          console.log('updated')
        })
        .catch((err: string) => {
          res.send('error: ' + err)
          console.log('update failed')
        })
    })
    .catch((err: any) => {
      res.status(400).json({ error: err })
    })
}

exports.getAllUsers = (req: any, res: any) => {
  User.findAll({
  }).then(function (users: any) {
    res.send(users)
  }).catch(function (err: any) {
    console.log('Oops! something went wrong, : ', err);
  });
}

exports.deleteUser = (req: any, res: any) => {
  const id = req.params.id;
  User.findOne({
    where: {
      id: id
    }
  }).then((user: { id: any }) => {
    if (user) {
      User.destroy({ where: { id: id } })
      console.log('deleted')

    } else {
      res.status(400).json({ error: 'User does not exist' })
      console.log('failed to delete')

    }
  })
    .catch((err: any) => {
      res.status(400).json({ error: err })
    })
}