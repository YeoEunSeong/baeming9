import { collection, getDocs, query } from "firebase/firestore";
import { dbService } from "../firebase/firebase";

const FETCH_ITEM_DETAIL = "FETCH_ITEM_DETAIL";

const fetchItemDetail = (id) => async (dispatch) => {
  try {
    const q = query(collection(dbService, "items"));
    const querySnapshot = await getDocs(q);

    let Item;

    querySnapshot.forEach((doc) =>
      doc.id === id ? (Item = { id: doc.id, ...doc.data() }) : null
    );

    dispatch({ type: FETCH_ITEM_DETAIL, payload: Item });
  } catch (e) {
    console.log(e);
  }
};

export default fetchItemDetail;
