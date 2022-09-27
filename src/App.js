import "./App.css";
import GetFieldProps from "./components/GetFieldProps";
import SignupForm from "./components/PropsDrilling/SignupForm";
import WithoutValidation from "./components/WithoutValidation";
import WithValidation from "./components/WithValidation";
import YupValidation from "./components/YupValidation";

function App() {
 
  return (
    <div>
     < WithoutValidation />
     < WithValidation />
     < YupValidation />
     < GetFieldProps />
     < SignupForm />
    

    </div>
  );
}

export default App;
