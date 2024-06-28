interface NotificationContentProps {
  text: string
}

export default function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col">
     <p className="text-base leading-relaxed">{text}</p>
     <p className="text-sm leading-relaxed text-zinc-200">Está ação não poderá ser desfeita</p>
    </div>
  )
}