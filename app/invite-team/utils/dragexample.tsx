// this is just an example for drag and drop
import { FC, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface DataItem {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

const generateData = (): DataItem[] => {
  // Generate sample data for the table
  return Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    col1: `Row ${index + 1}`,
    col2: `Column 2 Data ${index + 1}`,
    col3: `Column 3 Data ${index + 1}`,
    col4: `Column 4 Data ${index + 1}`,
    col5: `Column 5 Data ${index + 1}`,
  }));
};

interface DraggableRowProps {
  index: number;
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  handleDrag: (startIndex: number, endIndex: number) => void;
}

const DraggableRow: FC<DraggableRowProps> = ({ index, id, col1, col2, col3, col4, col5, handleDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ROW',
    item: { type: 'ROW', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'ROW',
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        handleDrag(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <tr ref={(node) => drag(drop(node))} style={{ opacity }}>
      <td>{col1}</td>
      <td>{col2}</td>
      <td>{col3}</td>
      <td>{col4}</td>
      <td>{col5}</td>
    </tr>
  );
};

const DraggableTablePage: FC = () => {
  const [data, setData] = useState<DataItem[]>(generateData());

  const handleDrag = (startIndex: number, endIndex: number) => {
    const newData = [...data];
    const [draggedItem] = newData.splice(startIndex, 1);
    newData.splice(endIndex, 0, draggedItem);
    setData(newData);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <DraggableRow
              key={item.id}
              index={index}
              id={item.id}
              col1={item.col1}
              col2={item.col2}
              col3={item.col3}
              col4={item.col4}
              col5={item.col5}
              handleDrag={handleDrag}
            />
          ))}
        </tbody>
      </table>
    </DndProvider>
  );
};

export default DraggableTablePage;
