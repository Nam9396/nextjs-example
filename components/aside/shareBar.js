import clsx from "clsx";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';

const ShareBar = ({ post }) => {
  return (
    <div className={clsx(
      'w-[70%] h-fit pt-1 px-4 rounded-full box-row justify-between items-center my-4 bg-light_purple ',
      'lg:box-col lg:justify-between lg:items-center lg:w-fit lg:h-fit lg:p-1 lg:fixed lg:left-0 lg:top-[200px] lg:ml-2'
    )}>
      <FacebookShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className=""
            hashtag={'#bibohealth'}
        >
          <FacebookIcon size={20} round className="" />
        </FacebookShareButton>

        <FacebookMessengerShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className=""
        >
          <FacebookMessengerIcon size={20} round className="" />
        </FacebookMessengerShareButton>

        <TwitterShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className=""
        >
          <TwitterIcon size={20} round className="" />
        </TwitterShareButton>

        <EmailShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className=""
        >
          <EmailIcon size={20} round className="" />
        </EmailShareButton>
    </div>
  )
};

export default ShareBar;