export default function Inputs({label,value,fieldName,handleChange}) {
  return (
    <>
      <label>{label}</label>
      <input onChange={(e)=>handleChange(e.target.name,e.target.value)} name={fieldName} type="number" value={value}  />
    </>
  );
}
