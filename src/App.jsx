import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image from './styles/image.module.css'
import gallery from './styles/gallery.module.css'
import wrapper from './styles/wrapper.module.css'

function Gallery() {
  return (
    <>
      <h1>The Film Expo</h1>
      <section className={gallery.container}>
        <div className={`${wrapper.shadow} ${wrapper.landscape}`} style={{'--color': '#669BBC', '--text': '"Portrait Of A Hen"', '--font-size': '1.5rem'}}>
          <Image className={`${image.container} ${image.landscape}`} src="src/assets/hen.JPG" alt="portrait of a hen"/>
        </div>
        <div className={`${wrapper.shadow} ${wrapper.landscape}`} style={{'--color': '#669BBC', '--text': '"Youth Capitol Takeover 2025"', '--font-size': '1.5rem'}}>
          <Image className={`${image.container} ${image.landscape}`} src="src/assets/protesters.jpg" alt="protesters with signs"/>
        </div>
        <div className={`${wrapper.shadow} ${wrapper.portrait}`} style={{'--color': '#669BBC', '--text': '"The Alley"', '--font-size': '1.5rem'}}>
          <Image className={`${image.container} ${image.portrait}`} src="src/assets/alley.jpg" alt="an alley"/>
        </div>
        <div className={`${wrapper.shadow} ${wrapper.portrait}`} style={{'--color': '#669BBC', '--text': '"A Prayer"', '--font-size': '1.5rem'}}>
          <Image className={`${image.container} ${image.portrait}`} src="src/assets/mary.JPG" alt="statue of the virgin mary"/>
        </div>
        <div className={`${wrapper.shadow} ${wrapper.landscape}`} style={{'--color': '#669BBC', '--text': '"Galleria"', '--font-size': '1.5rem'}}>
          <Image className={`${image.container} ${image.landscape}`} src="src/assets/galleria.JPG" alt="aesthetic image of galleria mall"/>
        </div>
        
      </section>
    </>
  )
}

function Image({className, src, alt}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
    />
  )
}

export default Gallery
