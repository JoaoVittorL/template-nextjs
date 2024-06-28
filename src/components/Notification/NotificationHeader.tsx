interface NotificationHeaderProps {
  children: React.ReactNode
}

export default function NotificationHeader({ children }: NotificationHeaderProps) {
  return (
    <div className="flex gap-8">
      {children}
    </div>
  )
}