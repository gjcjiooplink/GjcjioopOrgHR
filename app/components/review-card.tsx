"use client"

import { motion } from "framer-motion"
import { FaStar as FaStarSolid } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ReviewCardProps {
  review: {
    id: number
    name: string
    role: string
    rating: number
    comment: string
    verified?: boolean
  }
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                {review.name}
                {review.verified && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    认证身份
                  </span>
                )}
              </CardTitle>
              <CardDescription>{review.role}</CardDescription>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStarSolid key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="italic">{review.comment}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

