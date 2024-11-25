import React, { useState } from "react";
import "../styles/Order.css";

function Order() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    menu: {
      "Greek salad": 0,
      Bruschetta: 0,
      "Lemon Dessert": 0,
      "Grilled Fish": 0,
      "Penne Arrabbiata": 0,
    },
    streetAddress: "",
    aptSuite: "",
    buildingName: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "number") {
      setData({
        ...data,
        menu: {
          ...data.menu,
          [name]: Number(value),
        },
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order submitted successfully! See console for more details.`);
    console.log(data);
  };

  return (
    <>
      <main id="order-container">
        <div id="menu-container">
          <h2>Menu</h2>
          <section className="menu-section">
            <div>
              <h3>Greek salad</h3>
              <input
                type="number"
                name="Greek salad"
                value={data.menu["Greek salad"]}
                onChange={handleChange}
                min="0"
                max="99"
              />
            </div>
          </section>
          <section className="menu-section">
            <div>
              <h3>Bruschetta</h3>
              <input
                type="number"
                name="Bruschetta"
                value={data.menu["Bruschetta"]}
                onChange={handleChange}
                min="0"
                max="99"
              />
            </div>
          </section>
          <section className="menu-section">
            <div>
              <h3>Lemon Dessert</h3>
              <input
                type="number"
                name="Lemon Dessert"
                value={data.menu["Lemon Dessert"]}
                onChange={handleChange}
                min="0"
                max="99"
              />
            </div>
          </section>
          <section className="menu-section">
            <div>
              <h3>Grilled Fish</h3>
              <input
                type="number"
                name="Grilled Fish"
                value={data.menu["Grilled Fish"]}
                onChange={handleChange}
                min="0"
                max="99"
              />
            </div>
          </section>
          <section className="menu-section">
            <div>
              <h3>Penne Arrabbiata</h3>
              <input
                type="number"
                name="Penne Arrabbiata"
                value={data.menu["Penne Arrabbiata"]}
                onChange={handleChange}
                min="0"
                max="99"
              />
            </div>
          </section>
        </div>
        <div id="info">
          <form method="GET" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="preferred-name">Preferred Name</label>
              <input
                type="text"
                id="preferred-name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="000-000-0000"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={data.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="street-address">Street Address</label>
              <input
                type="text"
                id="street-address"
                name="streetAddress"
                value={data.streetAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="apt-suite">Apt/Suite</label>
              <input
                type="text"
                id="apt-suite"
                name="aptSuite"
                value={data.aptSuite}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="building-name">Building Name</label>
              <input
                type="text"
                id="building-name"
                name="buildingName"
                value={data.buildingName}
                onChange={handleChange}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
    </>
  );
}

export default Order;
