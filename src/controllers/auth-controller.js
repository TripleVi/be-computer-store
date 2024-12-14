import * as authService from '#src/services/auth-service.js'
import * as error from '#src/core/error.js'

const signIn = async (req, res) => {
    const { username, password } = req.body
    try {
        const token = await authService
            .signInWithUsernameAndPassword(username, password)
        return res.status(200).send({ token })
    } catch (err) {
        switch (err.code) {
            case 'INVALID_CREDENTIAL':
                res.status(401).send(error.INVALID_CREDENTIAL)
                break
            default:
                console.log(err)
                res.sendStatus(500)
        }
    }
}

export { signIn }
