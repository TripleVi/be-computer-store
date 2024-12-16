import authRouter from './auth-router.js'
import categoryRouter from './category-router.js'

function initRoutes(app) {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/categories', categoryRouter)

    app.get('', (_, res) => {
        res.status(200).send("<h1>Computer Store API</h1>")
    })
}

export default initRoutes
