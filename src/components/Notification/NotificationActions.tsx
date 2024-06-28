interface NotificationActionsProps {
  children: React.ReactNode
}

export default function NotificationActions({ children }: NotificationActionsProps) {
  return (
    <div className="w-full flex gap-2 justify-end">
      {children}
    </div>
  )
}
