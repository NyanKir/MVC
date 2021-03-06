import Post from './Post';
import EventEmitter from './EventEmitter';

export default class PostsModel extends  EventEmitter{
    posts:Array<Post>

    constructor(posts:Array<Post>) {
        super();
        this.posts=posts
    }

    addPost(title:string,desc:string){
        console.log(title,desc)
        this.posts.push(new Post(title,desc))
        this.emit('show')
    }
    deletePost(index:number){
        this.posts.splice(index,1)
        this.emit('show')
    }

    getPosts(){
        return this.posts
    }
}
