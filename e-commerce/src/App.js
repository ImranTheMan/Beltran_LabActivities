import ProductList from "./ProductList.js"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AdminPanel from "./AdminPanel.js"
import LoginForm from "./LoginForm.js"
 
function App() {
  // const isLoggedin = true;
  // let content;

  // if (isLoggedin) {
  //   content = <AdminPanel />;
  // }
  // else {
  //   content = <LoginForm />;
  // }

  // return <div>{isLoggedin ? <AdminPanel /> : <LoginForm />}</div>
  
  return <ProductList />;
}
// function App() {
//   return (
//     <div className="App">
//       <ProductList />
//     </div>
//   );
// }

export default App;
