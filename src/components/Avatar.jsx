// This component is used to the avatar + title + description
// Each Avatar component should be wrapped inside the Card Component ( means passing jsx that Avatar provides to the card )

import { getImageURL } from "../utils/utils"

export function Avatar({ person }) {
    // destructuring the props

    // returning the markup that will be render as html by the react-compiler
    return (
        <div className="avatar" style={{margin: 40, color: 'purple'}}>
            <img src={getImageURL(person)} alt={person.title} />

            <div className="title">{person.title}</div>

            <div className="description">{person.description}</div>
        </div>
    )
}


export function Card({ children }) {
    // this function will get JSX that will we will as children
    // rather writing avatar component in card we passed that as child which makes the code more clean and logic
    return (
        <div style={{border: 2, borderRadius: 5, borderColor: 'white', borderStyle:'solid'}} className="card">
            {children}
        </div>
    )
}
