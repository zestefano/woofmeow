import { useDispatch } from "react-redux";
import { deleteSitter } from "../../store/sitterReducer";
import { useHistory } from "react-router-dom";
import '../../components/EditSitterModal/editSitter.css'

const DeleteSitterButton = ({id}) => {
 const dispatch = useDispatch()
 const history = useHistory()

 const onSubmit = () => {
    dispatch(deleteSitter(id))
    history.push('/sitters')
 } 

 return (
     <div className="deleteSitter">
         <button
         onClick={() => onSubmit(id)}
         id={id}
         >
             Delete
         </button>
     </div>
 )

}


export default DeleteSitterButton