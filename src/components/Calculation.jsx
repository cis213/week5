

/*
  Props can be any data type (primitive or object) and can be passed to any component.
  note: Functions are technically objects in JavaScript, so they can be passed as props too.
*/

const Calculation = ({ // passing three functions as props
    onFirstNumberChanged,
    onSecondNumberChanged,
    onOperationChanged,
  }) => {
    
    return (
      <p>
        {/*  updates state for first number entered */} 
        <input type="number" onChange={onFirstNumberChanged} />

        {/*  updates state for operation selected */}
        <select onChange={onOperationChanged}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        
       {/*  updates state for second number entered */} 
        <input type="number" onChange={onSecondNumberChanged} />
      </p>
    );
  }
  
  export default Calculation;