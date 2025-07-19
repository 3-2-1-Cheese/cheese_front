import authInstance from './config/authInstance'

export interface loginApiProps {
  accessToken: string
}

const loginApi = async ({ accessToken }: loginApiProps) => {
  console.log('보낸다', accessToken)
  const { data } = await authInstance.post('/auth/kakao/login', {
    accessToken,
  })
  return data
}

export { loginApi }
