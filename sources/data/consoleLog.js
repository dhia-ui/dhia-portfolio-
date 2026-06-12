import * as THREE from 'three/webgpu'

const text = `
██████╗ ██╗  ██╗██╗ █████╗     ██████╗██╗  ██╗███████╗████████╗██╗████████╗██╗
██╔══██╗██║  ██║██║██╔══██╗    ██╔════╝██║  ██║██╔════╝╚══██╔══╝██║╚══██╔══╝██║
██║  ██║███████║██║███████║    ██║████╗██║  ██║█████╗     ██║   ██║   ██║   ██║
██║  ██║██╔══██║██║██╔══██║    ██║╚═██║██║  ██║██╔══╝     ██║   ██║   ██║   ██║
██████╔╝██║  ██║██║██║  ██║    ╚██████╔╝╚██████╔╝███████╗   ██║   ██║   ██║   ██║
╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝╚══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═╝

╔═ Welcome ═════════════════╗
║ Hey sneaky developer! This is Guetiti Dhia's portfolio.
║ Full-Stack Developer · AI Engineer · Cybersecurity Specialist
║ "I build things that matter — secure, intelligent, beautiful."
╚═══════════════════════════╝

╔═ Contact ═════════════════╗
║ Mail    ⇒ dhiaguetiti@gmail.com
║ Phone   ⇒ +216 92 454 120
║ GitHub  ⇒ https://github.com/dhia-ui
║ LinkedIn ⇒ https://www.linkedin.com/in/guetiti-dhia/
║ Location ⇒ Mourouj 6, Ben Arous, Tunisia 🇹🇳
╚═══════════════════════════╝

╔═ Debug ═══════════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════════╝

╔═ Tech Stack ═══════════════╗
║ Three.js (WebGPU renderer) — release: ${THREE.REVISION}
║ https://threejs.org/
║ Rapier Physics  ⇒ https://rapier.rs/
║ Howler.js Audio ⇒ https://howlerjs.com/
╚═══════════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]
