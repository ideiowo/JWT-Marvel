const jwt = require('jsonwebtoken')
const conf = require('../utils/jwtconfig')

function VerifyJwt(jwt_token) {
    try {
        return jwt.verify(jwt_token, conf['settings']['jwt_key'])
    } catch (err) { return null }

}

module.exports = {
    verify: VerifyJwt
}

