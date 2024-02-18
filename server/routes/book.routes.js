import express from 'express'
import bookCtrl from '../controllers/book.controllers.js'

const router = express.Router()
router.route('/api/books')

    .get(bookCtrl.listBooks)

// New route to get book image by ID
//router.route('/api/books/:bookId/image').get(bookCtrl.getBookImage);
 router.route('/api/books/:bookId')
    .get(bookCtrl.getBookById);

router.route('/api/newbook')
    .post(bookCtrl.newBook);


/*router.route('/api/books/:bookId')
.get(bookCtrl.getBookById)*/
router.route('/api/books/by/:userId')
 .get(/*authCtrl.requireSignin, authCtrl.hasAuthorization,*/
bookCtrl.listByOwner)


export default router;
