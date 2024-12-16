import * as categoryService from '#src/services/category-service.js'
import * as errors from '#src/core/errors.js'

const fetchCategories = async (req, res) => {
    try {
        const results = await categoryService.getCategories(req.query)
        return res.status(200).send(results)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export { fetchCategories }
