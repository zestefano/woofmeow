import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addSitter } from "../../store/sitterReducer";
// import { useParams } from "react-router-dom";
// import { addPhoto } from "../../store/sitterReducer";


const BecomeSitter = ({showModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user.id)
    // const sitterId = useSelector((state) => state.session)
    // const {sitterId} = useParams()
    // console.log(sitterId, 'LLLLLLLLLLLLLL')

    const [dog, setDog] = useState(false)
    const [cat, setCat] = useState(false)
    const [exotic, setExotic] = useState(false)
    const [about, setAbout] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [price, setPrice] = useState('')
    // const [url, setUrl] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()
        const sitter = {
            dog,
            cat,
            exotic,
            about,
            zipcode,
            price,
            userId
        }
        // const photo = {
        //     url,
        //     sitterId
        // }
        await dispatch(addSitter(sitter))
        // await dispatch(addPhoto(photo))
        showModal(false)
    }

    const toggleDog = () => {
        setDog(value => !value)
    }
    const toggleCat = () => {
        setCat(value => !value)
    }
    const toggleExotic = () => {
        setExotic(value => !value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Do you take care of dogs?
                </label>
                <input
                type="checkbox"
                value={dog}
                onChange={toggleDog}
                />
               <label>
                    Do you take care of cats?
                </label>
                <input
                type="checkbox"
                value={cat}
                onChange={toggleCat}
                />   
               <label>
                    Do you take care of exotic animals?
                </label>
                <input
                type="checkbox"
                value={exotic}
                onChange={toggleExotic}
                />
                <label>
                    Tell us about yourself
                </label>
                <textarea
                onChange={e => setAbout(e.target.value)}
                value={about}
                />
                <label>
                    What's your zipcode?    
                </label>
                <input
                onChange={e => setZipcode(e.target.value)}
                value={zipcode}
                />
                <label>
                    How much do you charge per day?    
                </label>
                <input
                onChange={e => setPrice(e.target.value)}
                value={price}
                /> 
                {/* <label>
                    Photo.url
                </label>
                <input
                onChange={e => setUrl(e.target.value)}
                value={url}
                /> */}
                <button>
                    Submit    
                </button>                            
            </form>
        </div>
    )


}

export default BecomeSitter;