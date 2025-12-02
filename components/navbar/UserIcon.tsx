import { AiOutlineUser } from "react-icons/ai";
import { fetchProfileImage } from "@/utils/actions";

async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="avatar"
        className="w-6 h-6 rounded-full object-cover"
      ></img>
    );
  }
  return (
    <AiOutlineUser className="w-6 h-6 bg-primary rounded-full text-white" />
  );
}

export default UserIcon;
