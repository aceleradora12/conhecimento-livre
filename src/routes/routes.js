const Course = require('../../models/course')
const Content = require('../../models/content')
const Author = require('../../models/author')
const Search = require('../search/search')
const searchByCourseName = require('./search_by_course_name')
const index = require('./index')
const searchByLevel = require('./searchByLevel')
const content = require('./content')
const author = require('./author')
const search = new Search()

const allRoutes = {
  index: index(Content),
  searchByCourseName: searchByCourseName(Course, search),
  content: content(Content, search),
  author: author(Author, search, Content),
  searchByCourseName: searchByCourseName(Course),
  content: content(Content, search),
  searchByLevel: searchByLevel(Course)
}

module.exports = allRoutes
