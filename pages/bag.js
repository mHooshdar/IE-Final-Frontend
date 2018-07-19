import global from '../static/global';

import Layout from '../components/MyLayout';
import Progress from '../components/bag/Progress';
import ProductBag from '../components/bag/ProductBag';
import Delivery from '../components/bag/Delivery';

class Bag extends React.Component{

  constructor (props) {
    super(props);

    this.goNext = this.goNext.bind(this);
    this.state = {
      step: 1,
    }
  }

  goNext(){
    this.setState(prevState => {
      return {step: prevState.step + 1};
    });
  }

  renderProgressBodyPart(){
    if(this.state.step == 1){
      return <ProductBag/>;
    }
    else if(this.state.step == 2){
      // send step2 to progress
      this.progress.setState({step2: true});
      return <Delivery/>;
    }
    else if(this.state.step == 3){
      // send step2 to progress
      this.progress.setState({step3: true});
      return <Delivery/>;
    }
  }
  render () {
    return (
      <Layout>
        <style jsx>{`
          .submitButton{
            border: 1px solid ${global.gray};
            text-align: center;
            width: 250px;
            margin-right: auto;
            color: rgb(255, 255, 255);
            background: ${global.blue};
            font-size: 15px;
            border-radius: 50px;
            padding: 10px;
            padding-left: 40px;
            padding-right: 40px;
            margin-top: 30px;
            margin-bottom: 30px;
            margin-left: auto;
            margin-right: auto;
          }
          .submitButton:hover{
            cursor: pointer;
          }
        `}</style>
        <div className="container">
          <Progress ref={(progress) => {this.progress = progress;}}/>
          {this.renderProgressBodyPart()}
        </div>
        <div className="submitButton" onClick={this.goNext}>
          ثبت و مرحله بعد
        </div>
      </Layout>
    );
  }
}
export default Bag
