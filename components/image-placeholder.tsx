"use client"
import { Calculator, FileText, Users, Shield, Clock, BarChart3 } from "lucide-react"

interface ImagePlaceholderProps {
  width: number
  height: number
  alt: string
  className?: string
  type?: "hero" | "profile" | "service" | "dashboard" | "feature"
  icon?: "calculator" | "document" | "users" | "shield" | "clock" | "chart"
}

export function ImagePlaceholder({
  width,
  height,
  alt,
  className = "",
  type = "hero",
  icon = "calculator",
}: ImagePlaceholderProps) {
  const getIcon = () => {
    const iconProps = { className: "w-8 h-8 text-blue-600" }
    switch (icon) {
      case "document":
        return <FileText {...iconProps} />
      case "users":
        return <Users {...iconProps} />
      case "shield":
        return <Shield {...iconProps} />
      case "clock":
        return <Clock {...iconProps} />
      case "chart":
        return <BarChart3 {...iconProps} />
      default:
        return <Calculator {...iconProps} />
    }
  }

  const getBackgroundColor = () => {
    switch (type) {
      case "profile":
        return "bg-gradient-to-br from-blue-100 to-blue-200"
      case "service":
        return "bg-gradient-to-br from-gray-100 to-gray-200"
      case "dashboard":
        return "bg-gradient-to-br from-blue-50 to-indigo-100"
      case "feature":
        return "bg-gradient-to-br from-green-50 to-blue-50"
      default:
        return "bg-gradient-to-br from-blue-500 to-blue-700"
    }
  }

  return (
    <div className={`${getBackgroundColor()} flex items-center justify-center ${className}`} style={{ width, height }}>
      {type === "hero" ? (
        <div className="text-center text-white">
          <Calculator className="w-16 h-16 mx-auto mb-4" />
          <p className="text-sm font-medium">Професійні послуги</p>
        </div>
      ) : type === "profile" ? (
        <div className="text-center">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
          <div className="w-8 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
      ) : type === "dashboard" ? (
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
          <div className="grid grid-cols-3 gap-1 mt-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-4 h-2 bg-blue-300 rounded"></div>
            ))}
          </div>
        </div>
      ) : (
        getIcon()
      )}
    </div>
  )
}
