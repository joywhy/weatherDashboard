import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
export { useKakaoLoader };
