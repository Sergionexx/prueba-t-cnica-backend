const router = require('express').Router();
const usersSrv = require('../services/users_srv');
const productSrv = require('../services/products_srv');
const orderSrv = require('../services/orders_srv');

router.get('/get-all', usersSrv.list);
router.post('/create', usersSrv.create);
router.get('/get-by-id/:id', usersSrv.getByid);
router.put('/update-by-id', usersSrv.updateByid);
router.delete('/delete-by-id/:id', usersSrv.deleteByid);

router.get('/get-all-products', productSrv.list);
router.post('/create-product', productSrv.create);
router.get('/get-product-by-id/:id', productSrv.getByid);
router.put('/update-product-by-id', productSrv.updateByid);
router.delete('/delete-product-by-id/:id', productSrv.deleteByid);

router.get('/get-all-orders', orderSrv.list);
router.post('/create-order', orderSrv.create);
router.get('/get-order-by-id/:id', orderSrv.getByid);
router.put('/update-order-by-id', orderSrv.updateByid);
router.delete('/delete-order-by-id/:id', orderSrv.deleteByid);

module.exports = router;