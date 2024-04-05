import CustomButton from './Button';
import Price from './Price';

interface Props {
  h2: string;
  p: string;
}

function Conteiner(props: Props) {
  return (
    <div className=" p-8 flex flex-col justify-center items-center">
      <h2 className="py-3.5 text-3xl font-bold text-[#1f2f56]">{props.h2}</h2>
      <p className="py-3.5 text-lg text-center text-[#7280a7]">{props.p}</p>
      <Price title="" price={59.99} text="Change" />
      <CustomButton type="primary">Proceed to payment</CustomButton>
      <CustomButton type="secondary">Cancel order</CustomButton>
    </div>
  );
}
export default Conteiner;
