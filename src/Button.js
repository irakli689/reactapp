function Button(props) {
    return (
        <button>
            {props.name || 'default'} 
        </button>
    )
}
export default Button