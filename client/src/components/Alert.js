

// import { useAppContext } from '../context/appContext'

// const Alert = () => {
//   const { alertType, alertText } = useAppContext()
//   return <div className={`alert alert-${alertType}`}>{alertText}</div>
// }

// export default Alert


import React from 'react'

const Alert = () => {
  return  <div className='alert alert-danger'>Alert goes here</div>
  
}

export default Alert