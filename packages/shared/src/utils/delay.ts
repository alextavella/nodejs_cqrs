export const wait = (delay: number = 2000) =>
  new Promise(resolve => setTimeout(resolve, delay))
