import Menubutton from "./Menubutton";
import styles from  "../styles/dropdown.css" ;
export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }

export default function Dropdown({avatar, items}) {
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
  //   }
  // ];
  return (
    <div className="Dropdown">
      <Menubutton  dropdownTitle="Usuario" image={avatar} items={items} />
    </div>
  );
}
