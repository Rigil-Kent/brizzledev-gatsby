import React from 'react';

export default function Portfolio() {
  return (
    <section className='portfolio'>
        <h1>My Projects</h1>

        <div className='portfolio-items'>
            {/* portfolio item 1 */}
            <figure className='portfolio-item featured'>
                <img src='portfolio-01.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>
            </figure>
            
            {/* portfolio item 2 */}
            <figure className='portfolio-item'>
                <img src='portfolio-02.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>
            </figure>

            {/* portfolio item 3 */}
            <figure className='portfolio-item'>
                <img src='portfolio-03.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>
            </figure>

            {/* portfolio item 4 */}
            <figure className='portfolio-item'>
                <img src='portfolio-04.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>
            </figure>

            {/* portfolio item 5 */}
            <figure className='portfolio-item'>
                <img src='portfolio-05.jpg' alt='portfolio item' />
                <figcaption className=''>
                    <h2 className='portfolio-title'>Project Name</h2>
                    <p className='portfolio-text'>A short description text block</p>
                    <a href='/' className='portfolio-link'>More Info</a>
                </figcaption>
            </figure>

        </div>
    </section>
  )
}
