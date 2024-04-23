import { useState, useEffect } from "react";

function useInViewPort<T extends HTMLElement>(
  ref: React.RefObject<T>,
  pageRef: React.RefObject<T>,
  options?: IntersectionObserverInit
) {
  const [inViewport, setInViewport] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        {
          console.log({
            intersectionRatio: entry.intersectionRatio,
            is: entry.isIntersecting,
          });

          setInViewport(entry.isIntersecting);
        }
      });
    }, options);
    const currentRef = pageRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, pageRef]);
  return inViewport;
}
export default useInViewPort;
