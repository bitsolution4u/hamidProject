const router = require('express').Router();

const brandRouter = require('../routes/brand');
const productRouter = require('../routes/product');
const categoryRouter = require('../routes/category');
const modalRouter = require('../routes/modal');
const sizeRouter = require('../routes/size');
const exerciseRouter = require('../routes/exercise');
const productInfoRouter = require('../routes//productInfo');


router.use("/api/brand", brandRouter);
router.use("/api/product", productRouter);
router.use("/api/category", categoryRouter);
router.use("/api/modal", modalRouter);
router.use("/api/size", sizeRouter);
router.use("/api/exercise", exerciseRouter);
router.use("/api/productInfo", productInfoRouter);


module.exports = router;