import { useEffect } from 'react';

let observer;
// ele是要监听的元素
// callback是监听后的回调函数
// watch是useEffect的依赖项
export default function useObserverHook(ele, callback, watch = []) {
  useEffect(() => {
    const node = document.querySelector(ele);
    if (node) {
      observer = new IntersectionObserver(entries => {
        callback && callback(entries);
      });
      observer.observe(node);
    }

    return () => {
      if (observer && node) {
        // 解绑元素
        observer.unobserve(node);

        // 停止监听
        observer.disconnect();
      }
    }
  }, watch);
}