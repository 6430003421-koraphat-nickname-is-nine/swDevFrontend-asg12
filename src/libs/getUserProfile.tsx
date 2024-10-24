export default async function getUserProfile(token: string) {
  const response = await fetch(
    "https://sw-dev-frontend-asg-backend1.vercel.app:443/api/v1/auth/me",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to Fetch User Profile");
  }
  return await response.json();
}
