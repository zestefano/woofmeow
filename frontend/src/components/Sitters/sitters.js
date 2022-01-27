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
        <section className="sitters">
            {/* <h1>Woofers</h1> */}
            <div className="sittersContainer">
                {allSitters?.map(({id, dog, cat, exotic, about, zipcode, userId, url, User, Photo}) => (
                    <article>
                        <div className="sitterInfo">
                            <Link to={`/${id}`}>{User?.username}</Link>
                        </div>
                        <div className="sitterImg">
                            <Link to={`/${id}`}><img className="sittersPic" src={url} alt="picture" /></Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Sitters;