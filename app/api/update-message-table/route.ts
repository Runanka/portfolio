import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const message = searchParams.get("message");

  try {
    if (!name || !email || !message)
      throw new Error("Name, email, and message are required");
    await sql`INSERT INTO Message (Name, Email, Message) VALUES (${name}, ${email}, ${message});`;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Data inserted successfully" },
    { status: 200 }
  );
}
