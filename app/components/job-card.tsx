"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface JobCardProps {
  title: string
  salary: string
  description: string
}

export function JobCard({ title, salary, description }: JobCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600">{title}</CardTitle>
          <CardDescription>薪资范围：{salary}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">申请职位</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

