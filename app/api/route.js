import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_7BEUhKEf_6163JEnxFtj9FyzDtDwAMGz5');
const fromEmail = 'onboarding@resend.dev';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me ^^</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}