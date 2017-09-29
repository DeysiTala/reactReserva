
const RowTable = (props) => {
   const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
   return (
      <tr>
         {_tds}
     </tr>
       
   )
}

const RTable = ({seats}) => {
   return (
      <table width="300" border="3" className = "table table-bordered">
         <RowTable items = {seats[0]} />
         <RowTable items = {seats[1]} />
         <RowTable items = {seats[2]} />
         <RowTable items = {seats[3]} />
      </table>
   );
}

function listPairs (seats) {
   console.log ("seats: ", seats);
   let newSeats = [];
   for ( let row  of seats ) {
      let filterArray = row.filter ( e => e);
      newSeats.push(filterArray); 
   }
   return newSeats.map ((row, index) => {
      return (
         <li key = {index}> {row} </li>
         
      );
   });
}
const Input = (props) => (
  <input type='text' placeholder={ props.placeholder } />
);
 
const App = ({title, seats}) => {
   return (
      <div>
        
         <RTable  seats = {seats}/>
       
         <h3>  {title}</h3>
         <ol>
            {listPairs (seats)}
         </ol>
       
      </div>
    
   );
}

let seats = [
   [4, 8, 12, 16, 20, 24, 28, 32],
   [3, 7, 11, 15, 19, 23, 27, 31],
   [2, 6, 10, 14, 18, 22, 26, 30],
   [1, 5, 9, 13, 17, 21, 25, 29]
]

  let pasajeros = [
    {
      "name": "Susy Deysi",
      "lastname": "Talavera Cardenas",
      "DNI": 46252793,
      "completed": false
    },
    {
      "name": "Susy Deysi",
      "lastname": "Talavera Cardenas",
      "DNI": 46252793,
      "completed": false
    },
    {
      "name": "Susy Deysi",
      "lastname": "Talavera Cardenas",
      "DNI": 46252793,
      "completed": false
    },
    
]
let html = "";
for (var i =0; i<pasajeros.length;i++){
let datos = pasajeros[i];
let salida = 

  "<li>" +  datos.name + datos.lastname + datos.DNI "</li> " /*+ " <button>" +"Eliminar"+ "</button>"*/;
html += salida;
}
document.getElementById("root").innerHTML+= html;


ReactDOM.render ( 
   <App title = {'Asientos reservados'}  seats = {seats} />, 
   document.getElementById("root")
   
); 
 
