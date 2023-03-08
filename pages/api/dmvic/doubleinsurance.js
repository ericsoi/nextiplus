import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './auth';

const Data = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const t = await Login();
        setToken(t);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!token) return;

    const data = JSON.stringify({
      policystartdate: '13/01/2023',
      policyenddate: '12/02/2023',
      vehicleregistrationnumber: 'KCW543Q',
      chassisnumber: 'DE3FS-529014',
    });

    const config = {
      method: 'post',
      headers: {
        ClientID: '7C25584A-CF8D-4B41-9B1D-A0180ABA008E',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(
      'https://api.dmvic.com/api/VC3/Integration/ValidateDoubleInsurance',
      config
    )
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err));
  }, [token]);

  return (
    <>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </>
  );
};

export default Data;
