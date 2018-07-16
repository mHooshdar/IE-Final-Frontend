import global from '../../static/global';

class Progress extends React.Component{
  /* props: at bottom
  */
  constructor (props) {
    super(props);
    this.state={
      step2: false,
      step3: false
    }
  }

  render () {
    return (
      <div className="progressBar">
        <style jsx>{`
        .progressBar{
          margin-bottom: 50px;
        }
        .imgProgress{
          fill: ${global.progressFill} !important;
        }
        .lineProgress{
          border-top: 1px solid ${global.progressFill} !important;
        }
        .borderProgress{
          border: 1px solid ${global.progressFill} !important;
          border-top: 0 !important;
        }
        .textProgress{
          color: ${global.progressFill} !important;
        }
        .line1{
          display: inline-block;
          width: calc(5 * (100% - 210px) /14);
          height: 51px;
        }
        .img1{
          width: 40px;
          position: relative;
          top: 45px;
          right: 20px;
        }
        .text1{
          text-align: center;
          font-size: 10px;
        }
        .line2{
          border-top: 1px solid ${global.gray};
          display: inline-block;
          width: calc(2 * (100% - 210px) /14);
          height: 51px;
        }
        .img2{
          fill: ${global.gray};
          width: 40px;
          position: relative;
          top: 42px;
          right: 15px;
        }
        .text2{
          color: ${global.gray};
          text-align: center;
          font-size: 10px;
        }
        .line3{
          border-top: 1px solid ${global.gray};
          display: inline-block;
          width: calc(2 * (100% - 210px) /14);
          height: 51px;
        }
        .img1Border{
          width: 70px;
          height: 35px;
          display: inline-block;
          border-bottom-right-radius: 35px;
          border-bottom-left-radius: 35px;
        }
        .img2Border{
          width: 70px;
          height: 35px;
          display: inline-block;
          border: 1px solid ${global.gray};
          border-top: 0;
          border-bottom-right-radius: 35px;
          border-bottom-left-radius: 35px;
        }
        .img3Border{
          width: 70px;
          height: 35px;
          display: inline-block;
          border: 1px solid ${global.gray};
          border-top: 0;
          border-bottom-right-radius: 35px;
          border-bottom-left-radius: 35px;
        }
        .img3{
          fill: ${global.gray};
          width: 35px;
          position: relative;
          top: 35px;
          right: 15px;
        }
        .text3{
          color: ${global.gray};
          text-align: center;
          font-size: 10px;
        }
        .line4{
          border-top: 1px solid ${global.gray};
          display: inline-block;
          width: calc(5 * (100% - 210px) /14);
          height: 51px;
        }
        .img1Container, .img2Container, .img3Container{
          width: 70px;
          display: inline-block;
          position: relative;
        }
        `}</style>
        <div className="line1 lineProgress"></div>
        <div className="img1Container">
          <svg viewBox="0 0 100 125" id="basket__icon" className="img1 imgProgress">
            <path d="M57.7 82.7c0-3.5-2.8-6.3-6.3-6.3S45 79.2 45 82.7s2.8 6.3 6.3 6.3 6.4-2.8 6.4-6.3zm-8.7 0c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zM80.3 89c3.5 0 6.3-2.8 6.3-6.3s-2.8-6.3-6.3-6.3-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3zm0-8.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S78 84 78 82.7s1-2.4 2.3-2.4zM88 28h-4.5c.1-.8.2-1.6.2-2.4 0-10.9-8.9-19.8-19.8-19.8S44 14.6 44 25.6c0 .8.1 1.6.2 2.4h-8.9l-1.1-6.9c-.2-1.1-.4-2.1-.8-3.1v-.1c-1-2.4-3-4-5.4-4.6-.3-2.4-2.4-4.3-4.8-4.3H10.8C8.2 9 6 11.2 6 13.8v.3c0 2.7 2.2 4.8 4.8 4.8h12.3c1.5 0 2.9-.7 3.8-1.9 1.2.3 2.2 1.1 2.7 2.3.3.7.5 1.5.6 2.3L36 58.8v.2c0 .3.1.6.2.8l.8 5.4c.1 4.3 3.6 7.8 8 7.8h47c1.1 0 2-.9 2-2s-.9-2-2-2H45c-2.2 0-4-1.8-4-4v-.3l-.6-3.7H88c4.4 0 8-3.6 8-8V36c0-4.4-3.6-8-8-8zM24 14.2c0 .5-.4.8-.8.8H10.8c-.5 0-.8-.4-.8-.8v-.3c0-.5.4-.8.8-.8h12.3c.5 0 .8.4.8.8v.3zm39.8-4.4c8.7 0 15.8 7.1 15.8 15.8s-7.1 15.8-15.8 15.8S48 34.3 48 25.6 55.1 9.8 63.8 9.8zM92 53c0 2.2-1.8 4-4 4H39.8l-3.9-25h9.2c2.7 7.8 10.1 13.4 18.7 13.4S79.9 39.8 82.6 32H88c2.2 0 4 1.8 4 4v17z"></path>
            <path d="M63.3 36h1c.1 0 .1 0 .2-.1.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1s.1-.1.2-.1l.3-.3 9.3-9.3c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-5.9 6V16c0-1.1-.9-2-2-2s-2 .9-2 2v13.8l-6.6-6.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l9.3 9.3c.4.5.9.7 1.4.7z"></path>
          </svg>
          <div className="img1Border borderProgress"></div>
          <p className="text1 textProgress">سبد خرید</p>
        </div>
        <div className={"line2" + (this.state.step2 ? " lineProgress" : "")}></div>
        <div className="img2Container">
          <svg viewBox="0 0 100 125" id="payment__icon" className={"img2" + (this.state.step2 ? " imgProgress" : "")}>
            <g data-name="Group">
              <path data-name="Compound Path" d="M82.64 33.08a6 6 0 0 0-5.42-3.42H61.61a6 6 0 0 0-5.93-5.1H42.79A20.34 20.34 0 1 0 8.93 45.07v29.36a6 6 0 0 0 6 6h5.71a11.12 11.12 0 0 0 21.86 0h18.83a11.12 11.12 0 0 0 21.86 0h7.71a6 6 0 0 0 6-6V58.68a2 2 0 0 0-.42-1.23L90.68 50zM79 34.8L85.79 49H63.68a2 2 0 0 1-2-2V33.66h15.55A2 2 0 0 1 79 34.8zM23.44 14.49A16.35 16.35 0 1 1 7.1 30.84a16.37 16.37 0 0 1 16.34-16.35zm8.13 71a7.13 7.13 0 1 1 7.13-7.12 7.13 7.13 0 0 1-7.13 7.14zm40.69 0a7.13 7.13 0 1 1 7.13-7.12 7.13 7.13 0 0 1-7.13 7.14zM92.9 74.43a2 2 0 0 1-2 2h-7.7a11.11 11.11 0 0 0-21.88 0H42.51a11.11 11.11 0 0 0-21.88 0h-5.7a2 2 0 0 1-2-2V48.22a20.3 20.3 0 0 0 30.86-17.38 20.42 20.42 0 0 0-.14-2.28h12a2 2 0 0 1 2 2V47a6 6 0 0 0 6 6h24.28l5 6.39z"></path>
              <path data-name="Path" d="M23.44 32.84h8a2 2 0 1 0 0-4h-6v-7.15a2 2 0 0 0-4 0v9.14a2 2 0 0 0 2 2.01z"></path>
            </g>
          </svg>
          <div className={"img2Border" + (this.state.step2 ? " borderProgress" : "")}></div>
          <p className={"text2" + (this.state.step2 ? " textProgress" : "")}>اطلاعات ارسال</p>
        </div>
        <div className={"line3" + (this.state.step3 ? " lineProgress" : "")}></div>
        <div className="img3Container">
          <svg viewBox="0 0 100 125" id="shipping__icon" className={"img3" + (this.state.step3 ? " imgProgress" : "")}>
            <path d="M12.07 97.86h67a8.38 8.38 0 0 0 8.37-8.37v-11.1h3.3a5.58 5.58 0 0 0 5.58-5.58v-13a5.58 5.58 0 0 0-5.58-5.58h-3.3V43.1a8.3 8.3 0 0 0-8.29-8.29H79v-7.1a8.3 8.3 0 0 0-8.29-8.29h-3.65V9.21A7.08 7.08 0 0 0 60 2.14H24.63a7.08 7.08 0 0 0-7.07 7.07v10.2H13.9a10.21 10.21 0 0 0-10.2 10.2v59.88a8.38 8.38 0 0 0 8.37 8.37zm79.23-38v13a.58.58 0 0 1-.58.58h-20.5a7.24 7.24 0 0 1-7.37-6.58 7.05 7.05 0 0 1 7-7.53h20.87a.58.58 0 0 1 .58.53zM82.42 43.1v11.18H69.9a12.1 12.1 0 0 0-8.79 3.81 12 12 0 0 0-3.23 9 12.25 12.25 0 0 0 12.34 11.3h12.2v11.1a3.37 3.37 0 0 1-3.37 3.37h-67a3.37 3.37 0 0 1-3.35-3.37V38.37a10.12 10.12 0 0 0 5.2 1.44h65.23a3.3 3.3 0 0 1 3.29 3.29zM70.67 24.41a3.3 3.3 0 0 1 3.33 3.3v7.1h-6.94v-10.4zm-46-17.28H60a2.07 2.07 0 0 1 2.07 2.07v25.6H44.81V20.68l2.65 2.65A2.5 2.5 0 0 0 51 19.79l-6.92-6.92a2.5 2.5 0 0 0-3.54 0l-6.92 6.92a2.5 2.5 0 1 0 3.54 3.54l2.65-2.65V34.8H22.56V9.21a2.07 2.07 0 0 1 2.07-2.07zM13.9 24.41h3.66V34.8H13.9a5.2 5.2 0 1 1 0-10.39z"></path>
            <circle cx="70.37" cy="66.33" r="2.88"></circle>
          </svg>
          <div className={"img3Border" + (this.state.step3 ? " borderProgress" : "")}></div>
          <p className={"text3" + (this.state.step3 ? " textProgress" : "")}>جزئیات پرداخت</p>
        </div>
        <div className={"line4" + (this.state.step3 ? " lineProgress" : "")}></div>
      </div>
    );
  }
}

export default Progress
