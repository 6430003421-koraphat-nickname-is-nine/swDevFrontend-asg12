export default async function getHospital(hid: string) {
  const response = await fetch(
    // `https://vaccine-app-backend-2.vercel.app/api/v1/hospitals/${hid}`
    `https://sw-dev-frontend-asg-backend1.vercel.app/api/v1/hospitals/${hid}`
  );
  if (!response) {
    throw new Error("Failed to fetch hospital id :" + hid);
  }
  //   if (response.status === 429) {
  //     throw new Error("Too many requests, please try again later.");
  //   }
  return await response.json();
}
