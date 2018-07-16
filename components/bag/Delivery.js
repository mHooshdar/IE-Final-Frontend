import global from '../../static/global';

class Delivery extends React.Component{
  // remove onclick button not done
  // number of items not work

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="delivery">
        <style jsx>{`
          .delivery{
            margin-bottom: 40px;
          }
          .sendCostContainer{
            text-align: center;
          }
        `}</style>
        <div className="sendCostContainer">
          <p>
            هزینه ارسال
          </p>
          <p>
            3000 تومان
          </p>
        </div>
      </div>
    );
  }
}

export default Delivery
