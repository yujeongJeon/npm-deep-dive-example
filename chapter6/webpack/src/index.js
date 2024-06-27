import './index.scss'
import logoImage from '../public/images/logo.png'

const imgElement = document.createElement('img')

imgElement.src = logoImage
imgElement.alt = 'Logo'
imgElement.classList.add('logo')

document.body.insertBefore(imgElement, document.body.firstChild)

console.log('Webpack Example with Dev Server')
