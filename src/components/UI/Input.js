export default function Input({children, name, placeholder,required,id, type='text'}) {
    return (
        <div className={`modal-form ${name}`}>
            <label htmlFor={id}>{children}</label>
            <input type={type} placeholder={placeholder} name={name} id={id} required={required}/>
        </div>
    )
}