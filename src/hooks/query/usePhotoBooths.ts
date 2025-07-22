import { photoBoothLikeApi, photoBoothsApi } from '@/apis'
import { usePhotoBoothStore } from '@/stores/photoBoothStore'
import { useMutation } from '@tanstack/react-query'

function usePhotoBoothMutation() {
  const setPhotoBooths = usePhotoBoothStore(s => s.setPhotoBooths)
  return useMutation({
    mutationFn: photoBoothsApi,
    onSuccess: data => {
      console.log(data)
      setPhotoBooths(data)
    },
    onError: error => {
      console.log(error)
    },
  })
}

export function usePhotoBooth() {
  const { mutate: handleGetPhotoBooth, isPending: isGetPhotoBoothLoading } =
    usePhotoBoothMutation()

  return { handleGetPhotoBooth, isGetPhotoBoothLoading }
}

function usePhotoBoothLikeMutation() {
  const toggleFavorite = usePhotoBoothStore(s => s.toggleFavorite)
  return useMutation({
    mutationFn: photoBoothLikeApi,
    onMutate: variables => {
      toggleFavorite(variables.id)
    },
    onError: error => {
      console.log(error)
    },
  })
}

export function usePhotoBoothLike() {
  const { mutate: handlePhotoBoothLike } = usePhotoBoothLikeMutation()

  return { handlePhotoBoothLike }
}
