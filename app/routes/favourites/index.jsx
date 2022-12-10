import {
    useState,
    useCallback,
    useEffect
} from 'react';
import { useLocalStorage } from '~/utils/localStorage'
import useEffectWithoutFirstRun from '~/utils/useEffectWithoutFirstRun';



export default function Index() {


  const [products, setProducts] = useState('');
  const [ids, setIds] = useState([]);
  const [email, setEmail] = useLocalStorage('email', '');


  function componentDidMount(res) {
    setNom(res.ids)
  }

  useEffect(async () => {
    let token = await getAccessToken()
    let jsonData = { "email": email }
    let response = fetch(`${SERVER_DNS}/accounts/get-profile`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(jsonData),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res)
        return res.json();
      })
      .catch((text) => {
        console.log(text.msg);
      });
    response = await response;
    setProducts(response.msg);
  }, []
  )
  useEffectWithoutFirstRun(() => componentDidMount(products), [products])
return (
    <div>
        <text>
            Favourites
        </text>
    </div>
    );
}
