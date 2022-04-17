import styles from "./Google.module.css";

function App() {
  const icon_image_top = [
    "https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png",
    "https://kr.seaicons.com/wp-content/uploads/2015/10/Google-Chrome-icon.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/269px-Google_Drive_icon_%282020%29.svg.png",
    "https://cdn-icons-png.flaticon.com/512/2702/2702604.png",
    "https://kr.seaicons.com/wp-content/uploads/2015/10/YouTube-icon.png",
  ];
  const icon_image_bottom = [
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png",
  ];
  return (
    <>
      <div className={styles.navi}>
        <div className={styles.navi_icon}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt="navi_icon"
          />
        </div>
        <div className={styles.navi_icon}>
          <img
            src="https://img.icons8.com/material-two-tone/384/circled-menu.png"
            alt="navi_icon"
          />
        </div>
        <svg className={styles.navi_icon}>
          <circle cx="25px" cy="25px" r="20px" fill="green" />
          <text fill="white" x="8" y="30">
            hello
          </text>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt="search"
          />
        </div>
        <div className={styles.input}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/71/71403.png"
            alt="search_icon"
          />
          <input placeholder="검색어를 입력하세요" />
        </div>
        <div className={styles.icons}>
          {icon_image_top.map((a) => {
            return (
              <a
                className={styles.icon_block}
                href="https://www.naver.com/"
                target="_blank"
              >
                <img src={a} alt="icon" />
              </a>
            );
          })}
        </div>
        <div className={styles.icons}>
          {icon_image_bottom.map((b) => {
            return (
              <a
                className={styles.icon_block}
                href="https://www.naver.com/"
                target="_blank"
              >
                <img src={b} alt="icon" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
