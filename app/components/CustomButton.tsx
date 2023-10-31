"import React from 'react'"

import { CustomButtonProps } from "@/types"

const CustomButton = ({ containerStyles, title, handleClick } : CustomButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton