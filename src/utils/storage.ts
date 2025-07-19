import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export const getAccessToken = () => {
  return storage.getString('access-token') || ''
}
