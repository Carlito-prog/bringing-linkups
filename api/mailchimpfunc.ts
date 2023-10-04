// /api/send-email.ts (if using Vercel)
import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { formTypes } from "../src/Page/ContactUs";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { fullName, email, phone, reason } = req.body;

    const mailchimpData: formTypes = {
      fullName,
      email,
      phone,
      reason
    };

    // Send email using Mailchimp API
    await axios.post(
      "https://<dc>.api.mailchimp.com/3.0/",
      mailchimpData,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    );

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("Mailchimp error:", error);
    return res.status(500).json({ error: "Email not sent" });
  }
};
