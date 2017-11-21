const Controller = require('../mappers/models_controller')

const deleteCourse = Author => (req, res, next) => {
    const authorController = new Controller(Author)
    if(req.body.collection === 'author'){
      authorController
      .deleteAuthor(req.body.id)
      .catch((error) => {
        console.log(error)
        next()
      })
    }else if(req.body.collection === 'courses'){
      authorController
      .deleteCourse(req.body.id)
      .catch((error) => {
        console.log(error)
        next()
      })
      }
}


module.exports = deleteCourse
