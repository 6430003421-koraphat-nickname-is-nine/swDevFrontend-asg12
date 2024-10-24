export default async function getHospitals() {
  //add timeout for loading delay testing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    // "https://vaccine-app-backend-2.vercel.app/api/v1/hospitals"
    "https://sw-dev-frontend-asg-backend1.vercel.app/api/v1/hospitals/"
  );
  if (!response) {
    throw new Error("Failed to fetch hospitals");
  }
  //   if (response.status === 429) {
  //     throw new Error("Too many requests, please try again later.");
  //   }
  return await response.json();
}
