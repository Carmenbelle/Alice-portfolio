import React, {useState} from 'react'

function Hamburger() {

    const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)}>
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
    </div>
  )
}

export default Hamburger