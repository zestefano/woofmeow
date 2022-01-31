import { useDispatch } from "react-redux";
import { useState } from "react";
import { editSitter } from "../../store/sitterReducer";
// import { editSitterPhoto } from "../../store/sitterReducer";
import DeleteSitterButton from "../DeleteSitterButton";
import '../../components/EditSitterModal/editSitter.css'

const EditSitterButton = ({id, showModal, editDog, editCat, editExotic, editAbout, editZipcode, editPrice, editUrl}) => {
    const dispatch = useDispatch()

    const [dog, setDog] = useState(editDog)
    const [cat, setCat] = useState(editCat)
    const [exotic, setExotic] = useState(editExotic)
    const [about, setAbout] = useState(editAbout)
    const [zipcode, setZipcode] = useState(editZipcode)
    const [price, setPrice] = useState(editPrice)
    const [url, setUrl] = useState(editUrl)
    const [errors, setErrors] = useState([])
    
    const onSubmit = async(e) => {
        e.preventDefault()

        const validationErrors = []
        const regex = /^[0-9]+(\.[0-9][0-9])?$/;
        const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/
        const imgRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
        if (!regex.test(price)) validationErrors.push('Please enter a numeric dollar amount')
        if (about.length < 5) validationErrors.push('Please tell us about yourself')
        if (!imgRegex.test(url)) validationErrors.push('Please enter a valid image URL for your profile')
        if (!zipRegex.test(zipcode)) validationErrors.push('Please enter a valid zipcode')

        setErrors(validationErrors)

        if(validationErrors.length === 0) {
        const sitter = {
            id,
            dog,
            cat,
            exotic,
            about,
            zipcode,
            price,
            url
        }

        // const photo = {
        //     id,
        //     url
        // }


        dispatch(editSitter(sitter, id))
        // dispatch(editSitterPhoto(photo, id))
        showModal(false)
    }
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

            <form className="editSitter" onSubmit={onSubmit}>
            <ul className="add-sitter-errors">
                {errors.length > 0 &&
                    errors.map(error => (
                        <li key={error}>{error}</li>
                    ))
                }
            </ul>
                <label>
                    Do you take care of dogs?
                </label>
                <input
                type="checkbox"
                checked={dog}
                onChange={toggleDog}
                />
               <label>
                    Do you take care of cats?
                </label>
                <input
                type="checkbox"
                checked={cat}
                onChange={toggleCat}
                />   
               <label>
                    Do you take care of exotic animals?
                </label>
                <input
                type="checkbox"
                checked={exotic}
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
                <label>
                    Photo.url
                </label>
                <input
                onChange={e => setUrl(e.target.value)}
                value={url}
                />
                <button
                disabled={(about && zipcode && price && url) ? false : true}
                >
                    Submit    
                </button>       

            </form>
            <DeleteSitterButton id={id}/>
        </div>
    )
}

export default EditSitterButton;