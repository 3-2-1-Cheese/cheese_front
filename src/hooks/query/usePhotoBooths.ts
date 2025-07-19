import { photoBoothsAPi } from '@/apis'
import { usePhotoBoothStore } from '@/stores/photoBoothStore'
import { useMutation } from '@tanstack/react-query'

function usePhotoBoothMutation() {
  const setPhotoBooths = usePhotoBoothStore(s => s.setPhotoBooths)
  return useMutation({
    mutationFn: photoBoothsAPi,
    onSuccess: data => {
      console.log(data)
      setPhotoBooths(data)
    },
  })
}

export function usePhotoBooth() {
  const { mutate: handleGetPhotoBooth, isPending: isGetPhotoBoothLoading } =
    usePhotoBoothMutation()

  return { handleGetPhotoBooth, isGetPhotoBoothLoading }
}
