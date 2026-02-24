import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }
    await prisma.lead.create({
      data: {
        email,
        name: typeof name === "string" && name.trim() ? name.trim() : null,
        message:
          typeof message === "string" && message.trim()
            ? message.trim()
            : null,
        source: "contact-page",
      },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
