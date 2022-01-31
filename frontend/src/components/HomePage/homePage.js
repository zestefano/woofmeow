import { Link } from "react-router-dom";

import "../HomePage/homePage.css"



const HomePage = () => {
    return (
        <div>
            <section className="section">
                <p>Welcome to WoofMeow</p>
                <p>Find a Pet Sitter near you</p>
                <div className="searchBar">
                    <input
                    className="homesearch"
                    type='text'
                    />
                    <button className="homeSearchButton">Search Zipcode</button>
                </div>
                
            </section>
            <section className="section">
                
                <p>Going out of town? Find a Woofer near you! </p>
            </section>
            <section className="section">
            <p>Become a Woofer to earn extra money watching over your neighbors furry friends! </p>
            </section>
            <section className="section">
                <p>Signup for an account today</p>
                
            </section>
        </div>
    )
}
export default HomePage;