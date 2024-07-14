import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface UserCardProps {
    user : User
    key: number
}

    <div
            className="w-full flex justify-between"
            ></div>

export default function UserCard ( {user, key}: UserCardProps) {
    return (
        <div 
            key={key}
            className="bg-white w-full p-2 rounded-md flex align-center justify-between"
        >   
        <div className="w-1/12 flex justify-center items-center">
            <img className="border rounded-lg w-9/12" src={user.image} alt="dummy image"/>
        </div>
            <div className="flex items-center w-2/12">{user.firstName + " " + user.lastName} </div>
            <div className="flex items-center w-2/12">{user.email.replace("x.dummyjson", "gmail")} </div>
            <div className="flex items-center w-2/12">{user.phone} </div>
            <div className="flex items-center w-3/12">{`${user.lastName.toLowerCase()}.dummyjson.com`} </div>
            <div className="flex items-center w-1/12"> 
            <FontAwesomeIcon color="orange" className="mr-3" icon={faTrash} />
            <FontAwesomeIcon color="orange" icon={faPenToSquare} />
            </div>
        </div>
    )
}