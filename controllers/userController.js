const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const user = require('../models/userModel')

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashedPass = await bcrypt.hash(password, 10);

        await user.create({ email, password: hashedPass })
        res.status(200).send({
            success: true,
            message: "User created successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: "something went wrong while creating user" })
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const data = await user.findOne({ where: { email } })
    if (!data) {
        return res.status(401).send({
            success: false,
            message: "User Not found"
        })
    }
    const isPassValid = await bcrypt.compare(password, data.password);

    if (!isPassValid) {
        return res.status(401).send({
            success: false,
            message: "Authentication fail!!"
        })
    }
    const token = jwt.sign({ userId: data.id }, process.env.JWT_SECRET, { expiresIn: '30m' })
    res.status(200).send({
        success: true,
        message: "you are logged in!!",
        token
    })
}