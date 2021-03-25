process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.REACT_APP_CLIENT_ID = "DdAjj7Gb7Lk_ffRa8bHK0ACwWKYlteump0iGiFySh78"
process.env.REACT_APP_CLIENT_SECRET = "QXZ1zZhH0Vr1YdGQjk-xWZy6yv4DRRov7TUyNk8y6O8"
const environment = require('./environment')

module.exports = environment.toWebpackConfig()
