import React from 'react'

export default  function ConfirmModal({handleOk,handleCancel}) {
  return (
      <>
          <button onClick={handleOk}>Ok</button>
          <button onClick={handleCancel}>Cancel</button>
      </>
  )
}

