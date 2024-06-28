import { ButtonHTMLAttributes, ElementType } from "react";

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function NotificationAction({ icon: Icon, ...rest }: NotificationActionProps) {
  return (
    <button
      {...rest}
      className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
    >
      <Icon className="w-6 h-6 text-zinc-50" />
    </button>
  );
}
