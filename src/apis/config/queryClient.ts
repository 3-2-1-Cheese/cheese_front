import { logout } from '@/utils/auth'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: any) => {
        const status = error?.response?.status

        if (status === 403) {
          logout()
        }
      },
    },
  },
})
export default queryClient
