// making components (functions js and React provides special syntax to call these functions) that will represent content on the website. A component can be used many times, and each time it will have different context from the other components

export function Profile() {

    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Random image" />
    )
}


// creating a global variable that is used to get the values, but if these values gets change react does not re-render because it does belong to the state
const person = {
    imgSource: "https://i.imgur.com/MK3eW3As.jpg",
    title: "Person 1 title",
    description: "Person 1 description",
    styles: {
        // in react to give inline styles the style attribute requires a JS object that contains the styles
        backgroundColor: 'pink',
        color: "white"
    }
}

export function ProfileWithInfo() {

    // this we called as mark-up kind of html that React renders on the screen
    return (
        <div className="profile-info-container" style={person.styles}>
            <img className="image" src={person.imgSource} />
            <div className="title">{person.title}</div>
            <div className="description" >{person.description}</div>
        </div>
    )
}

