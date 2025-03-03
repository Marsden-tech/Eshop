function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Tailwind CSS v4</h1>
            <p className="text-gray-600 mb-6">Your Tailwind installation is working!</p>
          </div>
          
          {/* Color samples */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="h-12 rounded bg-red-500"></div>
            <div className="h-12 rounded bg-yellow-500"></div>
            <div className="h-12 rounded bg-green-500"></div>
            <div className="h-12 rounded bg-blue-500"></div>
          </div>
          
          {/* Button examples */}
          <div className="space-y-4">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Primary Button
            </button>
            <button className="w-full bg-transparent border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
              Secondary Button
            </button>
          </div>
          
          {/* Responsive test */}
          <div className="mt-8">
            <p className="text-sm text-gray-500">Responsive test:</p>
            <div className="mt-2">
              <p className="hidden sm:block text-green-600">sm: Visible on small screens and up</p>
              <p className="hidden md:block text-blue-600">md: Visible on medium screens and up</p>
              <p className="hidden lg:block text-purple-600">lg: Visible on large screens and up</p>
              <p className="block sm:hidden text-red-600">Visible only on extra small screens</p>
            </div>
          </div>
        </div>
        
        {/* Card footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Happy styling with Tailwind CSS v4!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
