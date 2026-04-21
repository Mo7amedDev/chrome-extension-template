import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/App.tsx'
// 1. Import CSS as an inline string
import contentStyles from './content.css?inline';
console.log(contentStyles, 'dddddddddddddvmvmvkfvmfkvmmmm');
const container = document.createElement('div')
container.id = 'crxjs-app'
document.body.appendChild(container)
container.style.cssText = `
  position: fixed;
  z-index: 2147483647;
  overflow: visible;
  
`;
const shadow = container.attachShadow({ mode: 'open' })

// 2. Inject the styles into the Shadow Root
const styleTag = document.createElement('style')
styleTag.innerHTML = contentStyles
shadow.appendChild(styleTag)

const shadowRoot = document.createElement('div')
shadowRoot.id = 'shadow-root'
shadow.appendChild(shadowRoot)

createRoot(shadowRoot).render(
  <StrictMode>
    <App />
  </StrictMode>,
)