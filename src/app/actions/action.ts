'use server';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import bcrypt from "bcryptjs";


export const createUser = async (formData: FormData) => {
  try {
    if (!formData) {
      console.log("Form data is null");
      return;
    }

    const email = formData.get("email")?.toString();
    const name = formData.get("name")?.toString();
    const phone = formData.get("phone")?.toString();
    const address = formData.get("address")?.toString();
    const dateOfBirth = formData.get("dateOfBirth")?.toString();
    const role = formData.get("role")?.toString();
    const password = formData.get("password")?.toString();

    console.log({ email, name, phone, address, dateOfBirth, role, password });

    if (!email || !name || !phone || !address || !dateOfBirth || !password) {
      throw new Error("Invalid input: all fields are required");
    }

    await db.user.create({
      data: {
        name: name,
        email: email,
        phone: Number(phone),
        address: address,
        dateOfBirth: new Date(dateOfBirth),
        role: role as any, // Adjust as needed
        password: password
      }
    });
    
    redirect('/');
   
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    await db.user.delete({ where: { id: userId } });
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
  }
};

export async function submitFeedback(name: string, email: string, feedback: string) {
  if (!name || !email || !feedback) {
    throw new Error('All fields are required');
  }

  try {
    await db.feedback.create({
      data: {
        name,
        email,
        feedback,
        phone:12345678,
      },
    });
    // revalidatePath('/feedback'); // Optional: revalidate the page to reflect changes
  } catch (error) {
    console.error('Failed to submit feedback:', error);
    throw new Error('Error submitting feedback');
  }
}


export async function searchUserByName(username: string) {
  if (!username) {
    throw new Error('Username is required');
  }

  try {
    // Search for the user by name in the database
    const user = await db.user.findFirst({
      where: {
        name: username, // Assumes the 'name' field exists in your schema
      },
    });

    // Return user data or null if not found
    return user;
  } catch (error) {
    console.error('Error searching user:', error);
    throw new Error('Failed to search for the user');
  }
}


export async function getUserFeedback() {
  try {
    const feedbackData = await db.feedback.findMany({
      select: {
        name: true,
        email: true,
        feedback: true,
        createdAt: true,
      },
    });
    return feedbackData;
  } catch (error) {
    console.error('Failed to fetch feedback:', error);
    throw new Error('Error fetching feedback');
  }
}



