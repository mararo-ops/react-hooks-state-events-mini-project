import React, { useState} from "react";

function NewTaskForm({categories}) {
  const [details,setDetails] =useState('')
  const [category,setCategory] =useState('')
  
  function handleDetails (event) {
    setDetails(event.target.value)
  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text"  value={details} onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" value={category}>
          {categories.map(category => (
            <option key={category} >{category}</option>
          ))}  
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

// Pass the list of categories to this component from App. Then, update this component to display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.

// Next, update this form to be a controlled component, so that all form inputs are captured in state.

// When the form is submitted, add a new task to the list with the text and category from the form. You'll need a callback prop named onTaskFormSubmit for the tests to pass for this feature.
