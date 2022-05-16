const SignUpForm = () => {
  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={() => {}}>
          <label>Display Name</label>
          <input type="text" required></input>

          <label>Email</label>
          <input type="Email" required></input>

          <label>Password</label>
          <input type="password" required></input>

          <label>Confirm Password</label>
          <input type="password" required></input>

          <button type="submit"> Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
