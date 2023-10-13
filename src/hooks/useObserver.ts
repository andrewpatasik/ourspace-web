import { useEffect } from "react";

const useObserver = (
  target: React.RefObject<HTMLDivElement>,
  callback: any
) => {
  useEffect(() => {
    const observerOpt: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    let handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    };

    let observer = new IntersectionObserver(handleObserver, observerOpt);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useObserver;
