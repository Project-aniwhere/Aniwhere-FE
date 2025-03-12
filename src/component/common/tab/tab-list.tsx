import TabItem from './tab-item';

interface TabsProps {
  list: { id: string; value: string }[];
  value: string;
  setValue: (value: string) => void;
}

const Tabs = ({ list, value, setValue }: TabsProps) => {
  return (
    <ul className='flex'>
      {list.map((tab) => (
        <li key={tab.id} className='w-full'>
          <TabItem
            text={tab.value}
            active={tab.id === value}
            handleClick={() => setValue(tab.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
