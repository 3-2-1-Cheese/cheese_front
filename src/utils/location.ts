import Geolocation from '@react-native-community/geolocation'

export const getCurrentPosition = (): Promise<{ lat: number; lon: number }> =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        resolve({ lat: latitude, lon: longitude })
      },
      error => {
        console.warn('위치 가져오기 실패:', error.message)
        reject(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    )
  })
