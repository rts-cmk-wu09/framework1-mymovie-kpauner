import { useState } from "react";
import styled from "styled-components";
import ReactSwitch from "react-switch";

const StyledSwitch = styled(ReactSwitch)`
    grid-column-start: 3;
    justify-self: end;
`;

const Switch = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = () => {
        setChecked(!checked);
    }

    return <StyledSwitch 
        height={21}
        width={38}
        offColor="#AAA9B1"
        onColor="#c2eafe"
        onHandleColor="#fff"
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleChange}
        checked={checked} 
    />
}
 
export default Switch;