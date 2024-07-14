import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  faBookmark,
  faDollarSign,
  faGraduationCap,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <main className="p-8 bg-gray-100 h-full">
        <div className="grid grid-cols-4 gap-6">
          {/* <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="material-icons text-xl text-blue-500">school</span>
            <p className="text-gray-700 text-xl mt-4">Students</p>
            <p className="text-xl font-bold mt-2">243</p>
          </div> */}
          <Card className="bg-blue-100 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <div className="p-3">
                <FontAwesomeIcon color={"#74c1ed"} icon={faGraduationCap} />
                <p className="text-gray-600">Students</p>
              </div>
              <div className="flex justify-end">
                <p className="text-black-800 text-2xl font-bold p-4">243</p>
              </div>
            </div>
          </Card>
          <Card className="bg-pink-100 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <div className="p-3">
                <FontAwesomeIcon color={"#ee95c5"} icon={faBookmark} />
                <p className="text-gray-600">Course</p>
              </div>
              <div className="flex justify-end">
                <p className="text-black-800 text-2xl font-bold p-4">13</p>
              </div>
            </div>
          </Card>
          <Card className="bg-yellow-100 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <div className="p-3">
                <FontAwesomeIcon color="#f6c762" icon={faDollarSign} />
                <p className="text-gray-600">Payments</p>
              </div>
              <div className="flex justify-end">
                <p className="text-black-800 text-2xl font-bold p-4">
                  500,000 $
                </p>
              </div>
            </div>
          </Card>
          <Card className="bg-yellow-500 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <div className="p-3">
                <FontAwesomeIcon color="white" icon={faUser} />
                <p className="text-gray-50">Users</p>
              </div>
              <div className="flex justify-end">
                <p className="text-gray-50 text-2xl font-bold p-4">3093</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
