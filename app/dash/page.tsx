"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Download, Trash2 } from "lucide-react"

const employees = [
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
    isProtected: true,
  },
  {
    id: 2,
    name: "翁洋",
    avatar: "/placeholder.svg",
    joinDate: "2022-01-12",
    position: "GjcjioopOrg第三方平台代理CEO&软件工程师",
    department: ["运营部"],
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
    department: ["市场部", "运营部"],
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
    department: ["技术部"],
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
    department: ["财务部"],
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
    department: ["市场部", "测试部"],
    contact: "19832336891",
    email: "871243638@gjcjioop.app",
    salary: "15670",
    warningEmail: true,
  },
]

export default function Dashboard() {
  const [employeeList, setEmployeeList] = useState(employees)
  const [deleteConfirmation, setDeleteConfirmation] = useState("")
  const [employeeToDelete, setEmployeeToDelete] = useState<number | null>(null)
  const [showTips, setShowTips] = useState(true)
  const [showWarning, setShowWarning] = useState(true)
  const searchParams = useSearchParams()

  useEffect(() => {
    const lastShown = localStorage.getItem("lastAlertShown")
    const now = Date.now()
    const fiveMinutes = 5 * 60 * 1000

    if (!lastShown || now - Number.parseInt(lastShown) > fiveMinutes) {
      setShowTips(true)
      setShowWarning(true)
      localStorage.setItem("lastAlertShown", now.toString())

      const timer = setTimeout(() => {
        setShowTips(false)
      }, 10000)

      const warningTimer = setTimeout(() => {
        setShowWarning(false)
      }, 15000)

      return () => {
        clearTimeout(timer)
        clearTimeout(warningTimer)
      }
    } else {
      setShowTips(false)
      setShowWarning(false)
    }
  }, [])

  const handleDelete = (id: number) => {
    if (deleteConfirmation === "删除") {
      setEmployeeList(employeeList.filter((emp) => emp.id !== id))
      setEmployeeToDelete(null)
      setDeleteConfirmation("")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Image src="/company-logo.png" alt="Gjcjioop Logo" width={150} height={60} className="h-16 w-auto" />
            <h1 className="text-2xl font-bold text-blue-600">人事信息管理总览</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              添加
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              载入
            </Button>
            <Button variant="outline">
              <Trash2 className="mr-2 h-4 w-4" />
              回收站
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {showTips && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed top-4 right-4 z-50"
            >
              <Alert className="bg-green-100 border-green-200">
                <AlertDescription>
                  您已经登录: {searchParams.get("cvid")}+{searchParams.get("dfid")}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showWarning && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="fixed top-20 right-4 z-50"
            >
              <Alert className="bg-yellow-100 border-yellow-200">
                <AlertDescription>
                  Gjcjioop友情提示:
                  在您登录那一刻,我们就已经为您生成了唯一的设备签名ID和CVID,如果您在此的修改为GjcjioopOrg造成了损失,我们会全力追究
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>头像</TableHead>
              <TableHead>姓名</TableHead>
              <TableHead>入职时间</TableHead>
              <TableHead>职位</TableHead>
              <TableHead>部门</TableHead>
              <TableHead>联系方式</TableHead>
              <TableHead>组织分配邮箱</TableHead>
              <TableHead>薪资</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeeList.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Image
                    src={employee.avatar || "/placeholder.svg"}
                    alt={employee.name}
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </TableCell>
                <TableCell>
                  {employee.name}
                  {employee.isProtected && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      CEO
                    </span>
                  )}
                </TableCell>
                <TableCell>{employee.joinDate}</TableCell>
                <TableCell>
                  <div className="max-w-[300px] truncate" title={employee.position}>
                    {employee.position}
                  </div>
                </TableCell>
                <TableCell>
                  {employee.department.map((dept, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded px-2 py-1 mr-1">
                      {dept}
                    </span>
                  ))}
                </TableCell>
                <TableCell>{employee.contact}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {employee.email}
                    {employee.warningEmail && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        警告
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={employee.salary === "！！！" ? "text-yellow-500 font-bold" : ""}>
                    {employee.salary}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="space-x-2">
                    {!employee.isProtected ? (
                      <>
                        <Button variant="outline" size="sm">
                          修改
                        </Button>
                        <Button variant="outline" size="sm">
                          邮箱
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="destructive" size="sm">
                              删除
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>确认删除</DialogTitle>
                              <DialogDescription>
                                您确定要删除 {employee.name} 的信息吗？此操作不可逆。
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="delete-confirm" className="text-right">
                                  输入"删除"确认
                                </Label>
                                <Input
                                  id="delete-confirm"
                                  value={deleteConfirmation}
                                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                                  className="col-span-3"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                variant="destructive"
                                onClick={() => handleDelete(employee.id)}
                                disabled={deleteConfirmation !== "删除"}
                              >
                                确认删除
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </>
                    ) : (
                      <span className="text-sm text-gray-500">无法操作</span>
                    )}
                    <Link href={`/employee/${employee.id}`}>
                      <Button variant="outline" size="sm">
                        详情
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

