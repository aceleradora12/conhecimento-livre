class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
<<<<<<< 6da3ef7e4622dc2e24fcc4fa598d595724806865
<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
=======
    return this.db.collection('courses').find()
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======
    return this.db.collection('Courses').find()
  }

<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
<<<<<<< 40461b4c65191428c46337651e3d7377b77118f3
  insertData(courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
=======
  insertData(courseId, courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseId: `${courseId}`, courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })
>>>>>>> <Fernanda, Jessica, Mauricio> insere Id no curso
=======
  insert(courses) {
    return this.db.collection('Courses').insert(courses)
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
  }
}

module.exports = CourseMapper
