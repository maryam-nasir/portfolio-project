import Message from "@/models/message";
import { connectToDB } from "@/utils/database";
import sendEmail from "../../../server/sendEmail";

export const POST = async (request: Request) => {
  const { name, email, message } = await request.json();

  try {
    await connectToDB();

    const newMessage = new Message({
      name,
      email,
      message,
    });
    await newMessage.save();

    // Send email
    const emailText = `
    Name:     ${name}
    
    Email:    ${email}

    Message:  ${message}`;
    const result = await sendEmail(emailText);
    if (result) {
      return new Response(JSON.stringify({ message: "Message sent!" }), {
        status: 201,
      });
    } else {
      return new Response(
        JSON.stringify({
          message: "Failed to send message. Please try again later.",
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({
        message: "Failed to send message. Please try again later.",
      }),
      { status: 500 }
    );
  }
};
