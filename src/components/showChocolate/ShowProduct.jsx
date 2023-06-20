import React from 'react'
import Container from '../Container'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function ShowProduct() {
  return (
    <div>
      <Helmet>
        <title>All Chocolate</title>
      </Helmet>
      <Container>
        <div className='flex items-center font-poppins'>
          <Link to="/add-chocolate" className='inline-block border-2 px-4 py-2 rounded-md'><AiOutlinePlus className='inline-block' /> Add Chocolates</Link>
        </div>
        <hr className='my-5' />
        <div>
          Hello
        </div>
      </Container>
    </div>
  )
}

export default ShowProduct