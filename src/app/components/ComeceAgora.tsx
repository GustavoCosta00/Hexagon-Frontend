import React from 'react'

type btn ={
  value: string
}

const ComeceAgora = ({value} : btn) => {
  return (
    <>
      <div className='container-comece-agora'>
        <button className='btn-comece-agora'>{value}</button>
      </div>
    </>
  )
}

export default ComeceAgora