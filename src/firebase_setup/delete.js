import { deleteDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 
function deleteRecipe (id) {

    const options = {
        title: 'Delete',
        message: 'Are you sure you want to delete this recipe?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => 
            {try {
                deleteDoc(ref, id)
            } catch(err) {
                console.log(err)
            }}
          },
          {
            label: 'No',
          }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        willUnmount: () => {},
        afterClose: () => {},
        onClickOutside: () => {},
        onKeypress: () => {},
        onKeypressEscape: () => {},
        overlayClassName: "overlay-custom-class-name"
      };


    const ref = collection(firestore, "test-data") // Firebase creates this automatically
    confirmAlert(options);
}
 
export default deleteRecipe;

