export function debounce<T>(fn: (args: T) => any, limit: number) {
  let timer: any;
  return function (...args: any) {
    if (timer) clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, limit);
  };
}
