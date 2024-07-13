export default function Home() {
return (
    <div className="h-screen w-screen">
      <main className="p-8 bg-gray-100 h-full">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="material-icons text-4xl text-blue-500">school</span>
            <p className="text-gray-700 text-xl mt-4">Students</p>
            <p className="text-4xl font-bold mt-2">243</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="material-icons text-4xl text-pink-500">bookmark</span>
            <p className="text-gray-700 text-xl mt-4">Course</p>
            <p className="text-4xl font-bold mt-2">13</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="material-icons text-4xl text-yellow-500">payment</span>
            <p className="text-gray-700 text-xl mt-4">Payments</p>
            <p className="text-4xl font-bold mt-2">556,000₺</p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="material-icons text-4xl text-white">person</span>
            <p className="text-white text-xl mt-4">Users</p>
            <p className="text-4xl font-bold text-white mt-2">3</p>
          </div>
        </div>
      </main>
    </div>
  );
}
