import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleSitter } from "../../store/sitterReducer";
// import { sitterPhoto } from "../../store/sitterReducer";
import EditSitterModal from "../EditSitterModal";


const SitterPage = () => {
    const dispatch = useDispatch()
    const {sitterId} = useParams()
    const sitter = useSelector(state => state?.sitters[sitterId])
    const userId = useSelector((state) => state.session.user?.id)
    // const allSitters = useSelector((state)=> Object.values(state?.sitters))
    // console.log(allSitters[allSitters.length - 1].id, "---------------")
    // console.log(useSelector(state => state?.sitters[sitterId]), "wwwwwwwwww")


    useEffect(() => {
        dispatch(singleSitter(sitterId))
        // dispatch(sitterPhoto(sitterId))
    }, [dispatch])


    return (
        <div>
            <h2>{sitter?.User?.username}</h2>
            <img src={sitter?.url}/>
            <h3>{sitter?.price}</h3>
            <div>
                {userId === sitter?.User?.id && (
                    <EditSitterModal id={sitterId} editDog={sitter?.dog} editCat={sitter?.cat} editExotic={sitter?.exotic} editAbout={sitter?.about} editZipcode={sitter?.zipcode} editPrice={sitter?.price} editUrl={sitter?.url}/>
                )}
                
            </div>
        </div>
    )
}

export default SitterPage;