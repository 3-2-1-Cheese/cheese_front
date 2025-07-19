import axiosInstance from './config/axiosInstance'

const photoBoothsAPi = async (tag: string) => {
  const { data } = await axiosInstance.get('/photobooths' + '?tag=' + tag)
  return data
}

export { photoBoothsAPi }
