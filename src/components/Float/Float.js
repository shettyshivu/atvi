import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Float.css";

const Float = () => {
  return (
    <div className="floating-whatsapp">
      <a
        target={"_blank"}
        rel="noopener noreferrer"
        href="https://wa.me/919353472940"
      >
        <WhatsAppIcon className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default Float;
