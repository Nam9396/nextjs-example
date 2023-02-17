import css from "./share-bar.module.css";
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

const Share = ({ postSlug }) => {
    return (
      <div className={css.shareBar}>
        <FacebookShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className={css.button}
            hashtag={'#bibohealth'}
        >
          <FacebookIcon size={30} round className={css.icon}/>
        </FacebookShareButton>

        <FacebookMessengerShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className={css.button}
        >
          <FacebookMessengerIcon size={30} round className={css.icon}/>
        </FacebookMessengerShareButton>

        <TwitterShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className={css.button}
        >
          <TwitterIcon size={30} round className={css.icon} />
        </TwitterShareButton>

        <EmailShareButton
            url={`https://blog.bibohealth.com/posts/${postSlug}`}
            className={css.button}
        >
          <EmailIcon size={30} round className={css.icon} />
        </EmailShareButton>
      </div>
    )
  };
  
  export default Share;