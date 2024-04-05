interface CustomButtonProps {
  type: 'primary' | 'secondary'; // Tipo enum para 'type'
  children: React.ReactNode; // Tipo para 'children'
}
const CustomButton = ({ type, children }: CustomButtonProps) => {
  let buttonClasses = 'py-2 px-4 rounded ';

  if (type === 'primary') {
    buttonClasses +=
      'bg-[#3829e0] font-bold hover:bg-[#584dd7] text-white text-base py-4 m-3.5  w-full';
  } else if (type === 'secondary') {
    buttonClasses += 'font-bold py-4 text-base text-[#7280a7] hover:text-black';
  }

  return <button className={buttonClasses}>{children}</button>;
};

export default CustomButton;
