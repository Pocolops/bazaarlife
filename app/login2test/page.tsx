

export default function Loginn() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-screen-xl w-full mx-auto grid grid-cols-2 gap-6 px-6 py-8 bg-white rounded-lg shadow-md">
            <div className="col-span-1">
              <h1 className="text-3xl font-semibold">BazaarLife</h1>
            </div>
            <div className="col-span-1">
              <div className="max-w-md w-full px-4 py-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form>
                  {/* ... login form inputs */}
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };
