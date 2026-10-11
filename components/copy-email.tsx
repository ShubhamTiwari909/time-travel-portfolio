"use client";
import { useState } from "react";
import { Icon } from "./icons";
export function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("");
  async function copy() {
    try { await navigator.clipboard.writeText(email); setMessage("Email copied"); }
    catch { setMessage("Copy unavailable. Select the email address or use the email link."); }
  }
  return <div className="copy-email"><button className="text-button" onClick={copy}><Icon name={message === "Email copied" ? "check" : "mail"} width="16" height="16" />Copy email address</button><span className="small muted" role="status">{message}</span></div>;
}
