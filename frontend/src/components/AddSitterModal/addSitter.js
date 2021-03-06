import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addSitter } from "../../store/sitterReducer";
import { useParams } from "react-router-dom";
// import { addPhoto } from "../../store/sitterReducer";
import { useHistory } from "react-router-dom";
import '../../components/AddSitterModal/addSitter.css'


const BecomeSitter = ({showModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state?.session?.user?.id)
    const sitter = useSelector((state) => Object.entries(state.sitters))

    const history = useHistory()


    const [dog, setDog] = useState(false)
    const [cat, setCat] = useState(false)
    const [exotic, setExotic] = useState(false)
    const [about, setAbout] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
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
            dog,
            cat,
            exotic,
            about,
            zipcode,
            price,
            url,
            userId
        }
 
        await dispatch(addSitter(sitter))

        showModal(false)
        history.push('/sitters')
 
        
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

            <form className="addSitter" onSubmit={onSubmit}>
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
        </div>
    )


}

export default BecomeSitter;