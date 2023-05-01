import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase"
 
function Create (testdata) {
    const ref = collection(firestore, "test-data") // Firebase creates this automatically
    let data = {
        testData: testdata
    }
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default Create;

