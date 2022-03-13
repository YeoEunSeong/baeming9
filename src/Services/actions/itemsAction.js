import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import { dbService } from "../firebase/firebase";

const FILTER_ITEMS = "FILTER_ITEMS";

const categoryFilterItemsData = (category) => async (dispatch) => {
  try {
    const q = query(collection(dbService, "items"));
    const querySnapshot = await getDocs(q);

    let Item = [];

    querySnapshot.forEach((doc) => {
      const newData = {
        id: doc.id,
        ...doc.data(),
      };
      if (category === "all") Item = [newData, ...Item];
      else {
        if (newData.category === category) Item = [newData, ...Item];
      }
    });

    dispatch({ type: FILTER_ITEMS, payload: Item });
  } catch (e) {
    console.log(e);
  }
};

export default categoryFilterItemsData;
