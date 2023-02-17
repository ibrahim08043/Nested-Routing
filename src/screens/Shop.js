import {Link, Outlet} from 'react-router-dom'
import React from 'react'

function Shop() {
  return (
    <div>      <br />
      <br />
      ,<br />
      <div className='container'>
        <h3>Shop page </h3>
        <br/>
        <p className='w-50'>
          <b>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Soluta repellendus voluptates,officia exercitationem hic <br />officiis quis vel quam nesciunt doloribus, nisi sint delectus<br /> inventore similique sequi quisquam, molestias adipisci atque.  </b></p>
      <br/>      
      <Link className='link2' to="Product1">Product 1</Link>
      <br/>
      <Link className='link2' to="Product2">Product 2</Link>
      <br/>
      <Link className='link2' to="Product3">Product 3</Link>
      <br/>
      <Link className='link2' to="Product4">Product 4</Link>
    <Outlet/>

      </div>



    </div>
  )
}

export default Shop