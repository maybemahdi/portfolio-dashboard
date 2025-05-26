"use client";

import { Form, Input, Switch, Upload, Typography, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/core/Button/Button";

const { Title } = Typography;
const { TextArea } = Input;

export default function CreateBlogPage() {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = (values: any) => {
    console.log("Creating blog:", values);
    message.success("Blog created successfully!");
    router.push("/dashboard/blogs");
  };

  return (
    <div className="max-w-4xl">
      <div className="page-header">
        <Title level={2}>Create New Blog</Title>
        <p className="text-gray-600">Write and publish your blog post</p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <Form.Item
          name="title"
          label="Blog Title"
          rules={[{ required: true, message: "Please enter blog title" }]}
        >
          <Input placeholder="Enter blog title" size="large" />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: "Please enter blog content" }]}
        >
          <TextArea rows={10} placeholder="Write your blog content here..." />
        </Form.Item>

        <Form.Item name="thumbnail" label="Thumbnail Image">
          <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
            <Button variant="outline" icon={<UploadOutlined />}>
              Upload Thumbnail
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="isPublished"
          label="Publish Status"
          valuePropName="checked"
        >
          <Switch
            checkedChildren="Published"
            unCheckedChildren="Draft"
            defaultChecked
          />
        </Form.Item>

        <Form.Item className="mb-0">
          <div className="flex gap-3">
            <Button variant="primary" htmlType="submit" size="large">
              Create Blog
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
