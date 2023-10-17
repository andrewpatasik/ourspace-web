import { useEffect, useState } from "react";

const useObserver = (
  target: React.RefObject<HTMLDivElement>,
  callback?: any
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observerOpt: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    let handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          callback && callback();
        } else {
          setIsVisible(false);
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

  return [isVisible];
};

export default useObserver;
