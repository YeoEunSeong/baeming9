import { collection, addDoc } from "firebase/firestore";
import { dbService } from "./firebase";

const setUserInfo = async (userInfo) => {
  try {
    await addDoc(collection(dbService, "UserInfo"), {
      id: userInfo.id,
      name: userInfo.name,
      createdAt: Date.now(),
    });
  } catch (e) {
    console.log(e);
  }
};

export default setUserInfo;
