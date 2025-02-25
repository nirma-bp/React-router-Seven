// This function will fetch user data before rendering the UserPage component.

export async function userLoader({ params }) {
    // API link with dynamic user ID
  const apiUrl = `https://dummyjson.com/users/${params.id}`; 

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Response("User not found", { status: 404 });
  }

  return response.json();
}

// get all users data
export async function usersLoader() {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data.users; // Assuming the API returns an object with a 'users' property
}
