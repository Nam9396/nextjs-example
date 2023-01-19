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

const Share = () => {
    return (
      <div className={css.shareBar}>
        <FacebookShareButton
            url={'https://github.com/next-share'}
            className={css.button}
            hashtag={'#bibohealth'}
        >
          <FacebookIcon size={30} round className={css.icon}/>
        </FacebookShareButton>

        <FacebookMessengerShareButton
            url={'https://github.com/next-share'}
            className={css.button}
        >
          <FacebookMessengerIcon size={30} round className={css.icon}/>
        </FacebookMessengerShareButton>

        <TwitterShareButton
            url={'https://github.com/next-share'}
            className={css.button}
        >
          <TwitterIcon size={30} round className={css.icon} />
        </TwitterShareButton>

        <EmailShareButton
            url={'https://github.com/next-share'}
            className={css.button}
        >
          <EmailIcon size={30} round className={css.icon} />
        </EmailShareButton>
      </div>
    )
  };
  
  export default Share;