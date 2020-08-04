const express = require('express')
const Hubs = require('./hubs-model.js')
//creates a router to be able to export
const router = express.Router()

//list of hubs
router.get('/', (req, res) => {
  //all database methods return a promise
  Hubs.find({})
    .then(hubs => {
      res.status(200).json(hubs)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: error.message })
    })
})

router.get('/', (req, res) => {
  Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json(hubs)
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error retrieving the hubs'
      })
    })
})

router.get('/:id', (req, res) => {
  Hubs.findById(req.params.id)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub)
      } else {
        res.status(404).json({ message: 'Hub not found' })
      }
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error retrieving the hub'
      })
    })
})

router.post('/', (req, res) => {
  Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub)
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error adding the hub'
      })
    })
})

router.delete('/:id', (req, res) => {
  Hubs.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The hub has been nuked' })
      } else {
        res.status(404).json({ message: 'The hub could not be found' })
      }
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error removing the hub'
      })
    })
})

router.put('/:id', (req, res) => {
  const changes = req.body
  Hubs.update(req.params.id, changes)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub)
      } else {
        res.status(404).json({ message: 'The hub could not be found' })
      }
    })
    .catch(error => {
      // log error to database
      console.log(error)
      res.status(500).json({
        message: 'Error updating the hub'
      })
    })
})

//exports the router
// equivalent to export default router from React
module.exports = router
