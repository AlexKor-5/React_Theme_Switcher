import React from "react";
import withFunctionality from "../../HOCS/withFunctionality";

const ThemeApp = ({text = "default text", functionality = f => f}) => {
    return (
        <div>
            <input type="button"
                   defaultValue={text}
                   style={{cursor: "pointer"}}
                   onClick={functionality}
            />
        </div>
    );
};
export default withFunctionality()(ThemeApp);