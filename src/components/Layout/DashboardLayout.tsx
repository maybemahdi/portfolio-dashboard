"use client";

import type React from "react";

import { useState } from "react";
import { Layout, Menu, Avatar, Dropdown, Typography } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  ProjectOutlined,
  ToolOutlined,
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";
import Button from "../ui/core/Button/Button";
import { Briefcase } from "lucide-react";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "/dashboard/blogs",
    icon: <FileTextOutlined />,
    label: "Blogs",
  },
  {
    key: "/dashboard/projects",
    icon: <ProjectOutlined />,
    label: "Projects",
  },
  {
    key: "/dashboard/skills",
    icon: <ToolOutlined />,
    label: "Skills",
  },
  {
    key: "/dashboard/experiences",
    icon: <Briefcase size={16} />,
    label: "Experiences",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getBasePath = (path: string) => {
    const parts = path.split("/").filter(Boolean);
    if (parts.length > 2) {
      return `/${parts.slice(0, 2).join("/")}`;
    }
    return path;
  };

  const activeKey = getBasePath(pathname);

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
  };

  const userMenuItems = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-slate-800 fixed h-full overflow-auto"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div className="p-4">
          <Title level={4} className="!text-white m-0 text-center">
            {collapsed ? "PD" : "Dashboard"}
          </Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[activeKey]}
          items={menuItems}
          onClick={handleMenuClick}
          className="bg-slate-800"
        />
      </Sider>
      <Layout
        className="ml-[200px] transition-all duration-200"
        style={{
          marginLeft: collapsed ? 80 : 200,
          minHeight: "100vh",
        }}
      >
        <Header
          className="flex justify-between items-center bg-slate-800 p-6 sticky top-0 z-10"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Button
            variant="primary"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div className="flex items-center gap-4">
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Avatar
                size="large"
                icon={<UserOutlined />}
                className="cursor-pointer"
              />
            </Dropdown>
          </div>
        </Header>
        <Content
          className="p-6 bg-gray-100 overflow-auto"
          style={{
            height: "calc(100vh - 64px)", // Subtract header height
            overflowY: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
