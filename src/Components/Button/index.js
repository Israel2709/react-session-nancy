const Button = ( props ) => {
    const { isLogged, handler, classList } = props

    return (
        <button 
            onClick = { handler }
            className = { classList }
        >{ isLogged ? "Sign out" : "Log in"}</button>
    )
}

export default Button