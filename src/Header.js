import React from 'react'
import { CardBody, Card } from 'reactstrap'

function Header() {
  return (
    <>
    <Card className='my-2 bg-warning'>
        <CardBody>
        <h1 className='text-center my-5'>Course App</h1>
        </CardBody>
    </Card>
    </>
   
  )
}

export default Header