import express from 'express';

import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/new', upload.single('file'), createProduct);
router.get('/product/:id', getProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;