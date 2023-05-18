const Button = (props) => {
  const { text, className } = props

  
return <button className={`bg-bronze text-center body-font font-italiana hover:bg-bronze-hover active:bg-bronze-active ${className}`}>{ text }</button>
}

export default Button