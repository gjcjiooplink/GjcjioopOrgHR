"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "zjtanna201337") {
      const timestamp = Date.now()
      const dfid = "device-" + Math.random().toString(36).substr(2, 9)
      const cvid = "cv-" + Math.random().toString(36).substr(2, 9)
      const ip = "192.168.1." + Math.floor(Math.random() * 256) // Simulated IP address
      const queryParams = new URLSearchParams({
        timestamp: timestamp.toString(),
        dfid,
        cvid,
        appid: "109373",
        sevcer: "zhoujingtian",
        ip,
      })
      router.push(`/dash?${queryParams.toString()}`)
    } else {
      setError("密码错误，请重试")
    }
  }

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/company-logo.png" alt="Gjcjioop Logo" width={100} height={40} />
            </div>
            <CardTitle className="text-2xl text-blue-600">人事管理登录</CardTitle>
            <CardDescription>请输入管理员密码</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Input
                  type="password"
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-4"
                />
              </motion.div>
              {error && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>错误</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                登录
              </Button>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}

