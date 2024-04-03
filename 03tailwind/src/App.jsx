import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Sanjana's Work Experience</h1>
      <Card username="Sanjana Desai" company="CrowdDoing" post="Frontend Developer" imageSrc="https://images.pexels.com/photos/20771575/pexels-photo-20771575/free-photo-of-man-standing-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        quote="
        Nature Counter's online presence flourished with a dynamic Proof of Concept website, leveraging Figma and Webflow for streamlined development and a 20% boost in user engagement.
        By harnessing Figma, Webflow, and Microsoft Azure, Nature Counter achieved a 30% reduction in coding efforts, a 25% enhancement in website loading speed, and optimized infrastructure costs for an enriched digital experience"
      />


      <Card username="Sanjana Desai" company="Sahu Technologies" post="Software Engineer" imageSrc="https://images.pexels.com/photos/11335948/pexels-photo-11335948.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        quote="Spearheading a MERN stack web app with Java integration, I boosted user experience by 50%. Crafting 25+ dynamic components enhanced accessibility, while seamless user authentication led to a 20% registration improvement.

        Utilizing PassportJS and regex validation, I enhanced registration by 20%. Agile methodologies and user feedback refined the interface, resulting in exceptional satisfaction with search, filter, and pagination features."
      />

      <Card username="Sanjana Desai" company="Raasta Consulting Pvt Ltd" post="Full Stack Developer" imageSrc="https://images.pexels.com/photos/20860292/pexels-photo-20860292/free-photo-of-a-path-through-the-woods-with-trees-on-both-sides.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        quote="Leading web app development at Raasta Consulting Pvt Ltd, I integrated Angular with ERP, achieving 30% data exchange efficiency. Operating in Agile, I facilitated seamless deployment of 20+ features, driving faster release cycles.
        Redesigning the e-commerce site with JavaScript, HTML, CSS, and Bootstrap, I elevated user experience and functionality. Proficiency in PHP ensured efficient implementation, resulting in increased user engagement and sales."
      />
    </>
  )
}

export default App
