import Link from "next/link";

export default function Sidebar ()  {
    return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-col items-center bg-yellow-200 w-64 h-full py-8 px-4 shadow-lg">
        <h2 className="text-xl font-bold mb-8">MANAGE COURSES</h2>
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-sm text-yellow-600">Admin</p>
        </div>
        <nav className="flex flex-col w-full">
          <Link href="/" className="flex items-center mb-4 px-4 py-2 text-yellow-500 rounded-lg hover:bg-yellow-100">
            <span className="ml-4">Home</span>
          </Link>
          <Link href="/students" className="flex items-center mb-4 px-4 py-2 text-yellow-500 hover:bg-yellow-100 rounded-lg">
            <span className="ml-4">Students</span>
          </Link>
        </nav>
        <div className="mt-auto">
          <Link href="/login" className="flex items-center text-gray-700 hover:text-red-500">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}