import clsx from "clsx";


const Label = ({ content }) => {
  return (
    <div className={clsx(
      'text-xs text-bold_purple font-bold',
      'bg-light_purple px-4 py-2 rounded-full',
      'mb-4'
    )}>
      {content}
    </div>
  )
};

export default Label;