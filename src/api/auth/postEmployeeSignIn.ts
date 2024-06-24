import apiInstance from "../apiInstance";
import { baseURL } from "@/constants/env";
import setTokenLocalStorage from "@/lib/setTokenLocalStorage";

export interface EmployeeSignInBody {
  email: string;
  password: string;
}

interface postEmployeeSignInProps {
  body: EmployeeSignInBody;
  onSuccess?: () => void;
  onError?: (string?: any) => void;
}

export default async function postEmployeeSignIn({
  body,
  onError,
  onSuccess,
}: postEmployeeSignInProps) {
  try {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const setCookieHeader = response.headers.get("Set-Cookie");
    console.log(setCookieHeader);
    const authHeader = response.headers.get("Authorization");

    if (authHeader) {
      setTokenLocalStorage(authHeader);
      apiInstance.setAuthorizationToken(authHeader);
    }

    if (!response.ok) {
      const res = await response.json();
      onError?.(res?.message);
    }

    onSuccess?.();
  } catch (error) {
    onError?.(error);
  }
}
