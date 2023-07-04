let root = document.getElementById("root");

let container = ReactDOM.createRoot(root);
let name = "asia";
container.render(
<div>
    {name}
    {1234556}
    {(name ==="Aasia") ? <h1>hello</h1> : <h1> "m</h1>}
    <h1>
      hello world
    </h1>
    <button>Aasia</button>
  </div>,
)