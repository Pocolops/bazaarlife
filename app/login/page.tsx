export default function LogIn() {
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4"><h1 style={{color:'black'}}>Log in</h1></h1>
                <form>
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium">
                      <h1 style={{color:'black'}}>Username</h1>
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium">
                      <h1 style={{color:'black'}}>Password</h1>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          );
        };
  