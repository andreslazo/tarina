/* eslint-disable max-len */
import LoadingSpinner from "@/components/shared/LoadingSpinner"

export default function FullScreenLoading() {
  return(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <LoadingSpinner />
      Loading
    </div>
  )
}
