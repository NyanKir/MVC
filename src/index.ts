import  'bootstrap'

import PostsController from './js/PostsController'
import PostsView from './js/PostsView'
import './assets/webpack.png'
import PostsModel from './js/PostsModel'
import Post from './js/Post'
import './index.scss'


$('a[href*=\'' + location.pathname.split('/dist/').reverse()[0] + '\']').addClass(
  'current'
)
window.addEventListener('load', function () {
  const model = new PostsModel([
    new Post(
      'React',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ),
    new Post(
      'Vue',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    )
  ])
  const view = new PostsView(model, {
    result: $('#result')[0],
    add: $('#add')[0]
  })
  new PostsController(model, view)
  view.show()
})



