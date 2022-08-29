import {useEffect, useState} from "react";

export default function useFancyNavigationBar () {
  const [hide, setHide] = useState(true)
  const [prev, setPrev] = useState(0);

  const handleScroll = () => {
    if (prev > window.scrollY) {
      setHide(true)
    } else {
      setHide(false)
    }
    setPrev(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return [hide, setHide]
}
