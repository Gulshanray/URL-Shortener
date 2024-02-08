  
const { GeneratenewshortURL, redirecttoOriginalPage, Analytics,allusers, api } = require('../controllers/control');
const express = require("express");
const router = express.Router();
router.post("/", GeneratenewshortURL);
router.get('/:shortid', redirecttoOriginalPage);
router.get('/analytics/:shortid',  Analytics)
router.get('/api',api)
router.get("/",allusers)
module.exports = router;
