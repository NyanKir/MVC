export default class EventEmitter {
    public events:any={}

    on(event:string, listener:Function):EventEmitter {
      (this.events[event] || (this.events[event]=[])).push(listener);
      return this;
    }
    emit(event:string, arg?:any):void {
      (this.events[event]||[]).slice().forEach((fn: any)=>fn(...arg));
    }
}
