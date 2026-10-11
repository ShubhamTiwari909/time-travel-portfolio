"use client";
import { useState } from "react";
import { Icon } from "./icons";
import * as ui from "@/styles/portfolio";
export function CopyEmail({ email }: {
    email: string;
}) {
    const [message, setMessage] = useState("");
    async function copy() {
        try {
            await navigator.clipboard.writeText(email);
            setMessage("Email copied");
        }
        catch {
            setMessage("Copy unavailable. Select the email address or use the email link.");
        }
    }
    return <div className={ui.copyEmail}><button className={ui.textButton} onClick={copy}><Icon name={message === "Email copied" ? "check" : "mail"} width="16" height="16"/>Copy email address</button><span className={ui.small + " " + ui.muted} role="status">{message}</span></div>;
}
