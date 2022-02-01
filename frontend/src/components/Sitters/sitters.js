import React from "react"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { loadSitters } from "../../store/sitterReducer"
import { Link } from "react-router-dom"
import BecomeSitterModal from "../AddSitterModal"
import '../../components/Sitters/sitters.css'

const Sitters = () => {
    const dispatch = useDispatch()
    // const sessionUser = useSelector(state => state.session)
    const allSitters = useSelector((state)=> Object.values(state?.sitters))
    // console.log(sessionUser, "-----------------") 

    const sessionUser = useSelector(state => state?.session?.user);
    const sitterIds = useSelector(state => Object?.values(state?.sitters))
  //   console.log(sitterIds?.find(userId => sitterIds[userId] === sessionUser?.id))
    const userSitters = sitterIds?.map(a => a?.userId)

    useEffect(() => {
        dispatch(loadSitters())
    }, [dispatch])

    return (
        <div>
                  {sessionUser && !userSitters?.includes(sessionUser?.id) && (
                    <BecomeSitterModal />
                )}
            <section className="sitters">
                <h1>Our Woofers are pet lovers just like you. Find a Woofer in your area:</h1>
                <h1><input className="searchSitters"/></h1>
                <h1><button className="zip">Search</button></h1>
                
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