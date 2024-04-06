import { Timestamp, doc, setDoc } from "firebase/firestore";
import { db, storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createItem = async (item) => {
  const i_id = item._id;
  const i_collection = item.item_collection;
  const name = item.name;
  const price = item.price;
  const instock = item.countStock;
  const img = item.file;

  const imgRef = ref(storage, name);

  const downloadURL = "";

  await uploadBytes(imgRef, img);

  await getDownloadURL(imgRef)
    .then((url) => {
      setDoc(doc(db, "items", i_id), {
        i_id,
        name,
        i_collection,
        price,
        instock,
        photoURL: url,
        created: Timestamp.now(),
      });
    })
    .catch((error) => {
      console.log("error kub");
    });

  /*
  await setDoc(doc(db, "items", i_id), {
    i_id,
    name,
    i_collection,
    price,
    instock,
    photoURL: downloadURL,
    created: Timestamp.now()
  });
  */
};
