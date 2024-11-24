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
            active={v.id === value}
            handleClick={() => setValue(v.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
