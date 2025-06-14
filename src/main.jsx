import { createRoot } from 'react-dom/client'
import './index.css'
import { Profile, ProfileWithInfo } from "./components/Profile.jsx"

createRoot(document.getElementById('root')).render(
    <div className='wrapper'>
      <Profile />
      <ProfileWithInfo />
    </div>
)


// The components in react are functions that provides / returns markup (HTML) that gets render on the screen. => Calling a components that returns markup is like < ComponentName />. 
// React application is builded using collection of components that at the end returns the markup and react comipiler then renders that on the screen

// we can write JS (only expression statements) with the markup to include JS logic for rendering using curly braces {}

