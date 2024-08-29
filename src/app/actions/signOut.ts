'use server'
import { revalidatePath } from 'next/cache';
import { signOut } from '@/auth';
export default async function SignOut(){
    await signOut({redirectTo:"/"})
    revalidatePath('/')
  }