import { Card } from '../ui';
import { Map } from 'react-kakao-maps-sdk';
import { useKakaoLoader } from '@/hooks/useKakaoLoader';

function WeatherMap() {
  useKakaoLoader();

  return (
    <Card className="rounded-lg overflow-hidden">
      <Map
        id="map"
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
      ></Map>
    </Card>
  );
}

export { WeatherMap };
