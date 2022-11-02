import { useState, useEffect } from 'react';
import { INFINITE_SCROLL_RELOAD_HEIGHT } from './constants';

const useInfiniteScroll = (callback,max) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {
    // console.log(document.documentElement.scrollHeight)
    // console.log(document.documentElement.scrollTop)
    // console.log(document.documentElement.clientHeight)
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop > document.documentElement.clientHeight/INFINITE_SCROLL_RELOAD_HEIGHT || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;