"use client"

import { useState } from "react"
import { Typography, Tag } from "antd"
import { useRouter } from "next/navigation"
import DataTable from "@/components/ui/core/DataTable/DataTable";
import Button from "@/components/ui/core/Button/Button";
import { mockExperiences, type Experience } from "@/lib/data"

const { Title } = Typography

export default function ExperiencesPage() {
  const [experiences, setExperiences] = useState<Experience[]>(mockExperiences.filter((e) => !e.isDeleted))
  const router = useRouter()

  const handleEdit = (experience: Experience) => {
    router.push(`/dashboard/experiences/${experience.id}/edit`)
  }

  const handleDelete = (experience: Experience) => {
    setExperiences(experiences.filter((e) => e.id !== experience.id))
  }

  const columns = [
    {
      title: "Company",
      dataIndex: "companyName",
      key: "companyName",
      sorter: (a: Experience, b: Experience) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Duration",
      key: "duration",
      render: (record: Experience) => {
        const startDate = record.startDate.toLocaleDateString()
        const endDate = record.endDate ? record.endDate.toLocaleDateString() : "Present"
        return `${startDate} - ${endDate}`
      },
    },
    {
      title: "Status",
      key: "status",
      render: (record: Experience) => (
        <Tag color={record.endDate ? "default" : "green"}>{record.endDate ? "Past" : "Current"}</Tag>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
  ]

  return (
    <div>
      <div className="page-header flex justify-between items-center">
        <div>
          <Title level={2}>Experience Management</Title>
          <p className="text-gray-600">Manage your work experience and career history</p>
        </div>
        <Button variant="primary" size="large" onClick={() => router.push("/dashboard/experiences/create")}>
          Add Experience
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <DataTable columns={columns} data={experiences} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}
