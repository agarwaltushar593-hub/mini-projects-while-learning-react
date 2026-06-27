
function App() {
  return <center class='topic'>
           <h1>To-Do List</h1>
    <div class="container text-center">
      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="enter To-do list" />
        </div>   
        
        <div class="col-2">
          <input type="date" />
        </div>
        <div class="col-2">
          <div class="btn">
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    </div>
    <div class ="container text-center">
    <div class ="row">
    <div class ="col-4">
    do work
    </div>
    <div class ="col-2">
    dd/mm/yyyy
     </div>
      <div class ="col-2">
        <div class ="btn">
          <button type ="button" class ="btn btn-danger">delete </button>
        </div>
      </div>
     </div>
    </div>
    
    <div class ="container text-center">
    <div class ="row">
    <div class ="col-4">
    do work
    </div>
    <div class ="col-2">
    dd/mm/yyyy
     </div>
      <div class ="col-2">
        <div class ="btn">
          <button type ="button" class ="btn btn-danger">delete </button>
        </div>
      </div>
     </div>
    </div>
  </center>
}

export default App;
