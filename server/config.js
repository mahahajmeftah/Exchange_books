const PORT = 5555;
 const jwtSecret= process.env.JWT_SECRET || "YOUR_secret_key";
 const mongDBURL = process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' +
(process.env.MONGO_PORT || '27017') +
'/books_echange';
export {
    jwtSecret,
    PORT,
    mongDBURL
}