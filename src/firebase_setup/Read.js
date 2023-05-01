import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "./firebase"
import { useState, useEffect } from "react";

export function Read(id){
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await query(collection(firestore, "test-data"));
            onSnapshot(data, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(id)
                    // console.log(doc.data().testData.id)
                    if(doc.data().testData.id === id){
                        setRecipe(doc.data().testData)
                    }
                });
            });
        }
        getData()
    }, [])
    return(recipe)
}

export function ReadAll(){
    const [databaseInfo, setDatabaseInfo] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await query(collection(firestore, "test-data"));
            const databaseData = []
            onSnapshot(data, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    databaseData.push(doc.data().testData);
                });
            });
            setDatabaseInfo(databaseData)
        }
        getData()
    }, [])
    return(databaseInfo)
}



