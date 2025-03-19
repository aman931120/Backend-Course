import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  // let myObj = {
  //   username:"aman",
  //   age: 21
  // }

  let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* <div class="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            class="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/31190087/pexels-photo-31190087/free-photo-of-majestic-northern-harrier-in-flight-over-quincy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div class="flex">
          <span class="text-2xl font-medium"></span>
          <span cl>This is a famous bird</span>
          <span class="flex">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div> */}

      <Card
        username="Yash verma"
        someObject={newArr}
        about="From CSE department"
        imageLink="https://images.pexels.com/photos/733998/pexels-photo-733998.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <br />
      <Card
        username="Aman Kumar"
        about="From AIDS department"
        imageLink="https://images.pexels.com/photos/1912176/pexels-photo-1912176.jpeg?auto=compress&cs=tinysrgb&w=300"
      />
    </>
  );
}

export default App;
