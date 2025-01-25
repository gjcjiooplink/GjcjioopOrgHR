"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { FaStar, FaStarHalf } from "react-icons/fa"
import { FaStar as FaStarSolid } from "react-icons/fa"

const hiringData = [
  { date: "2022", employees: 10 },
  { date: "2022.6", employees: 18 },
  { date: "2023", employees: 46 },
  { date: "2023.6", employees: 54 },
  { date: "2024", employees: 92 },
  { date: "2024.6", employees: 103 },
]

const reviews = [
  {
    id: 1,
    name: "翁洋",
    role: "AI工程师",
    rating: 5,
    comment:
      "作为一名工程师，我很荣幸能在GjcjioopOrg工作。这里的技术氛围非常好，团队协作顺畅，每个人都能充分发挥自己的才能。公司的发展前景令人期待，管理层对员工的关怀也让人感动。",
  },
  {
    id: 2,
    name: "徐嘉硕",
    role: "业务平台管理",
    rating: 5,
    comment:
      "加入GjcjioopOrg是我职业生涯中最正确的选择之一。这里不仅有完善的培训体系，还有很多发展机会。特别是在学校业务平台的工作，让我能够充分发挥自己的才能。",
  },
  {
    id: 3,
    name: "周景田",
    role: "CEO & 董事长",
    rating: 5,
    verified: true,
    comment:
      "嘎嘎嘎嘎嘎嘎,我要玩迷你世界,我要住在我的大城堡里,嘎嘎嘎嘎嘎,你们这群拆家具,太可恶了,我要代表卡卡制裁你们！",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/company-logo.png" alt="Gjcjioop Logo" width={150} height={50} className="h-12 w-auto" />
          <h1 className="text-3xl font-bold text-blue-600">招聘</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="jobs" className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="jobs">职位列表</TabsTrigger>
            <TabsTrigger value="reviews">员工评价</TabsTrigger>
            <TabsTrigger value="stats">入职统计</TabsTrigger>
            <TabsTrigger value="demographics">员工比例</TabsTrigger>
            <TabsTrigger value="about">关于我们</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <JobCard title="软件工程师" salary="15k-30k" description="负责公司核心产品的开发和维护" />
              <JobCard title="产品经理" salary="20k-40k" description="负责产品规划和用户体验优化" />
              <JobCard title="UI设计师" salary="12k-25k" description="负责产品界面设计和视觉体验" />
              <JobCard title="数据分析师" salary="18k-35k" description="负责数据挖掘和业务分析" />
              <JobCard title="市场专员" salary="10k-20k" description="负责产品推广和市场营销" />
              <JobCard title="人力资源专员" salary="8k-15k" description="负责招聘和员工关系管理" />
            </motion.div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-600">员工评价</h2>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="flex text-yellow-400">
                    <FaStarSolid />
                    <FaStarSolid />
                    <FaStarSolid />
                    <FaStarSolid />
                    <FaStarSolid />
                  </div>
                  <span className="text-xl font-bold">5.0</span>
                </div>
              </div>
              {reviews.map((review, index) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>入职率趋势</CardTitle>
                <CardDescription>2022年至今入职人数变化</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hiringData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="employees"
                        stroke="#2563eb"
                        strokeWidth={2}
                        dot={{ fill: "#2563eb" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demographics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>性别比例</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[300px]">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#e11d48"
                        strokeWidth="20"
                        strokeDasharray={`${13 * 2.51} ${100 * 2.51}`}
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#2563eb"
                        strokeWidth="20"
                        strokeDasharray={`${87 * 2.51} ${100 * 2.51}`}
                        strokeDashoffset={`${-13 * 2.51}`}
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span>男性 87%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-rose-600 rounded-full"></div>
                        <span>女性 13%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>国家分布</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { country: "中国", percentage: 92, color: "#2563eb" },
                      { country: "美国", percentage: 3, color: "#16a34a" },
                      { country: "英国", percentage: 3, color: "#dc2626" },
                      { country: "日本", percentage: 1, color: "#9333ea" },
                      { country: "印度", percentage: 1, color: "#ea580c" },
                    ].map((item) => (
                      <div key={item.country}>
                        <div className="flex justify-between mb-1">
                          <span>{item.country}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1 }}
                            className="h-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>关于GjcjioopOrg</CardTitle>
                <CardDescription>创新科技，引领未来</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  GjcjioopOrg成立于2022年，是一家致力于创新和技术发展的领先企业。我们专注于为客户提供最前沿的解决方案，同时为员工创造良好的工作环境和发展机会。
                </p>
                <p className="mb-4">
                  虽然成立时间较短，但GjcjioopOrg已经在人工智能、大数据分析和云计算等领域取得了显著成就。我们的产品和服务已经服务于全球超过100个国家的客户。
                </p>
                <p>在GjcjioopOrg，我们相信：</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>创新是我们的核心驱动力</li>
                  <li>员工是我们最宝贵的资产</li>
                  <li>客户的成功就是我们的成功</li>
                  <li>持续学习和改进是我们的文化</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <Link href="/admin" className="text-blue-500 hover:underline">
            人事管理
          </Link>
          <p className="mt-2 text-gray-600">&copy; 2023 GjcjioopOrg. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function JobCard({ title, salary, description }: { title: string; salary: string; description: string }) {
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

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
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

