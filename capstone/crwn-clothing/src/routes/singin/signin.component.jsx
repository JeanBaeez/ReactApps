import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/utils.firebase.js";
import SignUpFrom from "../../components/sign-up-form/sign-up-form.component";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpFrom />
    </div>
  );
};

export default Signin;
