import { useEffect, useState } from 'react';

const preloadImage = (src: string): Promise<HTMLImageElement> => {
  const image: HTMLImageElement = new Image();

  return new Promise((resolve, reject) => {
    image.src = src;
    image.onload = () => resolve(image);
    image.onerror = image.onabort = () => reject(image.src);
  });
};

export default function usePreloadImages(srcList: string[]): {
  loading: boolean;
} {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function effect() {
      await Promise.all(srcList.map(preloadImage));
    }
    effect().then(() => {
      setLoading(false);
    });
  }, [srcList]);

  return { loading };
}
