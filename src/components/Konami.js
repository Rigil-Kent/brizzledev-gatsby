import React, { useEffect } from 'react'


export default function Konami() {
    
    function isEqual(a, b) {
        return a.length === b.length && a.every((value, index) => value === b[index])
    }

    useEffect(_ => {
        const dullard = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowLeft', 'a', 'ArrowRight', 'ArrowDown']
        let keystrokes = []
        let pressed = {}

        const handleKeystrokes = (event) => {
            let konami_div = event.target?.lastChild?.firstChild
            let keyImages = konami_div?.firstChild?.childNodes


            if (konami_div === null) return


            pressed[event.key] = true

            if (event.key === '`') {
                console.log('Code entry')
                konami_div.classList.add('is-open')
                document.body.style.overflowY = 'hidden'
            }


            if (pressed['`']) {
                let active = false

                if (active) {
                    delete pressed['`']
                    active = false
                    keystrokes.length = 0
                    konami_div.classList.remove('is-open')
                    keyImages.forEach((img) => {
                        img.classList.remove('selected')
                    })
                    document.body.style.overflowY = 'scroll'
                    return
                }

                active = true
                
                if (keystrokes.length > 6) keystrokes.length = 0

                keystrokes.push(event.key)

                keyImages.forEach((img, index) => {
                    if (index < keystrokes.length) {
                        img.classList.add('selected')
                        console.log(img.classList)
                    }
                })

                if (isEqual(keystrokes, dullard)) {
                    delete pressed['`']
                    window.location.href = '/tetris'
                }

                keystrokes.forEach((_, index) => {
                    if (!isEqual(keystrokes.slice(0, index + 1), dullard.slice(0, index + 1))) {
                        // reset keystrokes and indicators on mismatch
                        keystrokes.length = 0
                        keyImages.forEach((img) => {
                            img.classList.remove('selected')
                        })
                    }
                })
            } else {
                return
            }

        }

        window.addEventListener('keydown', handleKeystrokes)

        return _ => {
            window.removeEventListener('keydown', handleKeystrokes)
        }
    }, [])

  return (
    <div className='konami'>
        <div className='keyentry'>
            <img src='keyboard-key-down.svg' alt='keyboard key down' />
            <img src='keyboard-key-up.svg' alt='keyboard key up' />
            <img src='keyboard-key-left.svg' alt='keyboard key left' />
            <img src='keyboard-key-left.svg' alt='keyboard key left' />
            <img src='keyboard-key-a.svg' alt='keyboard key a' />
            <img src='keyboard-key-right.svg' alt='keyboard key right' />
            <img src='keyboard-key-down.svg' alt='keyboard key down' />    
        </div>
    </div>
  )
}
