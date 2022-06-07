import React from "react"

export default function BusinessCard() {
    const [contact, setContact] = React.useState({
        firstName: "Rifat",
        lastName: "Murtuza",
        phone: "070 8359 2005",
        email: "rm.rudro@gmail.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    let starIcon=contact.isFavorite?"star-filled.png":"star-empty.png"
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="/images/profile.jpg" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`/images/${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}