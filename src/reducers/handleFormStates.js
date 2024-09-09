export const handleFormStates = (form, action) => {
  switch (action.type) {
    case "firstName":
      form = { ...form, firstName: action.payload };
      return form;
    case "age":
      form = { ...form, age: action.payload };
      return form;
    case "branch":
      form = { ...form, branch: action.payload };
      return form;
    case "showData":
      form = { ...form, showData: action.payload };
      return form;
    default:
      return form;
  }
};
