"use client";

import { Table, type TableProps, Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Button from "../Button/Button";

interface DataTableProps<T> extends Omit<TableProps<T>, "columns"> {
  columns: any[];
  data: T[];
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => void;
  showActions?: boolean;
}

export default function DataTable<T extends { id: string }>({
  columns,
  data,
  onEdit,
  onDelete,
  showActions = true,
  ...props
}: DataTableProps<T>) {
  const actionColumn = {
    title: "Actions",
    key: "actions",
    width: 120,
    render: (_: any, record: T) => (
      <Space size="small">
        {onEdit && (
          <Button
            variant="outline"
            size="small"
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
          />
        )}
        {onDelete && (
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => onDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button variant="danger" size="small" icon={<DeleteOutlined />} />
          </Popconfirm>
        )}
      </Space>
    ),
  };

  const finalColumns = showActions ? [...columns, actionColumn] : columns;

  return (
    <Table
      columns={finalColumns}
      dataSource={data}
      rowKey="id"
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
      }}
      {...props}
    />
  );
}
