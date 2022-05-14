import React from 'react'


const dullard = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowLeft', 'a', 'ArrowRight', 'ArrowDown'];

function isEqual(a, b) {
    if ( a === b) return true;

    if (a === null || b === null) return false;

    if (a.length !== b.length) return false;

    for (let i in a.length) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

function code_check() {
    document.addEventListener('keypress', event => {
        
        if (event.key === 's') {
            var keystrokes = [];

            console.log(typeof(keystrokes));
            // arrow keys are only triggered by 'onkeydown'
            // document.addEventListener('keydown', e => {
            //     // prevent arrow keys from triggering scroll and s from repeating and messing up the keystrokes array
            //     const validKeys = ["ArrowDown","ArrowLeft","ArrowRight", "ArrowUp", 'a'];

            //     if (["ArrowDown","ArrowLeft","ArrowRight", "ArrowUp", 'a', 's'].indexOf(e.code) > -1) {
            //         e.preventDefault();
            //     }

            //     console.log(e.key in validKeys);

            //     if(validKeys.includes(e.key)) {
            //         keystrokes.push(e.key);
            //     }

            //     if (isEqual(keystrokes, dullard)) {
            //         console.log('woo');
            //     } else {
            //         keystrokes = [];
            //     }

            // });
        }
    });
}


export default function Konami() {

    code_check();

  return (
    <div></div>
  )
}
