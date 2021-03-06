import PostsModel from './PostsModel';
import PostsView from './PostsView';

export default class PostsController {
    model:PostsModel
    view:PostsView

    constructor( model:PostsModel, view:PostsView) {
      this.model=model;
      this.view=view;

      view.on('addPost', (title:string, desc:string)=>this.addPost(title, desc));
      view.on('deletePost', (index:number)=>this.deletePost(index));
    }

    public addPost(title:string, desc:string) {
      this.model.addPost(title, desc);
    }
    public deletePost(index:number) {
      this.model.deletePost(index);
    }
}
