import React from "react"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { loadSitters } from "../../store/sitterReducer"
import { Link } from "react-router-dom"
import '../../components/Sitters/sitters.css'

const Sitters = () => {
    const dispatch = useDispatch()
    // const sessionUser = useSelector(state => state.session.user)
    const allSitters = useSelector((state)=> Object.values(state.sitters))
    console.log(allSitters, "-----------------") 

    useEffect(() => {
        dispatch(loadSitters())
    }, [dispatch])

    return (
        <div className="sittersContainer">
            {allSitters.map(({dog, cat, exotic, about, zipcode, userId, User, Photo}) => (
                <div className="sitter">
                  <p>{User.username}</p>
                  <img className="sittersPic" src={Photo.url} />
                </div>
            ))}
        </div>
    )
}

export default Sitters;