import React from "react"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { loadSitters } from "../../store/sitterReducer"
import { Link } from "react-router-dom"
import '../../components/Sitters/sitters.css'

const Sitters = () => {
    const dispatch = useDispatch()
    // const sessionUser = useSelector(state => state.session)
    const allSitters = useSelector((state)=> Object.values(state?.sitters))
    // console.log(sessionUser, "-----------------") 

    useEffect(() => {
        dispatch(loadSitters())
    }, [dispatch])

    return (
        <div>
            <section className="sitters">
                <h1>Our Woofers are pet lovers just like you. Find a Woofer in your area:</h1>
                <h1><input className="searchSitters"/></h1>
                <button className="zip">Search zipcode</button>
                
                <div className="sittersContainer">
                    {allSitters?.map(({id, dog, cat, exotic, about, zipcode, userId, url, User, Photo}) => (
                        <article>
                            <div className="sitterInfo">
                                <Link to={`/${id}`}>{User?.firstName}</Link>
                            </div>
                            <div className="sitterImg">
                                <Link to={`/${id}`}><img className="sittersPic" src={url} alt="picture" /></Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="sitters1">
            
            </section>
        </div>
    )
}

export default Sitters;