function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      {/* Loading Icon */}
      <div className="mb-6">
        <img
          src="/images/icon-loading.svg"
          alt="Loading"
          className="w-16 h-16 mx-auto animate-spin"
        />
      </div>

      {/* Loading Message */}
      <div className="mb-4">
        <h2 className="text-Neutral-0 text-xl font-brico font-semibold mb-2">
          Loading weather data...
        </h2>
        <p className="text-Neutral-300">
          Fetching the latest weather information for you
        </p>
      </div>

      {/* Loading Dots Animation */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-Blue-500 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-Blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}></div>
        <div
          className="w-2 h-2 bg-Blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}></div>
      </div>
    </div>
  );
}

export default LoadingState;
