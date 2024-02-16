import express from 'express';
import bookCtrl from '../controllers/book.controllers.js';

const router = express.Router();

router.route('/api/books')
    .get(bookCtrl.listBooks);

// New route to get book image by ID
router.route('/api/books/:bookId/image')
    .get(bookCtrl.getBookImage);

export default router;