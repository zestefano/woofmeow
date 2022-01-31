import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { singleSitter } from "../../store/sitterReducer";
// import { sitterPhoto } from "../../store/sitterReducer";
import EditSitterModal from "../EditSitterModal";
import Reviews from "../Reviews";
import '../../components/SitterPage/sitterPage.css'

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
        <section className="sitters13">
            </section>
        <section className="sitters14">
        <div className="profile">
            <div className="card2">
                <h1 className="name">{sitter?.User?.username}</h1>
                <button className="book">Book me</button>
                <h3 className="firstlast">{sitter?.User?.firstName} {sitter?.User?.lastName}</h3>
                <h3>${sitter?.price} per day</h3>
                <img className="profileimg" src={sitter?.url}/>
                
                
            </div>
            
            <div className="card">
            <h2 className="aboutme">About me</h2>
            <h3 className="about">{sitter?.about}</h3>
            
                <div>
                    {userId === sitter?.User?.id && (
                        <EditSitterModal id={sitterId} editDog={sitter?.dog} editCat={sitter?.cat} editExotic={sitter?.exotic} editAbout={sitter?.about} editZipcode={sitter?.zipcode} editPrice={sitter?.price} editUrl={sitter?.url}/>
                    )}
                    
                </div>
                
                <div className="card2">
                    <Reviews sitterId={sitterId} userId={sitter?.User?.id}/>
                </div>
            </div>
        </div>
        </section>
        
        </div>
        
        
    )
}

export default SitterPage;