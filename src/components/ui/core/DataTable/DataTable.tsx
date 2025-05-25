"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import { PlusIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";

export type Column<T> = {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
};

type DataTableProps<T> = {
  title?: string;
  navigateInfo?: {
    btnLabel: string;
    onClick: () => void;
  };
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  onRowClick?: (item: T) => void;
  renderActions?: (item: T, closeMenu: () => void) => React.ReactNode;
};

export function DataTable<T>({
  title,
  navigateInfo,
  data,
  columns,
  keyField,
  onRowClick,
  renderActions,
}: DataTableProps<T>) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleActionClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === id ? null : id);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between gap-5 items-center mb-4">
        {title && (
          <h2 className="text-2xl md:text-[32px] font-semibold text-text-primary">
            {title}
          </h2>
        )}
        {navigateInfo && (
          <MyButton
            onClick={navigateInfo.onClick}
            label={navigateInfo?.btnLabel}
            customIcon={<PlusIcon className="w-5 h-5 text-white" />}
            iconPosition="left"
          />
        )}
      </div>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary border-b border-gray-200">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`px-6 py-4 text-left text-sm md:text-[20px] font-medium md:font-semibold text-white ${
                      column.className || ""
                    }`}
                  >
                    {column.header}
                  </th>
                ))}
                {renderActions && (
                  <th className="px-6 py-4 text-right text-sm md:text-[20px] font-medium md:font-semibold text-white w-20">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => {
                const id = String(item[keyField]);
                return (
                  <tr
                    key={id}
                    className={`hover:bg-gray-50 ${
                      onRowClick ? "cursor-pointer" : ""
                    }`}
                    onClick={() => onRowClick && onRowClick(item)}
                  >
                    {columns.map((column, index) => {
                      const value =
                        typeof column.accessor === "function"
                          ? column.accessor(item)
                          : item[column.accessor];
                      return (
                        <td
                          key={index}
                          className={`px-6 py-4 text-sm ${
                            column.className || ""
                          }`}
                        >
                          {value as any}
                        </td>
                      );
                    })}
                    {renderActions && (
                      <td
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-4 text-sm"
                      >
                        {/* <button
                          onClick={(e) => handleActionClick(e, id)}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          <EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer" />
                        </button>
                        {activeMenu === id && (
                          <div className="absolute right-6 mt-2 z-10 bg-white rounded-md shadow-lg border border-gray-200">
                            <div className="py-1">
                              {renderActions(item, closeMenu)}
                            </div>
                          </div>
                        )} */}
                        {renderActions(item, closeMenu)}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
