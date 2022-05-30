import React from 'react'
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "We are Recognised by government and other stakeholders (National and International)",
  'We Engage in Regular consultation with Government especially at the Federal level on issues bordering on manufacturing',
  "Perform Specific Intervention on members’ challenges",
  "Fiscal Policy Incentives",
  "Monetary Policy Intervention"
];

function Typicall() {
  const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        5000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  return (
    <TextTransition
      text={ TEXTS[index % TEXTS.length] }
      springConfig={ presets.gentle }
    />
  )
}

export default Typicall