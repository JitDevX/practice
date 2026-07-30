export default function Home() {
  return (
    <div className="min-h-screen bg-black flex">

      {/* Left Side */}
      <div className="w-1/2 p-16 bg-black">
        <h1 className="text-5xl font-bold text-white">
          Automate your path to production
        </h1>

        <p className="text-gray-400 mt-5">
          Ship faster with secure, reliable CI/CD.
        </p>

        <button className="mt-6 text-blue-500">
          Explore GitHub Actions →
        </button>

        <hr className="my-8 border-gray-700" />

        <div className="py-6 border-b border-gray-700 flex justify-between">
          <h2 className="text-2xl text-gray-300">
            Code instantly from anywhere
          </h2>

          <span className="text-purple-500 text-3xl">+</span>
        </div>

        <div className="py-6 border-b border-gray-700 flex justify-between">
          <h2 className="text-2xl text-gray-300">
            Keep momentum on the go
          </h2>

          <span className="text-purple-500 text-3xl">+</span>
        </div>

        <div className="py-6 border-b border-gray-700 flex justify-between">
          <h2 className="text-2xl text-gray-300">
            Shape your toolchain
          </h2>

          <span className="text-purple-500 text-3xl">+</span>
        </div>

      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-900 via-purple-800 to-sky-900 flex items-center justify-center">

        <div className="w-[500px] bg-gray-900 rounded-3xl border border-purple-500 p-6">

          <h3 className="text-white mb-6">
            45,167 workflow runs
          </h3>

          <div className="space-y-4">

            <div className="bg-gray-800 p-4 rounded">
              Fix IE12 incompatibilities
            </div>

            <div className="bg-gray-800 p-4 rounded">
              Accessibility tests
            </div>

            <div className="bg-gray-800 p-4 rounded">
              Update changelog
            </div>

            <div className="bg-gray-800 p-4 rounded">
              Migrate Storybook
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}