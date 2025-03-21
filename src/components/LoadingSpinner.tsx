// src/components/LoadingSpinner.tsx
const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
      </div>
    )
  }
  
  export default LoadingSpinner
  