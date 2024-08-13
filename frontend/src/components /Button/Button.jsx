/* eslint-disable react/prop-types */
const Button =({onClick,label,type}) =>{
    return (
      <button type={type} onClick={onClick}> {label} </button>
    )
  }
  export default Button;