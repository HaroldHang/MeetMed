export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-small text-danger ' + className}>
            {message}
        </p>
    ) : null;
}
