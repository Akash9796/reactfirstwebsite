import React from 'react'

export default function Alert(props) {
  return (
      <div style={{height:'50px'}}>
    {props.Alert && <div className="alert alert-primary" role="alert">
        {props.Alert.msg} : {props.Alert.type}
  </div>
}
  </div>
  )
  }
