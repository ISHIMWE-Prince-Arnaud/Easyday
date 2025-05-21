const LoadingSpinner = () => {
  return (
    <div className="text-center py-8">
      <div className="loader border-t-4 border-blue-600 border-solid h-8 w-8 rounded-full animate-spin mx-auto"></div>
      <p className="mt-2">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;