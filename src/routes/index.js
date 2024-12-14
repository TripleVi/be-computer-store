import authRouter from './auth-router.js'

function initRoutes(app) {
    app.use('/api/v1/auth', authRouter)

    app.get('', (_, res) => {
        res.status(200).send("<h1>Computer Store API</h1>")
    })
}

export default initRoutes
