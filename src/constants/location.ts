export type regionType = '잠실' | '강남' | '성수' | '홍대'

export const REGIONS: regionType[] = ['잠실', '강남', '성수', '홍대']

type latlon = { lat: number; lon: number }

interface locationType {
  regions: Record<regionType, latlon>
  center: latlon
}

export const INITIAL_LOCATION: locationType = {
  regions: {
    잠실: { lat: 37.5, lon: 127.094 },
    강남: { lat: 37.505, lon: 127.047 },
    성수: { lat: 37.535, lon: 127.046 },
    홍대: { lat: 37.54, lon: 126.922 },
  },
  center: {
    lat: 37.53325,
    lon: 127.02725,
  },
}
