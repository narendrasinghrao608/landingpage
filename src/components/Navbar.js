import React from 'react'

function Navbar() {
  let onclick=()=>{
    let burger=document.querySelector('.burger');
    let navbar=document.querySelector('.justify-between');
    burger.addEventListener('click',()=>{
      navbar.classList.toggle('v-class-rsp')
      navbar.classList.toggle('h-nav-rsp')
    })
  }
  return (
    <div className=' container mx-auto'>
        <nav className='flex justify-between h-nav-rsp v-class-rsp'>
            <div className='font-bold text-blue flex item-center logo'>Gour Nitai</div>
            <ul className='navbar flex item-center'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact Us</li>
                <li><button className='btn'>Join Now</button></li>
            </ul>
        </nav>
        <div className="burger" onClick={onclick}>
          <div className="line">
          </div>
          <div className="line">
          </div>
          <div className="line">
          </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar
