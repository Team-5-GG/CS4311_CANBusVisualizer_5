import { useState } from "react";
import icons from '../components/icons.json'
const ModifyIconDropdown = () => {
    // Setting the variables that will hold the value based on the selection from the dropdown menu
    global.iconImage = '';
    const [linkVal, setIconImage] = useState('');
    global.iconImage = linkVal;

    //Create new variables for each icon to be displayed
    const engine = icons.Engine.Icon;
    const tireCondition = icons.TireCondition.Icon;
    const brakes = icons.Brakes.Icon;
    const lighting = icons.Lighting.Icon;
    const transmission = icons.Transmission.Icon;
    //Actual function that shows to user the changes
    return (
        <>
        <div className="container">
          <nav className="selec">
            <select
              id="drpdwn"
              onChange={(e) => setIconImage(e.target.value)}
              className="dropdown"
            >
            {/* the actual images are in components/icons.js */}
                <option value="link1" href="#">
                    New Selection
                </option>                
                <option id="Engine" value={engine}>
                  Engine
                </option>
                <option id="TireCondition" value={tireCondition}>
                  Tire Condition
                </option>
                <option id="Brakes" value={brakes}>
                  Brakes
                </option>
                <option id="Lighting" value={lighting}>
                  Lighting
                </option>
                <option id="Transmission" value={transmission}>
                  Transmission
                </option>
            </select>
          </nav>
        </div>
      </>
    )
}

export default ModifyIconDropdown