import React from "react";
import { colors } from "../theme/colors";

interface NotificationProps {
  message: string;
  type: "error" | "warning" | "success";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
}) => {
  return (
    <div
      className={`notification-toast ${type}`}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "12px 20px",
        borderRadius: "8px",
        color: colors.text.white,
        fontWeight: "bold",
        fontSize: "14px",
        zIndex: 1000,
        maxWidth: "400px",
        boxShadow: colors.shadow.light,
        backgroundColor:
          type === "error"
            ? colors.state.errorLight
            : type === "warning"
            ? colors.state.infoLight
            : colors.state.success,
        animation: "slideInRight 0.3s ease-out",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>
          {type === "error" ? "❌" : type === "warning" ? "⚠️" : "✅"}
        </span>
        {message}
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: colors.text.white,
            fontSize: "18px",
            cursor: "pointer",
            marginLeft: "auto",
            padding: "0 4px",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
