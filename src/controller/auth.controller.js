const Joi = require('joi');
const User = require('../model/User.Model');

const userValidationSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'Username must be a text.',
            'string.empty': 'Username is required.',
            'string.min': 'Username must be at least 3 characters.',
            'string.max': 'Username must not exceed 30 characters.',
            'any.required': 'Username is required.'
        }),
    
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'Email must be a valid text.',
            'string.email': 'Please enter a valid email address.',
            'string.empty': 'Email is required.',
            'any.required': 'Email is required.'
        }),

    password: Joi.string()
        .min(6)
        .max(128)
        .required()
        .messages({
            'string.base': 'Password must be a text.',
            'string.empty': 'Password is required.',
            'string.min': 'Password must be at least 6 characters.',
            'string.max': 'Password must not exceed 128 characters.',
            'any.required': 'Password is required.'
        })
});



const signup = async (req, res, next) => {
    try {

        const data = req.body

        const { error, value } = userValidationSchema.validate(data)

        console.log(error, value)

        const user = await User.create(value)

        res
            .status(200)
            .send({ "message": "User created Successfully" }, user)

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    signup,
}