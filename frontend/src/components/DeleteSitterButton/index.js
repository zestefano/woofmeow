import { useDispatch } from "react-redux";
import { deleteSitter } from "../../store/sitterReducer";
import { useHistory } from "react-router-dom";

const DeleteSitterButton = ({id}) => {
 const dispatch = useDispatch()
 const history = useHistory()

 const onSubmit = () => {
    dispatch(deleteSitter(id))
    history.push('/sitters')
 } 

 return (
     <div>
         <button
         onClick={() => onSubmit(id)}
         id={id}
         >
             delete
         </button>
     </div>
 )

}


export default DeleteSitterButton