/// <reference types="vite/client" />

module 'tiny-emitter/instance' {
  // Based off official typings, hence the use of not recommended types
  /* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */
  declare class TinyEmitter {
    on(event: string, callback: Function, ctx?: any): this
    once(event: string, callback: Function, ctx?: any): this
    emit(event: string, ...args: any[]): this
    off(event: string, callback?: Function): this
  }

  declare const Emitter: TinyEmitter

  export default Emitter
  /* eslint-enable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */
}
