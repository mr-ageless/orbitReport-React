import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;

// const Buttons = ({ filterByType, setSat, displaySats }) => {
//   return (
//     <div>
//       <button onClick={() => setSat(satData)}>All Orbits</button>
//       {displaySats.map((orbitType, index) => (
//         <button key={index} onClick={() => filterByType(orbitType)}>
//           {orbitType}</button>
//       ))}
//       </div>
//   );
// };