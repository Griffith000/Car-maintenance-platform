import { NextResponse } from "next/server";
import twilio from 'twilio';

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_VERIFY_SERVICE_SID = process.env.TWILIO_VERIFY_SERVICE_SID;

// Store for OTP verification (No longer needed with Verify API)
// const otpStore: Record<string, { otp: string, expiresAt: number }> = {};

export async function POST(request: Request) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { success: false, message: "Phone number is required" },
        { status: 400 }
      );
    }

    // Check for all necessary credentials
    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_VERIFY_SERVICE_SID) {
      console.error("Twilio credentials missing:", {
        sid: !!TWILIO_ACCOUNT_SID,
        token: !!TWILIO_AUTH_TOKEN,
        verifySid: !!TWILIO_VERIFY_SERVICE_SID
      });
      return NextResponse.json(
        { success: false, message: "Twilio Verify credentials not configured" },
        { status: 500 }
      );
    }

    // Initialize Twilio client
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    // Send verification code using Twilio Verify API
    const verification = await client.verify.v2
      .services(TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: phoneNumber, channel: 'sms' });

    console.log('Twilio Verify API response status:', verification.status);

    // Check if the verification request was accepted (usually 'pending')
    if (verification.status === 'pending') {
        return NextResponse.json({
            success: true,
            message: "OTP sent successfully via Verify API"
        });
    } else {
        // Handle unexpected statuses from Twilio Verify
        console.error("Unexpected Twilio Verify status:", verification.status);
        return NextResponse.json(
            { success: false, message: `Failed to send OTP. Status: ${verification.status}` },
            { status: 500 }
        );
    }

  } catch (error: any) {
    console.error("Error sending OTP via Verify API:", error);
    // Provide more specific error feedback if available
    const errorMessage = error.message || "Failed to send OTP";
    const statusCode = error.status || 500;
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: statusCode }
    );
  }
}

// otpStore is no longer needed or exported
// export { otpStore };
