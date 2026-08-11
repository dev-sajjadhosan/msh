"use client";

import { SaveIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TPBtnProps } from "@/types/tp_btn_types";
import { TbQuestionMark } from "react-icons/tb";

export function TPBtn({
  onClick,
  disabled,
  variant,
  size = "icon",
  icon = <TbQuestionMark />,
  context,
  side,
  align,
}: TPBtnProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
          >
            {icon || <SaveIcon />}
          </Button>
        }
      />
      <TooltipContent side={side} align={align} className={"font-mono"}>
        {context || "Context Here"}
      </TooltipContent>
    </Tooltip>
  );
}
