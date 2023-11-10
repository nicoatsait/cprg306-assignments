import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function addNewItem(userId, itemObj) {
    try {
        let userItemsCollectionReference = collection(db, "users", userId, "items");
        let  addItemPromise = await addDoc(userItemsCollectionReference, itemObj);
        console.log(addItemPromise.id);
    }catch (error) {
        console.error("Error adding new item: ", error);
    }
}


export async function getItemList(userId) {
    let userItemsCollection = collection(db, "users", userId, "items");
    let collectionSnapshot = await getDocs(userItemsCollection);
    let itemList = [];
    collectionSnapshot.forEach((doc) => {
        let thisItem = {
            id: doc.id,
            ...doc.data(),
        }
        console.log(doc.id," - ", doc.data());
        itemList.push(thisItem);
        });
        
    
    return itemList;
}