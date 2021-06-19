import EventEmitter from './EventEmitter'
import PostsModel from './PostsModel'

export default class PostsView extends EventEmitter {

    constructor(public model: PostsModel, public elements: { add: any, result: any }) {
        super()

        model.on('show', () => this.show())

        elements.add.addEventListener('click', () => {
            const forms = $('#formPost')

            Array.prototype.slice.call(forms).forEach( (form: { addEventListener: (arg0: string, arg1: (event: any) => void, arg2: boolean) => void; checkValidity: () => any; classList: { add: (arg0: string) => void; }; })=> {

                form.addEventListener('submit',  (event)=> {
                    event.preventDefault()

                    if (!form.checkValidity()) {
                        event.stopPropagation()
                    }else{
                        $('#exampleModal').hide()
                        this.emit('addPost',[$('#inputTitle').val(),$('#inputDescription').val()])
                    }

                    form.classList.add('was-validated')
                },false)
            })

        })
    }

    show(): void {
        $(this.elements.result).empty()
        const posts = this.model.getPosts()
        posts.forEach((post,index) => {
            $(this.elements.result).append(
                `<div class="card mt-1 mb-1">      
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.desc}</p>
                        <button  class="btn btn-danger btn-sm" id="del-${index}">Delete</button>
                        <button  class="btn btn-info text-white btn-sm" >Edit</button>
                     </div>
                 </div>`
            )
            $(`#del-${index}`).on('click',()=>this.emit('deletePost',[index]))
        })
    }

}
