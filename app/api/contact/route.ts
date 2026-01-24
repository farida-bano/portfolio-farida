import { NextRequest } from 'next/server';

// In a real application, you would connect to your email service or database here
export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return Response.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    // Extract form data
    const { Name, Email, Phone, Address, Message, Service, DateTime } = await request.json();

    // Validate required fields
    if (!Name || !Email || !Message) {
      return Response.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // In a real application, you would:
    // 1. Send an email to the portfolio owner
    // 2. Store the message in a database
    // 3. Possibly send an auto-reply to the user

    // For now, we'll just log the data (in production, remove this)
    console.log('New contact form submission:', {
      Name,
      Email,
      Phone,
      Address,
      Message,
      Service,
      DateTime
    });

    // Simulate a successful response
    return Response.json({ message: 'Message received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return Response.json({ message: 'Internal server error' }, { status: 500 });
  }
}