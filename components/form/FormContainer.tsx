"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { actionFunction, FormStateWithStatus } from "@/utils/types";
import { useRouter } from "next/navigation";

const initialState: FormStateWithStatus = {
  message: "",
  status: "info",
};

function FormContainer({
  action,
  children,
  refreshPath,
}: {
  action: actionFunction;
  children: React.ReactNode;
  refreshPath?: string;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.message) {
      switch (state.status) {
        case "success":
          toast.success(state.message);
          break;

        case "error":
          toast.error(state.message);
          break;

        case "warning":
          toast.warning(state.message);
          break;

        default:
          toast.info(state.message);
      }

      if (refreshPath) {
        router.refresh(); // forces client to fetch new server data
      }
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
