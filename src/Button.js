function Button({name}) {
    return (
        <button>
            {name || 'default'} 
        </button>
    )
}
export default Button