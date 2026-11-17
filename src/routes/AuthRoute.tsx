import { AuthStack } from "../lib/navigation";
import { Greeting, Login, Register, VerifyEmail } from "../pages/auth";

const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Greeting"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Greeting" component={Greeting} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="VerifyEmail" component={VerifyEmail} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
