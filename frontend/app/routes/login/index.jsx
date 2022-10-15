import { useLoaderData } from "@remix-run/react";
import { useState, useMemo } from "react";


export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  //Validate 
  function performValidation() {
    return username.length > 0 && password.length > 0;
    }

  //Displays elements in 
  const renderErrorMessage = (name) =>{
    if(name === errorMessages.name)
      return <div className="error">{errorMessages.message}</div>
    return null
    };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };

  return (
    <div className="login-form">

    {isSubmitted ? <div>Logged in</div> :
    // <form onSubmit={handleSubmit}>
    //   <FormGroup controlId="username" bsSize="large">
    //     <ControlLabel>Username</ControlLabel>
    //     <FormControl
    //     autoFocus
    //     type="text"
    //     value={username}
    //     onChange={e => setUsername(e.target.value)}
    //     />
    //   </FormGroup>
    //   <FormGroup controlId="password" bsSize="large">
    //     <ControlLabel>Password</ControlLabel>
    //     <FormControl
    //     value={password}
    //     onChange={e => setPassword(e.target.value)}
    //     type="password"
    //     />
    //   </FormGroup>
    //   <Button block bsSize="large" disabled={!performValidation()} type="submit">
    //     Login
    //   </Button>
    // </form>
    null
    }


    </div>
  );
}
