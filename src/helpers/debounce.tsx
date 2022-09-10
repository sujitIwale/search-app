export function debounce<T>(fn: (a: T) => any, limit: number) {
  let timer: any;
  return function () {
    if (timer) clearTimeout(timer);
    const context = this;
    const args: any = arguments;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, limit);
  };
}
