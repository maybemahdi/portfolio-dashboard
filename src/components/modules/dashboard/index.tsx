"use client";

import { Card, Row, Col, Statistic, Typography } from "antd";
import {
  FileTextOutlined,
  ProjectOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import {
  mockBlogs,
  mockProjects,
  mockSkills,
  mockExperiences,
} from "@/lib/data";
import { Briefcase } from "lucide-react";

const { Title } = Typography;

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Blogs",
      value: mockBlogs.filter((blog) => !blog.isDeleted).length,
      icon: <FileTextOutlined style={{ color: "#3b82f6" }} />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Projects",
      value: mockProjects.filter((project) => !project.isDeleted).length,
      icon: <ProjectOutlined style={{ color: "#10b981" }} />,
      bgColor: "bg-green-50",
    },
    {
      title: "Total Skills",
      value: mockSkills.filter((skill) => !skill.isDeleted).length,
      icon: <ToolOutlined style={{ color: "#8b5cf6" }} />,
      bgColor: "bg-purple-50",
    },
    {
      title: "Total Experiences",
      value: mockExperiences.filter((exp) => !exp.isDeleted).length,
      icon: <Briefcase style={{ color: "#f59e0b" }} />,
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div>
      <div className="page-header">
        <Title level={2}>Dashboard Overview</Title>
        <p className="text-gray-600">
          Welcome to your portfolio management dashboard
        </p>
      </div>

      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card className={`${stat.bgColor} border-0`}>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.icon}
                valueStyle={{ fontSize: "24px", fontWeight: "bold" }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} lg={12}>
          <Card title="Recent Blogs" className="h-full">
            <div className="space-y-3">
              {mockBlogs.slice(0, 3).map((blog) => (
                <div
                  key={blog.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded"
                >
                  <div>
                    <p className="font-medium m-0">{blog.title}</p>
                    <p className="text-sm text-gray-500 m-0">
                      {blog.isPublished ? "Published" : "Draft"}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {blog.createdAt.toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Recent Projects" className="h-full">
            <div className="space-y-3">
              {mockProjects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded"
                >
                  <div>
                    <p className="font-medium m-0">{project.title}</p>
                    <p className="text-sm text-gray-500 m-0">
                      {project.technologies.slice(0, 2).join(", ")}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {project.createdAt.toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
