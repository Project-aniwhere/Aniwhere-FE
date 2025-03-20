interface ProductionItemProps {
  name: string;
  description: string;
}

const ProductionItem = ({ name, description }: ProductionItemProps) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='flex flex-col gap-1'>
        <p className='text-sm md:text-base font-medium'>{name || '-'}</p>
        <span className='text-xs md:text-sm text-gray-400'>{description}</span>
      </div>
    </div>
  );
};

export default ProductionItem;
