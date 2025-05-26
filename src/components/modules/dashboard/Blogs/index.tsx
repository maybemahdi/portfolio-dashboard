"use client";

import { useState } from "react";
import { Typography, Row, Col, Card, Tag, Space } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { mockBlogs, type Blog } from "@/lib/data";
import Image from "next/image";
import Button from "@/components/ui/core/Button/Button";

const { Title } = Typography;

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>(
    mockBlogs.filter((blog) => !blog.isDeleted)
  );
  const router = useRouter();

  const handleEdit = (blog: Blog) => {
    router.push(`/dashboard/blogs/${blog.id}/edit`);
  };

  const handleDelete = (blog: Blog) => {
    setBlogs(blogs.filter((b) => b.id !== blog.id));
  };

  const handleView = (blog: Blog) => {
    // Handle view logic
    console.log("View blog:", blog.id);
  };

  return (
    <div>
      <div className="page-header flex justify-between items-center">
        <div>
          <Title level={2}>Blog Management</Title>
          <p className="text-gray-600">Manage your blog posts and articles</p>
        </div>
        <Button
          variant="primary"
          size="large"
          onClick={() => router.push("/dashboard/blogs/create")}
        >
          Create Blog
        </Button>
      </div>

      <Row gutter={[16, 16]}>
        {blogs.map((blog) => (
          <Col xs={24} sm={12} lg={8} key={blog.id}>
            <Card
              cover={
                <div className="h-48 relative">
                  {/* <Image
                    src={blog.thumbnail || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  /> */}
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="w-20 h-20 bg-gray-300 rounded-full animate-pulse mb-3" />
                    <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              }
              actions={[
                <EyeOutlined key="view" onClick={() => handleView(blog)} />,
                <EditOutlined key="edit" onClick={() => handleEdit(blog)} />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDelete(blog)}
                />,
              ]}
            >
              <Card.Meta
                title={blog.title}
                description={
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {blog.content.substring(0, 100)}...
                    </p>
                    <Space>
                      <Tag color={blog.isPublished ? "green" : "orange"}>
                        {blog.isPublished ? "Published" : "Draft"}
                      </Tag>
                      <span className="text-xs text-gray-400">
                        {blog.createdAt.toLocaleDateString()}
                      </span>
                    </Space>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {blogs.length === 0 && (
        <div className="text-center py-12">
          <Title level={4} className="text-gray-400">
            No blogs found
          </Title>
          <p className="text-gray-500">
            Create your first blog post to get started
          </p>
          <Button
            variant="primary"
            onClick={() => router.push("/dashboard/blogs/create")}
          >
            Create Blog
          </Button>
        </div>
      )}
    </div>
  );
}
