export const PORT = 5555;
export const mongDBURL = process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' +
(process.env.MONGO_PORT || '27017') +
'/books_echange';