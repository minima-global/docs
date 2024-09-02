import React from 'react';


interface ObjectType {
  description?: React.ReactNode;
  type: string;
  typeDescription?: string;
  typeDescriptionLink?: string;
  default?: string;
}

interface TypeTableProps {
  type: Record<string, ObjectType>;
}



const CommandTable: React.FC<TypeTableProps> = ({ type }) => {
  return (
    <div className="not-prose ">
      <table className="my-4 w-full text-left text-sm text-fd-muted-foreground">
        <thead className="border-b">
          <tr>
            <th className="p-2 font-medium first:pl-0 last:pr-0 w-[10%]">Parameters</th>
            <th className="p-2 font-medium first:pl-0 last:pr-0 w-[40%]">Description</th>
          
          </tr>
        </thead>
        <tbody className="border-collapse divide-y divide-fd-border">
          {Object.entries(type).map(([key, value]) => (
            <tr key={key}>
              <td className="p-2 first:pl-0 last:pr-0 ">
                <div className="flex flex-col w-full">
                  <div className="inline-flex flex-row items-center gap-1">
                    <code className="rounded-md p-1 bg-fd-primary/10 text-fd-primary">{key}</code>
                  </div>
                 
                </div>
              </td>
              <td className="p-2 first:pl-0 last:pr-0 flex w-full ">
                <div className="inline-flex flex-row items-center gap-1 w-full  ">
                  <code className="rounded-md bg-fd-secondary p-1 text-fd-secondary-foreground w-full text-xs">{value.description}</code>
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommandTable;
