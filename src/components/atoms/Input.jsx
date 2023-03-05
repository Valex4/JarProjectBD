function Input({ type, placeholder, name, value,handleChange}) {
  return <>
    <input type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange}  className="form-control"/>
  </>;
}

export default Input
