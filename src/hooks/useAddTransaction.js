import {addDoc,collection,serverTimestamp} from "firebase/firestore";
import {db} from "../config/firebase-config";
import { useGetuserInfo } from "./useGetUserInfo";
export const useAddTransaction = () =>{
    const transactionCollectionRef = collection(db,"transactions");
    const {userId} = useGetuserInfo();
    const addTransaction = async ({
        description,
        transactionAmount,
        transactionType
    }) =>{
        await addDoc(transactionCollectionRef,{
            userId,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp()
        });
    };
    return {addTransaction};
}