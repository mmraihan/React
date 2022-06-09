import React, {useState, useEffect} from "react";


const url =`https://restcountries.com/v3.1/all`;

function App() {

  const [isLoading, setIsLoading]=useState(true);
  const [error, setError]=useState(null);
  const [countries, setCountries]=useState([]);

 const fetchData = async (url)=>{
   setIsLoading(true);


   try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    setCountries(data);
    setIsLoading(false);
    setError(null);

    console.log(countries)
     
   } catch (error) {
     setIsLoading(false);
     setError(error);
   }

 }

  useEffect(() => {
  fetchData(url)
  }, [])
  


  return (
    <div>
    App
    </div>
  );
}

export default App;
