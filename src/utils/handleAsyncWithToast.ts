/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

export const handleAsyncWithToast = async (
  asyncCallback: () => Promise<any>,
  loadingMessage?: string,
  successMessage?: string,
  errorMessage?: string,
  isShowToast: boolean = true
) => {
  let toastInit: string | number | undefined;

  if (isShowToast) {
    toastInit = toast.loading(loadingMessage || "Loading...");
  }

  try {
    const res = await asyncCallback();
    if (res?.data?.success) {
      toast.success(res.data.message || successMessage, {
        id: toastInit,
      });
    }

    if (res?.message) {
      toast.success(res.message, {
        id: toastInit,
      });
    }

    if (!res?.data?.success) {
      toast.error(res?.error?.data?.message, {
        id: toastInit,
      });
    }

    return res; 
  } catch (error) {
    toast.error(
      (error as any)?.message || errorMessage || "Something went wrong",
      {
        id: toastInit,
      }
    );
    throw error; 
  } finally {
    setTimeout(() => {
      toast.dismiss(toastInit);
    }, 3500);
  }
};
