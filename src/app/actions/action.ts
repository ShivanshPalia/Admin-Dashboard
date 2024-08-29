
// 'use server';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { db } from '@/db';
// import { Select } from '@mui/material';
// export const createUser = async (formData: FormData) => {
//   try {
//     if (!formData) {
//       console.log("Form data is null");
//       return;
//     }
//     const email = formData.get("email")?.toString();
//     const name = formData.get("name")?.toString();
//     const phone = formData.get("phone")?.toString();
//     // Check if any of the values are null
//     if (!email || !name || !phone) {
//       throw new Error("Invalid input: all fields are required");
//     }
//     await db.user.create({
//       data: {
//         name: name,
//         email: email,
//         phone: Number(phone)
//       }
//     });
//     redirect('/dashboard')
   
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteUser = async (userId:string) =>{
//     try{
//       await db.user.delete({where:{id:userId}})
//     }
//     catch(error){
//       console.error(`Error deleting user with ID ${userId}:`, error)
//     }
// }


// 'use server';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { db } from '@/db';

// export const createUser = async (formData: FormData) => {
//   try {
//     if (!formData) {
//       console.log("Form data is null");
//       return;
//     }

//     const email = formData.get("email")?.toString();
//     const name = formData.get("name")?.toString();
//     const phone = formData.get("phone")?.toString();
//     const address = formData.get("address")?.toString();
//     const dateOfBirth = formData.get("dateOfBirth")?.toString();
//     // const role = formData.get("role")?.toString();

//     // Check if any of the values are null
//     if (!email || !name || !phone ||!address ||  !dateOfBirth ) {
//       throw new Error("Invalid input: all fields are required");
//     }

//     await db.user.create({
//       data: {
//         name: name,
//         email: email,
//         phone: Number(phone),
//         address: address as string,
//         dateOfBirth: new Date(dateOfBirth),
//         // role: role as any // Assuming role is one of the values in the UserRole enum
//       }
//     });

//     redirect('/dashboard');
   
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteUser = async (userId: string) => {
//   try {
//     await db.user.delete({ where: { id: userId } });
//   } catch (error) {
//     console.error(`Error deleting user with ID ${userId}:`, error);
//   }
// };



'use server';
import { redirect } from 'next/navigation';
import { db } from '@/db';

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
    
    redirect('/dashboard');
   
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

