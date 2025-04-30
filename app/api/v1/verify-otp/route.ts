import { NextResponse } from "next/server";
import twilio from 'twilio'; 

// Get Twilio credentials from environment variables
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_VERIFY_SERVICE_SID = process.env.TWILIO_VERIFY_SERVICE_SID;

export async function POST(request: Request) {
  try {
    const response = await request.json();
    console.log(response);
    const { phoneNumber, otpCode } = response;
    console.log('Received OTP verification request:', { phoneNumber, otpCode });
    if (!phoneNumber || !otpCode) {
      return NextResponse.json(
        { success: false, message: "Phone number and OTP code are required" },
        { status: 400 }
      );
    }

    // Check if Twilio Verify credentials are configured
    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_VERIFY_SERVICE_SID) {
        console.error("Twilio Verify credentials not configured for verification check.");
        return NextResponse.json(
            { success: false, message: "Twilio Verify service not configured" },
            { status: 500 }
        );
    }

    // Initialize Twilio client
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    // Use Twilio Verify API to check the code
    const verificationCheck = await client.verify.v2
      .services(TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks
      .create({ to: phoneNumber, code: otpCode });

    console.log('Twilio Verify Check response status:', verificationCheck.status);

    // Check if the verification was successful ('approved')
    if (verificationCheck.status === 'approved') {
      // OTP is correct
      return NextResponse.json({
        success: true,
        message: "Phone number verified successfully"
      });
    } else {
      // OTP is incorrect or expired
      return NextResponse.json(
        { success: false, message: "Invalid or expired verification code" }, 
        { status: 400 }
      );
    }

  } catch (error: any) {
    console.error("Error verifying OTP via Verify API:", error);
    // Handle potential errors like 'verification check not found' (e.g., if the original verification expired or never existed)
    const errorMessage = error.message || "Failed to verify OTP";
    const statusCode = error.status || 500;

    // Specific check for Twilio's 'not found' error which might indicate expired/invalid session
    if (statusCode === 404) {
        return NextResponse.json(
            { success: false, message: "Verification session not found or expired. Please request a new code." },
            { status: 404 }
        );
    }

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: statusCode }
    );
  }
}
