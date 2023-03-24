import css from "./loading.module.css";

const Loading = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.text}>Loading...</div>
      <div className={css.loader}></div>
    </div>
  )
};

export default Loading;