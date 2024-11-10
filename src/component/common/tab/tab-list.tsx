import TabItem from './tab-item';

interface TabsProps {
  list: { id: string; value: string }[];
  value: string;
  setValue: (value: string) => void;
}

const Tabs = ({ list, value, setValue }: TabsProps) => {
  return (
    <ul className='flex'>
      {list.map((v) => (
        <li key={v.id} className='w-full'>
          <TabItem
            text={v.value}
            handleClick={() => setValue(v.id)}
            active={v.id === value}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
