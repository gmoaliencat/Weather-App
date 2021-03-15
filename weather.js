// Find long and lat
window.addEventListener('load', ()=> {
	let long;
	let lat;
	let temepratureDescription =document.querySelector('.temperature-degree")
	const temperatureSpan = document,querySelector
	
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition
			console.log(position);
			long = position.coords.longitude
			lat = position.coords.latitude;
			
			const api = 'https://home.openweatherapp.org/4a1e06499260c7cef3d85c2536d0479f/${lat},${long}';
			});
			
		fetch(api)
			.then(response=>){
				return response.json();
				})
				
			.then(data =>{
				
			console.log(data);
				const {temperature, summary}= data.currently; temperature, summary } = data.currently;
			//Set DOM Elemeents from API
			temperatureDegree.textContent = temperature;
			temperatureDescription.tectContent =summary;
			locationTimezone.textContent =data.timezone;
			//Set Icon
			setIcons(icon, document.querySelector(".icon"));
			
			//Change temperature to Celsius/Fahreneheit
			temperatureSection..addEventListener('click', () =>{
				if(temperaturSpan.textContent === "F"){
				temperatureSpan.textContent ==="C"
				else {temperatureSpan.textContent = "F";
						}
						}
			});
			function setIcons(icon, iconID){
			const skycons = new skycons({color: "white"});
			const currentIcon = icon.replace(/-/g,"_").toUpperCase
			skycons.play();
			reurn skycons.set(iconID, Skycons[currentIcon]);
			}
			});
			
	});
	});
	
}
});

	}else{

