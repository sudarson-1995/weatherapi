import React, { useEffect ,useState} from "react";

function Weather(){
  const [apiData,setApiData]=useState(null);
  const[inputData, setInputData]=useState("chennai");
  useEffect(()=>{
var data=fetch(`https://api.openweathermap.org/data/2.5/weather?q={inputdata}&appid=2fdd888a9dbd7943caba8c310eb8fbc4`);
var apiData=data.then((item)=>item.json());
apiData.then((value)=>setApiData(value));
},[]);
console.log(apiData);
console.log(apiData?.weather[0].main);

const submittingFrom = (event)=>{
  console.dir(event.target[0].value);
  setInputData(event.target[0].value);
  event.PreventDefault();
}

console.log(apiData,inputData);

  return (
    <div className="main">
    <div className="weathers"> 
     <h1>Weather Card</h1>
     <form className="wrap" onSubmit={(e)=>submittingFrom(e)}>
    <input type="text" placeholder="Enter Your City Name"/>
    <button type="submit" className="icon">
      </button>
     <h3>{apiData?.name}</h3>
     <p>{apiData?.weather[0].main}</p>
     </form>
     <div className="disp">
        <div className="hum">Humidity</div>
        <span>{apiData?.main.humidity}</span>
        <div className="wind">Wind-speed</div>
        <span>{apiData?.wind.speed}</span>
     </div>
    </div>
    </div>
  );
}
export default Weather;
