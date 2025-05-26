"use client";

import { Form, Input, Upload, Typography, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/core/Button/Button";

const { Title } = Typography;

export default function CreateSkillPage() {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = (values: any) => {
    console.log("Creating skill:", values);
    message.success("Skill added successfully!");
    router.push("/dashboard/skills");
  };

  return (
    <div className="max-w-2xl">
      <div className="page-header">
        <Title level={2}>Add New Skill</Title>
        <p className="text-gray-600">Add a new skill to your portfolio</p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <Form.Item
          name="name"
          label="Skill Name"
          rules={[{ required: true, message: "Please enter skill name" }]}
        >
          <Input placeholder="e.g., React, TypeScript, Python" size="large" />
        </Form.Item>

        <Form.Item
          name="logo"
          label="Skill Logo"
          rules={[{ required: true, message: "Please upload skill logo" }]}
        >
          <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
            <Button variant="outline" icon={<UploadOutlined />}>
              Upload Logo
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item className="mb-0">
          <div className="flex gap-3">
            <Button variant="primary" htmlType="submit" size="large">
              Add Skill
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
