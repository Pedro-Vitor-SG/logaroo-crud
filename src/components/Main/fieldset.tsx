function Fieldset({fieldName, children}) {
    return (
        <fieldset className="mb-9">
            <label>{fieldName}</label>
            {children}
        </fieldset>
    )
}
export default Fieldset;