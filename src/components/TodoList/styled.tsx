import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

interface ITodoListProps {
  tasks: {
    id: number;
    title: string;
    desc: string;
    priority?: string;
  }[];
}

export const TodoList = ({ tasks }: ITodoListProps) => {
  return (
    <List>
      {tasks.map((task) => (
        <div>{task.title}</div>
      ))}
    </List>
  );
};
