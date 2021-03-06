import React from 'react';

const useIntersection = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | null => {
  const [
    intersectionObserverEntry,
    setIntersectionObserverEntry,
  ] = React.useState<IntersectionObserverEntry | null>(null);

  React.useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.root, options.rootMargin, options.threshold, ref.current]);

  return intersectionObserverEntry;
};

export default useIntersection;
