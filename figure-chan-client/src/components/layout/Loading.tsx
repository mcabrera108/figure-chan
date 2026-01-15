import style from "../../styles/layout.module.scss";

export default function Loading() {
  return (
    <div className={style.loadingScreen}>
      <div className={style.loaderContainer}>
        <div className={style.loader}></div>
        <div>Loading...</div>
      </div>
    </div>
  );
}
