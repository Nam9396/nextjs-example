import clsx from "clsx";

const Main = ({ children }) => {
  return (
    <main className={clsx(
      'w-full h-fit mb-[40px] box-col items-center',
      'lg:mt-[150px]'
    )}>
      {children}
    </main>
  )
};

export default Main;