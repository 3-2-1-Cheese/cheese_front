import axiosInstance from './config/axiosInstance'

interface photoBoothsApiProps {
  tag: string
  lat: number
  lon: number
}
const photoBoothsApi = async ({ tag, lat, lon }: photoBoothsApiProps) => {
  console.log(tag, lat, lon)
  const { data } = await axiosInstance.post(`/photobooths`, {
    tag,
    lat,
    lon,
  })
  return data
}

const photoBoothLikeApi = async ({ id }: { id: string }) => {
  const { data } = await axiosInstance.post(`/photobooths/${id}/favorite`)
  return data
}

export { photoBoothsApi, photoBoothLikeApi }
