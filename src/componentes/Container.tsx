import CustomButton from './Button';
import Price from './Price';

interface Props {
  title: string;
  subTitle: string;
}

function Container(props: Props) {
  return (
    <div className=" p-8 flex flex-col justify-center items-center">
      <h2 className="my-3.5 text-3xl font-bold text-dark-blue">{props.title}</h2>
      <p className="my-3.5 text-lg text-center text-desaturated-blue">{props.subTitle}</p>
      <Price title="Annual plan" price={59.99} text="Change" />
      <CustomButton type="primary">Proceed to payment</CustomButton>
      <CustomButton type="secondary">Cancel order</CustomButton>
    </div>
  );
}
export default Container;
