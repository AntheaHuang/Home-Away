"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { actionFunction } from "@/utils/types";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
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
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });

      if (refreshPath) {
        router.refresh(); // forces client to fetch new server data
      }
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
