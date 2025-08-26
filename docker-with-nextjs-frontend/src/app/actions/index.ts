/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

export const createUser = async (userData: any) => {
  console.log("//", userData);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/create-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return { message: errorData.message || "An error occurred" };
    }

    const data = await response.json();

    revalidateTag("USERS");
    return { message: data.message };
  } catch (error) {
    return {
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export const getUsers = async () => {
  try {
    // Fetch user data
    const users = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`,
      {
        method: "GET",
        next: {
          tags: ["USERS"],
        },
      }
    );

    const { data } = await users.json();

    return data;
  } catch (err: any) {
    return Error(err);
  }
};
