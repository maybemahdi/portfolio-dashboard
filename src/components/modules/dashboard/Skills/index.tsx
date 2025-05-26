"use client"

import { useState } from "react"
import { Typography, Avatar } from "antd"
import { useRouter } from "next/navigation"
import { mockSkills, type Skill } from "@/lib/data"
import DataTable from "@/components/ui/core/DataTable/DataTable";
import Button from "@/components/ui/core/Button/Button";

const { Title } = Typography

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>(mockSkills.filter((s) => !s.isDeleted))
  const router = useRouter()

  const handleEdit = (skill: Skill) => {
    router.push(`/dashboard/skills/${skill.id}/edit`)
  }

  const handleDelete = (skill: Skill) => {
    setSkills(skills.filter((s) => s.id !== skill.id))
  }

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      width: 80,
      render: (logo: string, record: Skill) => <Avatar src={logo} alt={record.name} size={40} />,
    },
    {
      title: "Skill Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: Skill, b: Skill) => a.name.localeCompare(b.name),
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: Date) => date.toLocaleDateString(),
      sorter: (a: Skill, b: Skill) => a.createdAt.getTime() - b.createdAt.getTime(),
    },
  ]

  return (
    <div>
      <div className="page-header flex justify-between items-center">
        <div>
          <Title level={2}>Skill Management</Title>
          <p className="text-gray-600">Manage your technical skills and expertise</p>
        </div>
        <Button variant="primary" size="large" onClick={() => router.push("/dashboard/skills/create")}>
          Add Skill
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <DataTable columns={columns} data={skills} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}
