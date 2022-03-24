const Button = ({ name, isChecked }) => {
  return (
    <>
      <input
        type='radio'
        name='category'
        id={name}
        value={name}
        defaultChecked={isChecked}
      />
      <label className={`btn text-blue body-3`} htmlFor={name}>
        {name}
      </label>
    </>
  );
};

const CategoryBoxComponent = () => {
  return (
    <div className='CategoryBox'>
      <div className='container'>
        <Button name={'All'} isChecked={true} />
        <Button name={'UI'} />
        <Button name={'UX'} />
        <Button name={'Enhancement'} />
        <Button name={'Bug'} />
        <Button name={'Feature'} />
      </div>
    </div>
  );
};
export default CategoryBoxComponent;
