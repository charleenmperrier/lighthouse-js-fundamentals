const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStation(stations) {
  const goodStations = [];
  for( const station of stations) {
    const capacity = station[1];
    if(capacity >= 20){
      

      const name = station[2];
      if(name === 'school' || name === 'community centre'){
        goodStations.push(station[0]);
      }
    }
    

  }
  return goodStations
}

console.log(chooseStation(stations));