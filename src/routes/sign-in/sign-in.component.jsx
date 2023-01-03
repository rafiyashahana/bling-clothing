import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      signIn
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};
export default SignIn;
