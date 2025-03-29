'use server';

export async function submitContact(prevState: any, formData: FormData) {
  try {
    // Validate the data
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    if (!firstName || !lastName || !email || !message) {
      return {
        error: 'Please fill in all required fields'
      };
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email as string)) {
      return {
        error: 'Please enter a valid email address'
      };
    }

    // Here I would send this to your API or database
    // for now we'll simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Thank you for your message. We\'ll get back to you soon!'
    };
  } catch (error) {
    return {
      error: 'Something went wrong. Please try again.'
    };
  }
}
