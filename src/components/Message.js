import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  useEffect(() => {
    console.log("Message", size);
    let sizing = "";
    switch (size) {
      case "m":
        sizing = "medium";
        break;
      case "l":
        sizing = "large";
        break;
      case "xl":
        sizing = "xlarge";
        break;
      default:
        sizing = "small";
        break;
    }
    setSizeClass(sizing);
  }, [size]);
  useEffect(() => {
    if (!featherCount) {
      setMessage("Oh Noooo. Where are your clothes??");
    } else if (featherCount == 10) {
      setMessage("Thats a well dressed CHICKEN");
    } else {
      setMessage("At least your duck is wearing something");
    }
  }, [featherCount]);
  const [sizeClass, setSizeClass] = useState("");
  const [message, setMessage] = useState("");

  return <div className={`message ${sizeClass}`}>{message}</div>;
}

export default Message;
