import { toast } from "@/components/ui/sonner";

export { toast };
export const useToast = () => {
  return {
    toast,
    dismiss: (toastId) => {
      if (toastId) {
        toast.dismiss(toastId);
      } else {
        toast.dismiss();
      }
    },
  };
};
