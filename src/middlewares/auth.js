import jwt from 'jsonwebtoken'

import RoleEnum from '#src/enums/role-enum.js'
import db from '#src/models/index.cjs'
import * as error from '#src/core/errors.js'

const verifyJWT = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    if(!authorizationHeader) {
        return res.sendStatus(401)
    }
    try {
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {
            issuer: process.env.DOMAIN,
            algorithms: 'HS256',
        })
        const { id, role } = decoded
        const user = await db.User.findByPk(id, {
            attributes: ['id'],
        })
        if(!user) {
            return res.status(401).send(error.INVALID_CREDENTIAL)
        }
        req.User = { id, role }
        next()
    } catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                res.status(401).send(error.TOKEN_EXPIRED)
                break
            case 'JsonWebTokenError':
            case 'NotBeforeError':
                res.status(401).send(error.INVALID_TOKEN)
                break
            default:
                console.log(err)
                res.sendStatus(500)
        }
    }
}

const isAdmin = (req, res, next) => {
    if(RoleEnum.ADMIN === req.User.role) {
        return next()
    }
    res.status(403).send({ error: 'Access Denied' })
}

export { verifyJWT, isAdmin }
