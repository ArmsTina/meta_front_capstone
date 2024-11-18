import React from "react";
import "../styles/reservations.css";

function Reservations() {
  return (
    <>
      <main id="reservation">
        <form>
          <div>
            <label for="preferred-name">Preferred Name</label>
            <input
              type="text"
              id="preferred-name"
              name="preferred-name"
              required
            />
          </div>
          <div>
            <label for="date">Date</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div>
            <label for="time">Time</label>
            <select id="time" name="time" required>
              <option value="0900-0930" selected>
                09:00 ~ 09:30
              </option>
              <option value="0930-1000">09:30 ~ 10:00</option>
              <option value="1000-1030">10:00 ~ 10:30</option>
              <option value="1030-1100">10:30 ~ 11:00</option>
              <option value="1100-1130">11:00 ~ 11:30</option>
              <option value="1130-1200">11:30 ~ 12:00</option>
              <option value="1200-1230">12:00 ~ 12:30</option>
              <option value="1230-1300">12:30 ~ 13:00</option>
              <option value="1300-1330">13:00 ~ 13:30</option>
              <option value="1330-1400">13:30 ~ 14:00</option>
              <option value="1400-1430">14:00 ~ 14:30</option>
              <option value="1430-1500">14:30 ~ 15:00</option>
              <option value="1500-1530">15:00 ~ 15:30</option>
              <option value="1530-1600">15:30 ~ 16:00</option>
              <option value="1600-1630">16:00 ~ 16:30</option>
              <option value="1630-1700">16:30 ~ 17:00</option>
              <option value="1700-1730">17:00 ~ 17:30</option>
              <option value="1730-1800">17:30 ~ 18:00</option>
            </select>
          </div>
          <div>
            <label for="people">Number of People</label>
            <input type="number" id="people" name="people" min="1" required />
          </div>
          <div>
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="000-000-0000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </>
  );
}

export default Reservations;
