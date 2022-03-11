import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import { dbService } from "../firebase/firebase";

const FILTER_ITEMS = "FILTER_ITEMS";

const categoryFilterItemsData = (category) => async (dispatch) => {
  try {
    const q = query(collection(dbService, "items"));
    const querySnapshot = await getDocs(q);

    let Item = [];

    querySnapshot.forEach((doc) => {
      if (category === "all") Item = [doc.data(), ...Item];
      else {
        if (doc.data().category === category) Item = [doc.data(), ...Item];
      }
    });

    dispatch({ type: FILTER_ITEMS, payload: Item });
  } catch (e) {
    console.log(e);
  }
};

export default categoryFilterItemsData;
