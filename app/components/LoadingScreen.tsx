export default function LoadingScreen({ message }: { message: string }) {
    return (
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p>{message}</p>
      </div>
    )
  }
  
  