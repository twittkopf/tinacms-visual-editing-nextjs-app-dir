import { isUserAuthorized } from "@tinacms/auth";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (process.env.NODE_ENV === "development") {
    draftMode().enable();
  } else {
    const token = searchParams.get("token");
    const isAuthorizedRes = await isUserAuthorized({
      token: `Bearer ${token}`,
      clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    });

    if (isAuthorizedRes) {
      draftMode().enable();
    }
  }

  return redirect(slug);
}
