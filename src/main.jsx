import { createRoot } from 'react-dom/client'
import './index.css'
import { Profile, ProfileWithInfo } from "./components/Profile.jsx"
import { Card, Avatar } from './components/Avatar.jsx'

createRoot(document.getElementById('root')).render(
  <div className='wrapper'>
    <Card>
        <Avatar person={{title: 'Katsuko title', imageId: 'YfeOqp2', description: 'Katsuko description'}} />
    </Card>
  </div>
)


// The components in react are functions that provides / returns markup (HTML) that gets render on the screen. => Calling a components that returns markup is like < ComponentName />. 
// React application is builded using collection of components that at the end returns the markup and react comipiler then renders that on the screen

// we can write JS (only expression statements) with the markup to include JS logic for rendering using curly braces {}

// Components uses "props" to communicate with each other. The flow of the passing the props starts from the parent to child. Props can be used to provide JS values like string, booleans, numbers, arrays, objects, functions and even the JSX can be passed (for passing JSX we have to follow special syntax for passing). For passing JSX to a component we need to write JSX inside it and then using children property when destructuring the props

// passing JSX means we want to render that component inside the parent componet

