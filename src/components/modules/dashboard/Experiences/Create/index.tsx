"use client";

import { useState } from "react";
import { Form, Input, DatePicker, Switch, Typography, message } from "antd";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/core/Button/Button";

const { Title } = Typography;
const { TextArea } = Input;

export default function CreateExperiencePage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isCurrent, setIsCurrent] = useState(false);

  const handleSubmit = (values: any) => {
    console.log("Creating experience:", values);
    message.success("Experience added successfully!");
    router.push("/dashboard/experiences");
  };

  const handleCurrentChange = (checked: boolean) => {
    setIsCurrent(checked);
    if (checked) {
      form.setFieldValue("endDate", null);
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="page-header">
        <Title level={2}>Add New Experience</Title>
        <p className="text-gray-600">
          Add your work experience to your portfolio
        </p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-sm"
        initialValues={{
          isCurrent: false,
        }}
      >
        <Form.Item
          name="companyName"
          label="Company Name"
          rules={[{ required: true, message: "Please enter company name" }]}
        >
          <Input placeholder="Enter company name" size="large" />
        </Form.Item>

        <Form.Item
          name="position"
          label="Position/Role"
          rules={[{ required: true, message: "Please enter your position" }]}
        >
          <Input placeholder="e.g., Senior Frontend Developer" size="large" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: "Please select start date" }]}
          >
            <DatePicker
              placeholder="Select start date"
              size="large"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            name="endDate"
            label="End Date"
            rules={[
              {
                required: !isCurrent,
                message: "Please select end date or mark as current",
              },
            ]}
          >
            <DatePicker
              placeholder="Select end date"
              size="large"
              className="w-full"
              disabled={isCurrent}
            />
          </Form.Item>
        </div>

        <Form.Item name="isCurrent" valuePropName="checked">
          <Switch
            checkedChildren="Current Position"
            unCheckedChildren="Past Position"
            onChange={handleCurrentChange}
          />
        </Form.Item>

        <Form.Item name="description" label="Job Description">
          <TextArea
            rows={6}
            placeholder="Describe your responsibilities and achievements..."
          />
        </Form.Item>

        <Form.Item className="mb-0">
          <div className="flex gap-3">
            <Button variant="primary" htmlType="submit" size="large">
              Add Experience
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
