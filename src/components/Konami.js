import React, { useEffect } from 'react'


export default function Konami() {
    
    function isEqual(a, b) {
        // if ( a === b) return true;
    
        // if (a === null || b === null) return false;
    
        // if (a.length !== b.length) return false;
    
        // for (let i in a.length) {
        //     if (a[i] !== b[i]) return false;
        // }
    
        // return true;
        return a.length === b. length && a.every((value, index) => value === b[index])
    }

    useEffect(_ => {
        const dullard = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowLeft', 'a', 'ArrowRight', 'ArrowDown']
        let keystrokes = []
        let pressed = {}

        const handleKeystrokes = (event) => {
            let active = false;
            let konami_div = event.target.lastChild.firstChild
            pressed[event.key] = true

            if (event.key === '`') konami_div.classList.toggle('is-open')
            document.body.style.overflowY = 'hidden'


            if (pressed['`']) {

                if (active) {
                    delete pressed['`']
                    active = false
                    keystrokes.length = 
                    konami_div.classList.remove('is-open')
                    document.body.style.overflowY = 'scroll'
                    return
                }

                active = true
                
                if (keystrokes.length > 6) keystrokes.length = 0

                keystrokes.push(event.key)

                if (isEqual(keystrokes, dullard)) {
                    console.log('success')
                    delete pressed['`']
                    window.location.href = '/about'
                }

                keystrokes.forEach((_, index) => {
                    if (!isEqual(keystrokes.slice(0, index + 1), dullard.slice(0, index + 1))) {
                        // reset keystrokes on mismatch
                        keystrokes.length = 0
                    }
                })
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
