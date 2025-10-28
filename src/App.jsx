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
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Portrait Of A Hen"'}}>
          <Image className={`${image.container}`} src="src/assets/hen.JPG" alt="portrait of a hen"/>
        </div>
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Youth Capitol Takeover 2025"'}}>
          <Image className={`${image.container}`} src="src/assets/protesters.jpg" alt="protesters with signs"/>
        </div>
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"The Alley"'}}>
          <Image className={`${image.container}`} src="src/assets/alley.jpg" alt="an alley"/>
        </div>
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Dam"'}}>
          <Image className={`${image.container}`} src="src/assets/dam.JPG" alt="image of a dam in San Antonio, TX"/>
        </div>
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"A Prayer"'}}>
          <Image className={`${image.container}`} src="src/assets/mary.JPG" alt="statue of the virgin mary"/>
        </div>
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Galleria"'}}>
          <Image className={`${image.container}`} src="src/assets/galleria.JPG" alt="aesthetic image of galleria mall"/>
        </div>
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Blue Star Provisions Co."'}}>
          <Image className={`${image.container}`} src="src/assets/blue-star.JPG" alt="Blue Star Provisions Co. San Antonio, TX"/>
        </div>
        <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Mercado"'}}>
          <Image className={`${image.container}`} src="src/assets/flags.JPG" alt="line of colorful banners with building and sky in the backdrop"/>
        </div>
         <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Coupe"'}}>
          <Image className={`${image.container}`} src="src/assets/coupe.jpg" alt="a white coupe"/>
        </div>
         <div className={`${wrapper.shadow}`} style={{'--color': '#669BBC', '--text': '"Taqueria"'}}>
          <Image className={`${image.container}`} src="src/assets/taqueria.JPG" alt="inside of a small taqueria"/>
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
