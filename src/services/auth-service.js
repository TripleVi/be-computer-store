import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import db from '#src/models/index.cjs'

function generateToken(user) {
    const { id, name, role, avatar } = user
    return jwt.sign(
        { id, name, role: role.name, avatar: avatar?.url },
        process.env.JWT_SECRET,
        {
            issuer: process.env.DOMAIN,
            expiresIn: '2 days',
            subject: id,
        }
    )
}

async function signInWithUsernameAndPassword(username, password) {
    const user = await db.User.findOne({
        attributes: ['id', 'name', 'password'],
        include: [
            {
                attributes: ['name'],
                model: db.Role,
                required: true,
            },
            {
                attributes: ['url'],
                model: db.File,
                as: 'avatar',
            },
        ],
        where: { username },
    })
    if(!user) {
        throw { code: 'INVALID_CREDENTIAL' }
    }
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) {
        throw { code: 'INVALID_CREDENTIAL' }
    }
    return generateToken(user)
}

export { signInWithUsernameAndPassword }
