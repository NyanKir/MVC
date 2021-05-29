export default class Post{
    title:string
    desc:string
    readonly date?:Date=new Date()

    constructor(title:string,desc:string) {
        this.title=title
        this.desc=desc
    }
}