import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleSitter } from "../../store/sitterReducer";


const SitterPage = () => {
    const dispatch = useDispatch()
    const {sitterId} = useParams()
    const sitter = useSelector(state => state?.sitters[sitterId])


    useEffect(() => {
        dispatch(singleSitter(sitterId))
    }, [dispatch])

    return (
        <div>
            <h2>{sitter?.User?.username}</h2>
            <img src={sitter?.Photo?.url}/>
        </div>
    )
}

export default SitterPage;