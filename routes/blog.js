const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, '../templates/intex.html'))
  res.render('home')
})

router.get("/blogs", (req, res) => {
  // blogs.forEach(e => {
  //   console.log(e.title)
  // });
  // res.sendFile(path.join(__dirname, '../templates/blog.html'))
  res.render('blogHome', {
    blogs: blogs
  })
})

router.get('/blogPost/:slug', (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.slug = req.params.slug
  })
  // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
  res.render('blogPage', {
    title: myBlog[0].title,
    content: myBlog[0].content
  })
})

module.exports = router