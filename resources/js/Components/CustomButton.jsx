// Custom Button
export default function CustomButton({className='', children, ...props }) {

    return (
        <button {...props} className={ `btn ` + className}>
            {children}
        </button>
    )
}
