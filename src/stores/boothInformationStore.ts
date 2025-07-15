import { create } from 'zustand'

type boothInformationType = any

interface boothInformationStoreProps {
  boothInformation: boothInformationType
  setBoothInformation: (boothInformation: boothInformationType) => void
}

export const boothInformationStore = create<boothInformationStoreProps>(
  (set, get) => {
    return {
      boothInformation: {},
      setBoothInformation: () => {},
    }
  },
)
