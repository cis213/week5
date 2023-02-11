

/*
  Props can be any data type (primitive or object) and can be passed to any component.
  note: Functions are technically objects in JavaScript, so they can be passed as props too.
*/

const Calculation = ({ // passing three functions as props
    onFirstNumberChanged,
    onSecondNumberChanged,
    onOperationChanged,
  }) => {
    /*
      Controlled components:
        - With state and form fields, you can perform two-way binding.
        - This means that the state is updated when the form field is changed,
        -   and the form field is updated when the state is changed.
        - Or in other words, the state is the source of truth.
        - This is also known as controlled components.

      Uncontrolled components:
       - Uncontrolled components are the opposite of controlled components.
       - The state is not updated when the form field is changed.
       - The example below is an uncontrolled component.

    */
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