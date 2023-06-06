import { isUserAuthorized } from "@tinacms/auth";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    if (process.env.NODE_ENV === "development") {
      // Enter preview-mode in local development
      draftMode().enable();
    } else {
      // Check tina cloud token
      const isAuthorizedRes = await isUserAuthorized({
        token: `Bearer ${req.query.token}`,
        clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
      });

      if (isAuthorizedRes) {
        draftMode().enable();
      }
    }

    return redirect(`/${slug}`);
  }
}
