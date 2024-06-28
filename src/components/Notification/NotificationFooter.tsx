interface NotificationFooteProps {
  children: React.ReactNode
}

export default function NotificationFooter({ children }: NotificationFooteProps) {
  return (
   <div className="flex items-center">{children}</div>
  )
}