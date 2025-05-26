"use client";

import { useState } from "react";
import { Typography, Tag, Space } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { mockProjects, type Project } from "@/lib/data";
import DataTable from "@/components/ui/core/DataTable/DataTable";
import Button from "@/components/ui/core/Button/Button";

const { Title } = Typography;

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(
    mockProjects.filter((p) => !p.isDeleted)
  );
  const router = useRouter();

  const handleEdit = (project: Project) => {
    router.push(`/dashboard/projects/${project.id}/edit`);
  };

  const handleDelete = (project: Project) => {
    setProjects(projects.filter((p) => p.id !== project.id));
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: Project, b: Project) => a.title.localeCompare(b.title),
    },
    {
      title: "Description",
      dataIndex: "shortDescription",
      key: "shortDescription",
      ellipsis: true,
    },
    {
      title: "Technologies",
      dataIndex: "technologies",
      key: "technologies",
      render: (technologies: string[]) => (
        <Space wrap>
          {technologies.slice(0, 3).map((tech) => (
            <Tag key={tech} color="blue">
              {tech}
            </Tag>
          ))}
          {technologies.length > 3 && (
            <Tag>+{technologies.length - 3} more</Tag>
          )}
        </Space>
      ),
    },
    {
      title: "Live Link",
      dataIndex: "liveLink",
      key: "liveLink",
      render: (link: string) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          <LinkOutlined /> View Live
        </a>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: Date) => date.toLocaleDateString(),
      sorter: (a: Project, b: Project) =>
        a.createdAt.getTime() - b.createdAt.getTime(),
    },
  ];

  return (
    <div>
      <div className="page-header flex justify-between items-center">
        <div>
          <Title level={2}>Project Management</Title>
          <p className="text-gray-600">Manage your portfolio projects</p>
        </div>
        <Button
          variant="primary"
          size="large"
          onClick={() => router.push("/dashboard/projects/create")}
        >
          Create Project
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={projects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
