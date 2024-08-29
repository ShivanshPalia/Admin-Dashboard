// import { revalidatePath } from 'next/cache';
// import { signIn } from '@/auth';
// export default async function SignIn(provider: string) {
//   console.log('Signing in with provider:', provider);
//   try {
//     await signIn(provider, { callbackUrl: "/" });
//     revalidatePath("/");
//   } catch (error) {
//     console.error('Error during sign-in:', error);
//   }
// }


// actions/signIn.ts
// "use server"
// import { revalidatePath } from 'next/cache';
// import { signIn as nextAuthSignIn } from '@/auth';
// export async function signIn(provider: string) {
//   console.log('Signing in with provider:', provider);
//   try {
//     await nextAuthSignIn(provider, { callbackUrl: "/" });
//     // This revalidatePath should be called on the server side.
//     await revalidatePath("/");
//   } catch (error) {
//     console.error('Error during sign-in:', error);
//   }
// }

"use server";
import { revalidatePath } from 'next/cache';

export async function postSignInLogic() {
  try {
    // Revalidate the home page after a successful sign-in
     revalidatePath("/");
  } catch (error) {
    console.error('Error during post-sign-in logic:', error);
  }
}
