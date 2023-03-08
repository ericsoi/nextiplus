import { useState, useEffect } from 'react';

const Login = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.dmvic.com/api/V1/Account/Login', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic aXBsdXNhZ2VuY3lhcGl1c2VyQGRtdmljLmNvbTohUDIwMiFAR1k=',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Username": "iplusagencyapiuser@dmvic.com",
          "Password": "!P202!@GY"
        })
      });
      const result = await response.json();
      setToken(result.token);
    };

    fetchData();
  }, []);

  return <div>{token}</div>;
};

export default Login;
