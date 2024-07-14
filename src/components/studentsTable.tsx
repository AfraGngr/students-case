import UserCard from "./userCard"

interface IStudentProps {
    data : GetStudentResponse['users']
}
export default function StudentsTable({ data }: IStudentProps) {

    return (
        <div className="">
        <div
            className="p-2 w-full flex justify-between"
            >
            <div className="text-gray-500 w-1/12 " ></div>
            <div className="text-gray-500 w-2/12" >Name</div>
            <div className="text-gray-500 w-3/12">Email</div>
            <div className="text-gray-500 w-2/12">Phone</div>
            <div className="text-gray-500 w-3/12">Website</div>
            <div className="text-gray-500 w-1/12"></div>
            </div>
             <div
            className="w-full flex flex-col gap-2 items-center justify-center"
            >

            {
                data.map((user, index) => (
                    <UserCard key={index} user={user} />
                )
            )
        }
        </div>
        </div>
    )
}