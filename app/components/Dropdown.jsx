import styles from "../styles/dropdown.css";
import Menubutton from "./Menubutton";
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
const drop = () => {
  console.log("clic al avatar")
}

export default function Dropdown({ avatar, items }) {
  // const items = [
  //   {
  //     slug: "/register/",
  //     anchor: "Register"
  //   },
  //   {
  //     slug: "/login/",
  //     anchor: "Log in"
  //   },
  //   {
  //     slug: "/add/",
  //     anchor: "Host your place"
  //   },
  //   {
  //     slug: "/profile/",
  //     anchor: "See profile"
  //   },
  //   {
  //     slug: "/favourites/",
  //     anchor: "Favourites"
  //   }
  // ];
  return (
    /*<div className="Dropdown">
      <Menubutton backgroundColor ="#BCCEF8" dropdownTitle="Usuario" image={avatar} items={items} />
    </div>

    <WrapItem className="Dropdown">
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' onClick={drop}>
        <Menubutton dropdownTitle="Usuario" items={items} />
      </Avatar>

    </WrapItem>
    
    <div className="Dropdown">
      <Menubutton  dropdownTitle="Usuario"  items={items} >
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' onClick={drop}/>
      </Menubutton>
    </div>*/
    <div className="Dropdown">
    <Menubutton  dropdownTitle="Usuario" image={avatar} items={items} />
  </div>
    

  );
}
