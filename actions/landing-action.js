"use server";

export const submitForm = async (formData) => {
  try {
    const res = await fetch(
      "https://insurance-seven-kappa.vercel.app/api/landing",
      {
        method: "POST", // Assuming you are sending data to the server
        headers: {
          "Content-Type": "application/json", // Set content type as JSON
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      }
    );

    // Handle the response if needed
    if (res.ok) {
      return {
        status: 200,
        message: "Form submitted successsfully!",
      };
    } else {
      console.error("Failed to submit the form");
    }
  } catch (error) {
    console.error("Error occurred during submission:", error);
  }
};
