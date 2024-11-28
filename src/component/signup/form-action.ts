'use server';

export async function handleForm(formData: FormData) {
  console.log('FormData entries:', Object.fromEntries(formData.entries()));
}
