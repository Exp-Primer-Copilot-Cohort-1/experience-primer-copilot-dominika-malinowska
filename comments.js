// Create web server
const express = require('express');
// Create a new router
const router = express.Router();
const db = require('../db');
// Create a new router
router.get('/', async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    let results = await db.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
router.post('/', async (req, res, next) => {
  try {
    let results = await db.post(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
router.put('/:id', async (req, res, next) => {
  try {
    let results = await db.put(req.params.id, req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    let results = await db.delete(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
module.exports = router;
