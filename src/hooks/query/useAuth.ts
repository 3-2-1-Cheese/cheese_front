import { loginApi, loginApiProps } from '@/apis'
import { useAuthStore } from '@/stores/authStore'
import { useMutation } from '@tanstack/react-query'
function useLoginMutation() {
  const setAuth = useAuthStore(s => s.setAuth)
  return useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      console.log(data)
      setAuth(data.accessToken, data.user)
    },
  })
}
export function useLogin() {
  const { mutate: handleLogin, isPending: isLoginLoading } = useLoginMutation()
  return { handleLogin, isLoginLoading }
}
