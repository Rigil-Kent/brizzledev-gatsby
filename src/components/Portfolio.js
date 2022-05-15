import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';

export default function Portfolio() {

  return (
    <section id='portfolio' className='portfolio'>
        <h1>My Projects</h1>

        <div className='portfolio-items' onClick={e => {
                        e.preventDefault()
                        const modalToggle = e.target.closest('.portfolio-link')

                        if (!modalToggle) return

                        const modal = modalToggle.parentNode.nextElementSibling

                        modal.style.animation = 'modalFadeIn 500ms forwards'
                        modal.classList.add('is-open')
                        document.body.style.overflowY = 'hidden'

                    }}
                    onAnimationEnd={e => {
                        if(e.target.style.animation.includes('modalFadeOut')) {
                            e.target.classList.remove('is-open')
                        }
                    }}
                    
                    onKeyDown={e => {
                        if (e.key === 'Escape') {
                            document.body.style.overflowY = 'scroll'
                            const modal = e.nativeEvent.explicitOriginalTarget.parentNode.nextSibling
                            modal.style.animation = 'modalFadeOut 500ms forwards'
                        }
                    }}>
            {/* portfolio item 1 */}
            <figure className='portfolio-item featured'>
                <img src='portfolio-01.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>


                <div className='portfolio-modal'>
                    <button className='modal-close' 
                    onClick={e => {
                        e.preventDefault()

                        document.body.style.overflowY = 'scroll'

                        const modal = e.target.closest('.portfolio-modal')
                        
                        modal.style.animation = 'modalFadeOut 500ms forwards'
                    }}>
                        <svg
                        className='-close'
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 30 17"
                        viewBox="0 0 30 17"
                        >
                            <path
                                fill="#223843"
                                d="M16.2 8.5l5.8 5.8-1.2 1.2L15 9.7l-5.8 5.8L8 14.3l5.8-5.8L8 2.7l1.2-1.2L15 7.3l5.8-5.8L22 2.7z"
                            ></path>
                        </svg>
                    </button>

                    <div className='portfolio-header'>
                        <div className='portfolio-title-box'>
                            <h2 className='portfolio-title'>Project Name</h2>
                            <p className='portfolio-description'>Subtitle Goes Here</p>
                        </div>
                    </div>

                    <div className='portfolio-content'>
                        <LoremIpsum p={1} avgWordsPerSentence={30} />
                        <img className='portfolio-img-full' src='portfolio-01.jpg' alt='portfolio 1' />
                        <img className='portfolio-img-left' src='portfolio-01.jpg' alt='portfolio 1' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                        <img className='portfolio-img-right' src='portfolio-01.jpg' alt='portfolio 1' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                    </div>
                </div>
                
            </figure>
            
            {/* portfolio item 2 */}
            <figure className='portfolio-item'>
                <img src='portfolio-02.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>

                {/* Modal 2 */}
                <div className='portfolio-modal'>
                    <button className='modal-close' 
                    onClick={e => {
                        e.preventDefault()

                        document.body.style.overflowY = 'scroll'

                        const modal = e.target.closest('.portfolio-modal')
                        
                        modal.style.animation = 'modalFadeOut 500ms forwards'
                    }}>
                        <svg
                        className='-close'
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 30 17"
                        viewBox="0 0 30 17"
                        >
                            <path
                                fill="#223843"
                                d="M16.2 8.5l5.8 5.8-1.2 1.2L15 9.7l-5.8 5.8L8 14.3l5.8-5.8L8 2.7l1.2-1.2L15 7.3l5.8-5.8L22 2.7z"
                            ></path>
                        </svg>
                    </button>

                    <div className='portfolio-header'>
                        <div className='portfolio-title-box'>
                            <h2 className='portfolio-title'>Project Name</h2>
                            <p className='portfolio-description'>Subtitle Goes Here</p>
                        </div>
                    </div>

                    <div className='portfolio-content'>
                        <LoremIpsum p={1} avgWordsPerSentence={30} />
                        <img className='portfolio-img-full' src='portfolio-02.jpg' alt='portfolio 2' />
                        <img className='portfolio-img-left' src='portfolio-02.jpg' alt='portfolio 2' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                        <img className='portfolio-img-right' src='portfolio-02.jpg' alt='portfolio 2' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                    </div>
                </div>


            </figure>

            {/* portfolio item 3 */}
            <figure className='portfolio-item'>
                <img src='portfolio-03.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>

                {/* Modal 3 */}
                <div className='portfolio-modal'>
                    <button className='modal-close' 
                    onClick={e => {
                        e.preventDefault()

                        document.body.style.overflowY = 'scroll'

                        const modal = e.target.closest('.portfolio-modal')
                        
                        modal.style.animation = 'modalFadeOut 500ms forwards'
                    }}>
                        <svg
                        className='-close'
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 30 17"
                        viewBox="0 0 30 17"
                        >
                            <path
                                fill="#223843"
                                d="M16.2 8.5l5.8 5.8-1.2 1.2L15 9.7l-5.8 5.8L8 14.3l5.8-5.8L8 2.7l1.2-1.2L15 7.3l5.8-5.8L22 2.7z"
                            ></path>
                        </svg>
                    </button>

                    <div className='portfolio-header'>
                        <div className='portfolio-title-box'>
                            <h2 className='portfolio-title'>Project Name</h2>
                            <p className='portfolio-description'>Subtitle Goes Here</p>
                        </div>
                    </div>

                    <div className='portfolio-content'>
                        <LoremIpsum p={1} avgWordsPerSentence={30} />
                        <img className='portfolio-img-full' src='portfolio-03.jpg' alt='portfolio 3' />
                        <img className='portfolio-img-left' src='portfolio-03.jpg' alt='portfolio 3' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                        <img className='portfolio-img-right' src='portfolio-03.jpg' alt='portfolio 3' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                    </div>
                </div>


            </figure>

            {/* portfolio item 4 */}
            <figure className='portfolio-item'>
                <img src='portfolio-04.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>

                {/* Modal 4 */}
                <div className='portfolio-modal'>
                    <button className='modal-close' 
                    onClick={e => {
                        e.preventDefault()

                        document.body.style.overflowY = 'scroll'

                        const modal = e.target.closest('.portfolio-modal')
                        
                        modal.style.animation = 'modalFadeOut 500ms forwards'
                    }}>
                        <svg
                        className='-close'
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 30 17"
                        viewBox="0 0 30 17"
                        >
                            <path
                                fill="#223843"
                                d="M16.2 8.5l5.8 5.8-1.2 1.2L15 9.7l-5.8 5.8L8 14.3l5.8-5.8L8 2.7l1.2-1.2L15 7.3l5.8-5.8L22 2.7z"
                            ></path>
                        </svg>
                    </button>

                    <div className='portfolio-header'>
                        <div className='portfolio-title-box'>
                            <h2 className='portfolio-title'>Project Name</h2>
                            <p className='portfolio-description'>Subtitle Goes Here</p>
                        </div>
                    </div>

                    <div className='portfolio-content'>
                        <LoremIpsum p={1} avgWordsPerSentence={30} />
                        <img className='portfolio-img-full' src='portfolio-04.jpg' alt='portfolio 4' />
                        <img className='portfolio-img-left' src='portfolio-04.jpg' alt='portfolio 4' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                        <img className='portfolio-img-right' src='portfolio-04.jpg' alt='portfolio 4' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                    </div>
                </div>


            </figure>

            {/* portfolio item 5 */}
            <figure className='portfolio-item'>
                <img src='portfolio-05.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>

                <div className='portfolio-modal'>
                    <button className='modal-close' 
                    onClick={e => {
                        e.preventDefault()

                        document.body.style.overflowY = 'scroll'

                        const modal = e.target.closest('.portfolio-modal')
                        
                        modal.style.animation = 'modalFadeOut 500ms forwards'
                    }}>
                        <svg
                        className='-close'
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 30 17"
                        viewBox="0 0 30 17"
                        >
                            <path
                                fill="#223843"
                                d="M16.2 8.5l5.8 5.8-1.2 1.2L15 9.7l-5.8 5.8L8 14.3l5.8-5.8L8 2.7l1.2-1.2L15 7.3l5.8-5.8L22 2.7z"
                            ></path>
                        </svg>
                    </button>

                    <div className='portfolio-header'>
                        <div className='portfolio-title-box'>
                            <h2 className='portfolio-title'>Project Name</h2>
                            <p className='portfolio-description'>Subtitle Goes Here</p>
                        </div>
                    </div>

                    <div className='portfolio-content'>
                        <LoremIpsum p={1} avgWordsPerSentence={30} />
                        <img className='portfolio-img-full' src='portfolio-05.jpg' alt='portfolio 5' />
                        <img className='portfolio-img-left' src='portfolio-05.jpg' alt='portfolio 5' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                        <img className='portfolio-img-right' src='portfolio-05.jpg' alt='portfolio 5' />
                        <LoremIpsum p={2} avgWordsPerSentence={30} />
                    </div>
                </div>
            </figure>

        </div>
    </section>
  )
}
