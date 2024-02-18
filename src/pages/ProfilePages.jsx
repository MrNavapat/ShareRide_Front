
import ProfileLayout from "./ProfileLayout";
import ProfileContextProvider from "../Context/ProfileContext";

function ProfilePages() {
  return (
    <ProfileContextProvider>
      <ProfileLayout />
      </ProfileContextProvider>

)

}

export default ProfilePages;

