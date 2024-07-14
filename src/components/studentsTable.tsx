import UserCard from "./userCard"

interface IStudentProps {
    data : GetStudentResponse['users']
}
export default function StudentsTable({ data }: IStudentProps) {

    return (
        <div className="p-5">
        <div
            className="p-2 w-full flex justify-between"
            >
            <div className="w-1/12 " ></div>
            <div className="w-2/12" >Name</div>
            <div className="w-2/12">Email</div>
            <div className="w-2/12">Phone</div>
            <div className="w-2/12">Website</div>
            <div className="w-2/12"></div>
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