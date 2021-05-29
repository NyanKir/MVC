import EventEmitter from './EventEmitter';
import PostsModel from './PostsModel';
import * as $ from 'jquery'

export default class PostsView extends EventEmitter {

    constructor(public model: PostsModel, public elements: { add: any, result: any }) {
        super()

        model.on('postAdded', () => this.show());

        elements.add.addEventListener('click', () => {

            this.emit('addPost',['Angular','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, maxime!'])
        })
    }

    show(): void {
        $(this.elements.result).empty()
        const posts = this.model.getPosts()
        posts.forEach((post) => {
            $(this.elements.result).append(
                `<div class="card mt-1 mb-1">      
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.desc}</p>
                        <button  class="btn btn-danger">Delete</button>
                        <button  class="btn btn-warning">Edit</button>
                     </div>
                 </div>`
            )
        })
        console.log('Show')
    }

}