"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Home } from "lucide-react"

const employeesData = [
  {
    id: 1,
    name: "周景田",
    avatar: "/placeholder.svg",
    joinDate: "2022-01-01",
    position: "GjcjioopOrg董事长&CEO首席执行官总裁",
    department: ["研发部", "软件部"],
    contact: "13283338796",
    email: "jingtian@gjcjioop.com",
    salary: "！！！",
  },
  {
    id: 2,
    name: "翁洋",
    avatar: "/placeholder.svg",
    joinDate: "2022-01-12",
    position: "GjcjioopOrg第三方平台代理CEO&软件工程师",
    department: ["研发部"],
    contact: "13643331553",
    email: "wengyang@gjcjioop.com",
    salary: "！！！",
  },
  {
    id: 3,
    name: "张晨曦",
    avatar: "/placeholder.svg",
    joinDate: "2024-02-24",
    position: "GjcjioopOrg总经理&宣传部主管&港澳台服务平台Ouc代理",
    department: ["人事部"],
    contact: "18603131589",
    email: "zhangchengxi@gjcjioop.com",
    salary: "！！！",
  },
  {
    id: 4,
    name: "徐嘉硕",
    avatar: "/placeholder.svg",
    joinDate: "2023-06-28",
    position: "GjcjioopOrg开展在学校业务平台管理人员&实体交易监管",
    department: ["交易服务部"],
    contact: "15028414418",
    email: "xu0em2-gjcjioop@gjcjioop.icu",
    salary: "25000",
  },
  {
    id: 5,
    name: "徐文涛",
    avatar: "/placeholder.svg",
    joinDate: "2023-12-24",
    position: "???",
    department: [],
    contact: "13331327751",
    email: "Xbu0mertFc-gjcjioop@gjcjioop.icu",
    salary: "24500(包含绩效)",
  },
  {
    id: 6,
    name: "黄涛",
    avatar: "/placeholder.svg",
    joinDate: "2023-07-08",
    position: "GjcjioopOrg 线上服务人员",
    department: ["客服部"],
    contact: "18730382011",
    email: "Er412uq354ht-Enc@gjcjioop.icu",
    salary: "20330(含绩效五保)",
  },
  {
    id: 7,
    name: "班浩哲",
    avatar: "/placeholder.svg",
    joinDate: "2023-12-31",
    position: "宣传部人员&软件测试评分员",
    department: ["宣传部"],
    contact: "19832336891",
    email: "871243638@gjcjioop.app",
    salary: "15670",
  },
]

export default function EmployeeDetail({ params }: { params: { id: string } }) {
  const [employee, setEmployee] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedEmployee, setEditedEmployee] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const emp = employeesData.find((e) => e.id === Number.parseInt(params.id))
    setEmployee(emp || null)
    setEditedEmployee(emp || null)
  }, [params.id])

  if (!employee) {
    return <div>员工不存在</div>
  }

  const handleSave = () => {
    setEmployee(editedEmployee)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={() => router.push("/dash")} className="gap-2">
            <Home className="w-4 h-4" />
            返回主页
          </Button>
          <Button variant="outline" onClick={() => router.push("/")} className="gap-2">
            返回首页
          </Button>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">员工详情</CardTitle>
              <CardDescription>ID: {employee.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Image
                    src={employee.avatar || "/placeholder.svg"}
                    alt={employee.name}
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                  {isEditing && (
                    <Button variant="outline" size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                      +
                    </Button>
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <h2 className="text-2xl font-bold">{employee.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {employee.department.map((dept: string) => (
                      <span key={dept} className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "取消" : "编辑"}
                </Button>
              </div>

              <div className="grid gap-6">
                {isEditing ? (
                  <>
                    <div className="grid gap-2">
                      <Label>职位</Label>
                      <Input
                        value={editedEmployee.position}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, position: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>入职时间</Label>
                      <Input
                        value={editedEmployee.joinDate}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, joinDate: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>联系方式</Label>
                      <Input
                        value={editedEmployee.contact}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, contact: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>邮箱</Label>
                      <Input
                        value={editedEmployee.email}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, email: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>薪资</Label>
                      <Input
                        value={editedEmployee.salary}
                        onChange={(e) => setEditedEmployee({ ...editedEmployee, salary: e.target.value })}
                      />
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-gray-500">职位</p>
                      <p className="mt-1">{employee.position}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-500">入职时间</p>
                      <p className="mt-1">{employee.joinDate}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-500">联系方式</p>
                      <p className="mt-1">{employee.contact}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-500">邮箱</p>
                      <p className="mt-1">{employee.email}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-500">薪资</p>
                      <p className="mt-1">{employee.salary}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            {isEditing && (
              <CardFooter>
                <Button onClick={handleSave} className="ml-auto">
                  保存更改
                </Button>
              </CardFooter>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

