"use client";

import { Form, Input, Upload, Select, Typography, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/core/Button/Button";

const { Title } = Typography;
const { TextArea } = Input;

const techOptions = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "Vue.js",
  "Angular",
  "Tailwind CSS",
  "Bootstrap",
  "Material-UI",
  "Ant Design",
];

export default function CreateProjectPage() {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = (values: any) => {
    console.log("Creating project:", values);
    message.success("Project created successfully!");
    router.push("/dashboard/projects");
  };

  return (
    <div className="max-w-4xl">
      <div className="page-header">
        <Title level={2}>Create New Project</Title>
        <p className="text-gray-600">Add a new project to your portfolio</p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <Form.Item
          name="title"
          label="Project Title"
          rules={[{ required: true, message: "Please enter project title" }]}
        >
          <Input placeholder="Enter project title" size="large" />
        </Form.Item>

        <Form.Item
          name="shortDescription"
          label="Short Description"
          rules={[
            { required: true, message: "Please enter short description" },
          ]}
        >
          <Input placeholder="Brief description of the project" size="large" />
        </Form.Item>

        <Form.Item
          name="longDescription"
          label="Detailed Description"
          rules={[
            { required: true, message: "Please enter detailed description" },
          ]}
        >
          <TextArea
            rows={6}
            placeholder="Detailed description of the project..."
          />
        </Form.Item>

        <Form.Item
          name="liveLink"
          label="Live Link"
          rules={[
            { required: true, message: "Please enter live link" },
            { type: "url", message: "Please enter a valid URL" },
          ]}
        >
          <Input placeholder="https://example.com" size="large" />
        </Form.Item>

        <Form.Item
          name="technologies"
          label="Technologies Used"
          rules={[{ required: true, message: "Please select technologies" }]}
        >
          <Select
            mode="multiple"
            placeholder="Select technologies"
            options={techOptions.map((tech) => ({ label: tech, value: tech }))}
            size="large"
          />
        </Form.Item>

        <Form.Item name="thumbnail" label="Project Thumbnail">
          <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
            <Button variant="outline" icon={<UploadOutlined />}>
              Upload Thumbnail
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item className="mb-0">
          <div className="flex gap-3">
            <Button variant="primary" htmlType="submit" size="large">
              Create Project
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
