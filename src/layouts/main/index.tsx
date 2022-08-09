import React from "react";
import './index.css';

function MainLayout(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return <div >
    <div className="header"><text>Weather App</text></div>
    {props.children}
    </div>;
}

export default MainLayout;
