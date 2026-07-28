import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, platform } = body;

    // Basic Input Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!whatsapp || typeof whatsapp !== "string" || whatsapp.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid WhatsApp phone number." },
        { status: 400 }
      );
    }

    if (!platform || typeof platform !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select your primary ecommerce platform." },
        { status: 400 }
      );
    }

    // Simulate lead processing delay (e.g. CRM/Webhook payload dispatch)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Log received lead details on server console
    console.log("🚀 [Ecombulls Lead Captured]:", {
      name: name.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      platform: platform.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Audit request submitted successfully! Mudasir Kamal's team will contact you on WhatsApp within 2 hours.",
        leadId: `ECO-${Math.floor(100000 + Math.random() * 900000)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Lead Submission Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try submitting again.",
      },
      { status: 500 }
    );
  }
}
