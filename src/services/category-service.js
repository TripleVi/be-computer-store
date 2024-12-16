import db from '#src/models/index.cjs'
import constants from '#src/core/constants.js'

async function getCategories({
    limit = 25,
    offset = 0
}) {
    const { count, rows } = await db.Category.findAndCountAll({
        attributes: ['id', 'name'],
        order: [['createdAt', 'DESC']],
        offset,
        limit: Math.min(limit, constants.upperLimit),
    })
    return {
        data: rows,
        metadata: {
            totalItems: count,
        },
    }
}

export { getCategories }
