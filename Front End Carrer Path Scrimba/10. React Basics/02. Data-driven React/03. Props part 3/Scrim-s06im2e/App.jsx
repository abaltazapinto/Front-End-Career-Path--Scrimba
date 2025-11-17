/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

import  Contact  from "./components/Contact.jsx"

function App() {

	const contacts = [
    {
      img: "./images/mr-whiskerson.png",
      name: "Mr. Whiskerson",
      phone: "(212) 555-1234",
      email: "mr.whiskaz@catnap.meow"
    },
    {
      img: "./images/fluffykins.png",
      name: "Fluffykins",
      phone: "(212) 555-2345",
      email: "fluff@me.com"
    },
    {
      img: "./images/felix.png",
      name: "Felix",
      phone: "(212) 555-4567",
      email: "felix@thecat.net"
    },
    {
      img: "./images/pumpkin.png",
      name: "Pumpkin",
      phone: "(0800) 123-456",
      email: "pumpkin@cute.io"
    }
  ]

  // Map through the elements
   const contactCards = contacts.map((contact, index) => (
    <Contact
      key={index}       // unique identifier for React
      img={contact.img}
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
    />
  ))
    return (
		<div className="contacts">
			{contactCards}
    	</div>
    )
}

export default App
