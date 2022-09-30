export interface IService<T = any, R = any> {
  execute(params: T): Promise<R>
}
