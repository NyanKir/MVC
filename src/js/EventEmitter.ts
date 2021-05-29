export default class EventEmitter{
    public events:any={}

    on(event:string,listener:any):EventEmitter{
        (this.events[event] || (this.events[event]=[])).push(listener)
        console.log(this.events);

        return this
    }
    emit(event:string,arg?:any):void{
        (this.events[event]||[]).slice().forEach((fn: any)=>fn(...arg))
    }
}