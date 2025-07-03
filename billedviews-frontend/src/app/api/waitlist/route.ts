import { NextRequest, NextResponse } from "next/server";

interface WaitlistRequest {
  email: string;
  phoneNumber: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistRequest = await request.json();

    // Forward the request to the Spring Boot backend
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
    const response = await fetch(`${backendUrl}/api/waitlist/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        phoneNumber: body.phoneNumber,
      }),
    });

    // Get the response data whether it's an error or success
    const responseData = await response.json();

    if (!response.ok) {
      // Return the error from the backend with the appropriate status code
      return NextResponse.json(
        { error: responseData.error || "Failed to join waitlist" },
        { status: response.status }
      );
    }

    // Return success response
    return NextResponse.json(responseData, { status: 201 });
  } catch (error) {
    console.error("Error processing waitlist request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
