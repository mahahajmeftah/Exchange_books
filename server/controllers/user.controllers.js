
import User from '../models/user.model.js'
import errorHandler from '../dbErrorHandler.js'
const create = async (req, res) => {
  
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

    const formData = new User({
        name: name,
        email: email,
        phone: phone,
        password: password
    })
    console.log(name)
    try {
      
      await formData.save()
      return res.status(200).json({
        message: "Successfully signed up!"
      })
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }

const list = async (req, res) => {
    try {
    let users = await User.find().select('name email created')
    res.json(users)
 
    } catch (err) {
    return res.status(400).json({
     error: "Could not retrieve users"

    })
    }
   }
export  default{
create,
list} 
