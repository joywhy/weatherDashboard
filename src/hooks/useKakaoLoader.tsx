import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: '445e40b8b6e405c29f0ac1735768e413',
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
export { useKakaoLoader };
