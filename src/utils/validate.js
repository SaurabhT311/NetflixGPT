export const validForm = (name, email, password, isSignIn) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isSignIn) {
    const isNameValid = /^[a-zA-Z ]{3,}$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid)
    return "Password must contain atleast a number, an uppercase letter a lowercase letter and a special character.";
  return true;
};
