interface NotificationRootProps {
  children: React.ReactNode
}

export  default function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex flex-col gap-6 rounded" >
      {children}
    </div>
  )
}