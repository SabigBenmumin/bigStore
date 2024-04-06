import { Timestamp, addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "./firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createItem = async (item) => {
  const i_id = item._id;
  const i_collection = item.item_collection;
  const name = item.name;
  const price = Number(item.price);
  const instock = Number(item.countStock);
  const img = item.file;

  const imgRef = ref(storage, name);

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
};

export const DeleteItem = async (id) => {
  await deleteDoc(doc(db, "items", id));
};

export const UpdateStock = async(item, newStock) => {
  await setDoc(doc(db, "items", item.i_id), {
        i_id: item.i_id,
        name: item.name,
        i_collection: item.i_collection,
        price: item.price,
        instock: newStock,
        photoURL: item.photoURL,
        created: item.created,
        last_update: Timestamp.now(),
  })
}


export const  Delete = async(name) => {
  const imgRef = ref(storage, name)
  deleteObject(imgRef).then(() => {

  }).catch((error) => {
    
  })

}
